#!/usr/bin/env node

/**
 * 翻译状态分析器
 * ψ-collapse: 全面分析中文翻译状态
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// ψ-configuration
const CONFIG = {
  enRoot: 'docs',
  zhRoot: 'i18n/zh-Hans/docusaurus-plugin-content-docs/current',
  // 不需要翻译的理论体系（本来就是中文）
  noTranslationNeeded: ['yishi', 'hongloumeng', 'he', 'writeyourself'],
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

// φ-fold: 检查文件是否是占位符
async function isPlaceholderFile(filePath) {
  try {
    const content = await fs.promises.readFile(filePath, 'utf8');
    return content.includes('正在翻译中') || content.includes('此页面正在建设中');
  } catch (error) {
    return false;
  }
}

// ψ-analysis: 分析翻译状态
async function analyzeTranslationStatus() {
  console.log('🔍 ψ-Translation Status Analyzer v2.0\n');
  
  // 构建文件映射
  log.info('扫描文档目录...');
  const enFileMap = await buildFileMap(CONFIG.enRoot);
  const zhFileMap = await buildFileMap(CONFIG.zhRoot);
  
  // 按理论体系分组
  const theories = new Map();
  const untranslated = [];
  const needsTranslation = [];
  let placeholderCount = 0;
  
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
        placeholder: 0,
        untranslated: [],
        noTranslationNeeded: CONFIG.noTranslationNeeded.includes(theory)
      });
    }
    
    const theoryStats = theories.get(theory);
    theoryStats.total++;
    
    if (hasTranslation) {
      // 检查是否是占位符
      const zhPath = zhFileMap.get(relPath);
      if (await isPlaceholderFile(zhPath)) {
        theoryStats.placeholder++;
        placeholderCount++;
        if (!theoryStats.noTranslationNeeded) {
          needsTranslation.push(relPath);
        }
      } else {
        theoryStats.translated++;
      }
    } else {
      theoryStats.untranslated.push(relPath);
      untranslated.push(relPath);
      if (!theoryStats.noTranslationNeeded) {
        needsTranslation.push(relPath);
      }
    }
  }
  
  // 检查_category_.json文件
  log.info('\n检查 _category_.json 文件...');
  const categoryFiles = await glob(path.join(CONFIG.enRoot, '**/_category_.json'));
  let missingCategoryCount = 0;
  
  for (const enCategoryFile of categoryFiles) {
    const relPath = path.relative(CONFIG.enRoot, enCategoryFile);
    const zhCategoryFile = path.join(CONFIG.zhRoot, relPath);
    
    if (!fs.existsSync(zhCategoryFile)) {
      const dir = path.dirname(relPath);
      if (!CONFIG.noTranslationNeeded.some(theory => dir.startsWith(theory))) {
        log.warn(`缺少 _category_.json: ${relPath}`);
        missingCategoryCount++;
      }
    }
  }
  
  // 输出统计
  console.log('\n📊 按理论体系统计:\n');
  console.log('理论体系                          总数    已翻译   占位符   未翻译   完成度    状态');
  console.log('─'.repeat(90));
  
  // 分类显示
  const chineseTheories = [];
  const translatedTheories = [];
  const inProgressTheories = [];
  const untranslatedTheories = [];
  
  for (const [theory, stats] of theories) {
    const realTranslated = stats.translated;
    const percentage = ((realTranslated / stats.total) * 100).toFixed(1);
    
    if (stats.noTranslationNeeded) {
      chineseTheories.push({ theory, stats, percentage });
    } else if (percentage === '100.0') {
      translatedTheories.push({ theory, stats, percentage });
    } else if (percentage > '0.0') {
      inProgressTheories.push({ theory, stats, percentage });
    } else {
      untranslatedTheories.push({ theory, stats, percentage });
    }
  }
  
  // 显示不需要翻译的（中文内容）
  if (chineseTheories.length > 0) {
    console.log('\n📚 原生中文内容（不需要翻译）:');
    for (const { theory, stats } of chineseTheories) {
      const theoryName = theory.padEnd(30);
      console.log(`${theoryName} ${stats.total.toString().padStart(6)}      -        -        -        -    [中文]`);
    }
  }
  
  // 显示已完成翻译的
  if (translatedTheories.length > 0) {
    console.log('\n✅ 已完成翻译:');
    for (const { theory, stats, percentage } of translatedTheories) {
      const theoryName = theory.padEnd(30);
      console.log(`${theoryName} ${stats.total.toString().padStart(6)} ${stats.translated.toString().padStart(8)} ${stats.placeholder.toString().padStart(8)} ${stats.untranslated.length.toString().padStart(8)}   ${percentage.padStart(6)}%    ✓`);
    }
  }
  
  // 显示翻译中的
  if (inProgressTheories.length > 0) {
    console.log('\n⚠️  翻译进行中:');
    // 按完成度排序
    inProgressTheories.sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));
    for (const { theory, stats, percentage } of inProgressTheories) {
      const theoryName = theory.padEnd(30);
      console.log(`${theoryName} ${stats.total.toString().padStart(6)} ${stats.translated.toString().padStart(8)} ${stats.placeholder.toString().padStart(8)} ${stats.untranslated.length.toString().padStart(8)}   ${percentage.padStart(6)}%    ⋯`);
    }
  }
  
  // 显示未翻译的
  if (untranslatedTheories.length > 0) {
    console.log('\n❌ 未开始翻译:');
    for (const { theory, stats, percentage } of untranslatedTheories) {
      const theoryName = theory.padEnd(30);
      console.log(`${theoryName} ${stats.total.toString().padStart(6)} ${stats.translated.toString().padStart(8)} ${stats.placeholder.toString().padStart(8)} ${stats.untranslated.length.toString().padStart(8)}   ${percentage.padStart(6)}%    ✗`);
    }
  }
  
  // 总体统计
  const totalFiles = enFileMap.size;
  const chineseFiles = Array.from(theories.values())
    .filter(stats => stats.noTranslationNeeded)
    .reduce((sum, stats) => sum + stats.total, 0);
  const needsTranslationFiles = totalFiles - chineseFiles;
  const translatedFiles = Array.from(theories.values())
    .filter(stats => !stats.noTranslationNeeded)
    .reduce((sum, stats) => sum + stats.translated, 0);
  const overallPercentage = ((translatedFiles / needsTranslationFiles) * 100).toFixed(1);
  
  console.log('\n' + '─'.repeat(90));
  console.log(`${'总计'.padEnd(30)} ${totalFiles.toString().padStart(6)}`);
  console.log(`${'需要翻译'.padEnd(30)} ${needsTranslationFiles.toString().padStart(6)}`);
  console.log(`${'已翻译'.padEnd(30)} ${translatedFiles.toString().padStart(6)} (${overallPercentage}%)`);
  console.log(`${'占位符'.padEnd(30)} ${placeholderCount.toString().padStart(6)}`);
  console.log(`${'原生中文'.padEnd(30)} ${chineseFiles.toString().padStart(6)}`);
  
  // 显示接近完成的理论体系详情
  console.log('\n🎯 接近完成的理论体系详情:');
  console.log('─'.repeat(90));
  
  for (const { theory, stats } of inProgressTheories) {
    const percentage = ((stats.translated / stats.total) * 100).toFixed(1);
    if (parseFloat(percentage) >= 90) {
      console.log(`\n${theory} (${percentage}% 完成) - 缺少 ${stats.untranslated.length} 个文件:`);
      stats.untranslated.forEach(file => {
        console.log(`  ❗ ${file}`);
      });
    }
  }
  
  // 缺少的 _category_.json
  if (missingCategoryCount > 0) {
    console.log(`\n⚠️  缺少 ${missingCategoryCount} 个 _category_.json 文件`);
  }
  
  // 优先翻译建议
  console.log('\n💡 优先翻译建议:');
  console.log('─'.repeat(90));
  
  // 1. 完成接近100%的理论
  const almostComplete = inProgressTheories.filter(t => parseFloat(t.percentage) >= 90);
  if (almostComplete.length > 0) {
    console.log('\n1️⃣  完成接近100%的理论体系:');
    almostComplete.forEach(({ theory, stats }) => {
      console.log(`   - ${theory}: 还需 ${stats.untranslated.length} 个文件`);
    });
  }
  
  // 2. 重要的index文件
  const missingIndexFiles = needsTranslation.filter(file => file.includes('index.md'));
  if (missingIndexFiles.length > 0) {
    console.log('\n2️⃣  缺失的索引文件:');
    missingIndexFiles.slice(0, 5).forEach(file => {
      console.log(`   - ${file}`);
    });
  }
  
  console.log('\n✨ 分析完成！');
  
  // 生成详细报告
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalFiles,
      needsTranslation: needsTranslationFiles,
      translated: translatedFiles,
      percentage: overallPercentage,
      placeholders: placeholderCount,
      nativeChineseFiles: chineseFiles,
      missingCategoryFiles: missingCategoryCount
    },
    theories: Object.fromEntries(theories),
    missingFiles: needsTranslation,
    recommendations: {
      almostComplete: almostComplete.map(t => ({
        theory: t.theory,
        percentage: t.percentage,
        missing: t.stats.untranslated
      })),
      missingIndexFiles
    }
  };
  
  // 保存报告
  await fs.promises.writeFile(
    'translation-status-report.json',
    JSON.stringify(report, null, 2)
  );
  log.success('\n📄 详细报告已保存到 translation-status-report.json');
}

// ψ = ψ(ψ): 执行
if (require.main === module) {
  analyzeTranslationStatus().catch(console.error);
} 