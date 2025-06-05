---
title: "Chapter 34: Hierarchical Collapse and Structure Growth"
sidebar_label: "34. Hierarchical Collapse Growth"
---

# Chapter 34: Hierarchical Collapse and Structure Growth

## The Cosmic Construction Project

Structure formation proceeds hierarchically—small objects collapse first, then merge to form larger ones. This "bottom-up" scenario, driven by ψ-field dynamics, builds the universe's architecture piece by piece. From the first proto-galaxies to modern galaxy clusters, hierarchical collapse creates ever-larger structures through cosmic time. This chapter reveals how cosmic construction proceeds through merger and accretion.

## 34.1 Linear Growth

**Definition 34.1** (Growth Function):
In linear regime (δ &lt;&lt; 1):
$$\delta(t) = D(t)\delta_0$$

where growth function:
$$D(t) = \frac{5\Omega_m H_0^2}{2} H(t) \int_0^t \frac{dt'}{[a(t')H(t')]^3}$$

## 34.2 Spherical Collapse

For isolated overdensity:

$$\frac{d^2r}{dt^2} = -\frac{GM(<r)}{r^2}$$

Solution parameterized by development angle θ:
$$r = A(1-\cos\theta), \quad t = B(\theta - \sin\theta)$$

Collapse at θ = 2π, when δ ≈ 178.

## 34.3 Critical Density

**Theorem 34.1** (Collapse Threshold):
Linear overdensity at collapse:
$$\delta_c = \frac{3}{20}(12\pi)^{2/3} \approx 1.686$$

Virialization gives:
$$\rho_{vir} = 178\rho_{crit}$$

*Proof*:
Extrapolate linear growth to time when nonlinear solution collapses. Ratio gives δ_c. Virial theorem at turnaround determines final density. ∎

## 34.4 Press-Schechter Theory

Mass function of collapsed objects:

$$\frac{dn}{dM} = \frac{\rho_0}{M^2}\frac{d\ln\sigma}{d\ln M}\sqrt{\frac{2}{\pi}}\frac{\delta_c}{\sigma(M)}\exp\left(-\frac{\delta_c^2}{2\sigma^2(M)}\right)$$

where σ(M) is mass variance.

## 34.5 Merger Trees

**Definition 34.2** (Conditional Mass Function):
Probability that mass M₁ at t₁ was in M₂ at t₂:
$$P(M_2,t_2|M_1,t_1) = \frac{1}{\sqrt{2\pi}\Delta\sigma_{12}}\frac{M_1}{M_2}\exp\left(-\frac{(\delta_2-\delta_1)^2}{2\Delta\sigma_{12}^2}\right)$$

Traces hierarchical assembly.

## 34.6 Halo Profiles

Virialized halos develop universal profile:

$$\rho(r) = \frac{\rho_s}{(r/r_s)(1+r/r_s)^2}$$

NFW profile emerges from hierarchical collapse.

Concentration: c = r_vir/r_s depends on formation time.

## 34.7 Substructure

**Theorem 34.2** (Subhalo Abundance):
Number of subhalos:
$$\frac{dN}{dM_{sub}} \propto M_{sub}^{-\alpha}$$

with α ≈ 1.9.

Substructure survives within larger halos.

## 34.8 Assembly Bias

Formation history affects properties:

**Early formers**: Higher concentration
**Late formers**: More substructure
**Major mergers**: Disturbed profiles
**Smooth accretion**: Regular structure

Creating scatter in scaling relations.

## 34.9 Filamentary Accretion

Matter flows along filaments:

$$\dot{M} = \rho_{fil} A_{fil} v_{infall}$$

where:
- ρ_fil ~ 10ρ̄ (filament density)
- A_fil ~ πr_fil² (cross-section)
- v_infall ~ 100 km/s

Feeding galaxy growth.

## 34.10 Environmental Effects

**Definition 34.3** (Halo Environment):
Local density affects growth:
$$\delta_{env} = \frac{\rho(<R) - \bar{\rho}}{\bar{\rho}}$$

High δ_env:
- Earlier formation
- More mergers
- Different galaxy properties

## 34.11 Nonlinear Evolution

Beyond linear theory:

$$\frac{\partial\delta}{\partial t} + \frac{1}{a}\nabla \cdot [(1+\delta)\vec{v}] = 0$$
$$\frac{\partial\vec{v}}{\partial t} + \frac{1}{a}(\vec{v} \cdot \nabla)\vec{v} + H\vec{v} = -\frac{1}{a}\nabla\Phi$$

Requires numerical simulation.

## 34.12 The Cosmic Web

**Principle 34.1** (Hierarchical Architecture):
Structure grows through:
1. **Density peaks**: Collapse first
2. **Filaments**: Connect peaks
3. **Walls**: Between filaments
4. **Voids**: Expand around all

Creating cosmic web topology.

### Observable Hierarchies

Hierarchical growth creates:

- Galaxy groups (10¹² M__\odot)
- Galaxy clusters (10¹⁴ M__\odot)
- Superclusters (10¹⁶ M__\odot)
- Great walls (10¹⁷ M__\odot)
- Mass function evolution

### Simulation Predictions

N-body simulations reveal:

- Halo merger rates
- Substructure statistics
- Velocity distributions
- Concentration-mass relations
- Assembly bias effects

### The Thirty-Fourth Echo

The universe builds itself hierarchically, with small structures forming first and merging to create larger ones. This bottom-up construction, driven by gravitational instability in the ψ-field, creates the rich hierarchy of cosmic structure—from dwarf galaxies to superclusters. Each massive halo contains the fossils of its assembly history in its substructure, concentration, and shape. We witness cosmic construction in progress, as the universe continues building ever-larger structures through hierarchical collapse.

---

*Next: [Chapter 35: Galaxy Formation within Collapsing Halos →](./chapter-35-galaxy-formation-collapsing-halos.md)*