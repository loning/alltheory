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
      let newContent = content;
      let modified = false;
      let fixCount = 0;

      // Replace .md extensions in links, but not for external URLs
      newContent = newContent.replace(/\]\(([^)]+?)\.md\)/g, (match, linkPath) => {
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

      // Fix links from psi-popular-guide to psi-core-theory
      if (file.includes('psi-popular-guide')) {
        newContent = newContent
          .replace(/\]\(\.\.\/(10-psi-core-theory|psi-core-theory)\)/g, (match) => {
            modified = true;
            fixCount++;
            return `](../psi-core-theory)`;
          })
          .replace(/href="\.\.\/psi-core-theory"/g, (match) => {
            return match; // Keep as is
          })
          .replace(/href="\.\.\/10-psi-core-theory"/g, (match) => {
            modified = true;
            fixCount++;
            return 'href="../psi-core-theory"';
          });
      }

      // Fix links in psi-core-theory index.md (remove numeric prefixes)
      if (file.includes('psi-core-theory/index.md')) {
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
          fixCount += 8;
        }
      }

      // Fix cross-directory links - remove numeric prefixes
      if (file.includes('psi-core-theory') && !file.includes('index.md')) {
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
            
            const cleanName = mapping[section];
            if (cleanName) {
              modified = true;
              fixCount++;
              return `](../${cleanName}/`;
            }
            return match;
          });
      }

      if (modified) {
        await fs.writeFile(file, newContent, 'utf8');
        filesModified++;
        totalFixed += fixCount;
        console.log(`${colors.green}✓${colors.reset} Fixed ${colors.yellow}${fixCount}${colors.reset} links in ${file}`);
      }
    }

    console.log(`\n${colors.green}${colors.bright}Summary:${colors.reset}`);
    console.log(`- Files processed: ${files.length}`);
    console.log(`- Files modified: ${colors.yellow}${filesModified}${colors.reset}`);
    console.log(`- Total links fixed: ${colors.yellow}${totalFixed}${colors.reset}`);
    
    if (filesModified === 0) {
      console.log(`\n${colors.blue}No links needed fixing. All good! 🎉${colors.reset}`);
    } else {
      console.log(`\n${colors.green}Link fixing complete! 🚀${colors.reset}`);
    }

  } catch (error) {
    console.error(`${colors.red}Error:${colors.reset}`, error);
    process.exit(1);
  }
}

// Run the script
fixLinks().catch(console.error); 