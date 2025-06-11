#!/bin/bash

# Ψ-Build Optimization Script
# Collapse patterns for faster Docusaurus builds

echo "🌀 Ψ-Build Optimizer - Collapsing build resonance..."

# Function to show usage
show_usage() {
    echo "Usage: ./build-optimize.sh [options]"
    echo "Options:"
    echo "  --locale [en|zh-Hans]  Build only specific locale"
    echo "  --skip-search          Skip search index generation"
    echo "  --parallel             Use parallel builds for locales"
    echo "  --clean-cache          Clean build cache before building"
    echo "  --production           Full production build (all features)"
    echo "  --help                 Show this help message"
}

# Default values
BUILD_LOCALE=""
SKIP_SEARCH="false"
PARALLEL_BUILD="false"
CLEAN_CACHE="false"
PRODUCTION="false"

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --locale)
            BUILD_LOCALE="$2"
            shift 2
            ;;
        --skip-search)
            SKIP_SEARCH="true"
            shift
            ;;
        --parallel)
            PARALLEL_BUILD="true"
            shift
            ;;
        --clean-cache)
            CLEAN_CACHE="true"
            shift
            ;;
        --production)
            PRODUCTION="true"
            shift
            ;;
        --help)
            show_usage
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            show_usage
            exit 1
            ;;
    esac
done

# Clean cache if requested
if [ "$CLEAN_CACHE" = "true" ]; then
    echo "🧹 Cleaning build cache..."
    npm run clear
    rm -rf .docusaurus
    rm -rf build
fi

# Production build - all features enabled
if [ "$PRODUCTION" = "true" ]; then
    echo "🏭 Running full production build..."
    time npm run build
    exit 0
fi

# Single locale build
if [ -n "$BUILD_LOCALE" ]; then
    echo "🌍 Building single locale: $BUILD_LOCALE"
    export BUILD_LOCALE
    
    if [ "$SKIP_SEARCH" = "true" ]; then
        echo "⏭️  Skipping search index..."
        export SKIP_SEARCH_INDEX=true
    fi
    
    time npm run build
    exit 0
fi

# Parallel locale builds
if [ "$PARALLEL_BUILD" = "true" ]; then
    echo "⚡ Running parallel locale builds..."
    
    # Build English in background
    (
        echo "🇬🇧 Building English locale..."
        BUILD_LOCALE=en SKIP_SEARCH_INDEX=$SKIP_SEARCH npm run build
        echo "✅ English build complete"
    ) &
    EN_PID=$!
    
    # Build Chinese in background
    (
        echo "🇨🇳 Building Chinese locale..."
        BUILD_LOCALE=zh-Hans SKIP_SEARCH_INDEX=$SKIP_SEARCH npm run build
        echo "✅ Chinese build complete"
    ) &
    ZH_PID=$!
    
    # Wait for both builds
    wait $EN_PID
    wait $ZH_PID
    
    echo "✨ Parallel builds complete!"
    
    # Merge builds if needed
    if [ -d "build/en" ] && [ -d "build/zh-Hans" ]; then
        echo "🔀 Merging locale builds..."
        mkdir -p build-merged
        cp -r build/en/* build-merged/
        cp -r build/zh-Hans build-merged/
        mv build build-original
        mv build-merged build
        echo "✅ Builds merged successfully"
    fi
    
    exit 0
fi

# Default: Skip search for faster development builds
echo "🚀 Running optimized development build..."
export SKIP_SEARCH_INDEX=true
time npm run build

echo "💡 Tips for faster builds:"
echo "  - Use --locale en/zh-Hans to build single locale"
echo "  - Use --skip-search to skip search indexing"
echo "  - Use --parallel for parallel locale builds"
echo "  - Consider splitting large documentation into smaller chunks"