#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 修复中文版intro.md中的链接
function fixZhHansIntro() {
  const introPath = path.join(__dirname, '../i18n/zh-Hans/docusaurus-plugin-content-docs/current/intro.md');
  
  if (!fs.existsSync(introPath)) {
    console.log('intro.md not found');
    return;
  }
  
  let content = fs.readFileSync(introPath, 'utf8');
  
  // 替换所有 /zh-Hans/docs/ 为 /docs/
  content = content.replace(/\/zh-Hans\/docs\//g, '/docs/');
  
  fs.writeFileSync(introPath, content);
  console.log('Fixed links in intro.md');
}

// 修复其他中文版文件中的链接
function fixOtherZhHansFiles() {
  const dirs = [
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory',
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-elf-quantum-theory',
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/he'
  ];
  
  dirs.forEach(dir => {
    const fullDir = path.join(__dirname, '..', dir);
    if (fs.existsSync(fullDir)) {
      walkDir(fullDir, (filePath) => {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // 修复chapter链接
        if (content.includes('chapter-47-collective-awakening.md')) {
          content = content.replace('chapter-47-collective-awakening.md', './chapter-47-love-solvent.md');
          modified = true;
        }
        if (content.includes('chapter-48-beyond-human.md')) {
          content = content.replace('chapter-48-beyond-human.md', './chapter-48-fear-teacher.md');
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`Fixed: ${filePath}`);
        }
      });
    }
  });
}

// 递归遍历目录
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        walkDir(filePath, callback);
      }
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      callback(filePath);
    }
  });
}

// 主函数
function main() {
  console.log('Fixing zh-Hans specific links...\n');
  
  fixZhHansIntro();
  fixOtherZhHansFiles();
  
  console.log('\nDone!');
}

main();