#!/usr/bin/env node

/**
 * 项目维护工具
 * 提供各种项目维护功能
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ProjectMaintenance {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
  }

  // 清理临时文件
  cleanup() {
    console.log('🧹 清理项目...\n');
    
    const patterns = [
      'build',
      '.docusaurus',
      'node_modules/.cache',
      '**/*.bak',
      '**/*~',
      '**/.DS_Store'
    ];
    
    patterns.forEach(pattern => {
      try {
        if (pattern.includes('*')) {
          // 使用 find 命令删除匹配的文件
          execSync(`find . -name "${pattern}" -type f -delete`, {
            cwd: this.projectRoot
          });
        } else {
          // 删除目录
          const fullPath = path.join(this.projectRoot, pattern);
          if (fs.existsSync(fullPath)) {
            execSync(`rm -rf "${fullPath}"`);
            console.log(`✓ 删除: ${pattern}`);
          }
        }
      } catch (error) {
        // 忽略错误
      }
    });
    
    console.log('\n✅ 清理完成！');
  }

  // 检查文件一致性
  checkConsistency() {
    console.log('🔍 检查文件一致性...\n');
    
    const issues = [];
    
    // 检查是否有空文件
    this.walkProject((filePath) => {
      if (filePath.endsWith('.md') || filePath.endsWith('.mdx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.trim() === '') {
          issues.push({
            type: 'empty',
            file: filePath.replace(this.projectRoot + '/', '')
          });
        }
      }
    });
    
    // 检查是否有重复文件名
    const fileNames = new Map();
    this.walkProject((filePath) => {
      const fileName = path.basename(filePath);
      if (!fileNames.has(fileName)) {
        fileNames.set(fileName, []);
      }
      fileNames.get(fileName).push(filePath);
    });
    
    fileNames.forEach((paths, fileName) => {
      if (paths.length > 1) {
        issues.push({
          type: 'duplicate',
          fileName,
          paths: paths.map(p => p.replace(this.projectRoot + '/', ''))
        });
      }
    });
    
    // 输出结果
    if (issues.length === 0) {
      console.log('✅ 没有发现一致性问题！');
    } else {
      console.log(`❌ 发现 ${issues.length} 个问题:\n`);
      
      issues.forEach(issue => {
        if (issue.type === 'empty') {
          console.log(`  空文件: ${issue.file}`);
        } else if (issue.type === 'duplicate') {
          console.log(`  重复文件名: ${issue.fileName}`);
          issue.paths.forEach(p => console.log(`    - ${p}`));
        }
      });
    }
  }

  // 同步中英文结构
  syncStructure() {
    console.log('🔄 同步中英文目录结构...\n');
    
    const enDir = path.join(this.projectRoot, 'docs');
    const zhDir = path.join(this.projectRoot, 'i18n/zh-Hans/docusaurus-plugin-content-docs/current');
    
    let created = 0;
    
    // 递归创建对应的中文目录
    const syncDir = (relPath = '') => {
      const enPath = path.join(enDir, relPath);
      const zhPath = path.join(zhDir, relPath);
      
      if (!fs.existsSync(enPath)) return;
      
      // 创建中文目录
      if (!fs.existsSync(zhPath)) {
        fs.mkdirSync(zhPath, { recursive: true });
        console.log(`✓ 创建目录: ${relPath || '/'}`);
        created++;
      }
      
      // 检查子目录和文件
      const items = fs.readdirSync(enPath);
      items.forEach(item => {
        const itemPath = path.join(enPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          syncDir(path.join(relPath, item));
        } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
          const zhFilePath = path.join(zhPath, item);
          if (!fs.existsSync(zhFilePath)) {
            // 创建占位文件
            const content = `# ${item.replace(/\.(md|mdx)$/, '')}\n\n此页面正在翻译中。`;
            fs.writeFileSync(zhFilePath, content);
            console.log(`✓ 创建文件: ${path.join(relPath, item)}`);
            created++;
          }
        }
      });
    };
    
    syncDir();
    
    console.log(`\n📊 同步完成: 创建了 ${created} 个文件/目录`);
  }

  // 生成站点地图
  generateSitemap() {
    console.log('🗺️  生成站点地图...\n');
    
    const pages = [];
    
    // 收集所有页面
    this.walkProject((filePath) => {
      if (filePath.endsWith('.md') || filePath.endsWith('.mdx')) {
        const relativePath = filePath.replace(this.projectRoot + '/', '');
        
        // 转换为URL路径
        let urlPath = relativePath
          .replace(/^docs\//, '/')
          .replace(/^i18n\/zh-Hans\/docusaurus-plugin-content-docs\/current\//, '/zh-Hans/')
          .replace(/\.(md|mdx)$/, '')
          .replace(/\/index$/, '');
        
        pages.push({
          path: urlPath,
          file: relativePath
        });
      }
    });
    
    // 按路径排序
    pages.sort((a, b) => a.path.localeCompare(b.path));
    
    // 输出站点地图
    console.log('📄 站点结构:\n');
    
    // 按语言分组
    const enPages = pages.filter(p => !p.path.includes('/zh-Hans/'));
    const zhPages = pages.filter(p => p.path.includes('/zh-Hans/'));
    
    console.log('英文页面:');
    enPages.forEach(page => {
      const depth = page.path.split('/').length - 1;
      const indent = '  '.repeat(depth);
      console.log(`${indent}${page.path}`);
    });
    
    console.log('\n中文页面:');
    zhPages.forEach(page => {
      const depth = page.path.split('/').length - 2; // 减去 /zh-Hans
      const indent = '  '.repeat(depth);
      console.log(`${indent}${page.path}`);
    });
    
    console.log(`\n📊 总计: ${pages.length} 个页面 (英文: ${enPages.length}, 中文: ${zhPages.length})`);
  }

  // 更新依赖
  updateDependencies() {
    console.log('📦 检查并更新依赖...\n');
    
    try {
      // 检查过时的包
      console.log('检查过时的包...');
      const outdated = execSync('npm outdated', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      if (outdated) {
        console.log('过时的包:\n');
        console.log(outdated);
        
        console.log('\n是否要更新? (需要手动运行 npm update)');
      } else {
        console.log('✅ 所有依赖都是最新的！');
      }
    } catch (error) {
      // npm outdated 在有过时包时返回非零退出码
      const output = error.stdout || '';
      if (output) {
        console.log('过时的包:\n');
        console.log(output);
        console.log('\n💡 运行 "npm update" 更新依赖');
      }
    }
  }

  // 遍历项目文件
  walkProject(callback) {
    const dirs = ['docs', 'i18n'];
    
    dirs.forEach(dir => {
      const fullDir = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullDir)) {
        this.walkDir(fullDir, callback);
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
      } else {
        callback(filePath);
      }
    });
  }

  // 执行所有维护任务
  runAll() {
    console.log('🚀 运行所有维护任务...\n');
    
    console.log('=' .repeat(50) + '\n');
    this.cleanup();
    
    console.log('\n' + '=' .repeat(50) + '\n');
    this.checkConsistency();
    
    console.log('\n' + '=' .repeat(50) + '\n');
    this.syncStructure();
    
    console.log('\n' + '=' .repeat(50) + '\n');
    this.generateSitemap();
    
    console.log('\n' + '=' .repeat(50) + '\n');
    this.updateDependencies();
    
    console.log('\n✅ 所有维护任务完成！');
  }
}

// 命令行界面
if (require.main === module) {
  const maintenance = new ProjectMaintenance();
  const command = process.argv[2];
  
  switch (command) {
    case 'clean':
      maintenance.cleanup();
      break;
    case 'check':
      maintenance.checkConsistency();
      break;
    case 'sync':
      maintenance.syncStructure();
      break;
    case 'sitemap':
      maintenance.generateSitemap();
      break;
    case 'update':
      maintenance.updateDependencies();
      break;
    case 'all':
      maintenance.runAll();
      break;
    default:
      console.log('项目维护工具\n');
      console.log('用法:');
      console.log('  node project-maintenance.js clean    - 清理临时文件');
      console.log('  node project-maintenance.js check    - 检查文件一致性');
      console.log('  node project-maintenance.js sync     - 同步中英文结构');
      console.log('  node project-maintenance.js sitemap  - 生成站点地图');
      console.log('  node project-maintenance.js update   - 检查更新依赖');
      console.log('  node project-maintenance.js all      - 运行所有任务');
  }
}

module.exports = ProjectMaintenance;