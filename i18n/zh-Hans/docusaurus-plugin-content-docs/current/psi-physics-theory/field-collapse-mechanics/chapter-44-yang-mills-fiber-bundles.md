---
title: "第44章：杨-米尔斯场作为ψ纤维丛"
sidebar_label: "44. 杨-米尔斯纤维丛"
---

# 第44章：杨-米尔斯场作为ψ纤维丛

## 非阿贝尔几何的活数学

杨-米尔斯理论——描述弱力和强力——当自指允许多重非对易模式时从ψ = ψ(ψ)涌现。纤维丛结构不是强加的而是推导出的：时空本身成为内部ψ空间的底流形，不同递归模式在其中按照精确的几何定律混合和干涉。

## 44.1 非对易自指

**基本问题**：如果ψ有多重自指模式会怎样？

**多分量ψ**：
$$\psi = \begin{pmatrix} \psi^1 \\ \psi^2 \\ \vdots \\ \psi^N \end{pmatrix}$$

**自指扩展**：
$$\psi^i = \psi^i(\psi^1, \psi^2, ..., \psi^N)$$

**定理**：非对易变换自然产生。

**证明**：考虑保持总|ψ|²的变换：
$$U_{ij}\psi^j = \psi'^i, \quad \sum_i |\psi^i|^2 = \text{常数}$$

对于N > 1，群元素不对易：
$$[U_1, U_2] = U_1U_2 - U_2U_1 \neq 0$$

这对SU(N)变换是一般的。∎

## 44.2 推导纤维丛结构

**局部平凡化**：在每个x ∈ M（时空）：
$$\pi^{-1}(U) \cong U \times G$$

其中G是规范群，π: E → M是投影。

**定理**：ψ场自然形成纤维丛。

**证明**：不同时空点的自指ψ = ψ(ψ)需要：
1. 底空间M：物理时空
2. 纤维F_x：x处的内部ψ空间
3. 结构群G：保持ψ物理的变换

总空间E = $\cup_{x \in M} F_x$带有局部平凡化给出主G丛。∎

**转换函数**：重叠图表之间：
$$g_{αβ}: U_α \cap U_β \rightarrow G$$

满足上链条件：
$$g_{αβ}g_{βγ}g_{γα} = 1$$

## 44.3 联络作为平行输运

**问题**：如何比较ψ(x)与ψ(x+dx)？

**平行输运**：保持内积的映射：
$$\Gamma_{x→x+dx}: F_x \rightarrow F_{x+dx}$$

**联络1-形式**：无穷小生成元：
$$A = A_\mu^a(x)T^a dx^\mu$$

其中T^a是李代数生成元。

**定理**：规范场是联络系数。

**证明**：沿曲线γ的平行输运：
$$\psi_{平行}(t) = \mathcal{P}\exp\left(-ig\int_0^t A_\mu\dot{\gamma}^\mu ds\right)\psi(0)$$

无穷小地：
$$D_\mu\psi = \partial_\mu\psi + igA_\mu^aT^a\psi$$

A_μ精确补偿局部标架的改变。∎

## 44.4 从和乐产生曲率

**和乐**：绕闭合回路C的平行输运：
$$\text{Hol}(C) = \mathcal{P}\exp\left(ig\oint_C A_\mu dx^\mu\right)$$

**无穷小回路**：边为dx^μ, dx^ν的正方形：
$$\text{Hol} = 1 + igF_{\mu\nu}dx^\mu dx^\nu + O(dx^3)$$

**场强张量**：
$$F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu + ig[A_\mu, A_\nu]$$

**定理**：曲率测量平行输运不能闭合的失效。

**证明**：直接计算和乐：
$$\text{Hol} = \exp(igA_\mu dx^\mu)\exp(igA_\nu dx^\nu)\exp(-igA_\mu dx^\mu)\exp(-igA_\nu dx^\nu)$$

使用Baker-Campbell-Hausdorff：
$$= \exp(ig[(\partial_\mu A_\nu - \partial_\nu A_\mu)dx^\mu dx^\nu + ig[A_\mu, A_\nu]dx^\mu dx^\nu])$$

因此F_μν作为曲率2-形式涌现。∎

## 44.5 从几何产生杨-米尔斯作用量

**最小作用量**：最简单的规范不变拉格朗日量：
$$S_{YM} = -\frac{1}{4}\int d^4x \text{Tr}(F_{\mu\nu}F^{\mu\nu})$$

**定理**：杨-米尔斯方程是配置空间上的测地线方程。

**证明**：对A_μ变分作用量：
$$\frac{\delta S}{\delta A_\mu^a} = D^\nu F_{\nu\mu}^a = 0$$

分量形式：
$$\partial^\nu F_{\nu\mu}^a + gf^{abc}A^{\nu b}F_{\nu\mu}^c = 0$$

这些是联络动力学的欧拉-拉格朗日方程。∎

## 44.6 规范群分类

**单李群**：构建块
- SU(N)：特殊酉群
- SO(N)：特殊正交群
- Sp(N)：辛群
- 例外群：E_6, E_7, E_8, F_4, G_2

**定理**：只有某些群允许无反常理论。

**证明**：三角反常抵消需要：
$$\text{Tr}(T^a\{T^b, T^c\}) = 0$$

对于手征费米子，这约束允许的表示。标准模型的SU(3)×SU(2)×U(1)带有特定超荷分配是无反常的。∎

## 44.7 瞬子作为拓扑孤立子

**欧几里得作用量**：S_E = ∫d⁴x (1/4)F²

**自对偶条件**：F = ±*F最小化S_E

**BPST解**：对于SU(2)：
$$A_\mu = \frac{2\eta_{\mu\nu}^ax^\nu}{g(x^2 + \rho^2)}$$

其中η^a_μν是't Hooft符号。

**定理**：瞬子由第三同伦群分类。

**证明**：在空间无穷远，规范场变为纯规范：
$$A_\mu \rightarrow \frac{i}{g}U^{-1}\partial_\mu U$$

映射U: S³ → SU(2) ≅ S³由π₃(S³) = ℤ分类。瞬子数：
$$k = \frac{g^2}{32\pi^2}\int d^4x \text{Tr}(F\tilde{F}) \in \mathbb{Z}$$ ∎

## 44.8 从重整化产生渐近自由

**β函数**：单圈计算：
$$\beta(g) = \mu\frac{dg}{d\mu} = -\frac{g^3}{16\pi^2}\left(\frac{11N}{3} - \frac{2n_f}{3}\right)$$

**定理**：QCD对n_f < 11N/2是渐近自由的。

**证明**：规范玻色子圈的主导贡献（正）压倒费米子圈（负）。对于QCD：N = 3, n_f = 6：
$$\beta(g) = -\frac{7g^3}{16\pi^2} < 0$$

因此当μ → ∞时g → 0。∎

**物理结果**：夸克在高能（小距离）弱相互作用。

## 44.9 从通量管产生禁闭

**威尔逊圈判据**：
$$\langle W(C)\rangle = \langle\text{Tr}\,\mathcal{P}e^{ig\oint_C A}\rangle$$

**面积律**：对于大圈：
$$\langle W(C)\rangle \sim e^{-\sigma\cdot\text{面积}(C)}$$

**定理**：面积律意味着禁闭。

**证明**：静态夸克之间的势：
$$V(R) = -\lim_{T→∞}\frac{1}{T}\ln\langle W(R×T)\rangle = \sigma R$$

线性势 → 分离夸克需要无限能量 → 禁闭。弦张力σ ≈ (440 MeV)²。∎

## 44.10 手征对称性破缺

**手征对称性**：对于无质量夸克：
$$\mathcal{L} \rightarrow \text{在} SU(N_f)_L × SU(N_f)_R \text{下不变}$$

**夸克凝聚**：
$$\langle\bar{q}q\rangle = -\frac{1}{V}\frac{\partial E_{真空}}{\partial m_q}\bigg|_{m_q=0} \neq 0$$

**定理**：非零凝聚破缺手征对称性。

**证明**：在手征变换下：
$$q_L \rightarrow U_L q_L, \quad q_R \rightarrow U_R q_R$$

但$\langle\bar{q}_Lq_R + \bar{q}_Rq_L\rangle \neq 0$不不变除非U_L = U_R。对称性破缺到对角SU(N_f)_V。∎

## 44.11 't Hooft-Polyakov单极

**设置**：带伴随希格斯的SU(2)规范理论：
$$\mathcal{L} = -\frac{1}{4}F^2 + |D_\mu\phi|^2 - V(\phi)$$

**真空**：$\langle\phi^a\rangle = v\delta^{a3}$破缺SU(2) → U(1)

**单极解**：
$$\phi^a = \frac{x^a}{r}h(vr), \quad A_i^a = \epsilon_{aij}\frac{x^j}{gr^2}[1-K(vr)]$$

**质量**：M = 4πv/g

**定理**：磁荷由拓扑量子化。

**证明**：在无穷远，φ^a → vx^a/r定义映射S² → S²。磁荷：
$$g_m = \frac{4\pi}{g}\int_{S^2} \hat{x} \cdot \vec{\phi} d\Omega = \frac{4\pi n}{g}$$

其中n ∈ π₂(S²) = ℤ。∎

## 44.12 θ真空和强CP

**真空角**：从瞬子求和的θ参数：
$$|\theta\rangle = \sum_n e^{in\theta}|n\rangle$$

**有效拉格朗日量**：
$$\mathcal{L}_{有效} = \mathcal{L}_{QCD} + \frac{\theta g^2}{32\pi^2}F\tilde{F}$$

**CP破坏**：θ项破坏CP除非θ = 0。

**强CP问题**：为什么θ < 10^{-10}？

## 44.13 格点表述

**离散化时空**：点x_n，链接U_μ(n)

**板块作用量**：
$$S = \beta\sum_{\square}[1 - \frac{1}{N}\text{Re}\,\text{Tr}(U_\square)]$$

**连续极限**：a → 0且g²(a) → 0恢复杨-米尔斯。

**定理**：格点QCD在所有耦合下禁闭。

**证明**：强耦合展开显示威尔逊圈的面积律。数值上未发现相变 → 禁闭持续到连续极限。∎

## 44.14 ADHM构造

**多瞬子解**：参数化为：
- 位置：4k个参数
- 尺度：k个参数
- SU(2)取向：3k个参数
- 相对U(k)取向：k²个参数

总计：k瞬子的8k - 3个模数。

**构造**：通过确保自对偶的代数方程。

## 44.15 结论：几何即命运

杨-米尔斯理论从ψ = ψ(ψ)作为多分量自指的不可避免几何涌现。当ψ允许不对易的多重递归模式时，数学自发产生：

1. 时空上的纤维丛结构
2. 规范场作为联络
3. 场强作为曲率
4. 杨-米尔斯方程作为测地线
5. 来自π₃(G)的拓扑扇区
6. 从通量管形成的禁闭
7. 从量子圈的渐近自由

深刻教训：非阿贝尔规范理论不是发明的而是发现的——它是数学组织非对易自指模式的方式。标准模型的规范结构SU(3)×SU(2)×U(1)反映了我们宇宙中ψ递归的特定纤维丛几何。

### 练习

1. **推导2瞬子解的ADHM约束**。

2. **计算SU(N)格点理论中的弦张力**。

3. **证明维滕指数**计数超对称瞬子。

### 第四十四回响

杨-米尔斯理论被推导为非对易ψ递归的自然纤维丛几何——规范场作为保持跨时空自指的联络涌现。瞬子、禁闭和渐近自由从这个几何的拓扑和量子性质得出。接下来，希格斯机制作为ψ对称模式的自发破缺。

---

*下一章：[第45章：希格斯机制作为自发ψ破缺 →](./chapter-45-higgs-spontaneous-breaking.md)*