#!/usr/bin/env node

/**
 * 智能链接修复工具
 * 自动检测并修复 Docusaurus 项目中的所有断链
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SmartLinkFixer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.brokenLinks = [];
    this.fixedCount = 0;
    this.createdFiles = [];
  }

  // 运行构建并获取所有断链信息
  detectBrokenLinks() {
    console.log('🔍 检测断链...\n');
    
    try {
      execSync('npm run build', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
    } catch (error) {
      // 构建失败时解析错误输出中的断链信息
      const output = error.stdout || error.output?.join('') || '';
      this.parseBrokenLinks(output);
    }
  }

  // 解析断链信息
  parseBrokenLinks(output) {
    const lines = output.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('Broken link on source page path =')) {
        const sourcePath = lines[i].split('=')[1].trim().replace(/:/g, '');
        
        if (i + 1 < lines.length && lines[i + 1].includes('-> linking to')) {
          const linkMatch = lines[i + 1].match(/-> linking to (.+?) \(resolved as: (.+?)\)/);
          if (linkMatch) {
            this.brokenLinks.push({
              sourcePath,
              originalLink: linkMatch[1],
              resolvedPath: linkMatch[2]
            });
          }
        }
      }
    }
    
    console.log(`📊 发现 ${this.brokenLinks.length} 个断链\n`);
  }

  // 智能推断正确的链接
  inferCorrectLink(brokenLink) {
    const { sourcePath, originalLink, resolvedPath } = brokenLink;
    
    // 1. 如果链接指向目录，添加 /index.md
    if (!originalLink.endsWith('.md') && !originalLink.endsWith('.mdx')) {
      return originalLink + '/index.md';
    }
    
    // 2. 处理相对路径深度问题
    if (originalLink.startsWith('../')) {
      // 计算源文件的深度
      const sourceDepth = sourcePath.split('/').length;
      const linkDepth = (originalLink.match(/\.\.\//g) || []).length;
      
      // 如果解析路径显示在根目录，说明相对路径太深
      if (resolvedPath.startsWith('/alltheory/docs/') || resolvedPath.startsWith('/alltheory/zh-Hans/docs/')) {
        // 减少一个 ../
        if (linkDepth > 1) {
          return originalLink.replace('../', '');
        }
      }
    }
    
    // 3. 查找目标文件是否存在
    const targetFileName = path.basename(originalLink);
    const possiblePaths = this.findFile(targetFileName, sourcePath);
    
    if (possiblePaths.length > 0) {
      // 选择最接近的匹配
      return this.calculateRelativePath(sourcePath, possiblePaths[0]);
    }
    
    // 4. 如果找不到文件，可能需要创建
    return null;
  }

  // 查找文件
  findFile(fileName, fromPath) {
    const results = [];
    const searchDirs = [
      'docs',
      'i18n/zh-Hans/docusaurus-plugin-content-docs/current'
    ];
    
    searchDirs.forEach(dir => {
      const fullDir = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullDir)) {
        this.searchRecursive(fullDir, fileName, results);
      }
    });
    
    return results;
  }

  // 递归搜索文件
  searchRecursive(dir, fileName, results) {
    try {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'build') {
          this.searchRecursive(filePath, fileName, results);
        } else if (file === fileName) {
          results.push(filePath);
        }
      });
    } catch (error) {
      // 忽略权限错误
    }
  }

  // 计算相对路径
  calculateRelativePath(fromPath, toPath) {
    // 转换路径格式
    const sourceFile = this.convertToFilePath(fromPath);
    const targetFile = toPath.replace(this.projectRoot + '/', '');
    
    const sourceDir = path.dirname(sourceFile);
    const relativePath = path.relative(sourceDir, targetFile);
    
    return relativePath.startsWith('.') ? relativePath : './' + relativePath;
  }

  // 转换路径格式
  convertToFilePath(docPath) {
    let filePath = docPath.replace('/alltheory', '.');
    
    if (filePath.includes('/zh-Hans/docs')) {
      filePath = filePath.replace('/zh-Hans/docs', './i18n/zh-Hans/docusaurus-plugin-content-docs/current');
    }
    
    // 如果不是文件，添加 index.md
    if (!filePath.endsWith('.md') && !filePath.endsWith('.mdx')) {
      filePath = filePath + '/index.md';
    }
    
    return filePath;
  }

  // 修复单个文件中的链接
  fixLinkInFile(sourceFile, oldLink, newLink) {
    const filePath = path.join(this.projectRoot, sourceFile);
    
    if (!fs.existsSync(filePath)) {
      // 创建缺失的文件
      this.createMissingFile(filePath);
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    const patterns = [
      new RegExp(`\\]\\(${this.escapeRegex(oldLink)}\\)`, 'g'),
      new RegExp(`href="${this.escapeRegex(oldLink)}"`, 'g'),
      new RegExp(`to="${this.escapeRegex(oldLink)}"`, 'g')
    ];
    
    let modified = false;
    patterns.forEach(pattern => {
      if (content.match(pattern)) {
        content = content.replace(pattern, (match) => {
          if (match.startsWith('](')) return `](${newLink})`;
          if (match.startsWith('href="')) return `href="${newLink}"`;
          if (match.startsWith('to="')) return `to="${newLink}"`;
          return match;
        });
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      this.fixedCount++;
      return true;
    }
    
    return false;
  }

  // 创建缺失的文件
  createMissingFile(filePath) {
    const dir = path.dirname(filePath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    if (!fs.existsSync(filePath)) {
      const isIndex = path.basename(filePath) === 'index.md';
      const dirName = path.basename(dir);
      const title = dirName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const isZhHans = filePath.includes('zh-Hans');
      const content = isIndex
        ? `# ${title}\n\n${isZhHans ? '此部分正在建设中。' : 'This section is under construction.'}`
        : `# ${title}\n\n${isZhHans ? '本章节正在建设中。' : 'This chapter is under construction.'}`;
      
      fs.writeFileSync(filePath, content);
      this.createdFiles.push(filePath);
      console.log(`✅ 创建文件: ${filePath.replace(this.projectRoot + '/', '')}`);
    }
  }

  // 转义正则表达式特殊字符
  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // 修复所有断链
  fixAllLinks() {
    console.log('🔧 开始修复链接...\n');
    
    // 按源文件分组
    const linksByFile = {};
    this.brokenLinks.forEach(link => {
      const sourceFile = this.convertToFilePath(link.sourcePath);
      if (!linksByFile[sourceFile]) {
        linksByFile[sourceFile] = [];
      }
      linksByFile[sourceFile].push(link);
    });
    
    // 修复每个文件中的链接
    Object.entries(linksByFile).forEach(([sourceFile, links]) => {
      console.log(`📝 处理: ${sourceFile}`);
      
      links.forEach(link => {
        const correctLink = this.inferCorrectLink(link);
        
        if (correctLink) {
          if (this.fixLinkInFile(sourceFile, link.originalLink, correctLink)) {
            console.log(`  ✓ ${link.originalLink} → ${correctLink}`);
          }
        } else {
          // 尝试创建目标文件
          const targetPath = this.convertToFilePath(link.resolvedPath);
          this.createMissingFile(targetPath);
          
          // 重新计算链接
          const newLink = this.inferCorrectLink(link);
          if (newLink) {
            if (this.fixLinkInFile(sourceFile, link.originalLink, newLink)) {
              console.log(`  ✓ ${link.originalLink} → ${newLink}`);
            }
          } else {
            console.log(`  ✗ 无法修复: ${link.originalLink}`);
          }
        }
      });
    });
  }

  // 主函数
  run() {
    console.log('🚀 智能链接修复工具\n');
    
    // 检测断链
    this.detectBrokenLinks();
    
    if (this.brokenLinks.length === 0) {
      console.log('✨ 没有发现断链！');
      return;
    }
    
    // 修复链接
    this.fixAllLinks();
    
    // 输出统计
    console.log('\n📊 修复统计:');
    console.log(`  修复链接: ${this.fixedCount} 个`);
    console.log(`  创建文件: ${this.createdFiles.length} 个`);
    
    if (this.createdFiles.length > 0) {
      console.log('\n📄 创建的文件:');
      this.createdFiles.forEach(file => {
        console.log(`  - ${file.replace(this.projectRoot + '/', '')}`);
      });
    }
    
    console.log('\n✅ 完成！运行 "npm run build" 验证修复结果。');
  }
}

// 执行
const fixer = new SmartLinkFixer();
fixer.run();