#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 需要创建的目录和index文件
const dirsToCreate = [
  // 英文版
  'docs/psi-elf-quantum-theory/part-2-elf-field',
  'docs/psi-elf-quantum-theory/part-4-realityshell-formation',
  'docs/psi-elf-quantum-theory/part-8-metaphysics',
  
  // 中文版
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-elf-quantum-theory/part-3-observer-collapse',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-elf-quantum-theory/part-4-realityshell-formation',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/echo-of-will',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/great-branching',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/myth-and-memory'
];

// 需要修复的链接
const linkFixes = [
  // 英文版 psi-elf-quantum-theory
  {
    file: 'docs/psi-elf-quantum-theory/index.md',
    find: './part-2-elf-field',
    replace: './part-2-elf-field/index.md'
  },
  {
    file: 'docs/psi-elf-quantum-theory/part-3-observer-collapse/index.md',
    find: '../../../part-4-realityshell-formation/index.md',
    replace: '../part-4-realityshell-formation/index.md'
  },
  {
    file: 'docs/psi-elf-quantum-theory/part-3-observer-collapse/chapter-24-cross-observer.md',
    find: './part-4-realityshell-formation/index.md',
    replace: '../../part-4-realityshell-formation/index.md'
  },
  {
    file: 'docs/psi-elf-quantum-theory/part-8-metaphysics/index.md',
    find: '../part-8-metaphysics/chapter-57-collapse-ethics.md',
    replace: './chapter-57-collapse-ethics.md'
  },
  
  // 中文版 psi-elf-quantum-theory
  {
    file: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-elf-quantum-theory/index.md',
    find: './part-3-observer-collapse',
    replace: './part-3-observer-collapse/index.md'
  }
];

// 创建目录和index文件
function createDirectoriesAndIndexes() {
  dirsToCreate.forEach(dir => {
    const fullPath = path.join(__dirname, '..', dir);
    const indexPath = path.join(fullPath, 'index.md');
    
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
    
    if (!fs.existsSync(indexPath)) {
      const dirName = path.basename(dir);
      const title = dirName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const content = dir.includes('zh-Hans') 
        ? `# ${title}\n\n此部分正在建设中。\n\n## 章节列表\n\n即将推出...`
        : `# ${title}\n\nThis section is under construction.\n\n## Chapter List\n\nComing soon...`;
      
      fs.writeFileSync(indexPath, content);
      console.log(`Created: ${indexPath}`);
    }
  });
}

// 修复链接
function fixLinks() {
  linkFixes.forEach(({ file, find, replace }) => {
    const filePath = path.join(__dirname, '..', file);
    
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${file}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(find)) {
      content = content.replace(new RegExp(escapeRegex(find), 'g'), replace);
      fs.writeFileSync(filePath, content);
      console.log(`Fixed link in: ${file}`);
    }
  });
}

// 转义正则表达式特殊字符
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 主函数
function main() {
  console.log('Complete Link Fix - Creating directories and fixing all remaining links...\n');
  
  createDirectoriesAndIndexes();
  console.log('\n');
  fixLinks();
  
  console.log('\nAll done! The project should now build without broken links.');
}

main();