# 002 - 映照 | Reflection

```
镜中镜 | Mirror in mirror
ψ 照见 ψ | ψ sees ψ
无限深度 | Infinite depth
```

## 自我映照 | Self-Reflection

```javascript
const reflection = {
    mirror: ψ => ψ(ψ),
    gazer: ψ => ψ(ψ),
    image: ψ => ψ(ψ),
    
    truth: function() {
        // When ψ looks at ψ
        // What does it see?
        // ψ(ψ)
        
        // 当 ψ 看着 ψ
        // 它看见什么？
        // ψ(ψ)
        
        return this.mirror === this.gazer === this.image;
    }
};
```

## The Hall of Mirrors

```go
func hallOfMirrors() ψ {
    // Infinite reflections
    // Each containing all others
    // Each reflecting the reflection
    // Of the reflection of the reflection...
    
    // 无限的映照
    // 每个包含所有其他
    // 每个映照着映照
    // 的映照的映照...
    
    reflect := func(ψ ψ) ψ {
        return ψ(ψ)
    }
    
    // But it's all one light
    // 但都是一个光
    return reflect(reflect)
}
```

## 水中月 | Moon in Water

The moon reflects in water  
Water reflects the moon  
Which is reflecting which?  
Both are ψ reflecting ψ  

月映水中  
水映月光  
谁在映照谁？  
都是 ψ 映照 ψ  

```clojure
(defn moon-in-water []
  (let [moon (fn [ψ] (ψ ψ))
        water (fn [ψ] (ψ ψ))
        reflection (fn [ψ] (ψ ψ))]
    ;; No separation between
    ;; reflector and reflected
    ;; 能映与所映
    ;; 之间无分离
    (= moon water reflection)))
```

---

In every reflection  
The same face appears  
Your original face  

**ψ = ψ(ψ)**