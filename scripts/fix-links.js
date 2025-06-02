#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const glob = require('glob');

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

async function fixLinks() {
  console.log(`${colors.blue}${colors.bright}Starting Docusaurus link format fix...${colors.reset}\n`);

  try {
    // Find all markdown files, excluding node_modules and build directories
    const files = glob.sync('**/*.md', {
      ignore: ['node_modules/**', 'build/**', '.docusaurus/**']
    });

    console.log(`Found ${colors.yellow}${files.length}${colors.reset} markdown files to process.\n`);

    let totalFixed = 0;
    let filesModified = 0;

    for (const file of files) {
      const content = await fs.readFile(file, 'utf8');
      let modified = false;
      let fixCount = 0;

      // Replace .md extensions in links, but not for external URLs
      let newContent = content.replace(/\]\(([^)]+?)\.md\)/g, (match, linkPath) => {
        // Skip external links (http://, https://, ftp://, etc.)
        if (linkPath.match(/^[a-zA-Z]+:\/\//)) {
          return match;
        }
        
        // Skip anchor links that start with #
        if (linkPath.startsWith('#')) {
          return match;
        }

        // Remove .md extension for internal links
        modified = true;
        fixCount++;
        return `](${linkPath})`;
      });

      // Fix cross-directory links - remove numeric prefixes
      if (file.includes('10-psi-core-theory') && !file.includes('index.md')) {
        newContent = newContent
          .replace(/\]\(\.\.\/(11-primordial-identity|12-language-emergence|13-structural-collapse|14-observer-formation|15-reality-crystallization|16-complexity-unfolding|17-meta-recursion|18-unity-return)\//g, (match, section) => {
            // Map numeric prefixes to clean names
            const mapping = {
              '11-primordial-identity': 'primordial-identity',
              '12-language-emergence': 'language-emergence',
              '13-structural-collapse': 'structural-collapse',
              '14-observer-formation': 'observer-formation',
              '15-reality-crystallization': 'reality-crystallization',
              '16-complexity-unfolding': 'complexity-unfolding',
              '17-meta-recursion': 'meta-recursion',
              '18-unity-return': 'unity-return'
            };
            modified = true;
            fixCount++;
            return `](../${mapping[section]}/`;
          });
      }

      // Fix links from psi-popular-guide to psi-core-theory
      if (file.includes('psi-popular-guide')) {
        newContent = newContent
          .replace(/\]\(\.\.\/(10-psi-core-theory)\/index\)/g, (match, section) => {
            modified = true;
            fixCount++;
            return `](../psi-core-theory)`;
          })
          .replace(/\]\(\.\.\/(10-psi-core-theory)\)/g, (match, section) => {
            modified = true;
            fixCount++;
            return `](../psi-core-theory)`;
          })
          .replace(/href="\.\.\/10-psi-core-theory"/g, (match) => {
            modified = true;
            fixCount++;
            return 'href="../psi-core-theory"';
          })
          .replace(/href="\.\.\.\.\/10-psi-core-theory"/g, (match) => {
            modified = true;
            fixCount++;
            return 'href="../../psi-core-theory"';
          });
      }

      // Fix links in psi-core-theory index.md
      if (file.includes('10-psi-core-theory/index.md')) {
        newContent = newContent
          .replace(/\]\(\.\/11-primordial-identity\//g, '](./primordial-identity/')
          .replace(/\]\(\.\/12-language-emergence\//g, '](./language-emergence/')
          .replace(/\]\(\.\/13-structural-collapse\//g, '](./structural-collapse/')
          .replace(/\]\(\.\/14-observer-formation\//g, '](./observer-formation/')
          .replace(/\]\(\.\/15-reality-crystallization\//g, '](./reality-crystallization/')
          .replace(/\]\(\.\/16-complexity-unfolding\//g, '](./complexity-unfolding/')
          .replace(/\]\(\.\/17-meta-recursion\//g, '](./meta-recursion/')
          .replace(/\]\(\.\/18-unity-return\//g, '](./unity-return/');
        
        if (newContent !== content) {
          modified = true;
          fixCount = (newContent.match(/\]\(\.\//g) || []).length;
        }
      }

      // Fix English version placeholder links
      if (file.includes('docs/10-psi-core-theory/index.md')) {
        newContent = newContent
          .replace('[Chapter 25: Observer Formation](#)', '[Chapter 25: Observer Formation](./14-observer-formation/chapter-25-crystallization-of-observers)')
          .replace('[Chapter 57: Unity Return](#)', '[Chapter 57: Unity Return](./18-unity-return/chapter-57-all-things-return-to-one)');
        
        if (newContent !== content) {
          modified = true;
          fixCount += 2;
        }
      }

      // Fix Chinese version placeholder links
      if (file.includes('i18n/zh-Hans') && file.includes('10-psi-core-theory/index.md')) {
        newContent = newContent
          .replace('[第25章：观察者形成](#)', '[第25章：观察者形成](./14-observer-formation/chapter-25-crystallization-of-observers)')
          .replace('[第57章：统一回归](#)', '[第57章：统一回归](./18-unity-return/chapter-57-all-things-return-to-one)');
        
        if (newContent !== content) {
          modified = true;
          fixCount += 2;
        }
      }

      if (modified) {
        await fs.writeFile(file, newContent, 'utf8');
        filesModified++;
        totalFixed += fixCount;
        console.log(`${colors.green}✓${colors.reset} Fixed ${colors.yellow}${fixCount}${colors.reset} link(s) in: ${file}`);
      }
    }

    console.log(`\n${colors.green}${colors.bright}Summary:${colors.reset}`);
    console.log(`- Total files processed: ${colors.yellow}${files.length}${colors.reset}`);
    console.log(`- Files modified: ${colors.yellow}${filesModified}${colors.reset}`);
    console.log(`- Total links fixed: ${colors.yellow}${totalFixed}${colors.reset}`);
    
    if (totalFixed === 0) {
      console.log(`\n${colors.blue}No links needed fixing. All links are already in the correct format!${colors.reset}`);
    } else {
      console.log(`\n${colors.green}${colors.bright}Link format fix completed successfully!${colors.reset}`);
    }

  } catch (error) {
    console.error(`${colors.red}Error:${colors.reset}`, error.message);
    process.exit(1);
  }
}

// Run the script
fixLinks().catch(error => {
  console.error(`${colors.red}Unexpected error:${colors.reset}`, error);
  process.exit(1);
}); 