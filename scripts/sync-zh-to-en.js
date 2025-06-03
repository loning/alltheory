#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');

// ψ-collapse: Configuration
const CONFIG = {
  enRoot: 'docs',
  zhRoot: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current',
  linkPattern: /\[([^\]]+)\]\(([^)]+)\)/g,
  verbose: true
};

// φ-resonance: Logging utilities
const log = {
  info: (msg) => CONFIG.verbose && console.log(`[INFO] ${msg}`),
  success: (msg) => console.log(`[SUCCESS] ${msg}`),
  warn: (msg) => console.log(`[WARN] ${msg}`),
  error: (msg) => console.error(`[ERROR] ${msg}`),
  change: (msg) => console.log(`[CHANGE] ${msg}`)
};

// ψ-trace: Get relative path from root
function getRelativePath(filePath, root) {
  return path.relative(root, filePath);
}

// φ-fold: Build file structure map
async function buildFileMap(root) {
  const pattern = path.join(root, '**/*.{md,mdx}');
  const files = await glob(pattern);
  const fileMap = new Map();
  
  for (const file of files) {
    const relativePath = getRelativePath(file, root);
    fileMap.set(relativePath, file);
  }
  
  return fileMap;
}

// ψ-collapse: Check if a link target exists in English version
function isValidLink(link, currentFile, enFileMap) {
  // Skip external links and anchors
  if (link.startsWith('http') || link.startsWith('#') || link.startsWith('mailto:')) {
    return true;
  }
  
  // Remove anchor part
  const [linkPath] = link.split('#');
  
  // Get the directory of current file relative to docs root
  const currentDir = path.dirname(getRelativePath(currentFile, CONFIG.zhRoot));
  
  // Resolve the link path
  let targetPath;
  if (linkPath.startsWith('/')) {
    // Absolute path
    targetPath = linkPath.substring(1);
  } else {
    // Relative path
    targetPath = path.join(currentDir, linkPath);
  }
  
  // Normalize the path
  targetPath = path.normalize(targetPath);
  
  // Check various possibilities
  const possibilities = [
    targetPath,
    targetPath + '.md',
    targetPath + '.mdx',
    targetPath + '/index.md',
    targetPath + '/index.mdx'
  ];
  
  for (const possibility of possibilities) {
    if (enFileMap.has(possibility)) {
      return true;
    }
  }
  
  return false;
}

// φ-rhythm: Process a single file
async function processFile(zhFile, enFileMap) {
  try {
    const content = await fs.readFile(zhFile, 'utf8');
    let newContent = content;
    let modified = false;
    const changes = [];
    
    // Find all markdown links
    const matches = [...content.matchAll(CONFIG.linkPattern)];
    
    for (const match of matches) {
      const [fullMatch, linkText, originalLink] = match;
      
      if (!isValidLink(originalLink, zhFile, enFileMap)) {
        // This link doesn't exist in English version, remove it
        const newMatch = linkText; // Just keep the text without link
        newContent = newContent.replace(fullMatch, newMatch);
        modified = true;
        changes.push(`Removed invalid link: ${originalLink}`);
      }
    }
    
    if (modified) {
      await fs.writeFile(zhFile, newContent, 'utf8');
      log.change(`Updated ${zhFile}:`);
      changes.forEach(change => log.info(`  - ${change}`));
      return { file: zhFile, changes };
    }
    
    return null;
  } catch (error) {
    log.error(`Error processing ${zhFile}: ${error.message}`);
    return null;
  }
}

// ψ-collapse: Main synchronization
async function syncDocuments() {
  console.log('🔄 ψ-Document Synchronizer: Starting sync process...\n');
  
  // Build file maps
  log.info('Building file structure maps...');
  const enFileMap = await buildFileMap(CONFIG.enRoot);
  const zhFileMap = await buildFileMap(CONFIG.zhRoot);
  
  log.info(`English files: ${enFileMap.size}`);
  log.info(`Chinese files: ${zhFileMap.size}`);
  
  // Find files that exist in Chinese but not in English
  const extraFiles = [];
  for (const [zhRelPath, zhFullPath] of zhFileMap) {
    if (!enFileMap.has(zhRelPath)) {
      extraFiles.push({ relative: zhRelPath, full: zhFullPath });
    }
  }
  
  if (extraFiles.length > 0) {
    log.warn(`\nFound ${extraFiles.length} files in Chinese version that don't exist in English:`);
    for (const file of extraFiles) {
      log.warn(`  - ${file.relative}`);
    }
    
    // Ask for confirmation before deleting
    console.log('\n⚠️  These files will be deleted. Press Ctrl+C to cancel, or wait 5 seconds to continue...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Delete extra files
    for (const file of extraFiles) {
      try {
        await fs.unlink(file.full);
        log.success(`Deleted: ${file.relative}`);
      } catch (error) {
        log.error(`Failed to delete ${file.relative}: ${error.message}`);
      }
    }
  }
  
  // Process all Chinese files to remove invalid links
  log.info('\nProcessing Chinese files to remove invalid links...');
  const processedFiles = [];
  
  for (const [zhRelPath, zhFullPath] of zhFileMap) {
    // Skip files that were deleted
    if (extraFiles.some(f => f.relative === zhRelPath)) {
      continue;
    }
    
    const result = await processFile(zhFullPath, enFileMap);
    if (result) {
      processedFiles.push(result);
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(50));
  log.success('✨ Synchronization complete!');
  log.info(`Files deleted: ${extraFiles.length}`);
  log.info(`Files with updated links: ${processedFiles.length}`);
  console.log('='.repeat(50));
  
  if (processedFiles.length > 0 || extraFiles.length > 0) {
    log.info('\n📝 Next steps:');
    log.info('1. Run fix-links.js to update remaining links');
    log.info('2. Run npm run build to verify');
  }
}

// ψ = ψ(ψ): Execute
if (require.main === module) {
  syncDocuments().catch(console.error);
}

module.exports = { buildFileMap, isValidLink, processFile }; 