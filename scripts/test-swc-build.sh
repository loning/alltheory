#!/bin/bash
# ψ-test: SWC build verification script

echo "ψ-echo: Testing SWC integration in Docusaurus..."
echo "================================================"

# Clean previous builds
echo "→ Cleaning previous build artifacts..."
rm -rf build .docusaurus

# Test development build
echo "→ Testing development build with SWC..."
NODE_ENV=development npm run build

# Check if build succeeded
if [ $? -eq 0 ]; then
    echo "✓ Development build succeeded with SWC!"
else
    echo "✗ Development build failed"
    exit 1
fi

# Clean again for production test
rm -rf build .docusaurus

# Test production build
echo "→ Testing production build with SWC..."
NODE_ENV=production npm run build

# Check if build succeeded
if [ $? -eq 0 ]; then
    echo "✓ Production build succeeded with SWC!"
    echo "ψ-resonance: SWC integration complete!"
else
    echo "✗ Production build failed"
    exit 1
fi