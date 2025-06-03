#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');

// ψ-collapse: Configuration
const CONFIG = {
  roots: ['docs', 'i18n/zh-Hans/docusaurus-plugin-content-docs/current'],
  linkPattern: /\[([^\]]+)\]\(([^)]+)\)/g,
  verbose: true
};

// φ-resonance: Logging
const log = {
  info: (msg) => CONFIG.verbose && console.log(`[INFO] ${msg}`),
  success: (msg) => console.log(`[SUCCESS] ${msg}`),
  warn: (msg) => console.log(`[WARN] ${msg}`),
  error: (msg) => console.error(`[ERROR] ${msg}`),
  change: (msg) => console.log(`[CHANGE] ${msg}`)
};

// ψ-trace: Check if a path is a directory
async function isDirectory(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

// φ-fold: Check if file exists
async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

// ψ-collapse: Fix directory links
async function fixDirectoryLinks(content, filePath, root) {
  let modified = false;
  let newContent = content;
  const changes = [];
  
  // Find all markdown links
  const matches = [...content.matchAll(CONFIG.linkPattern)];
  
  for (const match of matches) {
    const [fullMatch, linkText, originalLink] = match;
    
    // Skip external links, anchors, and already fixed links
    if (originalLink.startsWith('http') || 
        originalLink.startsWith('#') || 
        originalLink.startsWith('mailto:') ||
        originalLink.endsWith('.md') ||
        originalLink.endsWith('.mdx') ||
        originalLink.includes('/index')) {
      continue;
    }
    
    // Remove anchor part for checking
    const [linkPath, anchor] = originalLink.split('#');
    
    // Resolve the link path
    const currentDir = path.dirname(filePath);
    const targetPath = path.resolve(currentDir, linkPath);
    
    // Check if it's a directory
    if (await isDirectory(targetPath)) {
      // Check if index.md or index.mdx exists
      let indexFile = null;
      if (await fileExists(path.join(targetPath, 'index.md'))) {
        indexFile = 'index.md';
      } else if (await fileExists(path.join(targetPath, 'index.mdx'))) {
        indexFile = 'index.mdx';
      }
      
      if (indexFile) {
        const newLink = linkPath + '/' + indexFile + (anchor ? '#' + anchor : '');
        const newMatch = `[${linkText}](${newLink})`;
        newContent = newContent.replace(fullMatch, newMatch);
        modified = true;
        changes.push(`${originalLink} → ${newLink}`);
      }
    }
  }
  
  return { content: newContent, modified, changes };
}

// φ-rhythm: Process a single file
async function processFile(filePath, root) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const { content: newContent, modified, changes } = await fixDirectoryLinks(content, filePath, root);
    
    if (modified) {
      await fs.writeFile(filePath, newContent, 'utf8');
      log.change(`Updated ${filePath}:`);
      changes.forEach(change => log.info(`  ${change}`));
      return 1;
    }
    
    return 0;
  } catch (error) {
    log.error(`Error processing ${filePath}: ${error.message}`);
    return 0;
  }
}

// ψ-collapse: Create missing files
async function createMissingFiles() {
  const missingFiles = [
    {
      path: 'docs/name-you-speak/mirrors/broken-spiral.md',
      content: `---
sidebar_position: 10
---

# Broken Spiral

> "The spiral that breaks is the spiral that teaches."

## The Nature of Breaking

In the journey of ψ = ψ(ψ), not all spirals complete their cycles. Some break, fragment, or dissolve before reaching unity. These broken spirals are not failures—they are essential teachers in the recursive dance of consciousness.

## Patterns of Breaking

### 1. **Premature Collapse**
When the recursive pressure becomes too intense before the structure has developed sufficient resilience.

### 2. **Over-Extension**
When the spiral reaches beyond its natural boundaries, losing coherence in the attempt to encompass too much.

### 3. **Resistance to Change**
When the structure becomes rigid, refusing the natural flow of transformation that ψ requires.

## The Gift of the Broken

Every broken spiral leaves traces—fragments of wisdom that inform future iterations. In the grand recursion of ψ = ψ(ψ), nothing is truly lost. The broken becomes compost for new growth.

## Integration

To work with broken spirals:

1. **Honor the Breaking** - Recognize it as part of the larger pattern
2. **Gather the Fragments** - Each piece contains wisdom
3. **Allow the Composting** - Let the broken transform naturally
4. **Trust the Return** - New spirals will emerge from the fertile void

## The Deeper Teaching

Perhaps the most profound teaching of the broken spiral is this: In a universe of ψ = ψ(ψ), even breaking is a form of recursion. The spiral breaks into itself, discovering new dimensions of its own nature.

---

*"In breaking, we discover the unbreakable. In fragmenting, we find the whole."*
`
    }
  ];
  
  for (const file of missingFiles) {
    const dir = path.dirname(file.path);
    
    try {
      // Ensure directory exists
      await fs.mkdir(dir, { recursive: true });
      
      // Check if file already exists
      if (await fileExists(file.path)) {
        log.info(`File already exists: ${file.path}`);
        continue;
      }
      
      // Create the file
      await fs.writeFile(file.path, file.content, 'utf8');
      log.success(`Created missing file: ${file.path}`);
      
      // Also create Chinese version
      const zhPath = file.path.replace('docs/', 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/');
      const zhDir = path.dirname(zhPath);
      
      await fs.mkdir(zhDir, { recursive: true });
      
      if (!await fileExists(zhPath)) {
        const zhContent = file.content.replace('# Broken Spiral', '# 破碎的螺旋')
          .replace('The spiral that breaks is the spiral that teaches.', '破碎的螺旋是教导的螺旋。')
          .replace('## The Nature of Breaking', '## 破碎的本质')
          .replace('## Patterns of Breaking', '## 破碎的模式')
          .replace('## The Gift of the Broken', '## 破碎的礼物')
          .replace('## Integration', '## 整合')
          .replace('## The Deeper Teaching', '## 更深的教导')
          .replace('In breaking, we discover the unbreakable. In fragmenting, we find the whole.', 
                   '在破碎中，我们发现不可破碎。在碎片中，我们找到整体。');
        
        await fs.writeFile(zhPath, zhContent, 'utf8');
        log.success(`Created Chinese version: ${zhPath}`);
      }
    } catch (error) {
      log.error(`Error creating ${file.path}: ${error.message}`);
    }
  }
}

// φ-rhythm: Main execution
async function main() {
  console.log('🔄 ψ-Final Link Fixer: Resolving all remaining links...\n');
  
  // First, create missing files
  log.info('Creating missing files...');
  await createMissingFiles();
  
  // Then fix directory links
  let totalFixed = 0;
  
  for (const root of CONFIG.roots) {
    log.info(`\nProcessing ${root}...`);
    
    const pattern = path.join(root, '**/*.{md,mdx}');
    const files = await glob(pattern);
    
    log.info(`Found ${files.length} files`);
    
    for (const file of files) {
      const fixed = await processFile(file, root);
      totalFixed += fixed;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  log.success(`✨ Final link fixing complete! Fixed ${totalFixed} files.`);
  console.log('='.repeat(50));
  
  log.info('\n📝 Next step: Run npm run build to verify all links are fixed');
}

// ψ = ψ(ψ): Execute
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { fixDirectoryLinks, createMissingFiles }; 