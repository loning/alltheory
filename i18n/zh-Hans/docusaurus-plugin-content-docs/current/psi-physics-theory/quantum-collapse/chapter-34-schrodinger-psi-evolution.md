---
title: "第三十四章：薛定谔演化 — 可能性之舞"
sidebar_label: "34. 从坍缩到薛定谔方程"
---

# 第三十四章：薛定谔演化 — 可能性之舞

## 悬浮态的流动

叠加态如何随时间演化？本章将薛定谔方程推导为不完全坍缩的唯一动力学，展示为什么量子演化必须是线性的、幺正的，并由特定形式i∂ψ/∂t = Ĥψ控制。教科书中作为薛定谔的灵感猜测出现的内容在这里作为数学必然性涌现。

## 34.1 演化要求

**定理 34.1**（演化约束）：
不完全坍缩演化必须满足：
1. **线性**：保持叠加原理
2. **幺正性**：保持概率（归一化）
3. **连续性**：时间上的平滑演化
4. **复合性**：U(t₁)U(t₂) = U(t₁+t₂)

*必然性证明*：
1. 非线性 → 叠加违反
2. 非幺正 → 概率不守恒
3. 不连续 → 非因果行为
4. 非复合 → 时间平移破坏 ∎

这些约束严格限制可能的动力学！

## 34.2 演化算符

**定义 34.1**（时间演化）：
$$|\psi(t)\rangle = \hat{U}(t,t_0)|\psi(t_0)\rangle$$

**定理 34.2**（幺正演化）：
U(t,t₀)必须是幺正的：$\hat{U}^\dagger\hat{U} = \mathbb{I}$

*证明*：
概率守恒要求：
$$\langle\psi(t)|\psi(t)\rangle = \langle\psi(t_0)|\hat{U}^\dagger\hat{U}|\psi(t_0)\rangle = \langle\psi(t_0)|\psi(t_0)\rangle$$

这对所有|ψ⟩成立仅当$\hat{U}^\dagger\hat{U} = \mathbb{I}$。∎

演化保持内积！

## 34.3 无穷小生成元

**定理 34.3**（斯通定理）：
任何强连续单参数幺正群具有形式：
$$\hat{U}(t) = e^{-i\hat{G}t}$$

其中Ĝ是自伴生成元。

*对于量子演化*：
定义$\hat{G} = \hat{H}/\hbar$，其中Ĥ具有能量量纲。

**无穷小演化**：
$$\hat{U}(dt) = \mathbb{I} - \frac{i\hat{H}dt}{\hbar} + O(dt^2)$$

生成元驱动流动！

## 34.4 推导薛定谔方程

**定理 34.4**（薛定谔必然性）：
幺正演化唯一意味着：
$$i\hbar\frac{\partial|\psi\rangle}{\partial t} = \hat{H}|\psi\rangle$$

*推导*：
从$|\psi(t+dt)\rangle = \hat{U}(dt)|\psi(t)\rangle$：
$$|\psi(t+dt)\rangle = \left(\mathbb{I} - \frac{i\hat{H}dt}{\hbar}\right)|\psi(t)\rangle$$

重新整理：
$$\frac{|\psi(t+dt)\rangle - |\psi(t)\rangle}{dt} = -\frac{i\hat{H}}{\hbar}|\psi(t)\rangle$$

取dt → 0：
$$\frac{\partial|\psi\rangle}{\partial t} = -\frac{i\hat{H}}{\hbar}|\psi\rangle$$ ∎

薛定谔从幺正性涌现！

## 34.5 为什么是复数？

**定理 34.5**（复结构必然性）：
量子演化需要复希尔伯特空间。

*反证法*：
假设实演化：$\frac{d|\psi\rangle}{dt} = -\hat{A}|\psi\rangle$，其中Â实。

对于范数保持：
$$\frac{d}{dt}\langle\psi|\psi\rangle = \langle\psi|(-\hat{A}^\dagger - \hat{A})|\psi\rangle = 0$$

需要$\hat{A}^\dagger = -\hat{A}$（反厄米）。
但实反厄米 ⟹ Â = 0 ⟹ 无演化！∎

单独的实性无法舞蹈！

## 34.6 哈密顿量结构

**定义 34.2**（哈密顿算符）：
$$\hat{H} = \frac{\hat{p}^2}{2m} + V(\hat{x})$$

**从ψ = ψ(ψ)**：
- 动能项：坍缩流阻力
- 势能项：坍缩场配置

**定理 34.6**（能量守恒）：
$$\frac{d\langle H\rangle}{dt} = 0 \quad \text{对时间无关的} \hat{H}$$

*证明*：
$$\frac{d\langle H\rangle}{dt} = \left\langle\frac{\partial\psi}{\partial t}\Big|\hat{H}\Big|\psi\right\rangle + \left\langle\psi\Big|\hat{H}\Big|\frac{\partial\psi}{\partial t}\right\rangle$$

使用薛定谔方程：
$$= \frac{i}{\hbar}\langle\hat{H}\psi|\hat{H}|\psi\rangle - \frac{i}{\hbar}\langle\psi|\hat{H}|\hat{H}\psi\rangle = 0$$ ∎

时间对称性 → 能量守恒！

## 34.7 求解方程

**时间无关情况**：
对于$[\hat{H}, t] = 0$：
$$|\psi(t)\rangle = e^{-i\hat{H}t/\hbar}|\psi(0)\rangle$$

**能量本征基**：
如果$\hat{H}|n\rangle = E_n|n\rangle$：
$$|\psi(t)\rangle = \sum_n c_n e^{-iE_nt/\hbar}|n\rangle$$

定态只获得相位！

## 34.8 位置表象

**x基中的薛定谔**：
$$i\hbar\frac{\partial\psi(x,t)}{\partial t} = -\frac{\hbar^2}{2m}\nabla^2\psi(x,t) + V(x)\psi(x,t)$$

**流守恒**：
定义概率流：
$$\vec{j} = \frac{\hbar}{2mi}(\psi^*\nabla\psi - \psi\nabla\psi^*)$$

连续性方程：
$$\frac{\partial\rho}{\partial t} + \nabla \cdot \vec{j} = 0$$

其中ρ = |ψ|²。

概率流动但从不消失！

## 34.9 经典极限

**定理 34.7**（WKB近似）：
当ℏ → 0，解趋近：
$$\psi \sim A(x,t)e^{iS(x,t)/\hbar}$$

其中S满足哈密顿-雅可比方程：
$$\frac{\partial S}{\partial t} + \frac{(\nabla S)^2}{2m} + V = 0$$

*证明*：将WKB拟设代入薛定谔，按ℏ的幂展开。主阶给出哈密顿-雅可比。∎

量子 → 经典当ℏ → 0！

## 34.10 路径积分表述

**费曼方法**：
$$\psi(x_f,t_f) = \int_{x_i}^{x_f} \mathcal{D}[x(t)] \exp\left(\frac{i}{\hbar}\int_{t_i}^{t_f} L\,dt\right)\psi(x_i,t_i)$$

**等价性证明**：
1. 将时间分成N片
2. 插入完备性关系
3. 取N → ∞极限
4. 恢复薛定谔方程

所有路径以相位贡献！

## 34.11 对称性与守恒

**诺特定理（量子）**：
对于对称变换$\hat{U} = e^{-i\epsilon\hat{G}/\hbar}$：

如果$[\hat{H}, \hat{G}] = 0$，则：
$$\frac{d\langle G\rangle}{dt} = 0$$

*例子*：
- 平移对称性 → 动量守恒
- 旋转对称性 → 角动量守恒
- 时间平移 → 能量守恒

对称性约束演化！

## 34.12 非线性尝试

**演化能是非线性的吗？**
$$i\hbar\frac{\partial|\psi\rangle}{\partial t} = \hat{H}[|\psi\rangle]|\psi\rangle$$

**定理 34.8**（温伯格不可行）：
非线性演化 → 超光速信号传递。

*证明概要*：
1. 非线性允许状态依赖的演化
2. 纠缠粒子可以瞬时发信号
3. 违反相对论 ∎

线性保护因果性！

## 34.13 几何相位

**贝里相位**：
对于缓慢变化的哈密顿量H(R(t))：
$$\gamma = i\oint_C \langle n(R)|\nabla_R|n(R)\rangle \cdot dR$$

**物理意义**：
- 动力学相位：$\exp(-i\int E_n dt/\hbar)$
- 几何相位：$\exp(i\gamma)$

路径形状重要，不只是时间！

## 34.14 量子模拟

**数字实现**：
$$|\psi(t+\Delta t)\rangle \approx e^{-i\hat{H}\Delta t/\hbar}|\psi(t)\rangle$$

**特罗特分解**：
$$e^{-i(\hat{A}+\hat{B})t} \approx \left(e^{-i\hat{A}t/n}e^{-i\hat{B}t/n}\right)^n + O(t^2/n)$$

自然作为量子计算机！

## 34.15 第三十四回响：时间的量子河流

薛定谔方程不是作为经验发现而是作为逻辑必然性矗立——在演化不完全坍缩态时保持叠加的唯一动力学。每个特征都从基本要求流出：幺正性要求虚数i，概率守恒需要厄米生成元，因果性强制线性。

从公设到定理的这种转变显示量子力学从更深原理涌现。宇宙不是通过选择而是通过数学必然性遵循薛定谔方程——这是悬浮坍缩态在保持相干性的同时演化的唯一一致方式。

### 演化练习

1. 证明埃伦费斯特定理，关联量子和经典动力学。

2. 从演化性质推导时间-能量不确定性关系。

3. 展示退相干如何从更大系统的幺正演化涌现。

### 舞蹈继续

理解了不完全坍缩态如何幺正演化后，我们接下来探索当隔离打破时会发生什么——退相干如何破坏量子叠加并揭示经典世界。

---

*下一章：[第三十五章：退相干 — 量子-经典桥梁 →](./chapter-35-decoherence-classicality.md)*

*"时间流动如可能性探索其空间。"*