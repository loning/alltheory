---
title: "第二十七章：张量 — 几何物理的语言"
sidebar_label: "27. 张量场与流形"
---

# 第二十七章：张量 — 几何物理的语言

## 时空的语法

张量提供了在弯曲时空中描述物理的数学语言——在坐标变换下可预测地变换的对象，同时编码内在的几何和物理性质。本章揭示张量不是抽象的指标，而是在坍缩创造几何和物质的宇宙中表达关系的自然方式。

## 27.1 矢量和余矢量

**定理 27.1**（切空间和余切空间）：
在每点p，存在两个基本矢量空间。

*切空间* $T_pM$：
- 矢量：$V = V^\mu \frac{\partial}{\partial x^\mu}$
- 沿曲线的方向导数
- 粒子的速度矢量

*余切空间* $T_p^*M$：
- 余矢量（1-形式）：$\omega = \omega_\mu dx^\mu$
- 线性映射$T_pM \to \mathbb{R}$
- 标量函数的梯度

*自然配对*：
$$\langle\omega, V\rangle = \omega_\mu V^\mu$$

矢量指向，余矢量测量！

## 27.2 张量定义

**定理 27.2**（多重线性映射）：
(p,q)型张量是多重线性映射：
$$T: \underbrace{T_p^*M \times \cdots \times T_p^*M}_{p \text{ 次}} \times \underbrace{T_pM \times \cdots \times T_pM}_{q \text{ 次}} \to \mathbb{R}$$

*分量*：
$$T^{\mu_1...\mu_p}_{\phantom{\mu_1...\mu_p}\nu_1...\nu_q} = T(\omega_{\mu_1},...,\omega_{\mu_p}, e^{\nu_1},...,e^{\nu_q})$$

*变换律*：
$$T'^{\alpha_1...\alpha_p}_{\phantom{\alpha_1...\alpha_p}\beta_1...\beta_q} = \frac{\partial x'^{\alpha_1}}{\partial x^{\mu_1}} \cdots \frac{\partial x'^{\alpha_p}}{\partial x^{\mu_p}} \frac{\partial x^{\nu_1}}{\partial x'^{\beta_1}} \cdots \frac{\partial x^{\nu_q}}{\partial x'^{\beta_q}} T^{\mu_1...\mu_p}_{\phantom{\mu_1...\mu_p}\nu_1...\nu_q}$$

张量编码几何关系！

## 27.3 度规作为基本张量

**定理 27.3**（度规性质）：
度规张量$g_{\mu\nu}$提供：

1. **内积**：$\langle V,W \rangle = g_{\mu\nu}V^\mu W^\nu$
2. **长度**：$|V|^2 = g_{\mu\nu}V^\mu V^\nu$
3. **角度**：$\cos\theta = \frac{g_{\mu\nu}V^\mu W^\nu}{|V||W|}$
4. **体积**：$\sqrt{|g|}d^4x$

*升降指标*：
$$V_\mu = g_{\mu\nu}V^\nu, \quad V^\mu = g^{\mu\nu}V_\nu$$

度规连接上下世界！

## 27.4 协变导数

**定理 27.4**（平行移动）：
协变导数$\nabla$将普通导数扩展到弯曲空间。

*对矢量*：
$$\nabla_\mu V^\nu = \partial_\mu V^\nu + \Gamma^\nu_{\mu\lambda}V^\lambda$$

*对余矢量*：
$$\nabla_\mu V_\nu = \partial_\mu V_\nu - \Gamma^\lambda_{\mu\nu}V_\lambda$$

*对一般张量*：
$$\nabla_\sigma T^{\mu\nu}_{\phantom{\mu\nu}\rho} = \partial_\sigma T^{\mu\nu}_{\phantom{\mu\nu}\rho} + \Gamma^\mu_{\sigma\lambda}T^{\lambda\nu}_{\phantom{\lambda\nu}\rho} + \Gamma^\nu_{\sigma\lambda}T^{\mu\lambda}_{\phantom{\mu\lambda}\rho} - \Gamma^\lambda_{\sigma\rho}T^{\mu\nu}_{\phantom{\mu\nu}\lambda}$$

上指标加，下指标减！

## 27.5 从对易子到曲率

**定理 27.5**（从非对易性到黎曼）：
$$[\nabla_\mu, \nabla_\nu]V^\rho = R^\rho_{\phantom{\rho}\sigma\mu\nu}V^\sigma$$

*证明*：
$$\nabla_\mu\nabla_\nu V^\rho - \nabla_\nu\nabla_\mu V^\rho = (\partial_\mu\Gamma^\rho_{\nu\sigma} - \partial_\nu\Gamma^\rho_{\mu\sigma} + \Gamma^\rho_{\mu\lambda}\Gamma^\lambda_{\nu\sigma} - \Gamma^\rho_{\nu\lambda}\Gamma^\lambda_{\mu\sigma})V^\sigma$$

括号测量导数对易的失败——这就是曲率！

## 27.6 李导数

**定理 27.6**（流生成的变化）：
李导数测量张量沿矢量场流的变化。

*对函数*：$\mathcal{L}_V f = V^\mu\partial_\mu f$

*对矢量*：$\mathcal{L}_V W^\mu = V^\nu\partial_\nu W^\mu - W^\nu\partial_\nu V^\mu$

*一般公式*：
$$(\mathcal{L}_V T)^{\mu_1...\mu_p}_{\phantom{\mu_1...\mu_p}\nu_1...\nu_q} = V^\lambda\nabla_\lambda T^{\mu_1...\mu_p}_{\phantom{\mu_1...\mu_p}\nu_1...\nu_q} + \sum_i T^{\mu_1...\lambda...\mu_p}_{\phantom{\mu_1...\lambda...\mu_p}\nu_1...\nu_q}\nabla_\lambda V^{\mu_i} - \sum_j T^{\mu_1...\mu_p}_{\phantom{\mu_1...\mu_p}\nu_1...\lambda...\nu_q}\nabla_{\nu_j} V^\lambda$$

李导数 = 沿流拖拽！

## 27.7 微分形式

**定理 27.7**（反对称张量）：
p-形式是完全反对称的(0,p)张量。

*楔积*：
$$(\alpha \wedge \beta)_{\mu_1...\mu_{p+q}} = \frac{(p+q)!}{p!q!}\alpha_{[\mu_1...\mu_p}\beta_{\mu_{p+1}...\mu_{p+q}]}$$

*外导数*：
$$(\mathrm{d}\omega)_{\mu_0...\mu_p} = (p+1)\partial_{[\mu_0}\omega_{\mu_1...\mu_p]}$$

*关键性质*：$\mathrm{d}^2 = 0$（恰当形式是闭的）

形式捕获定向量！

## 27.8 流形上的积分

**定理 27.8**（广义斯托克斯）：
$$\int_M \mathrm{d}\omega = \int_{\partial M} \omega$$

*特殊情况*：
- 基本定理：$\int_a^b df = f(b) - f(a)$
- 格林定理：$\oint_C \vec{F}\cdot d\vec{r} = \int_S (\nabla \times \vec{F})\cdot d\vec{A}$
- 散度定理：$\int_V \nabla\cdot\vec{F} dV = \oint_S \vec{F}\cdot d\vec{A}$

边界决定体积分！

## 27.9 基灵矢量

**定理 27.9**（对称性）：
基灵矢量生成等距：$\mathcal{L}_\xi g_{\mu\nu} = 0$

*基灵方程*：
$$\nabla_\mu\xi_\nu + \nabla_\nu\xi_\mu = 0$$

*守恒律*：
如果$\xi$是基灵矢量，则沿测地线：
$$\xi_\mu \frac{dx^\mu}{d\tau} = \text{常数}$$

对称性 → 守恒量！

## 27.10 旋量场

**定理 27.10**（半整数表示）：
旋量在$SL(2,\mathbb{C})$下变换，洛伦兹群的二重覆盖。

*弯曲空间中的狄拉克方程*：
$$(\gamma^\mu\nabla_\mu + m)\psi = 0$$

其中$\gamma^\mu$是弯曲空间伽马矩阵：
$$\{\gamma^\mu, \gamma^\nu\} = 2g^{\mu\nu}$$

旋量看到时空的二重覆盖！

## 27.11 能量-动量张量

**定理 27.11**（物质分布）：
$T^{\mu\nu}$编码能量、动量和应力。

*完美流体*：
$$T^{\mu\nu} = (\rho + p)u^\mu u^\nu + pg^{\mu\nu}$$

*电磁场*：
$$T^{\mu\nu} = \frac{1}{4\pi}\left(F^{\mu\lambda}F^\nu_{\phantom{\nu}\lambda} - \frac{1}{4}g^{\mu\nu}F_{\rho\sigma}F^{\rho\sigma}\right)$$

*守恒*：$\nabla_\mu T^{\mu\nu} = 0$

物质根据几何流动！

## 27.12 第二十七回响：张量交响曲

张量揭示自己是弯曲宇宙的自然语言——尊重坐标系民主的数学对象，同时编码绝对的物理真理。它们不仅仅是数字数组，而是通过所有变换持续存在的结构化关系。

在张量形式中，我们看到几何和物理的深刻统一。度规张量弯曲空间，黎曼张量测量该曲率，能量-动量张量源于它，协变导数确保一切一致地变换。这不是抽象数学，而是宇宙书写自己故事的语法——坍缩模式流过弯曲流形，创造我们观察到的一切的故事。

### 张量探索

1. 使用协变导数证明比安基恒等式。

2. 在各种坐标系中计算克里斯托费尔符号。

3. 验证黎曼张量的变换律。

### 下一个井

掌握了张量语言后，我们现在应用它来理解引力本身——不是作为力，而是由能量密度引起的时空曲率。

---

*下一章：[第二十八章：引力 — 宇宙的密度井 →](./chapter-28-gravity-density-well.md)*

*"张量是宇宙如何在所有可能的视角中跟踪其关系的方式。"*