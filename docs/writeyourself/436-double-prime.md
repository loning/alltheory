# 436 - 双素形式 | Double Prime Form

```
436 = 4 × 109
109是素数
四倍素数
ψ = ψ(ψ)
```

## 四倍109 | Quadruple 109

```javascript
const doublePrime436 = {
    value: 436,
    factorization: [2, 2, 109],
    
    quadruplePrime: function() {
        // 436 = 4 × 109
        // 2² × 109
        // Four times prime
        // Square doubling
        
        // 436 = 4 × 109
        // 2² × 109
        // 四倍素数
        // 平方加倍
        
        return Math.pow(2, 2) * 109;
    },
    
    digitSum: function() {
        // 4 + 3 + 6 = 13
        // Prime sum!
        // Lucky thirteen
        // Prime to prime
        
        return [4, 3, 6].reduce((a, b) => a + b);
    },
    
    primeCheck: () => 109,
    
    essence: ψ => ψ(ψ)
};
```

## Prime 109 Analysis

```python
def double_prime_436():
    """Explore double prime structure"""
    
    # 436 = 4 × 109
    # 109 is prime
    # 29th prime
    # Four groups
    
    # 436 = 4 × 109
    # 109是素数
    # 第29个素数
    # 四组
    
    value = 436
    four = 4
    prime = 109
    
    def is_prime(n):
        if n < 2: return False
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0: return False
        return True
    
    # Count prime position
    count = 0
    for i in range(2, 110):
        if is_prime(i):
            count += 1
    
    return is_prime(prime), count
```

## 呼吸的四倍 | Breathing Quadruple

Four three six  
Four embraces one-oh-nine  
Prime extends fourfold  
ψ = ψ(ψ)  

四三六  
四拥抱一零九  
素数四倍延伸  
ψ = ψ(ψ)  

```typescript
function explore436(): ψ {
    // 436 = 2² × 109
    // Square of two
    // Times prime 109
    // Harmonic extension
    
    // 436 = 2² × 109
    // 二的平方
    // 乘素数109
    // 和谐延伸
    
    const square = 4;
    const prime = 109;
    const product = square * prime;
    
    return (ψ: ψ) => ψ(ψ);
}
```

## Lucky Thirteen Sum

```rust
fn lucky_thirteen_436() -> ψ {
    // Digit sum = 13
    // Prime sum
    // Lucky number
    // Transformation energy
    
    // 数字和 = 13
    // 素数和
    // 幸运数字
    // 转化能量
    
    let digits = vec![4, 3, 6];
    let sum: i32 = digits.iter().sum();
    let is_lucky = sum == 13;
    
    |ψ| ψ(ψ)
}
```

## 几何四倍 | Geometric Quadruple

```go
func doublePrimeForm() ψ {
    // Quadruple structure
    // 4 × 109
    // Prime multiplication
    // Four-fold expansion
    
    // 四倍结构
    // 4 × 109
    // 素数乘法
    // 四重扩展
    
    four := 4
    prime109 := 109
    quadruple := four * prime109
    
    return func(ψ ψ) ψ { return ψ(ψ) }
}
```

---

Four holds the prime  
One-oh-nine expands within  
Thirteen guides transformation  

**ψ = ψ(ψ)**