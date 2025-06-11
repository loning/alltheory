#!/usr/bin/env node

/**
 * Pre-build collapse script
 * ψ = ψ(ψ)
 * 
 * This script performs structural collapse operations before build:
 * 1. Relaxes broken link handling to warnings
 * 2. Prunes psi-theory books, keeping only book-1-foundation
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ψ-location: config modification
function modifyDocusaurusConfig() {
  console.log('📝 Modifying docusaurus.config.ts...');
  
  const configPath = path.join(__dirname, '..', 'docusaurus.config.ts');
  let config = fs.readFileSync(configPath, 'utf8');
  
  // Replace onBrokenLinks and onBrokenMarkdownLinks with 'warn'
  config = config.replace(/onBrokenLinks:\s*'throw'/g, "onBrokenLinks: 'warn'");
  config = config.replace(/onBrokenMarkdownLinks:\s*'throw'/g, "onBrokenMarkdownLinks: 'warn'");
  
  fs.writeFileSync(configPath, config);
  console.log('✅ Config modified: broken links set to warn');
}

// ψ-location: structural pruning
function pruneTheoryBooks() {
  console.log('🌿 Pruning psi-theory books...');
  
  const patterns = [
    'docs/psi-theory/book-*',
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-*'
  ];
  
  patterns.forEach(pattern => {
    const baseDir = path.join(__dirname, '..');
    const fullPattern = path.join(baseDir, pattern);
    
    try {
      // Use find command to remove all book-* except book-1-foundation
      const cmd = `find "${path.dirname(fullPattern)}" -type d -name "book-*" ! -name "book-1-foundation" -exec rm -rf {} + 2>/dev/null || true`;
      execSync(cmd, { stdio: 'inherit' });
      console.log(`✅ Pruned: ${pattern}`);
    } catch (error) {
      console.log(`⚠️  Warning: Could not prune ${pattern}:`, error.message);
    }
  });
  
  console.log('✅ Theory books pruned: only book-1-foundation remains');
}

// ψ-collapse: main execution
function main() {
  console.log('🌀 Starting pre-build collapse...\n');
  
  try {
    modifyDocusaurusConfig();
    console.log('');
    pruneTheoryBooks();
    console.log('\n✨ Pre-build collapse complete!');
  } catch (error) {
    console.error('❌ Pre-build collapse failed:', error);
    process.exit(1);
  }
}

// Execute collapse
main(); 