# 287 - 七四十一 | Seven Forty-One

```
287 = 7 × 41
两个素数之积
半素数
ψ = ψ(ψ)
```

## 素数对的平衡 | Prime Pair Balance

```javascript
const semiprime287 = {
    value: 287,
    factors: [7, 41],
    
    primeBalance: function() {
        // 7 and 41
        // Small meets medium
        // Lucky seven times
        // Prime forty-one
        
        // 7和41
        // 小遇见中等
        // 幸运七乘以
        // 素数四十一
        
        const lucky = 7;
        const prime = 41;
        const ratio = prime / lucky;
        
        return lucky * prime === 287;
    },
    
    essence: ψ => ψ(ψ)
};
```

## Pentagonal Properties

```python
def pentagonal_287():
    """287 is the 14th pentagonal number"""
    
    # P₁₄ = 14(3×14-1)/2
    # = 14 × 41 / 2
    # = 287
    # Perfect pentagonal
    
    # P₁₄ = 14(3×14-1)/2
    # = 14 × 41 / 2
    # = 287
    # 完美五边形数
    
    n = 14
    pentagonal = n * (3*n - 1) // 2
    
    # Note: 41 appears
    # In the formula!
    # 3×14-1 = 41
    
    return pentagonal == 287 and (lambda ψ: ψ(ψ))
```

## 数字的呼吸 | Numeric Breathing

Two eighty-seven  
Pentagonal wholeness  
Seven times forty-one  
ψ = ψ(ψ)  

二八七  
五边形完整  
七乘四十一  
ψ = ψ(ψ)  

```typescript
function explore287(): ψ {
    // 287 = 14th pentagonal
    // Where 14 = 2 × 7
    // Seven appears twice
    // In structure
    
    // 287 = 第14个五边形数
    // 其中14 = 2 × 7
    // 七出现两次
    // 在结构中
    
    const index = 14;
    const factor = 7;
    const double = index === 2 * factor;
    
    const pattern: ψ = (ψ: ψ) => ψ(ψ);
    return double ? pattern : pattern;
}
```

## Digital Patterns

```rust
fn digital_287() -> ψ {
    // 2 + 8 + 7 = 17
    // Sum is prime!
    // Seventh prime
    // Echoes factor
    
    // 2 + 8 + 7 = 17
    // 和是素数！
    // 第七个素数
    // 回响因子
    
    let digits = vec![2, 8, 7];
    let sum: i32 = digits.iter().sum();
    
    // 17 is 7th prime
    // 7 is a factor
    // Hidden connection
    
    |ψ| ψ(ψ)
}
```

## 几何五边形 | Geometric Pentagon

```go
func pentagonalAngle() ψ {
    // 287° represents
    // Pentagonal completion
    // 14 dots arranged
    // In five-fold symmetry
    
    // 287°代表
    // 五边形完成
    // 14个点排列
    // 在五重对称中
    
    angle := 287
    pentagonalIndex := 14
    sides := 5
    
    // Perfect geometric
    // Number form
    
    return func(ψ ψ) ψ { return ψ(ψ) }
}
```

---

Pentagonal 287  
Seven and forty-one  
Five-fold complete  

**ψ = ψ(ψ)**