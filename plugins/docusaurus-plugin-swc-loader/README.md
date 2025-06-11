# Docusaurus SWC Loader Plugin

This plugin replaces Babel with SWC for faster builds in Docusaurus projects.

## Performance Benefits

- **2-4x faster build times**: SWC is written in Rust and significantly outperforms Babel
- **Reduced memory usage**: More efficient memory management during compilation
- **Faster hot reload**: Quicker development feedback loop
- **Better scalability**: Handles large codebases more efficiently

## Installation

The plugin is already installed locally in the `plugins` directory. The required dependencies are:

```bash
npm install --save-dev @swc/core swc-loader
```

## Configuration

The plugin is configured in `docusaurus.config.ts`:

```typescript
plugins: [
  './plugins/docusaurus-plugin-swc-loader',
  // ... other plugins
],
```

## How It Works

The plugin uses Docusaurus's `configureWebpack` lifecycle hook to:
1. Replace babel-loader with swc-loader for JS/TS files
2. Configure SWC to handle TypeScript and JSX
3. Set appropriate module types (CommonJS for server, ES6 for client)
4. Add performance logging to measure build times

## Rollback Procedure

To disable SWC and revert to Babel:

1. Remove or comment out the plugin from `docusaurus.config.ts`:
   ```typescript
   plugins: [
     // './plugins/docusaurus-plugin-swc-loader',
   ],
   ```

2. Clear the build cache:
   ```bash
   npm run clear
   ```

3. Rebuild your site:
   ```bash
   npm run build
   ```

## Troubleshooting

### Module Resolution Errors

If you encounter errors like "Can't resolve 'module'", you may need to add the following to the plugin's webpack configuration:

```javascript
resolve: {
  fullySpecified: false
}
```

### Specific File Issues

To exclude specific files from SWC processing, modify the `test` regex in the plugin:

```javascript
test: /\.(jsx?|tsx?)$/,
exclude: [/node_modules/, /problematic-file\.js$/],
```

### Build Errors

If the build fails with SWC:
1. Check the console for specific error messages
2. Ensure all dependencies are properly installed
3. Try clearing the cache with `npm run clear`
4. Check if the issue is specific to certain files or syntax

### Performance Monitoring

The plugin includes build time logging. Look for messages like:
- `[SWC] Build started with SWC loader`
- `[SWC] Build completed in X.XXs`

## Compatibility

- Works with Docusaurus 3.x
- Supports TypeScript and JSX out of the box
- Compatible with React automatic runtime
- Maintains source maps for debugging

## Contributing

To modify the plugin, edit `plugins/docusaurus-plugin-swc-loader/index.js`. The main configuration options are in the SWC loader options object. 