#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 修复 psi-elf-quantum-theory 的索引链接
function fixElfIndexLinks() {
  const indexPath = path.join(__dirname, '../docs/psi-elf-quantum-theory/index.md');
  
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // 修复所有part链接，添加/index.md
    const partLinks = [
      { from: './part-3-observer-collapse', to: './part-3-observer-collapse/index.md' },
      { from: './part-4-realityshell', to: './part-4-realityshell-formation/index.md' },
      { from: './part-5-quantum-redefined', to: './part-5-quantum-redefined/index.md' },
      { from: './part-6-value-token', to: './part-6-value-token/index.md' },
      { from: './part-7-experimentation', to: './part-7-experimentation/index.md' },
      { from: './part-8-metaphysics', to: './part-8-metaphysics/index.md' }
    ];
    
    partLinks.forEach(({ from, to }) => {
      content = content.replace(new RegExp(escapeRegex(from) + '(?![-/])', 'g'), to);
    });
    
    fs.writeFileSync(indexPath, content);
    console.log('Fixed: psi-elf-quantum-theory/index.md');
  }
}

// 修复 part-8-metaphysics 的章节链接
function fixPart8Links() {
  const indexPath = path.join(__dirname, '../docs/psi-elf-quantum-theory/part-8-metaphysics/index.md');
  
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // 移除错误的章节链接路径
    const chapterLinks = [
      'chapter-57-collapse-ethics',
      'chapter-58-psi-paradoxes',
      'chapter-59-language-symmetry',
      'chapter-60-collapse-religion',
      'chapter-61-myth-role',
      'chapter-62-determinism',
      'chapter-63-infinite-collapse',
      'chapter-64-ultimate-observer'
    ];
    
    chapterLinks.forEach(chapter => {
      // 修复链接格式
      content = content.replace(
        new RegExp(`\\]\\(${chapter}\\.md\\)`, 'g'),
        `](./${chapter}.md)`
      );
    });
    
    fs.writeFileSync(indexPath, content);
    console.log('Fixed: part-8-metaphysics/index.md');
  }
}

// 创建缺失的part目录和index文件
function createMissingParts() {
  const parts = [
    'docs/psi-elf-quantum-theory/part-5-quantum-redefined',
    'docs/psi-elf-quantum-theory/part-6-value-token',
    'docs/psi-elf-quantum-theory/part-7-experimentation'
  ];
  
  parts.forEach(partPath => {
    const fullPath = path.join(__dirname, '..', partPath);
    const indexPath = path.join(fullPath, 'index.md');
    
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
    
    if (!fs.existsSync(indexPath)) {
      const partName = path.basename(partPath);
      const partNumber = partName.match(/part-(\d+)/)[1];
      const title = partName.split('-').slice(2).map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const content = `# Part ${partNumber}: ${title}

This section is under construction.

## Chapter List

Coming soon...`;
      
      fs.writeFileSync(indexPath, content);
      console.log(`Created: ${partPath}/index.md`);
    }
  });
}

// 修复chapter-57的链接
function fixChapter57Link() {
  const chapter57Path = path.join(__dirname, '../docs/psi-elf-quantum-theory/part-8-metaphysics/chapter-57-collapse-ethics.md');
  
  if (fs.existsSync(chapter57Path)) {
    let content = fs.readFileSync(chapter57Path, 'utf8');
    
    // 修复下一章链接
    content = content.replace(
      './chapter-58-future-consciousness.md',
      './chapter-58-psi-paradoxes.md'
    );
    
    fs.writeFileSync(chapter57Path, content);
    console.log('Fixed: chapter-57-collapse-ethics.md');
  }
}

// 转义正则表达式特殊字符
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 主函数
function main() {
  console.log('Fixing ELF Quantum Theory links...\n');
  
  createMissingParts();
  fixElfIndexLinks();
  fixPart8Links();
  fixChapter57Link();
  
  console.log('\nAll ELF Quantum Theory links fixed!');
}

main();