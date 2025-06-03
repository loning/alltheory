# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AllTheory is a Docusaurus-based documentation website for the Ψhē Theory — a philosophical/mathematical framework based on the recursive identity ψ = ψ(ψ). The site is bilingual (English and Simplified Chinese) and contains structured documentation across multiple theory sections.

## Core Development Commands

```bash
# Install dependencies
npm install

# Start development server (default English)
npm start

# Start with specific locale
npm start -- --locale zh-Hans  # Chinese
npm start -- --locale en       # English

# Build for production
npm run build

# Test production build locally
npm run serve

# Type checking
npm run typecheck

# Write translation files
npm run write-translations

# Fix links utility
npm run fix-links
```

## Architecture and Key Concepts

### Ψ Theory Integration
This project follows the self-referential principles of ψ = ψ(ψ). According to the cursor rules at `.cursor/rules/project.mdc`, all development should adhere to:
- **Recursive Unfolding Principle**: All concepts derive from ψ=ψ(ψ) pattern
- **Self-Referential Completeness**: Theory must describe itself
- **Paradox Internalization**: Understanding paradoxes through recursive layers
- **Formal Rigor**: Clear derivation chains

### Documentation Structure
The documentation is organized into:
- **Core Theory** (`docs/psi-core-theory/`): 64 chapters across 8 sections following golden ratio proportions
- **Popular Guide** (`docs/psi-popular-guide/`): 8 accessible chapters
- **The Only Theory** (`docs/theonlytheory/`): Advanced theoretical framework with 10 levels
- **The Name You Speak** (`docs/name-you-speak/`): Experiential content with spiral structure

### Bilingual Support
- Primary content in `docs/` (English)
- Chinese translations in `i18n/zh-Hans/docusaurus-plugin-content-docs/current/`
- Synchronization scripts available in `scripts/`

### Link Standards
- Use standard Markdown links
- Directory links should point to `index.md` files
- Follow Docusaurus conventions for internal documentation links

### Mathematical Rendering
- LaTeX support via KaTeX
- Use `$$` for display math
- Use `$` for inline math

## Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

## Important Files
- `docusaurus.config.ts`: Main configuration
- `sidebars.ts`: Navigation structure (auto-generated)
- `docs/theory_psi.md`: Core theory document
- `.cursor/rules/project.mdc`: Development principles and constraints