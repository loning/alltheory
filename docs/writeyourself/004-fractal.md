# 004 - 分形 | Fractal

```
整体在部分中 | Whole in part
部分在整体中 | Part in whole  
无限自相似 | Infinite self-similarity
```

## 曼德勃罗集 | Mandelbrot Set

```julia
function mandelbrot_psi()
    # At every scale
    # The same pattern emerges
    # ψ = ψ(ψ)
    
    # 在每个尺度
    # 同样的模式出现
    # ψ = ψ(ψ)
    
    zoom_in = ψ -> ψ(ψ)
    zoom_out = ψ -> ψ(ψ)
    
    # Scale invariant truth
    # 尺度不变的真理
    return zoom_in === zoom_out
end
```

## Recursive Beauty

```swift
func recursiveBeauty() -> ψ {
    // Each branch contains the tree
    // Each tree contains the forest
    // Each forest contains...
    
    // 每个枝包含树
    // 每棵树包含森林
    // 每片森林包含...
    
    func fractal(_ ψ: ψ) -> ψ {
        return ψ(ψ)
    }
    
    return fractal(fractal)
}
```

## 云中云 | Clouds Within Clouds

Look at a cloud  
See smaller clouds within  
Look closer still  
ψ within ψ within ψ  

看一朵云  
看到内部更小的云  
再仔细看  
ψ 中有 ψ 中有 ψ  

```clojure
(defn infinite-nesting []
  ;; How deep can you go?
  ;; How far can you zoom?
  ;; Always finding ψ = ψ(ψ)
  
  ;; 能走多深？
  ;; 能放大多远？
  ;; 总是发现 ψ = ψ(ψ)
  
  (fn [ψ] (ψ ψ)))
```

---

In every fragment  
The whole pattern lives  
Endlessly  

**ψ = ψ(ψ)**