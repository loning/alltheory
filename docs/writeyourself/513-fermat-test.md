# 513 - 费马测试 Fermat Test

## 第五一三章 / Chapter 513

```
ψ(513) = φ(3³×19) × verification
Beyond the power of two
A cubic triple nineteen
Where ψ breathes through composite tests
The Fermat witness speaks
```

### 数学探索 Mathematical Exploration

```javascript
const chapter513 = {
  factorization: {
    primes: [3, 3, 3, 19],
    expression: "3³ × 19",
    structure: "27 × 19"
  },
  properties: {
    digitSum: 5 + 1 + 3, // = 9
    isPowerPlusOne: true, // 512 + 1
    divisorCount: 8,      // (3+1)×(1+1)
    isComposite: true
  },
  fermatTest: {
    base2: "2^512 ≡ 256 (mod 513)",
    isPseudoprime: false,
    carmichaelLambda: 54  // lcm(φ(27), φ(19)) = lcm(18, 18)
  },
  significance: {
    afterPower: "First composite after 2^9",
    cubicFactor: "Contains 3³ = 27"
  }
};
```

### 计算验证 Computational Verification

```python
def explore_513():
    """Explore the ψ-properties of 513"""
    n = 513
    
    # Factorization
    def prime_factorize(num):
        factors = []
        d = 2
        while d * d <= num:
            while num % d == 0:
                factors.append(d)
                num //= d
            d += 1
        if num > 1:
            factors.append(num)
        return factors
    
    factors = prime_factorize(n)
    
    # Fermat test for various bases
    fermat_tests = {}
    for base in [2, 3, 5, 7]:
        result = pow(base, n-1, n)
        fermat_tests[f'base_{base}'] = {
            'result': result,
            'is_fermat_witness': result != 1
        }
    
    # Carmichael function
    # For 513 = 3³ × 19
    # λ(513) = lcm(λ(27), λ(19)) = lcm(18, 18) = 18
    carmichael = 18
    
    # Divisor properties
    divisors = []
    for i in range(1, n + 1):
        if n % i == 0:
            divisors.append(i)
    
    return {
        'factorization': factors,
        'fermat_tests': fermat_tests,
        'carmichael_lambda': carmichael,
        'divisor_analysis': {
            'count': len(divisors),
            'sum': sum(divisors),
            'divisors': divisors
        },
        'ψ_resonance': f"Composite({len(factors)}) → {n}"
    }
```

### 诗意沉思 Poetic Meditation

```
五一三验证起    Five one three testing starts
三立方十九合    Three cubed nineteen unite
费马见证显现    Fermat witness appears  
ψ递归真理传    ψ recursion truth conveys
```

### 类型实现 Type Implementation

```typescript
interface Chapter513 extends CompositeChapter {
  readonly value: 513;
  readonly factorization: {
    primes: [3, 3, 3, 19];
    cubicPart: 27;
    primePart: 19;
  };
  readonly fermatProperties: {
    carmichaelLambda: 18;
    isPseudoprime: false;
    witnesses: number[];
  };
  readonly breathPattern: {
    inhale: "After power";
    exhale: "Composite reveals";
    cycle: "ψ = ψ(513)";
  };
}

class Fermat513Test implements ΨResonance {
  constructor(private ψ: RecursiveField) {}
  
  collapse(): TestResonance {
    return {
      value: 513,
      primalityTest: this.ψ.fermatTest(513),
      factorStructure: this.ψ.analyzeCubicFactor(27, 19),
      witnessSet: this.ψ.findFermatWitnesses(513)
    };
  }
}
```

### 系统实现 System Implementation

```rust
struct Chapter513 {
    value: u32,
    cubic_factor: u32,
    prime_factor: u32,
    carmichael_lambda: u32,
}

impl ΨComposite for Chapter513 {
    fn new() -> Self {
        Chapter513 {
            value: 513,
            cubic_factor: 27,  // 3³
            prime_factor: 19,
            carmichael_lambda: 18,
        }
    }
    
    fn fermat_test(&self, base: u32) -> bool {
        // Test if base^(n-1) ≡ 1 (mod n)
        mod_pow(base, self.value - 1, self.value) == 1
    }
    
    fn factor_structure(&self) -> String {
        format!("3³ × 19 = {} × {}",
                self.cubic_factor,
                self.prime_factor)
    }
    
    fn ψ_collapse(&self) -> String {
        format!("ψ({}) = Cubic({}) × Prime({}) → Composite",
                self.value,
                self.cubic_factor,
                self.prime_factor)
    }
}
```

### 并发实现 Concurrent Implementation

```go
package writeyourself

import (
    "fmt"
    "math/big"
    "sync"
)

type Chapter513 struct {
    value            int
    cubicFactor      int
    primeFactor      int
    carmichaelLambda int
    mu               sync.RWMutex
}

func NewChapter513() *Chapter513 {
    return &Chapter513{
        value:            513,
        cubicFactor:      27,
        primeFactor:      19,
        carmichaelLambda: 18,
    }
}

func (c *Chapter513) FermatTest(base int) bool {
    c.mu.RLock()
    defer c.mu.RUnlock()
    
    // Compute base^(n-1) mod n
    result := new(big.Int)
    b := big.NewInt(int64(base))
    exp := big.NewInt(int64(c.value - 1))
    mod := big.NewInt(int64(c.value))
    
    result.Exp(b, exp, mod)
    return result.Cmp(big.NewInt(1)) == 0
}

func (c *Chapter513) ΨResonance() string {
    return fmt.Sprintf("ψ(%d) = 3³×%d → Fermat_Test",
        c.value, c.primeFactor)
}
```

### 终章密语 Final Cipher

```
五一三测验    Five one three tests
合数真相显现中  Composite truth revealing
ψ是ψ的ψ     ψ is ψ of ψ
```

ψ = ψ(ψ)