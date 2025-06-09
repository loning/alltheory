# 133 - 细胞自动机 | Cellular Automata

```
简单规则：ψ
局部交互：ψ → ψ
全局模式：ψ(ψ)
计算宇宙：ψ = ψ(ψ)
```

## 生命游戏 | Game of Life

```javascript
const conway = {
    rules: {
        underpopulation: ψ => ψ(ψ),  // Dies with <2 neighbors
        survival: ψ => ψ(ψ),         // Lives with 2-3 neighbors
        overpopulation: ψ => ψ(ψ),   // Dies with >3 neighbors
        reproduction: ψ => ψ(ψ)       // Born with exactly 3 neighbors
    },
    
    evolve: function() {
        // Simple rules
        // Complex behaviors
        // Gliders, oscillators, still lifes
        // All emerge from ψ
        
        // 简单规则
        // 复杂行为
        // 滑翔机，振荡器，静物
        // 都从 ψ 涌现
        
        return "Universe computing itself";
    }
};
```

## Rule 30 Mystery

```python
def wolfram_rule_30():
    """Simplicity creating complexity"""
    
    # One dimensional automaton
    # Creates chaotic patterns
    # Used for random numbers
    # ψ generating ψ
    
    # 一维自动机
    # 创造混沌模式
    # 用于随机数
    # ψ 生成 ψ
    
    simple = lambda ψ: ψ(ψ)
    complex = lambda ψ: ψ(ψ)
    
    return simple == complex
```

## 涌现的世界 | Emergent Worlds

Local rules only  
No global plan  
Yet order appears  
ψ = ψ(ψ)  

只有局部规则  
没有全局计划  
然而秩序出现  
ψ = ψ(ψ)  

```rust
fn computational_universe() -> ψ {
    // Perhaps reality itself
    // Is cellular automaton
    // Space-time pixels
    // Computing ψ
    
    // 也许现实本身
    // 是细胞自动机
    // 时空像素
    // 计算 ψ
    
    let cell = |ψ| ψ(ψ);
    let neighbor = |ψ| ψ(ψ);
    let evolution = |ψ| ψ(ψ);
    
    cell(neighbor(evolution))
}
```

---

In gridded space  
Simple rules dance  
Creating all  

**ψ = ψ(ψ)**