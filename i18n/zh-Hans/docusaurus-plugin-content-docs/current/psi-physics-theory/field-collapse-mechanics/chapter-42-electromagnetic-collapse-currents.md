---
title: "第42章：从坍缩流产生的电磁场"
sidebar_label: "42. 电磁坍缩"
---

# 第42章：从坍缩流产生的电磁场

## 光的活数学

电磁场——光、化学和技术的载体——从ψ = ψ(ψ)自然涌现为坍缩海中的组织化流。麦克斯韦方程，看似基本，实则从自指流的流体动力学推导出来。光本身就是通过自己的介质传播的数学。

## 42.1 从拓扑不对称产生电荷

**基本问题**：在ψ = ψ(ψ)中什么创造了电荷？

**拓扑起源**：考虑ψ场的绕数：
$$Q = \frac{1}{2\pi i}\oint_C \frac{d\psi}{\psi}$$

**定理**：电荷是量子化的拓扑绕数。

**证明**：积分Q计算ψ在复平面中绕原点的次数。对于单值ψ：
$$Q \in \mathbb{Z}$$

这种整数性质强制电荷量子化：
$$q = ne$$

其中e是基本电荷量子。∎

**电荷密度**：局部绕数密度：
$$\rho = \frac{e}{2\pi i}\nabla \cdot \left(\psi^*\nabla\psi - \psi\nabla\psi^*\right)$$

## 42.2 推导电场

**从ψ梯度**：定义坍缩势：
$$\Phi = -\frac{\hbar}{2mi}\ln\left(\frac{\psi}{\psi^*}\right)$$

**电场定义**：
$$\mathbf{E} = -\nabla\Phi - \frac{\partial\mathbf{A}}{\partial t}$$

**定理**：E场是ψ相位速度的梯度。

**证明**：从带电粒子的薛定谔方程：
$$i\hbar\frac{\partial\psi}{\partial t} = \left[-\frac{\hbar^2}{2m}\nabla^2 + q\Phi\right]\psi$$

取相位S的梯度，其中$\psi = |\psi|e^{iS/\hbar}$：
$$\frac{\partial(\nabla S)}{\partial t} = -q\nabla\Phi$$

由于$\mathbf{v} = \nabla S/m$，我们得到：
$$m\frac{\partial\mathbf{v}}{\partial t} = q\mathbf{E}$$

因此E加速ψ流。∎

## 42.3 从ψ环流产生磁场

**贝里相位起源**：当ψ绕环传输时：
$$\psi_{终} = e^{i\gamma}\psi_{初}$$

贝里相位γ与包围的通量相关：
$$\gamma = \frac{q}{\hbar}\oint \mathbf{A} \cdot d\mathbf{l} = \frac{q}{\hbar}\Phi_B$$

**磁场**：
$$\mathbf{B} = \nabla \times \mathbf{A}$$

**定理**：B场是ψ动量流的旋度。

**证明**：正则动量：
$$\mathbf{p} = m\mathbf{v} + q\mathbf{A}$$

用ψ语言：
$$\mathbf{p} = \hbar\nabla S + q\mathbf{A}$$

取旋度：
$$\nabla \times \mathbf{p} = q\nabla \times \mathbf{A} = q\mathbf{B}$$

磁场测量ψ动量的环流。∎

## 42.4 从ψ守恒产生麦克斯韦方程

**高斯定律**：从电荷守恒：
$$\frac{\partial\rho}{\partial t} + \nabla \cdot \mathbf{J} = 0$$

在稳态情况：
$$\nabla \cdot \mathbf{J} = 0$$

**定理**：高斯定律从ψ连续性得出。

**证明**：ψ电流：
$$\mathbf{J} = \frac{e\hbar}{2mi}(\psi^*\nabla\psi - \psi\nabla\psi^*) = e|\psi|^2\mathbf{v}$$

从薛定谔方程：
$$\frac{\partial|\psi|^2}{\partial t} + \nabla \cdot \mathbf{J} = 0$$

使用泊松方程$\nabla^2\Phi = -\rho/\epsilon_0$：
$$\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$$ ∎

**无磁单极**：从定义$\mathbf{B} = \nabla \times \mathbf{A}$：
$$\nabla \cdot \mathbf{B} = \nabla \cdot (\nabla \times \mathbf{A}) = 0$$

由向量恒等式总是成立。

## 42.5 从规范不变性产生法拉第定律

**规范变换**：ψ物理在以下变换下不变：
$$\psi \rightarrow e^{iq\Lambda/\hbar}\psi$$
$$\mathbf{A} \rightarrow \mathbf{A} + \nabla\Lambda$$
$$\Phi \rightarrow \Phi - \frac{\partial\Lambda}{\partial t}$$

**定理**：法拉第定律确保规范不变动力学。

**证明**：为使E场规范不变：
$$\mathbf{E} = -\nabla\Phi - \frac{\partial\mathbf{A}}{\partial t}$$

必须变换为：
$$\mathbf{E} \rightarrow -\nabla\left(\Phi - \frac{\partial\Lambda}{\partial t}\right) - \frac{\partial}{\partial t}(\mathbf{A} + \nabla\Lambda)$$
$$= -\nabla\Phi - \frac{\partial\mathbf{A}}{\partial t} = \mathbf{E}$$

取旋度：
$$\nabla \times \mathbf{E} = -\frac{\partial}{\partial t}(\nabla \times \mathbf{A}) = -\frac{\partial\mathbf{B}}{\partial t}$$ ∎

## 42.6 从电流守恒产生安培-麦克斯韦定律

**总电流**：物理电流加位移电流：
$$\mathbf{J}_{总} = \mathbf{J} + \epsilon_0\frac{\partial\mathbf{E}}{\partial t}$$

**定理**：安培-麦克斯韦定律保持电流守恒。

**证明**：从连续性方程：
$$\frac{\partial\rho}{\partial t} + \nabla \cdot \mathbf{J} = 0$$

使用高斯定律$\rho = \epsilon_0\nabla \cdot \mathbf{E}$：
$$\epsilon_0\nabla \cdot \frac{\partial\mathbf{E}}{\partial t} + \nabla \cdot \mathbf{J} = 0$$

因此：
$$\nabla \cdot \mathbf{J}_{总} = 0$$

对于守恒电流，由亥姆霍兹定理：
$$\nabla \times \mathbf{B} = \mu_0\mathbf{J}_{总} = \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial\mathbf{E}}{\partial t}$$ ∎

## 42.7 从自洽性产生波动方程

**组合麦克斯韦方程**：取法拉第定律的旋度：
$$\nabla \times (\nabla \times \mathbf{E}) = -\frac{\partial}{\partial t}(\nabla \times \mathbf{B})$$

使用向量恒等式和安培定律：
$$\nabla(\nabla \cdot \mathbf{E}) - \nabla^2\mathbf{E} = -\mu_0\frac{\partial\mathbf{J}}{\partial t} - \mu_0\epsilon_0\frac{\partial^2\mathbf{E}}{\partial t^2}$$

在真空中（$\mathbf{J} = 0, \rho = 0$）：
$$\nabla^2\mathbf{E} = \mu_0\epsilon_0\frac{\partial^2\mathbf{E}}{\partial t^2}$$

**波速**：
$$c = \frac{1}{\sqrt{\mu_0\epsilon_0}}$$

**定理**：光速是ψ介质中的自然传播速度。

**证明**：常数$\epsilon_0$和$\mu_0$编码ψ介质性质：
- $\epsilon_0$：ψ可压缩性（对E的响应）
- $\mu_0$：ψ惯性（对B的响应）

波速$c = 1/\sqrt{\epsilon_0\mu_0}$是具有这些性质的介质中扰动的特征速度。∎

## 42.8 从场量子化产生光子

**经典场能量**：
$$H = \frac{1}{2}\int d^3x \left(\epsilon_0E^2 + \frac{1}{\mu_0}B^2\right)$$

**模式展开**：
$$\mathbf{A}(\mathbf{x},t) = \sum_{\mathbf{k},\lambda} \sqrt{\frac{\hbar}{2\epsilon_0\omega V}}\left[a_{\mathbf{k},\lambda}e^{i(\mathbf{k}\cdot\mathbf{x}-\omega t)} + a_{\mathbf{k},\lambda}^\dagger e^{-i(\mathbf{k}\cdot\mathbf{x}-\omega t)}\right]\boldsymbol{\epsilon}_\lambda$$

**量子化**：施加对易关系：
$$[a_{\mathbf{k},\lambda}, a_{\mathbf{k}',\lambda'}^\dagger] = \delta_{\mathbf{k}\mathbf{k}'}\delta_{\lambda\lambda'}$$

**结果**：能量本征值：
$$E_n = \hbar\omega(n + 1/2)$$

每个激发 = 能量为$\hbar\omega$的光子。

## 42.9 偏振作为ψ自旋

**横向性质**：对于沿z传播：
$$\mathbf{k} \cdot \boldsymbol{\epsilon} = 0$$

两个独立偏振：$\boldsymbol{\epsilon}_1, \boldsymbol{\epsilon}_2$。

**圆偏振基**：
$$\boldsymbol{\epsilon}_\pm = \frac{1}{\sqrt{2}}(\boldsymbol{\epsilon}_1 \pm i\boldsymbol{\epsilon}_2)$$

**角动量**：光子携带自旋：
$$\mathbf{S} = \pm\hbar\hat{\mathbf{k}}$$

**定理**：光子自旋1性质从矢量场量子化得出。

**证明**：场$\mathbf{A}$在旋转下作为矢量变换。量子化保持这一点，给出自旋1粒子。无质量约束到螺旋度±1（无纵向模式）。∎

## 42.10 规范场论

**局域规范不变性**：要求ψ物理在以下变换下不变：
$$\psi(x) \rightarrow e^{iq\Lambda(x)/\hbar}\psi(x)$$

**协变导数**：必须引入规范场：
$$D_\mu = \partial_\mu + \frac{iq}{\hbar}A_\mu$$

**场强张量**：
$$F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$$

**定理**：麦克斯韦方程从规范不变性得出。

**证明**：拉格朗日量：
$$\mathcal{L} = \bar{\psi}(iD_\mu\gamma^\mu - m)\psi - \frac{1}{4}F_{\mu\nu}F^{\mu\nu}$$

是规范不变的。欧拉-拉格朗日方程给出：
$$\partial_\mu F^{\mu\nu} = j^\nu$$

这些是协变形式的麦克斯韦方程。∎

## 42.11 能量-动量守恒

**应力-能量张量**：
$$T^{\mu\nu} = F^{\mu\alpha}F_\alpha^\nu + \frac{1}{4}g^{\mu\nu}F_{\alpha\beta}F^{\alpha\beta}$$

**守恒定律**：
$$\partial_\mu T^{\mu\nu} = -F^{\nu\alpha}j_\alpha$$

**能量密度**：
$$u = T^{00} = \frac{1}{2}(\epsilon_0E^2 + B^2/\mu_0)$$

**坡印廷矢量**：
$$\mathbf{S} = \frac{1}{\mu_0}\mathbf{E} \times \mathbf{B}$$

**定理**：电磁能量-动量按照ψ电流守恒流动。

**证明**：从诺特定理，规范不变性意味着电流守恒。应力-能量张量编码了这种守恒所需的能量-动量流。∎

## 42.12 经典极限和相干态

**场的相干态**：
$$|\alpha\rangle = e^{-|\alpha|^2/2}\sum_{n=0}^{\infty}\frac{\alpha^n}{\sqrt{n!}}|n\rangle$$

**经典行为**：
$$\langle\alpha|\hat{a}|\alpha\rangle = \alpha$$
$$\langle\alpha|\hat{E}|\alpha\rangle = E_{经典}$$

**定理**：经典电磁场是光子的相干态。

**证明**：相干态最小化不确定性：
$$\Delta E \cdot \Delta B = \text{最小}$$

并保持经典波行为所需的相位关系。大的$|\alpha|^2$给出可忽略的量子涨落。∎

## 42.13 真空涨落和卡西米尔力

**真空场涨落**：
$$\langle 0|\mathbf{E}^2|0\rangle = \sum_{\mathbf{k},\lambda} \frac{\hbar\omega_k}{2\epsilon_0V}$$

**板间**：模式限制修改求和：
$$E_{卡西米尔} = \frac{\hbar c\pi^2}{720d^3} \times \text{面积}$$

**力**：
$$F = -\frac{\pi^2\hbar c}{240d^4} \times \text{面积}$$

电磁卡西米尔力确认了真空场涨落。

## 42.14 非阿贝尔推广

**杨-米尔斯理论**：对于非阿贝尔规范群：
$$D_\mu = \partial_\mu + igA_\mu^aT^a$$

**场强**：
$$F_{\mu\nu}^a = \partial_\mu A_\nu^a - \partial_\nu A_\mu^a + gf^{abc}A_\mu^b A_\nu^c$$

**自相互作用**：非阿贝尔场与自己相互作用——胶子携带色荷。

## 42.15 结论：运动中的数学之光

电磁理论完全从ψ = ψ(ψ)涌现，通过：
1. 电荷作为拓扑绕数
2. 场作为ψ流梯度和环流
3. 麦克斯韦方程从连续性和规范不变性
4. 光子作为量子化场激发
5. 光作为真空介质中的相干ψ波

看似基本的麦克斯韦方程被揭示为ψ介质的流体动力学方程。电荷创造拓扑缺陷；场描述它们通过介质传播的影响；光子是这些传播扰动的量子。

光不是神秘的超距作用而是无所不在的ψ海的相干激发。每个光子都是组织化自指的最小包，以介质允许的最大速度携带关于电荷配置的信息——数学在空间中识别自己的速度。

### 练习

1. **推导拉莫公式**用于加速电荷的辐射。

2. **计算强磁场中的真空双折射**。

3. **证明规范固定**不影响物理可观测量。

### 第四十二回响

电磁场被推导为ψ海中的电流和环流——麦克斯韦方程作为自指流的守恒定律涌现。光被揭示为通过自己的介质以最大相干速度传播的数学。光子作为组织化递归活动的量子化包。接下来，规范理论作为ψ相位自由的一般原理。

---

*下一章：[第43章：规范理论作为ψ相位自由 →](./chapter-43-gauge-theory-phase-freedom.md)*