#!/usr/bin/env node

/**
 * 链接验证工具
 * 快速检查项目中的链接状态
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class LinkValidator {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.stats = {
      totalFiles: 0,
      filesWithLinks: 0,
      totalLinks: 0,
      brokenLinks: 0,
      externalLinks: 0,
      internalLinks: 0
    };
  }

  // 验证所有链接
  validate() {
    console.log('🔍 链接验证工具\n');
    console.log('📂 扫描文档...\n');
    
    // 扫描所有 markdown 文件
    this.scanDirectory('docs');
    this.scanDirectory('i18n/zh-Hans/docusaurus-plugin-content-docs/current');
    
    // 运行构建检查断链
    this.checkBrokenLinks();
    
    // 输出报告
    this.printReport();
  }

  // 扫描目录
  scanDirectory(dir) {
    const fullPath = path.join(this.projectRoot, dir);
    if (!fs.existsSync(fullPath)) return;
    
    this.walkDir(fullPath, (filePath) => {
      this.stats.totalFiles++;
      const links = this.extractLinks(filePath);
      
      if (links.length > 0) {
        this.stats.filesWithLinks++;
        this.stats.totalLinks += links.length;
        
        links.forEach(link => {
          if (link.startsWith('http://') || link.startsWith('https://')) {
            this.stats.externalLinks++;
          } else {
            this.stats.internalLinks++;
          }
        });
      }
    });
  }

  // 递归遍历目录
  walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        if (!file.startsWith('.') && file !== 'node_modules' && file !== 'build') {
          this.walkDir(filePath, callback);
        }
      } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
        callback(filePath);
      }
    });
  }

  // 提取文件中的链接
  extractLinks(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const links = [];
    
    // Markdown 链接 [text](url)
    const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    while ((match = mdLinkRegex.exec(content)) !== null) {
      links.push(match[2]);
    }
    
    // HTML 链接 href="url"
    const hrefRegex = /href="([^"]+)"/g;
    while ((match = hrefRegex.exec(content)) !== null) {
      links.push(match[1]);
    }
    
    // HTML 链接 to="url"
    const toRegex = /to="([^"]+)"/g;
    while ((match = toRegex.exec(content)) !== null) {
      links.push(match[1]);
    }
    
    return links;
  }

  // 检查断链
  checkBrokenLinks() {
    console.log('🔨 运行构建检查断链...\n');
    
    try {
      execSync('npm run build', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      console.log('✅ 构建成功，没有断链！\n');
    } catch (error) {
      const output = error.stdout || error.output?.join('') || '';
      const brokenCount = (output.match(/Broken link/g) || []).length;
      this.stats.brokenLinks = brokenCount;
      
      if (brokenCount > 0) {
        console.log(`❌ 发现 ${brokenCount} 个断链\n`);
        
        // 提取断链详情
        const lines = output.split('\n');
        const brokenLinks = [];
        
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes('Broken link on source page path =')) {
            const sourcePath = lines[i].split('=')[1].trim();
            if (i + 1 < lines.length && lines[i + 1].includes('-> linking to')) {
              brokenLinks.push({
                source: sourcePath,
                link: lines[i + 1].trim()
              });
            }
          }
        }
        
        // 显示前10个断链
        console.log('断链示例（前10个）:');
        brokenLinks.slice(0, 10).forEach(({ source, link }) => {
          console.log(`  ${source}`);
          console.log(`    ${link}`);
        });
        
        if (brokenLinks.length > 10) {
          console.log(`  ... 还有 ${brokenLinks.length - 10} 个断链\n`);
        }
      }
    }
  }

  // 打印报告
  printReport() {
    console.log('\n📊 链接验证报告');
    console.log('═══════════════════════════════════════');
    console.log(`📄 总文件数:        ${this.stats.totalFiles}`);
    console.log(`🔗 包含链接的文件:  ${this.stats.filesWithLinks}`);
    console.log(`📎 总链接数:        ${this.stats.totalLinks}`);
    console.log(`  ├─ 内部链接:     ${this.stats.internalLinks}`);
    console.log(`  └─ 外部链接:     ${this.stats.externalLinks}`);
    console.log(`❌ 断链数:          ${this.stats.brokenLinks}`);
    console.log('═══════════════════════════════════════');
    
    if (this.stats.brokenLinks > 0) {
      console.log('\n💡 提示: 运行 "node scripts/smart-link-fixer.js" 自动修复断链');
    } else {
      console.log('\n✨ 所有链接正常！');
    }
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  const validator = new LinkValidator();
  validator.validate();
}

module.exports = LinkValidator;