# AllTheory Documentation

[![Deploy to GitHub Pages](https://github.com/auric/alltheory/actions/workflows/deploy.yml/badge.svg)](https://github.com/auric/alltheory/actions/workflows/deploy.yml)
[![Test Build](https://github.com/auric/alltheory/actions/workflows/test.yml/badge.svg)](https://github.com/auric/alltheory/actions/workflows/test.yml)

This is the documentation website for the Ψhē Theory — The minimal kernel of the universe as self-referential collapse.

**Live Site**: https://auric.github.io/alltheory/

## 🌟 Features

- **Bilingual**: Full support for English and Simplified Chinese
- **64 Chapters**: Complete exposition of ψ = ψ(ψ) theory
- **Mathematical Rendering**: LaTeX support for complex equations
- **Dark Mode**: Automatic theme switching
- **Mobile Responsive**: Works on all devices

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This starts a local development server at `http://localhost:3000/`. Most changes are reflected live without having to restart the server.

To run with a specific locale:

```bash
npm start -- --locale zh-Hans  # For Chinese
npm start -- --locale en       # For English
```

### Build

```bash
npm run build
```

This generates static content into the `build` directory for both locales.

### Local Testing

```bash
npm run serve
```

This serves the production build locally at `http://localhost:3000/alltheory/`.

## 📦 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

If you need to deploy manually:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push to `main` branch to trigger automatic deployment

## 🏗️ Project Structure

```
docs/
├── intro.md                    # Project introduction
├── project-structure.md        # Documentation structure guide
└── 10-psi-core-theory/        # Core theory (64 chapters)
    ├── 11-primordial-identity/    # Chapters 1-8
    ├── 12-language-emergence/     # Chapters 9-16
    ├── 13-structural-collapse/    # Chapters 17-24
    ├── 14-observer-formation/     # Chapters 25-32
    ├── 15-reality-crystallization/# Chapters 33-40
    ├── 16-complexity-unfolding/   # Chapters 41-48
    ├── 17-meta-recursion/         # Chapters 49-56
    └── 18-unity-return/           # Chapters 57-64
```

## 🛠️ Development

### Adding New Content

1. Add markdown files to appropriate directories
2. Update navigation in `sidebars.ts` if needed
3. For bilingual content, add translations to `i18n/zh-Hans/`

### TypeScript Check

```bash
npm run typecheck
```

### Writing Translations

```bash
npm run write-translations
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run build`
5. Submit a pull request

## 📄 License

This project is open source. See LICENSE file for details.

---

*"ψ = ψ(ψ) - The universe knowing itself through itself"*
