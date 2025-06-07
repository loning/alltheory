#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 已知的链接映射规则
const knownMappings = {
  // 中文版psi-theory的特殊路径
  '/alltheory/zh-Hans/zh-Hans/docs/psi-theory': '/docs/psi-theory',
  
  // 书籍结构映射
  '../book-1-foundation/index.md': './book-1-foundation/index.md',
  '../book-3-omega-collapse/meta-recursive-philosophy/index.md': '../../book-3-omega-collapse/index.md',
  '../../book-3-omega-collapse/meta-recursive-philosophy/index.md': '../book-3-omega-collapse/index.md',
  
  // psi-theory中文版目录映射
  '../../echo-of-will': '../echo-of-will/index.md',
  '../../great-branching': '../great-branching/index.md', 
  '../../myth-and-memory': '../myth-and-memory/index.md',
  '../glyph-continuum/index.md': '../glyphic-realities/index.md',
  
  // part映射
  './part-1-foundations-collapse': './part-1-foundations-collapse/index.md',
  '../part-4-realityshell': '../part-4-realityshell-formation/index.md',
  '../../part-4-realityshell-formation/index.md': '../../../part-4-realityshell-formation/index.md',
  
  // he章节映射
  'chapter-46-new-human.md': './chapter-46-death-teacher.md',
  
  // psi-physics-theory章节映射
  '../transcendent-foundations/chapter-57-transcendent-architectures.md': './chapter-57-transcendent-architectures.md'
};

// 递归遍历目录
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'build' && file !== 'static') {
        walkDir(filePath, callback);
      }
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      callback(filePath);
    }
  });
}

// 修复文件中的链接
function fixLinksInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // 应用已知的映射规则
  for (const [oldLink, newLink] of Object.entries(knownMappings)) {
    const patterns = [
      new RegExp(`\\]\\(${escapeRegex(oldLink)}\\)`, 'g'),
      new RegExp(`href="${escapeRegex(oldLink)}"`, 'g'),
      new RegExp(`to="${escapeRegex(oldLink)}"`, 'g')
    ];
    
    patterns.forEach(pattern => {
      if (content.match(pattern)) {
        content = content.replace(pattern, (match) => {
          if (match.startsWith('](')) {
            return `](${newLink})`;
          } else if (match.startsWith('href="')) {
            return `href="${newLink}"`;
          } else if (match.startsWith('to="')) {
            return `to="${newLink}"`;
          }
          return match;
        });
        modified = true;
      }
    });
  }
  
  // 修复psi-elf-quantum-theory中的part-4链接
  if (filePath.includes('psi-elf-quantum-theory')) {
    const part4Pattern = /\]\(\.\.\/\.\.\/part-4-realityshell-formation\/index\.md\)/g;
    if (content.match(part4Pattern)) {
      const depth = filePath.split('/psi-elf-quantum-theory/')[1].split('/').length - 1;
      const prefix = '../'.repeat(depth);
      content = content.replace(part4Pattern, `](${prefix}part-4-realityshell-formation/index.md)`);
      modified = true;
    }
  }
  
  // 修复transcendent-foundations中的章节链接
  if (filePath.includes('transcendent-foundations/index.md')) {
    content = content.replace(
      /\]\(\.\.\/transcendent-foundations\/chapter-/g,
      '](./chapter-'
    );
    if (content.includes('](./chapter-')) {
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// 转义正则表达式特殊字符
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 主函数
function main() {
  console.log('Comprehensive Link Fixer\n');
  
  // 处理docs目录
  const docsDir = path.join(__dirname, '../docs');
  if (fs.existsSync(docsDir)) {
    console.log('Processing docs directory...');
    walkDir(docsDir, fixLinksInFile);
  }
  
  // 处理i18n目录
  const i18nDir = path.join(__dirname, '../i18n');
  if (fs.existsSync(i18nDir)) {
    console.log('\nProcessing i18n directory...');
    walkDir(i18nDir, fixLinksInFile);
  }
  
  console.log('\nDone! Run "npm run build" to verify.');
}

// 执行
main();