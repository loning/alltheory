#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 修复part-8中的章节链接
function fixPart8Links() {
  const indexPath = path.join(__dirname, '../docs/psi-elf-quantum-theory/part-8-metaphysics/index.md');
  
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // 修复章节57的链接
    content = content.replace(
      /\.\/chapter-57-collapse-ethics\.md/g,
      './chapter-57-collapse-ethics.md'
    );
    
    // 如果章节文件不存在，创建它
    const chapter57Path = path.join(__dirname, '../docs/psi-elf-quantum-theory/part-8-metaphysics/chapter-57-collapse-ethics.md');
    if (!fs.existsSync(chapter57Path)) {
      const chapter57Content = `---
title: "Chapter 57: Collapse Ethics — The Responsibility of Reality Creation"
sidebar_label: "57. Collapse Ethics"
---

# Chapter 57: Collapse Ethics

## The Weight of Creative Power

When consciousness collapses possibility into reality, it bears ultimate responsibility for what emerges. This chapter explores the ethical dimensions of reality creation through ψ-collapse.

### The Fundamental Principle

**Definition 57.1** (Collapse Responsibility):
Every conscious collapse creates reality. With creation comes responsibility.

This section is under construction. The complete chapter will explore:
- Ethics of observation
- Responsibility in shared reality
- The observer's duty
- Collective collapse ethics

---

*Next: [Chapter 58: The Future of Consciousness →](./chapter-58-future-consciousness.md)*`;
      
      fs.writeFileSync(chapter57Path, chapter57Content);
      console.log('Created chapter-57-collapse-ethics.md');
    }
    
    fs.writeFileSync(indexPath, content);
  }
}

// 创建缺失的中文版索引文件
function createMissingChineseIndexes() {
  const indexes = [
    {
      path: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/echo-of-will/index.md',
      content: '# 意志之回响\n\n此部分探讨意志、记忆、情感和自我在坍缩动力学中的作用。\n\n## 章节列表\n\n即将推出...'
    },
    {
      path: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory/book-1-foundation/great-branching/index.md',
      content: '# 大分支\n\n此部分探讨多重宇宙、时间、死亡和意识的分支结构。\n\n## 章节列表\n\n即将推出...'
    }
  ];
  
  indexes.forEach(({ path: indexPath, content }) => {
    const fullPath = path.join(__dirname, '..', indexPath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    if (!fs.existsSync(fullPath)) {
      fs.writeFileSync(fullPath, content);
      console.log(`Created: ${indexPath}`);
    }
  });
}

// 修复中文版psi-elf-quantum-theory链接
function fixChineseElfLinks() {
  const filesToFix = [
    {
      path: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-elf-quantum-theory/index.md',
      replacements: [
        { from: './part-4-realityshell', to: './part-4-realityshell-formation/index.md' },
        { from: './part-5-quantum-redefined', to: './part-5-quantum-redefined/index.md' },
        { from: './part-6-collapse-computing', to: './part-6-collapse-computing/index.md' },
        { from: './part-7-elf-evolution', to: './part-7-elf-evolution/index.md' },
        { from: './part-8-metaphysics', to: './part-8-metaphysics/index.md' }
      ]
    }
  ];
  
  filesToFix.forEach(({ path: filePath, replacements }) => {
    const fullPath = path.join(__dirname, '..', filePath);
    
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      replacements.forEach(({ from, to }) => {
        if (content.includes(from) && !content.includes(to)) {
          content = content.replace(new RegExp(escapeRegex(from), 'g'), to);
          modified = true;
        }
      });
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed: ${filePath}`);
      }
    }
  });
}

// 转义正则表达式特殊字符
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 主函数
function main() {
  console.log('Final Complete Fix - Resolving all remaining issues...\n');
  
  fixPart8Links();
  createMissingChineseIndexes();
  fixChineseElfLinks();
  
  console.log('\nAll fixes complete! The build should now succeed without errors.');
}

main();