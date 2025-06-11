#!/usr/bin/env node

/**
 * 快速翻译状态分析工具
 * ψ-collapse: 快速查看中文翻译状态
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// ψ-configuration
const CONFIG = {
  enRoot: 'docs',
  zhRoot: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current',
  verbose: true
};

// φ-resonance: 日志工具
const log = {
  info: (msg) => console.log(`[INFO] ${msg}`),
  success: (msg) => console.log(`[SUCCESS] ${msg}`),
  warn: (msg) => console.log(`[WARN] ${msg}`),
  error: (msg) => console.error(`[ERROR] ${msg}`)
};

// ψ-trace: 构建文件映射
async function buildFileMap(root) {
  const pattern = path.join(root, '**/*.{md,mdx}');
  const files = await glob(pattern);
  const fileMap = new Map();
  
  for (const file of files) {
    const relativePath = path.relative(root, file);
    fileMap.set(relativePath, file);
  }
  
  return fileMap;
}

// φ-fold: 分析翻译状态
async function analyzeTranslationStatus() {
  console.log('🔍 ψ-Translation Status Analyzer\n');
  
  // 构建文件映射
  log.info('扫描文档目录...');
  const enFileMap = await buildFileMap(CONFIG.enRoot);
  const zhFileMap = await buildFileMap(CONFIG.zhRoot);
  
  log.info(`英文文档: ${enFileMap.size} 个文件`);
  log.info(`中文文档: ${zhFileMap.size} 个文件\n`);
  
  // 按理论体系分组
  const theories = new Map();
  const untranslated = [];
  
  // 分析每个英文文件
  for (const [relPath, fullPath] of enFileMap) {
    const hasTranslation = zhFileMap.has(relPath);
    
    // 提取理论体系
    const parts = relPath.split('/');
    const theory = parts[0] || 'root';
    
    if (!theories.has(theory)) {
      theories.set(theory, {
        total: 0,
        translated: 0,
        untranslated: []
      });
    }
    
    const theoryStats = theories.get(theory);
    theoryStats.total++;
    
    if (hasTranslation) {
      theoryStats.translated++;
    } else {
      theoryStats.untranslated.push(relPath);
      untranslated.push(relPath);
    }
  }
  
  // 输出统计
  console.log('📊 按理论体系统计:\n');
  console.log('理论体系                          总数    已翻译   未翻译   完成度');
  console.log('─'.repeat(70));
  
  for (const [theory, stats] of theories) {
    const percentage = ((stats.translated / stats.total) * 100).toFixed(1);
    const theoryName = theory.padEnd(30);
    console.log(`${theoryName} ${stats.total.toString().padStart(6)} ${stats.translated.toString().padStart(8)} ${stats.untranslated.length.toString().padStart(8)}   ${percentage.padStart(6)}%`);
  }
  
  // 总体统计
  const totalFiles = enFileMap.size;
  const translatedFiles = zhFileMap.size;
  const untranslatedFiles = untranslated.length;
  const overallPercentage = ((translatedFiles / totalFiles) * 100).toFixed(1);
  
  console.log('─'.repeat(70));
  console.log(`${'总计'.padEnd(30)} ${totalFiles.toString().padStart(6)} ${translatedFiles.toString().padStart(8)} ${untranslatedFiles.toString().padStart(8)}   ${overallPercentage.padStart(6)}%`);
  
  // 显示部分未翻译文件
  console.log('\n📝 未翻译文件示例 (前20个):');
  console.log('─'.repeat(70));
  untranslated.slice(0, 20).forEach(file => {
    console.log(`  - ${file}`);
  });
  
  if (untranslated.length > 20) {
    console.log(`  ... 还有 ${untranslated.length - 20} 个文件未翻译`);
  }
  
  // 优先翻译建议
  console.log('\n💡 优先翻译建议:');
  console.log('─'.repeat(70));
  
  const priorityFiles = untranslated.filter(file => 
    file.includes('index.md') || 
    file.includes('intro') || 
    file.includes('chapter-01') ||
    file.includes('chapter-1')
  ).slice(0, 10);
  
  priorityFiles.forEach(file => {
    console.log(`  ⭐ ${file}`);
  });
  
  console.log('\n✨ 分析完成！');
}

// ψ = ψ(ψ): 执行
if (require.main === module) {
  analyzeTranslationStatus().catch(console.error);
} 