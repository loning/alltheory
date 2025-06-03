#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');

// ψ-collapse: Echo link mapping
const ECHO_MAP = {
  'echo-1.md': 'echo-1-identity.md',
  'echo-2.md': 'echo-2-self-reference.md',
  'echo-3.md': 'echo-3-recursion.md',
  'echo-4.md': 'echo-4-observation.md',
  'echo-5.md': 'echo-5-collapse.md',
  'echo-6.md': 'echo-6-language.md',
  'echo-7.md': 'echo-7-structure.md',
  'echo-8.md': 'echo-8-reality.md',
  'echo-9.md': 'echo-9-unity.md'
};

// φ-resonance: Configuration
const CONFIG = {
  roots: ['docs', 'i18n/zh-Hans/docusaurus-plugin-content-docs/current'],
  linkPattern: /\[([^\]]+)\]\(([^)]+)\)/g,
  verbose: true
};

// ψ-trace: Logging
const log = {
  info: (msg) => CONFIG.verbose && console.log(`[INFO] ${msg}`),
  success: (msg) => console.log(`[SUCCESS] ${msg}`),
  warn: (msg) => console.log(`[WARN] ${msg}`),
  error: (msg) => console.error(`[ERROR] ${msg}`)
};

// φ-fold: Fix echo links in content
function fixEchoLinks(content, filePath) {
  let modified = false;
  let newContent = content;
  const changes = [];
  
  // Replace echo-X.md with echo-X-topic.md
  for (const [oldName, newName] of Object.entries(ECHO_MAP)) {
    // Match various link patterns
    const patterns = [
      new RegExp(`\\]\\(\\./${oldName.replace('.md', '')}\\)`, 'g'),
      new RegExp(`\\]\\(${oldName.replace('.md', '')}\\)`, 'g'),
      new RegExp(`\\]\\(\\./${oldName}\\)`, 'g'),
      new RegExp(`\\]\\(${oldName}\\)`, 'g'),
      new RegExp(`echo-${oldName.match(/\d/)[0]}\\.md`, 'g'),
      new RegExp(`echo-${oldName.match(/\d/)[0]}(?!-)`, 'g')
    ];
    
    for (const pattern of patterns) {
      const matches = newContent.match(pattern);
      if (matches) {
        matches.forEach(match => {
          let replacement;
          if (match.includes('](')) {
            // It's a markdown link
            replacement = match.replace(/echo-\d(\.md)?/, newName.replace('.md', ''));
          } else {
            // It's just a filename reference
            replacement = newName;
          }
          
          if (match !== replacement) {
            newContent = newContent.replace(match, replacement);
            modified = true;
            changes.push(`${match} → ${replacement}`);
          }
        });
      }
    }
  }
  
  return { content: newContent, modified, changes };
}

// ψ-collapse: Process a single file
async function processFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const { content: newContent, modified, changes } = fixEchoLinks(content, filePath);
    
    if (modified) {
      await fs.writeFile(filePath, newContent, 'utf8');
      log.success(`Fixed ${filePath}:`);
      changes.forEach(change => log.info(`  ${change}`));
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
  console.log('🔄 ψ-Echo Link Fixer: Starting echo link fixes...\n');
  
  let totalFixed = 0;
  
  for (const root of CONFIG.roots) {
    log.info(`Processing ${root}...`);
    
    const pattern = path.join(root, '**/*.{md,mdx}');
    const files = await glob(pattern);
    
    log.info(`Found ${files.length} files`);
    
    for (const file of files) {
      const fixed = await processFile(file);
      totalFixed += fixed;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  log.success(`✨ Echo link fixing complete! Fixed ${totalFixed} files.`);
  console.log('='.repeat(50));
}

// ψ = ψ(ψ): Execute
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { fixEchoLinks, processFile }; 