#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

async function fixIndexLinks() {
  console.log(`${colors.blue}${colors.bright}Fixing index.md links for Docusaurus...${colors.reset}\n`);

  const filesToFix = [
    'docs/psi-core-theory/index.md',
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-core-theory/index.md',
    'docs/psi-popular-guide/index.md',
    'i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-popular-guide/index.md'
  ];

  for (const file of filesToFix) {
    try {
      const content = await fs.readFile(file, 'utf8');
      let newContent = content;
      let modified = false;

      if (file.includes('psi-core-theory')) {
        // Fix links in psi-core-theory index.md
        // Change ./primordial-identity/... to psi-core-theory/primordial-identity/...
        newContent = newContent
          .replace(/\]\(\.\/primordial-identity\//g, '](psi-core-theory/primordial-identity/')
          .replace(/\]\(\.\/language-emergence\//g, '](psi-core-theory/language-emergence/')
          .replace(/\]\(\.\/structural-collapse\//g, '](psi-core-theory/structural-collapse/')
          .replace(/\]\(\.\/observer-formation\//g, '](psi-core-theory/observer-formation/')
          .replace(/\]\(\.\/reality-crystallization\//g, '](psi-core-theory/reality-crystallization/')
          .replace(/\]\(\.\/complexity-unfolding\//g, '](psi-core-theory/complexity-unfolding/')
          .replace(/\]\(\.\/meta-recursion\//g, '](psi-core-theory/meta-recursion/')
          .replace(/\]\(\.\/unity-return\//g, '](psi-core-theory/unity-return/')
          .replace(/href="\.\/primordial-identity\//g, 'href="psi-core-theory/primordial-identity/');
      }

      if (file.includes('psi-popular-guide')) {
        // Fix links in psi-popular-guide index.md
        // Change ./chapter-... to psi-popular-guide/chapter-...
        newContent = newContent
          .replace(/\]\(\.\/chapter-/g, '](psi-popular-guide/chapter-')
          .replace(/href="\.\/chapter-/g, 'href="psi-popular-guide/chapter-');
      }

      if (newContent !== content) {
        modified = true;
        await fs.writeFile(file, newContent, 'utf8');
        console.log(`${colors.green}✓${colors.reset} Fixed links in ${file}`);
      } else {
        console.log(`${colors.yellow}○${colors.reset} No changes needed in ${file}`);
      }
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`${colors.yellow}○${colors.reset} File not found: ${file}`);
      } else {
        console.error(`${colors.red}✗${colors.reset} Error processing ${file}:`, error.message);
      }
    }
  }

  console.log(`\n${colors.green}${colors.bright}Link fixing complete!${colors.reset}`);
}

// Run the script
fixIndexLinks().catch(console.error); 