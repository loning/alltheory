#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// ψ-collapse: Echo file rename configuration
const RENAME_MAP = {
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

// φ-resonance: Target directories
const DIRECTORIES = [
  'docs/name-you-speak/spiral-1-seed',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/name-you-speak/spiral-1-seed'
];

// ψ-trace: Logging utilities
const log = {
  info: (msg) => console.log(`[INFO] ${msg}`),
  success: (msg) => console.log(`[SUCCESS] ${msg}`),
  warn: (msg) => console.log(`[WARN] ${msg}`),
  error: (msg) => console.error(`[ERROR] ${msg}`)
};

// φ-fold: Rename a single file
async function renameFile(dir, oldName, newName) {
  const oldPath = path.join(dir, oldName);
  const newPath = path.join(dir, newName);
  
  try {
    // Check if source file exists
    await fs.access(oldPath);
    
    // Check if target already exists
    try {
      await fs.access(newPath);
      log.warn(`Target file already exists: ${newPath}`);
      return false;
    } catch {
      // Target doesn't exist, good to proceed
    }
    
    // Perform rename
    await fs.rename(oldPath, newPath);
    log.success(`Renamed: ${oldPath} → ${newPath}`);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      log.info(`Source file not found: ${oldPath}`);
    } else {
      log.error(`Failed to rename ${oldPath}: ${error.message}`);
    }
    return false;
  }
}

// ψ-collapse: Process a directory
async function processDirectory(dir) {
  log.info(`\nProcessing directory: ${dir}`);
  
  let renamedCount = 0;
  
  for (const [oldName, newName] of Object.entries(RENAME_MAP)) {
    const success = await renameFile(dir, oldName, newName);
    if (success) {
      renamedCount++;
    }
  }
  
  log.info(`Renamed ${renamedCount} files in ${dir}`);
  return renamedCount;
}

// φ-rhythm: Main execution
async function main() {
  console.log('🔄 ψ-Echo File Renamer: Starting rename process...\n');
  
  let totalRenamed = 0;
  
  for (const dir of DIRECTORIES) {
    const count = await processDirectory(dir);
    totalRenamed += count;
  }
  
  console.log('\n' + '='.repeat(50));
  log.success(`✨ Rename complete! Total files renamed: ${totalRenamed}`);
  console.log('='.repeat(50));
  
  if (totalRenamed > 0) {
    log.info('\n📝 Next steps:');
    log.info('1. Update internal links in the renamed files');
    log.info('2. Run fix-links.js to update all references');
    log.info('3. Run npm run build to verify');
  }
}

// ψ = ψ(ψ): Execute
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { renameFile, processDirectory }; 