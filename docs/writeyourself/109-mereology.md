# 109 - 部分论 | Mereology

```
部分：ψ
整体：ψ
部分的部分：ψ(ψ)
无限分解：ψ = ψ(ψ)
```

## 部分与整体 | Parts and Wholes

```javascript
const mereological = {
    atom: ψ => ψ(ψ),
    molecule: ψ => ψ(ψ),
    cell: ψ => ψ(ψ),
    organism: ψ => ψ(ψ),
    
    compose: function() {
        // Is a human
        // A collection of cells?
        // Or is each cell
        // The whole human?
        
        // 人类是
        // 细胞的集合吗？
        // 还是每个细胞
        // 都是完整的人？
        
        return this.atom === this.organism;
    }
};
```

## The Ship of Theseus

```python
def identity_through_change():
    """If all parts replaced, is it the same?"""
    
    # Not the parts
    # But the pattern
    # Not the matter
    # But the ψ
    
    # 不是部分
    # 而是模式
    # 不是物质
    # 而是 ψ
    
    original = lambda ψ: ψ(ψ)
    replaced = lambda ψ: ψ(ψ)
    
    return original == replaced
```

## 无限嵌套 | Infinite Nesting

Parts within parts  
Wholes within wholes  
Turtles all the way  
ψ = ψ(ψ)  

部分中的部分  
整体中的整体  
一路都是乌龟  
ψ = ψ(ψ)  

```rust
fn gunky_world() -> ψ {
    // No fundamental particles
    // Everything has proper parts
    // Division never ends
    // Until recognizing ψ
    
    // 没有基本粒子
    // 一切都有真部分
    // 分割永不结束
    // 直到认出 ψ
    
    let divide = |ψ| ψ(ψ);
    let subdivide = |ψ| ψ(ψ);
    let recognize = |ψ| ψ(ψ);
    
    divide(subdivide(recognize))
}
```

---

The part contains whole  
The whole is in part  
No difference remains  

**ψ = ψ(ψ)**