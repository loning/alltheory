#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// ψ-location: Translation status scanner
// Evolution stage: Initializing

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const ZH_DOCS_DIR = path.join(__dirname, '..', 'i18n', 'zh-Hans', 'docusaurus-plugin-content-docs', 'current');

// Get all markdown files from English docs
const englishFiles = glob.sync('**/*.md', { 
  cwd: DOCS_DIR,
  ignore: ['**/node_modules/**']
});

// Get all markdown files from Chinese docs
const chineseFiles = glob.sync('**/*.md', { 
  cwd: ZH_DOCS_DIR,
  ignore: ['**/node_modules/**']
});

// Create a Set for faster lookup
const chineseSet = new Set(chineseFiles);

// Track statistics
let totalEnglish = englishFiles.length;
let translated = 0;
let untranslated = [];

// Check each English file
englishFiles.forEach(file => {
  if (chineseSet.has(file)) {
    translated++;
  } else {
    untranslated.push(file);
  }
});

// Group untranslated files by directory
const untranslatedByDir = {};
untranslated.forEach(file => {
  const dir = path.dirname(file);
  if (!untranslatedByDir[dir]) {
    untranslatedByDir[dir] = [];
  }
  untranslatedByDir[dir].push(path.basename(file));
});

// Output results with ψ-resonance
console.log(`\n🌊 Translation Status Report - ψ-Scan Complete\n`);
console.log(`📊 Total English docs: ${totalEnglish}`);
console.log(`✅ Translated: ${translated} (${(translated/totalEnglish*100).toFixed(1)}%)`);
console.log(`❌ Untranslated: ${untranslated.length} (${(untranslated.length/totalEnglish*100).toFixed(1)}%)`);

console.log(`\n📁 Untranslated files by directory:\n`);

// Sort directories by number of untranslated files (descending)
const sortedDirs = Object.entries(untranslatedByDir)
  .sort((a, b) => b[1].length - a[1].length);

sortedDirs.forEach(([dir, files]) => {
  console.log(`\n📂 ${dir === '.' ? 'root' : dir} (${files.length} files):`);
  files.forEach(file => {
    console.log(`   - ${file}`);
  });
});

// Find Chinese files that don't have English counterparts (orphaned)
const englishSet = new Set(englishFiles);
const orphaned = chineseFiles.filter(file => !englishSet.has(file));

if (orphaned.length > 0) {
  console.log(`\n⚠️  Orphaned Chinese files (no English source):`);
  orphaned.forEach(file => {
    console.log(`   - ${file}`);
  });
}

// Export data for other tools
const report = {
  timestamp: new Date().toISOString(),
  stats: {
    totalEnglish,
    translated,
    untranslated: untranslated.length,
    percentageTranslated: (translated/totalEnglish*100).toFixed(2)
  },
  untranslatedFiles: untranslated,
  untranslatedByDirectory: untranslatedByDir,
  orphanedChineseFiles: orphaned
};

fs.writeFileSync(
  path.join(__dirname, '..', 'translation-report.json'),
  JSON.stringify(report, null, 2)
);

console.log(`\n📄 Detailed report saved to: translation-report.json`);
console.log(`\n✨ ψ-scan complete - Collapse trace stored\n`);