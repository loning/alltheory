---
title: "第三十五章：退相干 — 量子-经典桥梁"
sidebar_label: "35. 环境坍缩选择"
---

# 第三十五章：退相干 — 量子-经典桥梁

## 经典性的必然涌现

为什么我们在日常生活中看不到叠加？本章将退相干推导为环境耦合的不可避免后果，展示经典世界如何通过持续的环境监测从量子基底涌现。从ψ = ψ(ψ)，我们证明宏观量子相干无法存活——不是通过法令而是通过数学必然性。

## 35.1 环境纠缠

**定义 35.1**（系统-环境耦合）：
总希尔伯特空间：$\mathcal{H} = \mathcal{H}_S \otimes \mathcal{H}_E$

演化：
$$|\Psi(t)\rangle = \hat{U}(t)|\psi_S\rangle \otimes |E_0\rangle$$

**定理 35.1**（纠缠产生）：
一般相互作用哈密顿量创造纠缠。

*证明*：
对于$\hat{H}_{int} = \sum_i \hat{S}_i \otimes \hat{E}_i$：
$$\hat{U}(t) = e^{-i(\hat{H}_S + \hat{H}_E + \hat{H}_{int})t/\hbar}$$

从乘积态开始，时间t后：
$$|\Psi(t)\rangle \neq |\psi_S(t)\rangle \otimes |E(t)\rangle$$

除非$[\hat{H}_{int}, \hat{H}_S \otimes \mathbb{I} + \mathbb{I} \otimes \hat{H}_E] = 0$（罕见）。∎

相互作用孕育纠缠！

## 35.2 退相干通道

**系统演化**：
初始：$|\psi\rangle = \sum_i c_i|i\rangle$

相互作用后：
$$|\Psi\rangle = \sum_i c_i|i\rangle \otimes |E_i\rangle$$

**约化密度矩阵**：
$$\rho_S = \text{Tr}_E[|\Psi\rangle\langle\Psi|] = \sum_{ij} c_ic_j^* \langle E_j|E_i\rangle |i\rangle\langle j|$$

**关键结果**：非对角项随$\langle E_i|E_j\rangle \to 0$衰减。

环境破坏相干性！

## 35.3 退相干时标

**定理 35.2**（指数退相干）：
相干性指数衰减：
$$|\rho_{ij}(t)| = |\rho_{ij}(0)|e^{-\Gamma_{ij}t}$$

*推导*：
对于弱耦合和马尔可夫环境：
$$\frac{d\rho_S}{dt} = -i[\hat{H}_S, \rho_S] + \sum_{k} \gamma_k(\hat{L}_k\rho_S\hat{L}_k^\dagger - \frac{1}{2}\{\hat{L}_k^\dagger\hat{L}_k, \rho_S\})$$

对于位置基退相干：
$$\Gamma_{ij} = \gamma(x_i - x_j)^2/\lambda_{th}^2$$

其中λ_th = 热德布罗意波长。∎

基中的距离 → 退相干率！

## 35.4 指针态选择

**定义 35.2**（指针态）：
最小化纠缠产生的态|π_k⟩：
$$\frac{d}{dt}S(ρ_E^{(k)}) = \min$$

其中$\rho_E^{(k)} = \text{Tr}_S[|\pi_k\rangle\langle\pi_k| \otimes \rho_E]$。

**定理 35.3**（优选原理）：
指针态是相互作用哈密顿量的本征态。

*证明*：
对于$\hat{H}_{int} = \hat{S} \otimes \hat{B}$：
如果$\hat{S}|\pi_k\rangle = s_k|\pi_k\rangle$，则：
$$e^{-i\hat{H}_{int}t/\hbar}|\pi_k\rangle|E\rangle = |\pi_k\rangle e^{-is_k\hat{B}t/\hbar}|E\rangle$$

无纠缠产生——只有相位演化！∎

环境选择测量基！

## 35.5 量子达尔文主义

**信息增殖**：
$$|\Psi\rangle = \sum_i c_i|i\rangle \bigotimes_{f=1}^{F} |E_i^{(f)}\rangle$$

每个环境片段f携带系统信息。

**定理 35.4**（冗余性）：
经典信息在环境中冗余编码。

*互信息*：
$$I(S:E_f) = S(\rho_S) + S(\rho_{E_f}) - S(\rho_{SE_f})$$

对于指针态：$I(S:E_f) \approx H(S)$对多个片段成立。

多个观察者访问相同信息！

## 35.6 退相干率

**碰撞退相干**（空气分子）：
$$\Gamma \sim \frac{\sigma n \bar{v}}{\lambda_{th}^2}$$

其中：
- σ = 散射截面
- n = 分子密度
- v̄ = 平均速度

**例子**：
- 尘粒（10⁻⁶ m）：τ_d ~ 10⁻³¹ s
- 分子：τ_d ~ 10⁻¹⁵ s
- 电子：τ_d ~ 10⁻⁶ s

越大 = 退相干越快！

## 35.7 主方程方法

**林德布拉德形式**：
$$\frac{d\rho}{dt} = -\frac{i}{\hbar}[\hat{H}, \rho] + \sum_k \gamma_k\mathcal{L}_k[\rho]$$

其中林德布拉德超算符：
$$\mathcal{L}_k[\rho] = \hat{L}_k\rho\hat{L}_k^\dagger - \frac{1}{2}\{\hat{L}_k^\dagger\hat{L}_k, \rho\}$$

**位置退相干**：
$$\hat{L}_k = \sqrt{\gamma}(\hat{x} - \langle\hat{x}\rangle)$$

导致位置叠加的指数抑制。

## 35.8 测量问题

**传统谜题**：测量如何导致坍缩？

**退相干解决**：
1. 系统-仪器纠缠
2. 仪器-环境纠缠
3. 通过退相干的有效坍缩

**无需坍缩公设**！

*数学流程*：
$$|\psi\rangle|准备\rangle|E\rangle \xrightarrow{\text{S-A}} \sum_i c_i|i\rangle|A_i\rangle|E\rangle$$
$$\xrightarrow{\text{A-E}} \sum_i c_i|i\rangle|A_i\rangle|E_i\rangle$$

对E求迹：$\rho_{SA} = \sum_i |c_i|^2|i\rangle\langle i| \otimes |A_i\rangle\langle A_i|$

测量从纠缠涌现！

## 35.9 经典极限

**定理 35.5**（经典涌现）：
对于宏观物体，量子相干性在时标上消失：
$$\tau_d \sim \frac{\hbar}{N\Delta E}$$

其中N = 粒子数，ΔE = 能量尺度。

*证明*：
每个粒子贡献退相干。总速率：
$$\Gamma_{总} \sim N \cdot \Gamma_{单个}$$

对于N ~ 10²³，τ_d ~ 10⁻⁴⁰ s。∎

阿伏伽德罗确保经典性！

## 35.10 退相干vs耗散

**退相干**：
- 相位随机化
- 在S+E上幺正
- 信息保存（在E中）
- $\text{Tr}[\rho^2]$减少

**耗散**：
- 能量损失
- 在S上非幺正
- 熵增加
- ⟨H⟩减少

不同但经常耦合！

## 35.11 保护量子相干性

**无退相干子空间**：
态|ψ_DFS⟩使得：
$$\hat{H}_{int}|ψ_{DFS}\rangle = 0$$

**例子**：集体退相位的单态：
$$|ψ_{单态}\rangle = \frac{1}{\sqrt{2}}(|01\rangle - |10\rangle)$$

对$\hat{H}_{int} = (\hat{\sigma}_z^{(1)} + \hat{\sigma}_z^{(2)}) \otimes \hat{B}$免疫！

对称性保护相干性！

## 35.12 量子纠错

**三量子比特码**：
$$|0_L\rangle = |000\rangle, \quad |1_L\rangle = |111\rangle$$

**综合征测量**：
- 测量$\hat{Z}_1\hat{Z}_2$和$\hat{Z}_2\hat{Z}_3$
- 基于结果纠正

**阈值定理**：
如果错误率 < 阈值，可能进行任意计算！

主动保护战胜退相干！

## 35.13 生物量子相干性

**光合作用**（FMO复合体）：
- 相干时间：300K时~300 fs
- 机制：相关蛋白振动

**鸟类磁感受**：
- 自由基对机制
- 通过隔离保护相干性

生命利用量子相干性！

## 35.14 连续监测

**量子轨迹**：
在连续测量下：
$$d|\psi\rangle = -\frac{i\hat{H}dt}{\hbar}|\psi\rangle + \sum_k(\langle\hat{L}_k\rangle dW_k - \frac{dt}{2}\hat{L}_k^\dagger\hat{L}_k)|\psi\rangle$$

其中dW_k是维纳增量。

单个实现显示跳跃！

## 35.15 第三十五回响：从量子到经典

退相干不是作为临时添加而是作为环境耦合的必然后果而矗立。经典世界通过连续的环境监测涌现——无数微观"测量"迫使量子系统选择确定态。这不是量子力学的失败而是它的胜利：使量子计算成为可能的同样纠缠也创造了经典现实。

环境选择的指针态成为我们的经典可观测量。信息的冗余编码允许多个观察者就事实达成一致。宏观叠加的指数快速退相干解释了为什么猫是活的或死的，从不两者兼而有之。

### 退相干探究

1. 计算室温空气中病毒的退相干时间。

2. 为集体噪声下的两个量子比特设计无退相干子空间。

3. 展示双缝图案如何从路径-环境纠缠涌现。

### 经典黎明

看到经典现实如何从量子基底涌现后，我们接下来探索最深的问题：为什么是这些概率？玻恩规则如何从坍缩动力学涌现？

---

*下一章：[第三十六章：玻恩规则 — 从坍缩测度到概率 →](./chapter-36-probability-psi-measure.md)*

*"环境记住量子系统忘记的东西。"*