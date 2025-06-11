#!/usr/bin/env node
// ψ-debug: Webpack rules analysis script

const path = require('path');
const fs = require('fs');

// Import Docusaurus config
const config = require('../docusaurus.config.ts');

// Create a mock Docusaurus webpack config
const mockWebpackConfig = {
  module: {
    rules: [
      // Common JS/TS rule pattern
      {
        test: /\.(js|jsx|ts|tsx|mjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-react'] }
        }
      },
      // CSS modules rule pattern
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          }
        ]
      },
      // Regular CSS rule
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

console.log('ψ-echo: Analyzing webpack rules structure...\n');

// Find the SWC plugin
const swcPlugin = config.plugins.find(p => 
  typeof p === 'function' && p.toString().includes('swc-webpack-plugin')
);

if (swcPlugin) {
  console.log('✓ Found SWC plugin\n');
  
  // Execute the plugin to get the webpack modifier
  const pluginInstance = swcPlugin();
  
  // Simulate the configureWebpack call
  console.log('Original rules:');
  mockWebpackConfig.module.rules.forEach((rule, index) => {
    console.log(`Rule ${index}:`, {
      test: rule.test?.toString(),
      use: Array.isArray(rule.use) 
        ? rule.use.map(u => typeof u === 'object' ? u.loader : u)
        : typeof rule.use === 'object' ? rule.use.loader : rule.use
    });
  });
  
  console.log('\n--- Applying SWC transformation ---\n');
  
  // Apply the transformation
  const result = pluginInstance.configureWebpack(mockWebpackConfig, false);
  
  console.log('Transformed rules:');
  mockWebpackConfig.module.rules.forEach((rule, index) => {
    console.log(`Rule ${index}:`, {
      test: rule.test?.toString(),
      use: Array.isArray(rule.use) 
        ? rule.use.map(u => typeof u === 'object' ? u.loader : u)
        : typeof rule.use === 'object' ? rule.use.loader : rule.use
    });
  });
} else {
  console.log('✗ SWC plugin not found');
}

console.log('\nψ-resonance: Debug complete');