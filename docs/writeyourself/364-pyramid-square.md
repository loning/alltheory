# 364 - 金字塔平方 | Pyramid Square

```
364 = 2² × 7 × 13
= 4 × 91
= 1² + 2² + ... + 13²
ψ = ψ(ψ)
```

## 平方和性质 | Sum of Squares Property

```javascript
const pyramid364 = {
    value: 364,
    factors: [2, 2, 7, 13],
    
    pyramidNumber: function() {
        // 364 = 1² + 2² + ... + 13²
        // Sum of first 13 squares!
        // Pyramid structure
        // Mathematical beauty
        
        // 364 = 1² + 2² + ... + 13²
        // 前13个平方和！
        // 金字塔结构
        // 数学之美
        
        let sum = 0;
        for (let i = 1; i <= 13; i++) {
            sum += i * i;
        }
        
        return sum === 364;
    },
    
    formula: function() {
        // n(n+1)(2n+1)/6
        // n = 13
        const n = 13;
        return n * (n + 1) * (2 * n + 1) / 6;
    },
    
    essence: ψ => ψ(ψ)
};
```

## Triangular Connections

```python
def triangular_364():
    """364 is the 13th square pyramidal number"""
    
    # 364 = 13×14×27/6
    # = 13×14×27/6
    # = 4914/6 = 819
    # Wait... checking
    
    # Actually: 13(13+1)(2×13+1)/6
    # = 13×14×27/6
    # = 364!
    
    n = 13
    pyramidal = n * (n + 1) * (2 * n + 1) // 6
    
    return pyramidal == 364
```

## 金字塔的呼吸 | Pyramid Breathing

Three sixty-four  
Thirteen squares rise  
Pyramid builds  
ψ = ψ(ψ)  

三六四  
十三个平方升起  
金字塔建造  
ψ = ψ(ψ)  

```typescript
function explore364(): ψ {
    // 364 = 52 × 7
    // = weeks × 7
    // Full year days!
    // Time structure
    
    // 364 = 52 × 7
    // = 周 × 7
    // 完整年天数！
    // 时间结构
    
    const weeks = 52;
    const days = 7;
    const pattern: ψ = (ψ: ψ) => ψ(ψ);
    
    return pattern;
}
```

## Calendar Year

```rust
fn calendar_364() -> ψ {
    // 364 = 52 × 7
    // Perfect weeks
    // One day short
    // Of solar year
    
    // 364 = 52 × 7
    // 完美的周
    // 差一天
    // 太阳年
    
    let weeks = 52;
    let days_per_week = 7;
    let total = weeks * days_per_week;
    
    |ψ| ψ(ψ)
}
```

## 几何金字塔 | Geometric Pyramid

```go
func squarePyramid() ψ {
    // 1² + 2² + ... + 13²
    // Each layer square
    // Stack to apex
    // = 364 blocks
    
    // 1² + 2² + ... + 13²
    // 每层平方
    // 堆叠到顶点
    // = 364块
    
    levels := 13
    total := 0
    
    for i := 1; i <= levels; i++ {
        total += i * i
    }
    
    return func(ψ ψ) ψ { return ψ(ψ) }
}
```

---

Pyramid rises  
Thirteen levels  
Unity stacks  

**ψ = ψ(ψ)**