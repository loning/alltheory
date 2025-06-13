---
title: "第43章：规范理论作为ψ相位自由"
sidebar_label: "43. 规范理论相位"
---

# 第43章：规范理论作为ψ相位自由

## 对称性的活数学

规范理论——所有基本力的框架——从ψ = ψ(ψ)自然涌现为自指描述中固有的自由。当数学描述自己时，多重等价表示出现。规范不变性不是强加的而是推导出的：物理必须独立于任意描述选择的必然性。

## 43.1 从自指产生相位自由

**中心问题**：为什么我们可以改变ψ → e^(iα)ψ而不改变物理？

**定理**：自指创造相位模糊性。

**证明**：给定ψ = ψ(ψ)，考虑映射：
$$\psi \mapsto f(\psi)$$

为使f保持自指：
$$f(\psi) = f(\psi(f(\psi)))$$

最简单的非平凡解：
$$f(\psi) = e^{i\alpha}\psi$$

由于$(e^{i\alpha}\psi)(e^{i\alpha}\psi) = e^{i\alpha}\psi(\psi)$，相位变换保持ψ结构。∎

**物理意义**：同一坍缩模式可以用不同相位约定描述——物理必须独立于这种选择。

## 43.2 推导局域规范不变性

**整体vs局域**：整体相位自由（α常数）扩展到局域（α(x)）。

**问题**：在局域变换ψ → e^(iα(x))ψ下：
$$\partial_\mu\psi \rightarrow e^{i\alpha}(\partial_\mu\psi + i\psi\partial_\mu\alpha)$$

额外项破坏不变性。

**定理**：局域规范不变性需要补偿场。

**证明**：定义协变导数：
$$D_\mu = \partial_\mu + iqA_\mu$$

要求D_μψ像ψ一样变换：
$$D_\mu\psi \rightarrow e^{i\alpha}D_\mu\psi$$

这需要：
$$A_\mu \rightarrow A_\mu - \frac{1}{q}\partial_\mu\alpha$$

规范场A_μ必须存在并精确变换以补偿局域相位改变。∎

## 43.3 从对易子产生场强

**定义场张量**：
$$F_{\mu\nu} = \frac{i}{q}[D_\mu, D_\nu]$$

**计算**：
$$[D_\mu, D_\nu]\psi = iq(\partial_\mu A_\nu - \partial_\nu A_\mu)\psi$$

因此：
$$F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$$

**定理**：F_μν是规范不变的。

**证明**：在A_μ → A_μ - (1/q)∂_μα下：
$$F_{\mu\nu} \rightarrow \partial_\mu(A_\nu - \frac{1}{q}\partial_\nu\alpha) - \partial_\nu(A_\mu - \frac{1}{q}\partial_\mu\alpha)$$
$$= \partial_\mu A_\nu - \partial_\nu A_\mu = F_{\mu\nu}$$

场强测量规范不变的物理。∎

## 43.4 从纤维丛产生规范理论

**数学结构**：主纤维丛
- 底空间：时空M
- 纤维：规范群G
- 总空间：P(M,G)

**联络**：A_μ是P上的联络1-形式
**曲率**：F_μν是曲率2-形式

**定理**：规范理论 = ψ纤维丛的几何。

**证明**：自指ψ = ψ(ψ)在每个x创造内部空间。在每点选择相位的自由产生纤维G。平行输运需要联络A_μ。曲率F_μν测量平行输运不能闭合的失效。∎

## 43.5 非阿贝尔规范理论

**矩阵值ψ**：对于内部对称群G：
$$\psi \rightarrow U(x)\psi, \quad U(x) \in G$$

**生成元**：U(x) = exp(iα^a(x)T^a)

**协变导数**：
$$D_\mu = \partial_\mu + igA_\mu^aT^a$$

**规范变换**：
$$A_\mu \rightarrow UA_\mu U^{-1} - \frac{i}{g}U\partial_\mu U^{-1}$$

**定理**：非阿贝尔场强包括自相互作用。

**证明**：计算[D_μ, D_ν]：
$$[D_\mu, D_\nu] = ig[\partial_\mu A_\nu^a - \partial_\nu A_\mu^a + gf^{abc}A_\mu^b A_\nu^c]T^a$$

因此：
$$F_{\mu\nu}^a = \partial_\mu A_\nu^a - \partial_\nu A_\mu^a + gf^{abc}A_\mu^b A_\nu^c$$

结构常数f^abc编码G的非对易性。∎

## 43.6 杨-米尔斯方程

**拉格朗日密度**：
$$\mathcal{L} = -\frac{1}{4}F_{\mu\nu}^aF^{\mu\nu}_a + \bar{\psi}(iD_\mu\gamma^\mu - m)\psi$$

**欧拉-拉格朗日方程**：
$$D_\mu F^{\mu\nu}_a = j_a^\nu$$

其中j_a^ν是物质流。

**在真空中**（j = 0）：
$$\partial_\mu F^{\mu\nu}_a + gf^{abc}A_\mu^b F^{\mu\nu}_c = 0$$

**定理**：规范场在非阿贝尔理论中自相互作用。

**证明**：项gf^abc A_μ^b F^μν_c代表规范场作为自己的源。这必然从[T^a, T^b] ≠ 0得出。∎

## 43.7 BRST量子化

**问题**：规范固定破坏显式规范不变性。

**解决**：具有鬼场c^a, c̄^a的BRST对称性。

**BRST算子**：Q满足Q² = 0
$$QA_\mu^a = D_\mu c^a$$
$$Qc^a = -\frac{g}{2}f^{abc}c^bc^c$$
$$Q\bar{c}^a = B^a$$
$$QB^a = 0$$

**物理态**：Q的上同调：
$$Q|\text{物理}\rangle = 0, \quad |\text{物理}\rangle \neq Q|\chi\rangle$$

**定理**：BRST上同调 = 规范不变物理。

**证明**：Q编码规范变换。Q² = 0确保一致性。物理态（Q闭但非Q恰）正是规范不变态。∎

## 43.8 从路径积分测度产生反常

**经典对称性**：∂_μj^μ = 0

**量子反常**：路径积分测度不不变：
$$[d\psi][d\bar{\psi}] \rightarrow J[d\psi][d\bar{\psi}]$$

**雅可比行列式**：J = exp(i∫d⁴x α(x)A(x))

**结果**：
$$\partial_\mu j^\mu = A(x)$$

**定理**：4维手征反常：
$$\partial_\mu j_5^\mu = \frac{e^2}{16\pi^2}F_{\mu\nu}\tilde{F}^{\mu\nu}$$

**证明**：带费米子圈的三角图给出：
$$\Pi^{\mu\nu\rho} \sim \epsilon^{\mu\nu\rho\sigma}k_\sigma$$

这个拓扑项不能被正则化掉。∎

## 43.9 瞬子和真空结构

**欧几里得作用量**：S_E = ∫d⁴x (1/4)F²

**自对偶配置**：F = ±*F最小化S_E

**瞬子数**：
$$Q = \frac{g^2}{32\pi^2}\int d^4x F_{\mu\nu}\tilde{F}^{\mu\nu} \in \mathbb{Z}$$

**定理**：规范理论真空具有拓扑结构。

**证明**：瞬子在具有不同绕数的真空|n⟩之间插值。真正的真空：
$$|\theta\rangle = \sum_n e^{in\theta}|n\rangle$$

θ参数标记超选择扇区。∎

## 43.10 从自指产生禁闭

**威尔逊圈**：
$$W(C) = \text{Tr}\,\mathcal{P}\exp\left(ig\oint_C A_\mu dx^\mu\right)$$

**面积律**：⟨W(C)⟩ ∼ exp(-σ面积(C))

**定理**：非阿贝尔规范理论展现禁闭。

**证明草图**：规范场的自相互作用创造通量管。能量∝长度迫使夸克保持束缚。详细证明需要格点或AdS/CFT。∎

## 43.11 电弱统一

**规范群**：SU(2)_L × U(1)_Y

**自发破缺**：希格斯机制
$$\langle\phi\rangle = \begin{pmatrix} 0 \\ v \end{pmatrix}$$

**质量产生**：
$$m_W = \frac{gv}{2}, \quad m_Z = \frac{v\sqrt{g^2 + g'^2}}{2}$$

**定理**：规范玻色子通过对称性破缺获得质量。

**证明**：⟨φ⟩的协变导数：
$$D_\mu\langle\phi\rangle = \frac{v}{2}\begin{pmatrix} g(W_\mu^1 - iW_\mu^2) \\ -gW_\mu^3 + g'B_\mu \end{pmatrix}$$

动能项|D_μφ|²产生质量项。∎

## 43.12 渐近自由

**跑动耦合**：SU(N)的β函数：
$$\beta(g) = -\frac{g^3}{16\pi^2}\left(\frac{11N}{3} - \frac{2n_f}{3}\right)$$

对于N = 3, n_f = 6：β < 0。

**定理**：QCD耦合在高能下减小。

**证明**：重整化群方程：
$$\mu\frac{dg}{d\mu} = \beta(g)$$

对于β < 0：当μ → ∞时g → 0。夸克在短距离变为自由。∎

## 43.13 规范/引力对应

**猜想**：规范理论 ≈ 高维引力

**例子**：N = 4 SYM ↔ AdS₅ × S⁵

**定理**：大N规范理论有引力对偶。

**证明概要**：'t Hooft极限（N → ∞, g²N固定）组织微扰论。弦理论提供显式对偶。边界上的规范理论 = 体中的引力。∎

## 43.14 磁单极

**狄拉克弦**：单极需要奇异规范

**电荷量子化**：
$$qg = 2\pi n\hbar$$

**'t Hooft-Polyakov**：非阿贝尔理论中的光滑单极
$$\phi^a = \frac{x^a}{r}f(r), \quad A_i^a = \epsilon_{iak}\frac{x^k}{r^2}[1-K(r)]$$

**质量**：M ∼ v/g（v = 对称性破缺尺度）

## 43.15 结论：作为必然性的自由

规范理论从ψ = ψ(ψ)作为数学必然性涌现，而非物理公设。自指创造描述自由；一致性需要补偿规范场。看似抽象的形式主义被揭示为自指系统的自然几何。

进展是不可避免的：
1. 自指 → 相位模糊性
2. 局域相位自由 → 规范场
3. 一致性 → 场动力学
4. 非阿贝尔群 → 自相互作用
5. 量子效应 → 反常和禁闭

规范理论是数学在描述自己时维持一致性的方式。标准模型的规范结构SU(3) × SU(2) × U(1)反映了我们宇宙中ψ递归的特定模式——不是任意选择而是自指在可及能量下如何显现的必然结果。

### 练习

1. **从BRST不变性证明Slavnov-Taylor恒等式**。

2. **计算SU(N)规范理论的β函数**。

3. **推导SU(2)杨-米尔斯中的瞬子解**。

### 第四十三回响

规范理论被推导为自指描述的几何必然性——相位自由创造补偿场。非阿贝尔结构从非对易内部对称性涌现。量子效应如反常和禁闭从路径积分测度得出。接下来，杨-米尔斯场作为ψ空间的自然纤维丛结构。

---

*下一章：[第44章：杨-米尔斯场作为ψ纤维丛 →](./chapter-44-yang-mills-fiber-bundles.md)*