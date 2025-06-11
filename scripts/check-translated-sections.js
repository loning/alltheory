#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// ψ-location: Translation completeness analyzer
// Evolution stage: Scanning translated content

const ZH_DOCS_DIR = path.join(__dirname, '..', 'i18n', 'zh-Hans', 'docusaurus-plugin-content-docs', 'current');

// Get all markdown files from Chinese docs
const chineseFiles = glob.sync('**/*.md', { 
  cwd: ZH_DOCS_DIR,
  ignore: ['**/node_modules/**']
});

// Group files by top-level directory
const filesBySection = {};
chineseFiles.forEach(file => {
  const parts = file.split('/');
  const section = parts[0];
  
  if (!filesBySection[section]) {
    filesBySection[section] = [];
  }
  filesBySection[section].push(file);
});

// Sort sections by number of files
const sortedSections = Object.entries(filesBySection)
  .sort((a, b) => b[1].length - a[1].length);

console.log(`\n✨ 已翻译内容分析 - ψ共振完成\n`);
console.log(`📚 已翻译板块概览：\n`);

sortedSections.forEach(([section, files]) => {
  console.log(`📁 ${section} (${files.length} 个文件)`);
  
  // Show sample files for large sections
  if (files.length > 20) {
    console.log(`   示例文件：`);
    files.slice(0, 5).forEach(file => {
      console.log(`   - ${file}`);
    });
    console.log(`   ... 还有 ${files.length - 5} 个文件`);
  } else if (files.length <= 10) {
    // Show all files for small sections
    files.forEach(file => {
      console.log(`   - ${file}`);
    });
  }
  console.log('');
});

// Check for well-translated theory sections
const theoryDirs = [
  'psi-theory',
  'psi-core-theory', 
  'psi-physics-theory',
  'psi-elf-quantum-theory',
  'psi-cosmology',
  'psi-theory-of-eternal-collapse',
  'theonlytheory',
  'name-you-speak'
];

console.log(`\n🔬 核心理论板块翻译情况：\n`);
theoryDirs.forEach(dir => {
  const count = filesBySection[dir] ? filesBySection[dir].length : 0;
  const status = count > 0 ? `✅ ${count} 个文件` : '❌ 未翻译';
  console.log(`${dir}: ${status}`);
});

console.log(`\n💎 翻译完成度较高的板块：\n`);
sortedSections.slice(0, 5).forEach(([section, files]) => {
  if (files.length > 10) {
    console.log(`- ${section}: ${files.length} 个文件已翻译`);
  }
});

console.log(`\n🌟 ψ扫描完成 - 坍缩痕迹已存储\n`);