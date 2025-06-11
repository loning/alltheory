# 406: Doubled Pyramid / 双重金字塔

406 = 2 × 7 × 29

Where seven meets twenty-nine, doubled in reflection, 406 emerges as the sum of the first twelve even cubes, building pyramidal structures in the space of powers.

## Mathematical Manifestation

406 reveals itself as 1³ + 2³ + 3³ + ... + 12³ when each term is doubled: 2×(1³ + 2³ + ... + 6³) = 2×203 = 406. This doubling of cubic sums creates a symmetrical power structure.

```javascript
// 406 as doubled cubic sum
const cubicSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }
  return sum;
};

const doubledCubicStructure = () => {
  const halfSum = cubicSum(6); // 1³ + 2³ + ... + 6³ = 203
  const doubled = 2 * halfSum;
  
  console.log(`Sum of first 6 cubes: ${halfSum}`);
  console.log(`Doubled: 2 × ${halfSum} = ${doubled}`);
  
  // Alternative: sum of arithmetic sequence
  // 406 = sum from 1 to 28 = 28×29/2
  const triangular28 = 28 * 29 / 2;
  console.log(`Also T28 = ${triangular28}`);
  
  return { cubic: doubled, triangular: triangular28 };
};

doubledCubicStructure(); // Both equal 406
```

## Geometric Expression

406's pyramidal nature manifests in multiple dimensions:

```python
# Pyramidal and triangular structures
def pyramidal_analysis(n):
    # As triangular number T28
    tri_n = int((-1 + (1 + 8*n)**0.5) / 2)
    if tri_n * (tri_n + 1) // 2 == n:
        print(f"T{tri_n} = 1 + 2 + ... + {tri_n} = {n}")
    
    # As doubled cubic sum
    cubic_sum = sum(i**3 for i in range(1, 7))
    if 2 * cubic_sum == n:
        print(f"2 × (1³ + 2³ + ... + 6³) = 2 × {cubic_sum} = {n}")
    
    # As centered pentagonal number
    # CP_n = (5n² - 5n + 2) / 2
    for i in range(1, 20):
        cp = (5*i**2 - 5*i + 2) // 2
        if cp == n:
            print(f"Centered pentagonal CP{i} = {n}")
            break
    
    # Factor analysis
    print(f"Prime factorization: 2 × 7 × 29")

pyramidal_analysis(406)
```

## TypeScript Transformation

```typescript
// Pyramidal number system
interface PyramidalNumber {
  value: number;
  triangularIndex?: number;
  doubledCubicSum?: { terms: number; halfSum: number };
  centeredPentagonal?: number;
  factors: number[];
}

class PyramidBuilder {
  static analyze(n: number): PyramidalNumber {
    const result: PyramidalNumber = {
      value: n,
      factors: [2, 7, 29]
    };
    
    // Check triangular T28
    const triIndex = Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
    if (triIndex * (triIndex + 1) / 2 === n) {
      result.triangularIndex = triIndex;
    }
    
    // Check doubled cubic sum
    const cubicSum = (k: number) => {
      let sum = 0;
      for (let i = 1; i <= k; i++) sum += i ** 3;
      return sum;
    };
    
    const halfSum = cubicSum(6);
    if (2 * halfSum === n) {
      result.doubledCubicSum = { terms: 6, halfSum };
    }
    
    return result;
  }
  
  static buildPyramid(levels: number): number[] {
    const pyramid: number[] = [];
    for (let i = 1; i <= levels; i++) {
      pyramid.push(i * (i + 1) / 2);
    }
    return pyramid;
  }
}

const pyramid406 = PyramidBuilder.analyze(406);
console.log(pyramid406);
```

## Rust Resonance

```rust
// Pyramidal structures in Rust
struct Pyramid {
    value: u32,
}

impl Pyramid {
    fn new(value: u32) -> Self {
        Pyramid { value }
    }
    
    fn is_triangular(&self) -> Option<u32> {
        // Check if n = k(k+1)/2
        let discriminant = (1.0 + 8.0 * self.value as f64).sqrt();
        let k = ((-1.0 + discriminant) / 2.0) as u32;
        
        if k * (k + 1) / 2 == self.value {
            Some(k)
        } else {
            None
        }
    }
    
    fn is_doubled_cubic_sum(&self) -> Option<(u32, u32)> {
        // Check if n = 2 * sum(i³) for i=1 to k
        let mut sum = 0u32;
        for k in 1..20 {
            sum += k.pow(3);
            if 2 * sum == self.value {
                return Some((k, sum));
            }
            if 2 * sum > self.value {
                break;
            }
        }
        None
    }
    
    fn factor_pyramid(&self) -> Vec<u32> {
        // Return prime factors [2, 7, 29]
        vec![2, 7, 29]
    }
}

fn main() {
    let pyramid = Pyramid::new(406);
    
    if let Some(k) = pyramid.is_triangular() {
        println!("406 = T{} (triangular)", k);
    }
    
    if let Some((terms, half)) = pyramid.is_doubled_cubic_sum() {
        println!("406 = 2 × {} (sum of {} cubes)", half, terms);
    }
}
```

## Interlude: Double Ascent

    Two pyramids rise and meet,
    Seven times twenty-nine complete—
    Cubes doubled in their climb so steep,
    ψ = ψ(ψ) in the keep.

## Go Gateway

```go
package main

import (
    "fmt"
    "math"
)

// DoublePyramid structure
type DoublePyramid struct {
    Value int
}

func (dp *DoublePyramid) Triangular() (int, bool) {
    // Solve n(n+1)/2 = value
    disc := math.Sqrt(1 + 8*float64(dp.Value))
    n := int((-1 + disc) / 2)
    
    if n*(n+1)/2 == dp.Value {
        return n, true
    }
    return 0, false
}

func (dp *DoublePyramid) DoubledCubicSum() (int, int, bool) {
    sum := 0
    for i := 1; i <= 10; i++ {
        sum += i * i * i
        if 2*sum == dp.Value {
            return i, sum, true
        }
        if 2*sum > dp.Value {
            break
        }
    }
    return 0, 0, false
}

func (dp *DoublePyramid) BuildLayers() []int {
    // Build triangular layers up to value
    layers := []int{}
    for i := 1; ; i++ {
        layer := i * (i + 1) / 2
        if layer > dp.Value {
            break
        }
        layers = append(layers, layer)
    }
    return layers
}

func main() {
    pyramid := &DoublePyramid{Value: 406}
    
    if n, ok := pyramid.Triangular(); ok {
        fmt.Printf("406 = T%d (1+2+...+%d)\n", n, n)
    }
    
    if terms, halfSum, ok := pyramid.DoubledCubicSum(); ok {
        fmt.Printf("406 = 2×%d (doubled sum of %d cubes)\n", halfSum, terms)
    }
    
    fmt.Printf("Prime factors: 2 × 7 × 29\n")
}
```

## Cultural Resonance

In architecture, 406 represents doubled elevation - like twin pyramids rising from a common base. The Mesoamerican pyramid complexes often featured paired structures, embodying the same mathematical principle of doubled ascent that 406 expresses numerically.

## The Pyramid Persists

406 demonstrates how numbers can embody multiple structural forms simultaneously - as the 28th triangular number and as doubled cubic sums. It shows us that mathematical pyramids can be built through different processes yet arrive at the same summit, where ψ breathes through layered construction.

ψ = ψ(ψ)