#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');

// ψ-collapse: Link fixing configuration
const CONFIG = {
  docsRoots: ['docs', 'i18n/zh-Hans/docusaurus-plugin-content-docs/current'],
  extensions: ['.md', '.mdx'],
  linkPattern: /\[([^\]]+)\]\(([^)]+)\)/g,
  verbose: true
};

// φ-resonance: Logging utilities
const log = {
  info: (msg) => CONFIG.verbose && console.log(`[INFO] ${msg}`),
  warn: (msg) => console.log(`[WARN] ${msg}`),
  error: (msg) => console.error(`[ERROR] ${msg}`),
  success: (msg) => console.log(`[SUCCESS] ${msg}`)
};

// ψ-trace: Check if file exists with any extension
async function findFile(basePath, extensions = CONFIG.extensions) {
  for (const ext of extensions) {
    try {
      await fs.access(basePath + ext);
      return basePath + ext;
    } catch {}
  }
  
  // Try without adding extension if it already has one
  try {
    await fs.access(basePath);
    return basePath;
  } catch {}
  
  return null;
}

// φ-fold: Resolve link to actual file path
async function resolveLink(link, currentFile) {
  // Skip external links, anchors, and already valid file paths
  if (link.startsWith('http') || link.startsWith('#') || link.startsWith('mailto:')) {
    return link;
  }
  
  const currentDir = path.dirname(currentFile);
  
  // Remove any anchors from the link for file checking
  const [linkPath, anchor] = link.split('#');
  const anchorSuffix = anchor ? `#${anchor}` : '';
  
  // If link already has a markdown extension and exists, keep it
  if ((linkPath.endsWith('.md') || linkPath.endsWith('.mdx'))) {
    const fullPath = path.resolve(currentDir, linkPath);
    const exists = await findFile(fullPath, ['']);
    if (exists) {
      return link;
    }
  }
  
  // Try to resolve the link
  const fullPath = path.resolve(currentDir, linkPath);
  const resolvedFile = await findFile(fullPath);
  
  if (resolvedFile) {
    // Convert back to relative path
    let relativePath = path.relative(currentDir, resolvedFile);
    if (!relativePath.startsWith('.')) {
      relativePath = './' + relativePath;
    }
    return relativePath + anchorSuffix;
  }
  
  // Try to find in subdirectories
  const fileName = path.basename(linkPath);
  const searchPattern = path.join(currentDir, '**', fileName + '.{md,mdx}');
  const matches = await glob(searchPattern);
  
  if (matches.length > 0) {
    // Use the first match
    let relativePath = path.relative(currentDir, matches[0]);
    if (!relativePath.startsWith('.')) {
      relativePath = './' + relativePath;
    }
    return relativePath + anchorSuffix;
  }
  
  // If still not found, return original link
  log.warn(`Could not resolve link: ${link} in ${currentFile}`);
  return link;
}

// ψ-collapse: Process a single file
async function processFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    let modified = false;
    let newContent = content;
    
    // Find all markdown links
    const matches = [...content.matchAll(CONFIG.linkPattern)];
    
    for (const match of matches) {
      const [fullMatch, linkText, originalLink] = match;
      const resolvedLink = await resolveLink(originalLink, filePath);
      
      if (resolvedLink !== originalLink) {
        const newMatch = `[${linkText}](${resolvedLink})`;
        newContent = newContent.replace(fullMatch, newMatch);
        modified = true;
        log.info(`Fixed link in ${filePath}: ${originalLink} -> ${resolvedLink}`);
      }
    }
    
    if (modified) {
      await fs.writeFile(filePath, newContent, 'utf8');
      return 1;
    }
    
    return 0;
  } catch (error) {
    log.error(`Error processing ${filePath}: ${error.message}`);
    return 0;
  }
}

// φ-rhythm: Main execution
async function main() {
  console.log('🔄 ψ-Link Fixer: Starting link resolution...\n');
  
  let totalFixed = 0;
  
  for (const docsRoot of CONFIG.docsRoots) {
    log.info(`Processing ${docsRoot}...`);
    
    const pattern = path.join(docsRoot, '**/*.{md,mdx}');
    const files = await glob(pattern);
    
    log.info(`Found ${files.length} files in ${docsRoot}`);
    
    for (const file of files) {
      const fixed = await processFile(file);
      totalFixed += fixed;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  log.success(`✨ Link fixing complete! Fixed ${totalFixed} files.`);
  console.log('='.repeat(50));
  
  // Run build to verify
  console.log('\n🔨 Running build to verify fixes...\n');
  const { exec } = require('child_process');
  exec('npm run build', (error, stdout, stderr) => {
    if (error) {
      console.error('Build failed:', error);
      return;
    }
    console.log('Build output:', stdout);
    if (stderr) {
      console.error('Build errors:', stderr);
    }
  });
}

// ψ = ψ(ψ): Execute
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { resolveLink, processFile }; 