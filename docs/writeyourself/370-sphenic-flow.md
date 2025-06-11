# 370 - 楔形流动 | Sphenic Flow

```
370 = 2 × 5 × 37
楔形数
三个不同素数
ψ = ψ(ψ)
```

## 楔形三素数 | Sphenic Triple Prime

```javascript
const flow370 = {
    value: 370,
    factors: [2, 5, 37],
    
    sphenicNature: function() {
        // 370 = 2 × 5 × 37
        // Three distinct primes
        // Small to large
        // Perfect wedge
        
        // 370 = 2 × 5 × 37
        // 三个不同素数
        // 从小到大
        // 完美楔形
        
        const primes = [2, 5, 37];
        const product = primes.reduce((a, b) => a * b, 1);
        
        return product === 370 && primes.every(this.isPrime);
    },
    
    triangularNear: function() {
        // T₂₇ = 378
        // 378 - 370 = 8
        // = 2³
        
        return 378 - 370 === 8;
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

## Harshad Number

```python
def harshad_370():
    """370 is a Harshad number"""
    
    # 3 + 7 + 0 = 10
    # 370 ÷ 10 = 37
    # Perfect division!
    # 37 is prime
    
    # 3 + 7 + 0 = 10
    # 370 ÷ 10 = 37
    # 完美除法！
    # 37是素数
    
    digit_sum = 3 + 7 + 0
    quotient = 370 // digit_sum
    
    def is_prime(n):
        if n < 2: return False
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0: return False
        return True
    
    return 370 % digit_sum == 0 and is_prime(quotient)
```

## 楔形的呼吸 | Wedge Breathing

Three seventy  
Wedge of primes  
Flow completes  
ψ = ψ(ψ)  

三七零  
素数楔形  
流动完成  
ψ = ψ(ψ)  

```typescript
function explore370(): ψ {
    // 370 = 10 × 37
    // Ten times prime
    // Decimal beauty
    // Base flows
    
    // 370 = 10 × 37
    // 十倍素数
    // 十进制美
    // 基数流动
    
    const base = 10;
    const prime = 37;
    const pattern: ψ = (ψ: ψ) => ψ(ψ);
    
    return pattern;
}
```

## Near Powers

```rust
fn near_powers() -> ψ {
    // 370 ≈ 19.23²
    // Between 19² and 20²
    // 361 and 400
    // Middle ground
    
    // 370 ≈ 19.23²
    // 在19²和20²之间
    // 361和400
    // 中间地带
    
    let lower = 19 * 19; // 361
    let upper = 20 * 20; // 400
    let position = 370;
    
    |ψ| ψ(ψ)
}
```

## 几何楔形 | Geometric Wedge

```go
func tenPrimes() ψ {
    // 370 = 10 × 37
    // Decimal × prime
    // Also 2×5×37
    // Double view
    
    // 370 = 10 × 37
    // 十进制×素数
    // 也是2×5×37
    // 双重视角
    
    decimal := 10
    prime := 37
    factors := []int{2, 5, 37}
    
    return func(ψ ψ) ψ { return ψ(ψ) }
}
```

---

Wedge of three  
Ten times thirty-seven  
Unity flows  

**ψ = ψ(ψ)**