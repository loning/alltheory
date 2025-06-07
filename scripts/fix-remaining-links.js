#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 修复剩余的链接问题
function fixRemainingLinks() {
  // 修复中文版psi-theory的目录链接
  const filesToFix = [
    {
      path: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/echo-of-will/chapter-16-universe-psi-closure.md',
      replacements: [
        { from: '../../great-branching', to: '../great-branching/index.md' }
      ]
    },
    {
      path: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/genesis-of-collapse/chapter-08-collapse-path-dynamics.md',
      replacements: [
        { from: '../../echo-of-will', to: '../echo-of-will/index.md' }
      ]
    },
    {
      path: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/great-branching/chapter-24-reality-engineering.md',
      replacements: [
        { from: '../../myth-and-memory', to: '../myth-and-memory/index.md' }
      ]
    },
    {
      path: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/myth-and-memory/chapter-32-return-of-psi.md',
      replacements: [
        { from: '../glyph-continuum/index.md', to: '../glyphic-realities/index.md' }
      ]
    },
    {
      path: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/index.md',
      replacements: [
        { from: './book-1-foundation/index.md', to: './book-1-foundation/index.md' },
        { from: './book-1-foundation/genesis-of-collapse/chapter-01-psi-origin.md', to: './book-1-foundation/genesis-of-collapse/chapter-01-psi-origin.md' }
      ]
    }
  ];

  filesToFix.forEach(({ path: filePath, replacements }) => {
    const fullPath = path.join(__dirname, '..', filePath);
    
    if (!fs.existsSync(fullPath)) {
      // 文件可能不存在，创建index文件
      const dir = path.dirname(fullPath);
      if (filePath.endsWith('/index.md')) {
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(fullPath, `# ${path.basename(dir)}\n\nContent coming soon.`);
        console.log(`Created: ${fullPath}`);
      }
      return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    replacements.forEach(({ from, to }) => {
      if (content.includes(from)) {
        content = content.replace(new RegExp(escapeRegex(from), 'g'), to);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${fullPath}`);
    }
  });
}

// 创建缺失的index文件
function createMissingIndexFiles() {
  const missingDirs = [
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation',
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/echo-of-will',
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/great-branching',
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/myth-and-memory',
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/glyphic-realities'
  ];
  
  missingDirs.forEach(dir => {
    const fullDir = path.join(__dirname, '..', dir);
    const indexPath = path.join(fullDir, 'index.md');
    
    if (!fs.existsSync(indexPath)) {
      if (!fs.existsSync(fullDir)) {
        fs.mkdirSync(fullDir, { recursive: true });
      }
      
      const dirName = path.basename(dir);
      const title = dirName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      fs.writeFileSync(indexPath, `# ${title}\n\n此部分正在建设中。`);
      console.log(`Created index: ${indexPath}`);
    }
  });
}

// 转义正则表达式特殊字符
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 主函数
function main() {
  console.log('Fixing remaining broken links...\n');
  
  createMissingIndexFiles();
  fixRemainingLinks();
  
  console.log('\nDone!');
}

main();