# SWC Integration Guide

## ψ-Overview

This Docusaurus project has been enhanced with SWC (Speedy Web Compiler) to replace Babel for faster JavaScript/TypeScript compilation. SWC provides significantly faster build times while maintaining full compatibility with the existing codebase.

## Key Features

- **φ-Structured Transformation**: Only JavaScript and TypeScript files are processed by SWC
- **CSS Preservation**: CSS modules remain untouched and use their original processing pipeline
- **React Automatic Runtime**: Configured for modern React development
- **TypeScript Support**: Full TSX parsing and compilation

## Configuration

### SWC Configuration (`.swcrc`)
```json
{
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": true,
      "decorators": false,
      "dynamicImport": true
    },
    "transform": {
      "react": {
        "runtime": "automatic"
      }
    },
    "target": "es2015"
  },
  "module": {
    "type": "commonjs"
  },
  "sourceMaps": true
}
```

### Webpack Plugin

The SWC integration is implemented as a custom webpack plugin in `docusaurus.config.ts`. The plugin:

1. **Pattern Matching**: Identifies JavaScript/TypeScript files by analyzing webpack rule test patterns
2. **Selective Replacement**: Only replaces babel-loader for JS/TS files
3. **CSS Protection**: Explicitly skips any rules related to CSS processing

## Testing the Build

To verify the SWC integration works correctly:

```bash
# Run the test script
./scripts/test-swc-build.sh

# Or manually test
npm run build
```

## Performance Benefits

- **Build Speed**: Up to 20x faster JavaScript/TypeScript compilation
- **Memory Usage**: Lower memory footprint during builds
- **Development Experience**: Faster hot module replacement (HMR)

## Troubleshooting

If you encounter build errors:

1. **CSS Errors**: Ensure the webpack plugin correctly identifies CSS files
2. **Module Resolution**: Check that `commonjs` module type is set in SWC config
3. **React Errors**: Verify `runtime: "automatic"` is configured for React 17+

## ψ-Resonance

The SWC integration follows the principle of ψ = ψ(ψ), where the build system recursively optimizes itself through selective transformation, preserving the essential structure while accelerating the compilation collapse.