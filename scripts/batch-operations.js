#!/usr/bin/env node

/**
 * 批量操作工具
 * 对项目文件进行批量查找替换等操作
 */

const fs = require('fs');
const path = require('path');

class BatchOperations {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
  }

  // 批量查找替换
  findAndReplace(options) {
    const {
      pattern,           // 查找的文本或正则表达式
      replacement,       // 替换文本
      filePattern = /\.(md|mdx)$/,  // 文件匹配模式
      directories = ['docs', 'i18n'],  // 搜索目录
      dryRun = false    // 是否只显示不执行
    } = options;
    
    console.log('🔍 批量查找替换\n');
    console.log(`查找: ${pattern}`);
    console.log(`替换: ${replacement}`);
    console.log(`目录: ${directories.join(', ')}`);
    console.log(`模式: ${dryRun ? '预览模式' : '执行模式'}\n`);
    
    let totalFiles = 0;
    let modifiedFiles = 0;
    let totalReplacements = 0;
    
    directories.forEach(dir => {
      const fullDir = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullDir)) {
        this.walkDir(fullDir, (filePath) => {
          if (filePattern.test(filePath)) {
            totalFiles++;
            const result = this.processFile(filePath, pattern, replacement, dryRun);
            if (result.modified) {
              modifiedFiles++;
              totalReplacements += result.count;
              console.log(`✓ ${filePath.replace(this.projectRoot + '/', '')} (${result.count} 处替换)`);
            }
          }
        });
      }
    });
    
    console.log(`\n📊 统计:`);
    console.log(`  扫描文件: ${totalFiles}`);
    console.log(`  修改文件: ${modifiedFiles}`);
    console.log(`  替换次数: ${totalReplacements}`);
    
    if (dryRun && modifiedFiles > 0) {
      console.log('\n💡 提示: 使用 --execute 参数执行实际替换');
    }
  }

  // 处理单个文件
  processFile(filePath, pattern, replacement, dryRun) {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // 支持字符串或正则表达式
    const regex = pattern instanceof RegExp ? pattern : new RegExp(this.escapeRegex(pattern), 'g');
    
    let count = 0;
    content = content.replace(regex, (match) => {
      count++;
      return replacement;
    });
    
    const modified = content !== originalContent;
    
    if (modified && !dryRun) {
      fs.writeFileSync(filePath, content);
    }
    
    return { modified, count };
  }

  // 批量重命名文件
  renameFiles(options) {
    const {
      pattern,           // 文件名匹配模式
      rename,            // 重命名函数
      directories = ['docs', 'i18n'],
      dryRun = false
    } = options;
    
    console.log('📝 批量重命名文件\n');
    console.log(`匹配模式: ${pattern}`);
    console.log(`目录: ${directories.join(', ')}`);
    console.log(`模式: ${dryRun ? '预览模式' : '执行模式'}\n`);
    
    let totalFiles = 0;
    let renamedFiles = 0;
    
    directories.forEach(dir => {
      const fullDir = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullDir)) {
        this.walkDir(fullDir, (filePath) => {
          const fileName = path.basename(filePath);
          if (pattern.test(fileName)) {
            totalFiles++;
            const newName = rename(fileName);
            if (newName !== fileName) {
              const newPath = path.join(path.dirname(filePath), newName);
              
              if (!dryRun) {
                fs.renameSync(filePath, newPath);
              }
              
              renamedFiles++;
              console.log(`✓ ${fileName} → ${newName}`);
            }
          }
        });
      }
    });
    
    console.log(`\n📊 统计:`);
    console.log(`  匹配文件: ${totalFiles}`);
    console.log(`  重命名文件: ${renamedFiles}`);
    
    if (dryRun && renamedFiles > 0) {
      console.log('\n💡 提示: 使用 --execute 参数执行实际重命名');
    }
  }

  // 添加前置内容
  prependContent(options) {
    const {
      content,           // 要添加的内容
      filePattern = /\.(md|mdx)$/,
      skipPattern,       // 跳过的文件模式
      directories = ['docs'],
      dryRun = false
    } = options;
    
    console.log('➕ 批量添加前置内容\n');
    console.log(`内容: ${content.split('\n')[0]}...`);
    console.log(`目录: ${directories.join(', ')}`);
    console.log(`模式: ${dryRun ? '预览模式' : '执行模式'}\n`);
    
    let totalFiles = 0;
    let modifiedFiles = 0;
    
    directories.forEach(dir => {
      const fullDir = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullDir)) {
        this.walkDir(fullDir, (filePath) => {
          if (filePattern.test(filePath) && (!skipPattern || !skipPattern.test(filePath))) {
            totalFiles++;
            const fileContent = fs.readFileSync(filePath, 'utf8');
            
            // 检查是否已经包含该内容
            if (!fileContent.includes(content.trim())) {
              if (!dryRun) {
                fs.writeFileSync(filePath, content + '\n' + fileContent);
              }
              modifiedFiles++;
              console.log(`✓ ${filePath.replace(this.projectRoot + '/', '')}`);
            }
          }
        });
      }
    });
    
    console.log(`\n📊 统计:`);
    console.log(`  扫描文件: ${totalFiles}`);
    console.log(`  修改文件: ${modifiedFiles}`);
  }

  // 统计文件信息
  statistics() {
    console.log('📊 项目统计\n');
    
    const stats = {
      docs: { files: 0, lines: 0, chars: 0 },
      'zh-Hans': { files: 0, lines: 0, chars: 0 },
      total: { files: 0, lines: 0, chars: 0 }
    };
    
    // 统计英文文档
    this.collectStats('docs', stats.docs);
    
    // 统计中文文档
    this.collectStats('i18n/zh-Hans/docusaurus-plugin-content-docs/current', stats['zh-Hans']);
    
    // 计算总计
    stats.total.files = stats.docs.files + stats['zh-Hans'].files;
    stats.total.lines = stats.docs.lines + stats['zh-Hans'].lines;
    stats.total.chars = stats.docs.chars + stats['zh-Hans'].chars;
    
    // 输出统计
    console.log('文档统计:');
    console.log('═══════════════════════════════════════');
    console.log(`英文文档:`);
    console.log(`  文件数: ${stats.docs.files}`);
    console.log(`  行数:   ${stats.docs.lines.toLocaleString()}`);
    console.log(`  字符数: ${stats.docs.chars.toLocaleString()}`);
    console.log(`\n中文文档:`);
    console.log(`  文件数: ${stats['zh-Hans'].files}`);
    console.log(`  行数:   ${stats['zh-Hans'].lines.toLocaleString()}`);
    console.log(`  字符数: ${stats['zh-Hans'].chars.toLocaleString()}`);
    console.log(`\n总计:`);
    console.log(`  文件数: ${stats.total.files}`);
    console.log(`  行数:   ${stats.total.lines.toLocaleString()}`);
    console.log(`  字符数: ${stats.total.chars.toLocaleString()}`);
    console.log('═══════════════════════════════════════');
  }

  // 收集统计信息
  collectStats(dir, stats) {
    const fullDir = path.join(this.projectRoot, dir);
    if (fs.existsSync(fullDir)) {
      this.walkDir(fullDir, (filePath) => {
        if (filePath.endsWith('.md') || filePath.endsWith('.mdx')) {
          stats.files++;
          const content = fs.readFileSync(filePath, 'utf8');
          stats.lines += content.split('\n').length;
          stats.chars += content.length;
        }
      });
    }
  }

  // 递归遍历目录
  walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        if (!file.startsWith('.') && file !== 'node_modules' && file !== 'build' && file !== 'static') {
          this.walkDir(filePath, callback);
        }
      } else {
        callback(filePath);
      }
    });
  }

  // 转义正则表达式特殊字符
  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

// 命令行界面
if (require.main === module) {
  const batch = new BatchOperations();
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'replace':
      // 示例: node batch-operations.js replace "old text" "new text" --execute
      batch.findAndReplace({
        pattern: args[1],
        replacement: args[2],
        dryRun: !args.includes('--execute')
      });
      break;
      
    case 'rename':
      // 示例: node batch-operations.js rename "chapter-(\d+)" --execute
      batch.renameFiles({
        pattern: new RegExp(args[1]),
        rename: (name) => {
          // 自定义重命名逻辑
          return name.replace(/chapter-(\d+)/, 'ch-$1');
        },
        dryRun: !args.includes('--execute')
      });
      break;
      
    case 'prepend':
      // 示例: node batch-operations.js prepend "---\ngenerated: true\n---" --execute
      batch.prependContent({
        content: args[1],
        dryRun: !args.includes('--execute')
      });
      break;
      
    case 'stats':
      batch.statistics();
      break;
      
    default:
      console.log('批量操作工具\n');
      console.log('用法:');
      console.log('  node batch-operations.js replace "old" "new" [--execute]');
      console.log('  node batch-operations.js rename "pattern" [--execute]');
      console.log('  node batch-operations.js prepend "content" [--execute]');
      console.log('  node batch-operations.js stats');
      console.log('\n不带 --execute 参数时为预览模式');
  }
}

module.exports = BatchOperations;