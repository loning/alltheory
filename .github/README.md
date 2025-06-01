# GitHub Actions CI/CD Setup

This directory contains the GitHub Actions workflows for the AllTheory documentation project.

## Workflows

### 1. Deploy to GitHub Pages (`deploy.yml`)

**Trigger**: Push to `main` branch or manual workflow dispatch

**Purpose**: Automatically builds and deploys the documentation to GitHub Pages

**Steps**:
1. Checkout code
2. Setup Node.js 18
3. Install dependencies
4. Build the website (both English and Chinese locales)
5. Upload build artifacts
6. Deploy to GitHub Pages

### 2. Test Build (`test.yml`)

**Trigger**: Pull requests to `main` branch or pushes to `main`

**Purpose**: Validates that the documentation builds successfully

**Features**:
- Tests on multiple Node.js versions (18.x, 20.x)
- Runs TypeScript type checking
- Verifies build output structure
- Ensures both locales build correctly

## GitHub Pages Setup

To enable GitHub Pages for your repository:

1. Go to Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. The deploy workflow will automatically run when you push to main

## Local Testing

To test the workflows locally before pushing:

```bash
# Test the build
npm run build

# Test TypeScript
npm run typecheck

# Serve the built site locally
npm run serve
```

## Troubleshooting

### Build Failures

If the build fails:
1. Check for broken links (the build will fail on broken links)
2. Ensure all markdown files have proper frontmatter
3. Verify LaTeX syntax in mathematical expressions

### Deployment Issues

If deployment fails:
1. Ensure GitHub Pages is enabled in repository settings
2. Check that the `gh-pages` branch protection rules allow the workflow
3. Verify the repository has the correct permissions set

## Configuration

The deployment configuration is in `docusaurus.config.ts`:
- `url`: Your GitHub Pages URL
- `baseUrl`: The path where the site is served (usually `/<repo-name>/`)
- `organizationName`: Your GitHub username or organization
- `projectName`: Your repository name 