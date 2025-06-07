#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 获取所有断链信息
function getBrokenLinks() {
  console.log('Detecting broken links...');
  
  try {
    // 运行构建并捕获输出
    const output = execSync('npm run build 2>&1', { 
      encoding: 'utf8',
      maxBuffer: 1024 * 1024 * 10 // 10MB buffer
    });
    
    // 解析断链信息
    const brokenLinks = [];
    const lines = output.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('Broken link on source page path =')) {
        const sourcePath = lines[i].split('=')[1].trim().replace(/:/g, '');
        if (i + 1 < lines.length && lines[i + 1].includes('-> linking to')) {
          const linkMatch = lines[i + 1].match(/-> linking to (.+?) \(resolved as: (.+?)\)/);
          if (linkMatch) {
            const originalLink = linkMatch[1];
            const resolvedPath = linkMatch[2];
            brokenLinks.push({
              sourcePath,
              originalLink,
              resolvedPath
            });
          }
        }
      }
    }
    
    return brokenLinks;
  } catch (error) {
    // 构建失败也可能包含断链信息
    const output = error.stdout || error.output?.join('') || '';
    const brokenLinks = [];
    const lines = output.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('Broken link on source page path =')) {
        const sourcePath = lines[i].split('=')[1].trim().replace(/:/g, '');
        if (i + 1 < lines.length && lines[i + 1].includes('-> linking to')) {
          const linkMatch = lines[i + 1].match(/-> linking to (.+?) \(resolved as: (.+?)\)/);
          if (linkMatch) {
            const originalLink = linkMatch[1];
            const resolvedPath = linkMatch[2];
            brokenLinks.push({
              sourcePath,
              originalLink,
              resolvedPath
            });
          }
        }
      }
    }
    
    return brokenLinks;
  }
}

// 推断正确的链接
function inferCorrectLink(brokenLink) {
  const { sourcePath, originalLink } = brokenLink;
  
  // 获取源文件的目录
  const sourceFile = sourcePath.replace('/alltheory', '').replace('/zh-Hans', '') + '.md';
  const sourceDir = path.dirname(sourceFile);
  
  // 从原始链接中提取目标文件名
  const targetFileName = path.basename(originalLink);
  
  // 特殊情况处理
  if (originalLink.includes('book-1-foundation/index.md')) {
    return './book-1-foundation/index.md';
  }
  
  if (originalLink.includes('book-3-omega-collapse')) {
    return './book-3-omega-collapse/index.md';
  }
  
  if (originalLink.endsWith('/index.md')) {
    // 目录链接
    const dirName = path.basename(path.dirname(originalLink));
    return `./${dirName}/index.md`;
  }
  
  // 查找同目录或相邻目录中的匹配文件
  const searchPaths = [
    sourceDir,
    path.join(sourceDir, '..'),
    path.join(sourceDir, '..', '..'),
    '/docs',
    '/docs/psi-theory',
    '/docs/psi-theory/book-1-foundation',
    '/docs/psi-theory/book-2-fractal-extension',
    '/docs/psi-elf-quantum-theory',
    '/docs/psi-physics-theory',
    '/docs/he',
    '/docs/yishi'
  ];
  
  for (const searchPath of searchPaths) {
    const fullSearchPath = path.join(__dirname, '..', searchPath.startsWith('/') ? searchPath.slice(1) : searchPath);
    
    if (fs.existsSync(fullSearchPath)) {
      // 递归查找匹配的文件
      const matchingFile = findFileRecursive(fullSearchPath, targetFileName);
      if (matchingFile) {
        // 计算相对路径
        const relativePath = path.relative(path.dirname(path.join(__dirname, '..', sourceFile)), matchingFile);
        return relativePath.startsWith('.') ? relativePath : './' + relativePath;
      }
    }
  }
  
  // 如果找不到，返回null
  return null;
}

// 递归查找文件
function findFileRecursive(dir, fileName) {
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'build') {
        const found = findFileRecursive(filePath, fileName);
        if (found) return found;
      } else if (file === fileName) {
        return filePath;
      }
    }
  } catch (error) {
    // 忽略权限错误等
  }
  
  return null;
}

// 修复文件中的特定链接
function fixLinkInFile(filePath, oldLink, newLink) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 使用更精确的替换，避免误替换
    const patterns = [
      new RegExp(`\\]\\(${escapeRegex(oldLink)}\\)`, 'g'),
      new RegExp(`href="${escapeRegex(oldLink)}"`, 'g'),
      new RegExp(`to="${escapeRegex(oldLink)}"`, 'g')
    ];
    
    let modified = false;
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
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing link in ${filePath}:`, error.message);
  }
  
  return false;
}

// 转义正则表达式特殊字符
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 主函数
function main() {
  console.log('Automated Broken Link Fixer\n');
  
  // 获取所有断链
  const brokenLinks = getBrokenLinks();
  console.log(`Found ${brokenLinks.length} broken links\n`);
  
  // 按源文件分组
  const linksByFile = {};
  brokenLinks.forEach(link => {
    let sourceFile = link.sourcePath.replace('/alltheory', '.');
    if (sourceFile.includes('/zh-Hans/docs')) {
      sourceFile = sourceFile.replace('/zh-Hans/docs', './i18n/zh-Hans/docusaurus-plugin-content-docs/current');
    }
    // 如果路径以目录结尾，添加index.md
    if (!sourceFile.endsWith('.md') && !sourceFile.endsWith('.mdx')) {
      sourceFile = sourceFile + '/index.md';
    }
    if (!linksByFile[sourceFile]) {
      linksByFile[sourceFile] = [];
    }
    linksByFile[sourceFile].push(link);
  });
  
  // 修复每个文件中的链接
  let fixedCount = 0;
  let failedCount = 0;
  
  for (const [sourceFile, links] of Object.entries(linksByFile)) {
    const fullPath = path.join(__dirname, '..', sourceFile);
    
    if (!fs.existsSync(fullPath)) {
      console.warn(`Source file not found: ${sourceFile}`);
      continue;
    }
    
    console.log(`Processing ${sourceFile}...`);
    
    for (const link of links) {
      const correctLink = inferCorrectLink(link);
      
      if (correctLink) {
        if (fixLinkInFile(fullPath, link.originalLink, correctLink)) {
          console.log(`  ✓ Fixed: ${link.originalLink} → ${correctLink}`);
          fixedCount++;
        } else {
          console.log(`  ✗ Failed to fix: ${link.originalLink}`);
          failedCount++;
        }
      } else {
        console.log(`  ? Cannot infer correct link for: ${link.originalLink}`);
        failedCount++;
      }
    }
  }
  
  console.log(`\nSummary:`);
  console.log(`  Fixed: ${fixedCount} links`);
  console.log(`  Failed: ${failedCount} links`);
  console.log(`\nRun 'npm run build' to verify all links are fixed.`);
}

// 执行
main();