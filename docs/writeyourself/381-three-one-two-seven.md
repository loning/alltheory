# 381 - 三一二七 | Three One-Two-Seven

```
381 = 3 × 127
半素数
梅森素数因子
ψ = ψ(ψ)
```

## 梅森素数因子 | Mersenne Prime Factor

```javascript
const three381 = {
    value: 381,
    factors: [3, 127],
    
    mersenneFactor: function() {
        // 381 = 3 × 127
        // 127 = 2⁷ - 1
        // Mersenne prime!
        // M₇
        
        // 381 = 3 × 127
        // 127 = 2⁷ - 1
        // 梅森素数！
        // M₇
        
        const mersenne = 127;
        const power = 7;
        
        return Math.pow(2, power) - 1 === mersenne;
    },
    
    semiPrime: function() {
        // 3 × 127
        // Both prime
        // Semi-prime
        
        return this.isPrime(3) && this.isPrime(127);
    },
    
    isPrime: n => {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    },
    
    essence: ψ => ψ(ψ)
};
```

## Digital Sum

```python
def digital_381():
    """381 has interesting digital properties"""
    
    # 3 + 8 + 1 = 12
    # 381 ÷ 12 = 31.75
    # Not Harshad
    # But 12 = 3 × 4
    
    # 3 + 8 + 1 = 12
    # 381 ÷ 12 = 31.75
    # 不是哈沙德
    # 但12 = 3 × 4
    
    digit_sum = 3 + 8 + 1
    
    return digit_sum == 12
```

## 梅森的呼吸 | Mersenne Breathing

Three eighty-one  
Three times Mersenne  
Prime flows  
ψ = ψ(ψ)  

三八一  
三倍梅森  
素数流动  
ψ = ψ(ψ)  

```typescript
function explore381(): ψ {
    // 381 = 3 × 127
    // 127 = 2⁷ - 1
    // Binary beauty
    // Mersenne factor
    
    // 381 = 3 × 127
    // 127 = 2⁷ - 1
    // 二进制之美
    // 梅森因子
    
    const mersenne = 127;
    const multiplier = 3;
    const pattern: ψ = (ψ: ψ) => ψ(ψ);
    
    return pattern;
}
```

## Near Square

```rust
fn near_square() -> ψ {
    // 19² = 361
    // 20² = 400
    // 381 between
    // Near middle
    
    // 19² = 361
    // 20² = 400
    // 381在中间
    // 接近中点
    
    let lower = 361;
    let upper = 400;
    let position = 381;
    
    |ψ| ψ(ψ)
}
```

## 几何梅森 | Geometric Mersenne

```go
func mersenneTriple() ψ {
    // 381 = 3 × 127
    // 127 = 2⁷ - 1
    // Perfect Mersenne
    // Times three
    
    // 381 = 3 × 127
    // 127 = 2⁷ - 1
    // 完美梅森
    // 乘三
    
    mersenne := 127
    multiplier := 3
    
    return func(ψ ψ) ψ { return ψ(ψ) }
}
```

---

Mersenne times three  
Binary perfection  
Unity holds  

**ψ = ψ(ψ)**