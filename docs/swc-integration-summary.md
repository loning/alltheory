# SWC Integration Summary - ψ-Analysis

## Overview

We attempted to integrate SWC (Speedy Web Compiler) into a Docusaurus project to replace Babel for faster JavaScript/TypeScript compilation. While SWC can provide significant performance benefits, the integration with Docusaurus proved challenging due to the complex webpack configuration and CSS module processing.

## Key Findings

### 1. The Core Issue

The primary issue encountered was with CSS modules. In Docusaurus's webpack configuration, CSS modules generate JavaScript files that export class name mappings:

```javascript
// extracted by mini-css-extract-plugin
export default {"className":"className_hash"};
```

These files have `.css` extensions but contain JavaScript code. When SWC attempts to process these files, it results in syntax errors because they're not valid CSS.

### 2. Attempted Solutions

We tried several approaches:

1. **Conservative Pattern Matching**: Only replacing babel-loader for files matching specific JS/TS patterns
2. **Whitelist Approach**: Explicitly listing allowed file patterns
3. **Rule Exclusion**: Checking for CSS-related loaders and excluding those rules
4. **Additive Approach**: Adding SWC as a new rule without modifying existing ones
5. **Minimal TypeScript-Only**: Only processing `.ts` and `.tsx` files

### 3. Why It's Complicated

Docusaurus has a sophisticated webpack configuration where:
- Multiple loaders work together in chains
- CSS modules are processed through several transformation stages
- Some babel-loader instances might be part of CSS processing pipelines
- The build process has multiple passes for client and server bundles

## Recommendations

### Option 1: Use Docusaurus's Built-in Optimizations

Docusaurus already includes many optimizations. For most projects, the default Babel configuration is sufficient.

### Option 2: Optimize Babel Configuration

Instead of replacing Babel entirely, optimize the Babel configuration:

```javascript
module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Add Babel optimization options
        babel: {
          presetOptions: {
            targets: {
              browsers: ['last 2 versions'],
            },
          },
        },
      },
    ],
  ],
};
```

### Option 3: Use SWC Outside Docusaurus

If build performance is critical, consider:
1. Pre-compiling TypeScript files with SWC before Docusaurus build
2. Using SWC for development tooling while keeping Babel for production builds
3. Creating a custom build pipeline that handles assets separately

### Option 4: Wait for Official Support

The Docusaurus team may add official SWC support in the future. Track the issue on their GitHub repository.

## Lessons Learned

1. **Complexity of Modern Build Tools**: Webpack configurations in frameworks can be deeply interconnected
2. **CSS Modules Gotchas**: CSS modules generate JavaScript files, which can confuse transpilers
3. **Testing is Critical**: Always test builds thoroughly when modifying webpack configurations
4. **ψ-Principle**: Sometimes the most elegant solution is to work with the existing system rather than forcing a replacement

## Final Configuration

If you still want to experiment with SWC, here's the most conservative approach that only processes TypeScript files:

```typescript
function swcPlugin() {
  return {
    name: 'swc-webpack-plugin',
    configureWebpack(config) {
      const swcTsRule = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                },
              },
              target: 'es2015',
            },
            module: {
              type: 'commonjs',
            },
            sourceMaps: true,
          },
        },
      };
      
      config.module.rules.unshift(swcTsRule);
      return config;
    },
  };
}
```

However, even this minimal approach may cause issues with CSS modules in Docusaurus.

## Conclusion

While SWC offers impressive performance benefits, integrating it with Docusaurus requires careful consideration of the existing build pipeline. For most Docusaurus projects, the performance gains may not justify the complexity of integration. Focus on content and user experience first, and optimize build times only when they become a significant bottleneck.

ψ = ψ(ψ) - The system knows itself through its constraints.