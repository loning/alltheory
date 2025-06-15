#!/usr/bin/env node

/**
 * Build optimization script
 * ψ = ψ(ψ)
 * 
 * This script implements φ-structured optimization for Docusaurus builds:
 * 1. Parallel document processing
 * 2. Incremental build detection
 * 3. Memory-efficient chunking
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// ψ-location: build cache management
class BuildCache {
  constructor() {
    this.cacheDir = path.join(__dirname, '..', '.build-cache');
    this.manifestPath = path.join(this.cacheDir, 'manifest.json');
    this.manifest = this.loadManifest();
  }

  loadManifest() {
    if (!fs.existsSync(this.cacheDir)) {
      fs.mkdirSync(this.cacheDir, { recursive: true });
    }
    
    if (fs.existsSync(this.manifestPath)) {
      return JSON.parse(fs.readFileSync(this.manifestPath, 'utf8'));
    }
    
    return { files: {}, lastBuild: null };
  }

  saveManifest() {
    fs.writeFileSync(this.manifestPath, JSON.stringify(this.manifest, null, 2));
  }

  getFileHash(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    return crypto.createHash('sha256').update(content).digest('hex');
  }

  hasChanged(filePath) {
    const currentHash = this.getFileHash(filePath);
    const cachedHash = this.manifest.files[filePath];
    
    if (cachedHash !== currentHash) {
      this.manifest.files[filePath] = currentHash;
      return true;
    }
    
    return false;
  }
}

// ψ-location: document chunking
function chunkDocuments() {
  console.log('📦 Chunking documents for parallel processing...');
  
  const docsDir = path.join(__dirname, '..', 'docs');
  const chunks = [];
  const chunkSize = 50; // φ-aligned chunk size
  
  function scanDir(dir, currentChunk = []) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDir(fullPath, currentChunk);
      } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
        currentChunk.push(fullPath);
        
        if (currentChunk.length >= chunkSize) {
          chunks.push([...currentChunk]);
          currentChunk.length = 0;
        }
      }
    }
    
    if (currentChunk.length > 0) {
      chunks.push(currentChunk);
    }
  }
  
  scanDir(docsDir);
  console.log(`✅ Created ${chunks.length} document chunks`);
  
  return chunks;
}

// ψ-location: incremental build detection
function detectChangedFiles(cache) {
  console.log('🔍 Detecting changed files...');
  
  const changedFiles = [];
  const docsDir = path.join(__dirname, '..', 'docs');
  
  function scanForChanges(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanForChanges(fullPath);
      } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
        if (cache.hasChanged(fullPath)) {
          changedFiles.push(fullPath);
        }
      }
    }
  }
  
  scanForChanges(docsDir);
  console.log(`✅ Found ${changedFiles.length} changed files`);
  
  return changedFiles;
}

// ψ-location: optimization recommendations
function generateOptimizations(changedFiles, chunks) {
  console.log('\n🌀 Generating ψ-collapse optimizations...\n');
  
  const optimizations = {
    incremental: changedFiles.length < 10,
    parallelChunks: chunks.length,
    estimatedTime: Math.ceil(changedFiles.length * 0.5 + chunks.length * 2),
    memoryRequired: Math.ceil(chunks.length * 100), // MB
  };
  
  console.log('📊 Build Optimization Report:');
  console.log(`   - Changed files: ${changedFiles.length}`);
  console.log(`   - Document chunks: ${optimizations.parallelChunks}`);
  console.log(`   - Incremental build: ${optimizations.incremental ? 'Yes' : 'No'}`);
  console.log(`   - Estimated time: ${optimizations.estimatedTime} minutes`);
  console.log(`   - Memory required: ${optimizations.memoryRequired} MB`);
  
  // Write optimization config
  const configPath = path.join(__dirname, '..', '.build-optimization.json');
  fs.writeFileSync(configPath, JSON.stringify(optimizations, null, 2));
  
  return optimizations;
}

// ψ-collapse: main execution
function main() {
  console.log('🌀 Starting build optimization analysis...\n');
  
  try {
    const cache = new BuildCache();
    const chunks = chunkDocuments();
    const changedFiles = detectChangedFiles(cache);
    const optimizations = generateOptimizations(changedFiles, chunks);
    
    cache.manifest.lastBuild = new Date().toISOString();
    cache.saveManifest();
    
    console.log('\n✨ Build optimization complete!');
    
    // Exit with code indicating if incremental build is possible
    process.exit(optimizations.incremental ? 0 : 1);
  } catch (error) {
    console.error('❌ Build optimization failed:', error);
    process.exit(2);
  }
}

// Execute optimization
main(); 