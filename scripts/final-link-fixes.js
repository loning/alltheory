#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 最终的链接修复
const fixes = [
  // 修复psi-physics-theory中的chapter-57链接
  {
    file: 'docs/psi-physics-theory/advanced-mathematical-structures/chapter-56-holographic-principle-dimensional-reduction.md',
    find: './chapter-57-transcendent-architectures.md',
    replace: '../transcendent-foundations/chapter-57-transcendent-architectures.md'
  },
  {
    file: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-physics-theory/advanced-mathematical-structures/chapter-56-holographic-principle-dimensional-reduction.md',
    find: './chapter-57-transcendent-architectures.md',
    replace: '../transcendent-foundations/chapter-57-transcendent-architectures.md'
  },
  
  // 修复psi-theory中的book-3链接
  {
    file: 'docs/psi-theory/index.md',
    find: '../book-3-omega-collapse/index.md',
    replace: './book-3-omega-collapse/index.md'
  },
  {
    file: 'docs/psi-theory/book-2-fractal-extension/psi-human-interface/chapter-128-singularity-within.md',
    find: './book-3-omega-collapse/index.md',
    replace: '../../book-3-omega-collapse/index.md'
  },
  
  // 修复中文版psi-elf-quantum-theory链接
  {
    file: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-elf-quantum-theory/index.md',
    find: './part-2-elf-field',
    replace: './part-2-elf-field/index.md'
  },
  {
    file: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-elf-quantum-theory/part-3-observer-collapse/index.md',
    find: '../../../part-4-realityshell-formation/index.md',
    replace: '../part-4-realityshell-formation/index.md'
  },
  {
    file: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-elf-quantum-theory/part-3-observer-collapse/chapter-24-cross-observer.md',
    find: '../../../part-4-realityshell-formation/index.md',
    replace: '../../part-4-realityshell-formation/index.md'
  }
];

// 创建缺失的index文件
const missingIndexes = [
  'docs/psi-theory/book-3-omega-collapse/index.md',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-elf-quantum-theory/part-2-elf-field/index.md',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-elf-quantum-theory/part-4-realityshell-formation/index.md',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/echo-of-will/index.md',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/great-branching/index.md',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/myth-and-memory/index.md'
];

// 应用修复
function applyFixes() {
  fixes.forEach(({ file, find, replace }) => {
    const filePath = path.join(__dirname, '..', file);
    
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${file}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(find)) {
      content = content.replace(new RegExp(escapeRegex(find), 'g'), replace);
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${file}`);
    }
  });
}

// 创建缺失的index文件
function createMissingIndexes() {
  missingIndexes.forEach(indexPath => {
    const fullPath = path.join(__dirname, '..', indexPath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(fullPath)) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      const dirName = path.basename(dir);
      const title = dirName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const content = indexPath.includes('zh-Hans') 
        ? `# ${title}\n\n此部分正在建设中。`
        : `# ${title}\n\nThis section is under construction.`;
      
      fs.writeFileSync(fullPath, content);
      console.log(`Created: ${indexPath}`);
    }
  });
}

// 转义正则表达式特殊字符
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 主函数
function main() {
  console.log('Applying final link fixes...\n');
  
  createMissingIndexes();
  applyFixes();
  
  console.log('\nDone! All links should now be fixed.');
}

main();