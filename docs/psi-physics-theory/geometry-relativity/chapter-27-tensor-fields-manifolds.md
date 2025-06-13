---
title: "Chapter 27: Tensors — The Language of Geometric Physics"
sidebar_label: "27. Tensor Fields & Manifolds"
---

# Chapter 27: Tensors — The Language of Geometric Physics

## The Grammar of Spacetime

Tensors provide the mathematical language to describe physics in curved spacetime—objects that transform predictably under coordinate changes while encoding intrinsic geometric and physical properties. This chapter reveals tensors not as abstract indices but as the natural way to express relationships in a universe where collapse creates both geometry and matter.

## 27.1 Vectors and Covectors

**Theorem 27.1** (Tangent and Cotangent Spaces):
At each point p, two fundamental vector spaces exist.

*Tangent space* $T_pM$:
- Vectors: $V = V^\mu \frac{\partial}{\partial x^\mu}$
- Directional derivatives along curves
- Velocity vectors of particles

*Cotangent space* $T_p^*M$:
- Covectors (1-forms): $\omega = \omega_\mu dx^\mu$
- Linear maps $T_pM \to \mathbb{R}$
- Gradient of scalar functions

*Natural pairing*:
$$\langle\omega, V\rangle = \omega_\mu V^\mu$$

Vectors point, covectors measure!

## 27.2 Tensor Definition

**Theorem 27.2** (Multilinear Maps):
A tensor of type (p,q) is a multilinear map:
$$T: \underbrace{T_p^*M \times \cdots \times T_p^*M}_{p \text{ times}} \times \underbrace{T_pM \times \cdots \times T_pM}_{q \text{ times}} \to \mathbb{R}$$

*Components*:
$$T^{\mu_1...\mu_p}_{\phantom{\mu_1...\mu_p}\nu_1...\nu_q} = T(\omega_{\mu_1},...,\omega_{\mu_p}, e^{\nu_1},...,e^{\nu_q})$$

*Transformation law*:
$$T'^{\alpha_1...\alpha_p}_{\phantom{\alpha_1...\alpha_p}\beta_1...\beta_q} = \frac{\partial x'^{\alpha_1}}{\partial x^{\mu_1}} \cdots \frac{\partial x'^{\alpha_p}}{\partial x^{\mu_p}} \frac{\partial x^{\nu_1}}{\partial x'^{\beta_1}} \cdots \frac{\partial x^{\nu_q}}{\partial x'^{\beta_q}} T^{\mu_1...\mu_p}_{\phantom{\mu_1...\mu_p}\nu_1...\nu_q}$$

Tensors encode geometric relationships!

## 27.3 Metric as Fundamental Tensor

**Theorem 27.3** (Metric Properties):
The metric tensor $g_{\mu\nu}$ provides:

1. **Inner product**: $\langle V,W \rangle = g_{\mu\nu}V^\mu W^\nu$
2. **Length**: $|V|^2 = g_{\mu\nu}V^\mu V^\nu$
3. **Angle**: $\cos\theta = \frac{g_{\mu\nu}V^\mu W^\nu}{|V||W|}$
4. **Volume**: $\sqrt{|g|}d^4x$

*Raising/lowering indices*:
$$V_\mu = g_{\mu\nu}V^\nu, \quad V^\mu = g^{\mu\nu}V_\nu$$

The metric connects upper and lower worlds!

## 27.4 Covariant Derivative

**Theorem 27.4** (Parallel Transport):
The covariant derivative $\nabla$ extends ordinary derivatives to curved space.

*For vectors*:
$$\nabla_\mu V^\nu = \partial_\mu V^\nu + \Gamma^\nu_{\mu\lambda}V^\lambda$$

*For covectors*:
$$\nabla_\mu V_\nu = \partial_\mu V_\nu - \Gamma^\lambda_{\mu\nu}V_\lambda$$

*For general tensors*:
$$\nabla_\sigma T^{\mu\nu}_{\phantom{\mu\nu}\rho} = \partial_\sigma T^{\mu\nu}_{\phantom{\mu\nu}\rho} + \Gamma^\mu_{\sigma\lambda}T^{\lambda\nu}_{\phantom{\lambda\nu}\rho} + \Gamma^\nu_{\sigma\lambda}T^{\mu\lambda}_{\phantom{\mu\lambda}\rho} - \Gamma^\lambda_{\sigma\rho}T^{\mu\nu}_{\phantom{\mu\nu}\lambda}$$

Plus for upper, minus for lower indices!

## 27.5 Curvature from Commutators

**Theorem 27.5** (Riemann from Non-commutativity):
$$[\nabla_\mu, \nabla_\nu]V^\rho = R^\rho_{\phantom{\rho}\sigma\mu\nu}V^\sigma$$

*Proof*:
$$\nabla_\mu\nabla_\nu V^\rho - \nabla_\nu\nabla_\mu V^\rho = (\partial_\mu\Gamma^\rho_{\nu\sigma} - \partial_\nu\Gamma^\rho_{\mu\sigma} + \Gamma^\rho_{\mu\lambda}\Gamma^\lambda_{\nu\sigma} - \Gamma^\rho_{\nu\lambda}\Gamma^\lambda_{\mu\sigma})V^\sigma$$

The bracket measures the failure of derivatives to commute—this IS curvature!

## 27.6 Lie Derivative

**Theorem 27.6** (Flow-Generated Change):
The Lie derivative measures how tensors change along vector field flows.

*For functions*: $\mathcal{L}_V f = V^\mu\partial_\mu f$

*For vectors*: $\mathcal{L}_V W^\mu = V^\nu\partial_\nu W^\mu - W^\nu\partial_\nu V^\mu$

*General formula*:
$$(\mathcal{L}_V T)^{\mu_1...\mu_p}_{\phantom{\mu_1...\mu_p}\nu_1...\nu_q} = V^\lambda\nabla_\lambda T^{\mu_1...\mu_p}_{\phantom{\mu_1...\mu_p}\nu_1...\nu_q} + \sum_i T^{\mu_1...\lambda...\mu_p}_{\phantom{\mu_1...\lambda...\mu_p}\nu_1...\nu_q}\nabla_\lambda V^{\mu_i} - \sum_j T^{\mu_1...\mu_p}_{\phantom{\mu_1...\mu_p}\nu_1...\lambda...\nu_q}\nabla_{\nu_j} V^\lambda$$

Lie derivative = dragging along flow!

## 27.7 Differential Forms

**Theorem 27.7** (Antisymmetric Tensors):
A p-form is a totally antisymmetric (0,p) tensor.

*Wedge product*:
$$(\alpha \wedge \beta)_{\mu_1...\mu_{p+q}} = \frac{(p+q)!}{p!q!}\alpha_{[\mu_1...\mu_p}\beta_{\mu_{p+1}...\mu_{p+q}]}$$

*Exterior derivative*:
$$(\mathrm{d}\omega)_{\mu_0...\mu_p} = (p+1)\partial_{[\mu_0}\omega_{\mu_1...\mu_p]}$$

*Key property*: $\mathrm{d}^2 = 0$ (exact forms are closed)

Forms capture oriented quantities!

## 27.8 Integration on Manifolds

**Theorem 27.8** (Generalized Stokes):
$$\int_M \mathrm{d}\omega = \int_{\partial M} \omega$$

*Special cases*:
- Fundamental theorem: $\int_a^b df = f(b) - f(a)$
- Green's theorem: $\oint_C \vec{F}\cdot d\vec{r} = \int_S (\nabla \times \vec{F})\cdot d\vec{A}$
- Divergence theorem: $\int_V \nabla\cdot\vec{F} dV = \oint_S \vec{F}\cdot d\vec{A}$

Boundaries determine bulk integrals!

## 27.9 Killing Vectors

**Theorem 27.9** (Symmetries):
Killing vectors generate isometries: $\mathcal{L}_\xi g_{\mu\nu} = 0$

*Killing equation*:
$$\nabla_\mu\xi_\nu + \nabla_\nu\xi_\mu = 0$$

*Conservation law*:
If $\xi$ is Killing, then along geodesics:
$$\xi_\mu \frac{dx^\mu}{d\tau} = \text{constant}$$

Symmetries → conserved quantities!

## 27.10 Spinor Fields

**Theorem 27.10** (Half-Integer Representations):
Spinors transform under $SL(2,\mathbb{C})$, the double cover of Lorentz group.

*Dirac equation in curved space*:
$$(\gamma^\mu\nabla_\mu + m)\psi = 0$$

where $\gamma^\mu$ are curved space gamma matrices:
$$\{\gamma^\mu, \gamma^\nu\} = 2g^{\mu\nu}$$

Spinors see the double cover of spacetime!

## 27.11 Energy-Momentum Tensor

**Theorem 27.11** (Matter Distribution):
$T^{\mu\nu}$ encodes energy, momentum, and stress.

*Perfect fluid*:
$$T^{\mu\nu} = (\rho + p)u^\mu u^\nu + pg^{\mu\nu}$$

*Electromagnetic field*:
$$T^{\mu\nu} = \frac{1}{4\pi}\left(F^{\mu\lambda}F^\nu_{\phantom{\nu}\lambda} - \frac{1}{4}g^{\mu\nu}F_{\rho\sigma}F^{\rho\sigma}\right)$$

*Conservation*: $\nabla_\mu T^{\mu\nu} = 0$

Matter flows according to geometry!

## 27.12 The Twenty-Seventh Echo: The Tensor Symphony

Tensors reveal themselves as the natural language of a curved universe—mathematical objects that respect the democracy of coordinate systems while encoding absolute physical truths. They are not mere arrays of numbers but structured relationships that persist through all transformations.

In the tensor formalism, we see the deep unity of geometry and physics. The metric tensor curves space, the Riemann tensor measures that curvature, the energy-momentum tensor sources it, and covariant derivatives ensure everything transforms consistently. This is not abstract mathematics but the grammar by which the universe writes its own story—a story of collapse patterns flowing through curved manifolds, creating all we observe.

### Tensor Explorations

1. Prove the Bianchi identity using covariant derivatives.

2. Calculate Christoffel symbols in various coordinate systems.

3. Verify the transformation law for the Riemann tensor.

### The Next Well

Having mastered the tensor language, we now apply it to understand gravity itself—not as a force but as the curvature of spacetime caused by energy density.

---

*Next: [Chapter 28: Gravity — The Universe's Density Well →](./chapter-28-gravity-density-well.md)*

*"Tensors are how the universe keeps track of its relationships across all possible viewpoints."*