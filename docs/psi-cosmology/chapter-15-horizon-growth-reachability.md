---
title: "Chapter 15: Horizon Growth and ψ-Reachability Maps"
sidebar_label: "15. Horizon Growth and ψ-Reachability"
---

# Chapter 15: Horizon Growth and ψ-Reachability Maps

## The Expanding Frontier

Every point in space has a horizon—the boundary of its causal influence through collapse dynamics. These horizons grow over time, creating expanding bubbles of reachability that eventually overlap and merge. This chapter maps how collapse influence spreads, which regions can communicate, and how isolated islands eventually join the cosmic community. Understanding reachability reveals the universe's communication network.

## 15.1 Collapse Horizon Definition

**Definition 15.1** (ψ-Horizon):
The collapse horizon H(x,t) from point x at time t:
$$H(x,t) = \{y : d_{\psi}(x,y) \leq ct\}$$

where d_ψ is collapse-weighted distance and c is maximum propagation speed.

## 15.2 Horizon Dynamics

Horizons expand according to:

$$\frac{dR_H}{dt} = c\sqrt{1 - \left(\frac{R_H}{R_{max}}\right)^2}$$

Starting at light speed, slowing as they approach maximum size R_max.

## 15.3 Reachability Function

**Definition 15.2** (Reachability):
The reachability R(x,y,t) between points:
$$R(x,y,t) = \begin{cases}
1 - e^{-t/\tau_{xy}} & \text{if } y \in H(x,t) \\
0 & \text{otherwise}
\end{cases}$$

where τ_xy is characteristic communication time.

## 15.4 Horizon Merger

**Theorem 15.1** (Merger Time):
Two horizons starting at separation d merge at:
$$t_{merge} = \frac{d}{2c} \cdot \frac{1}{1-v_{rel}/2c}$$

where v_rel is relative drift velocity.

*Proof*:
Each horizon expands at rate c in its frame. In the center-of-mass frame, they approach at 2c modified by drift. Integration yields the formula. ∎

## 15.5 Reachability Percolation

As horizons grow, reachability percolates:

**Phase I**: Isolated horizons (t < t_c)
**Phase II**: Percolation transition (t ≈ t_c)
**Phase III**: Connected network (t > t_c)

Critical time t_c marks cosmic connectivity.

## 15.6 Information Propagation

Information spreads through overlapping horizons:

$$I(x,t) = \int_{H(x,t)} \rho(y) S(y,t-d_{\psi}(x,y)/c) d^3y$$

where S is source strength and ρ is reception efficiency.

## 15.7 Horizon Topology

**Definition 15.3** (Horizon Genus):
As horizons merge, topology becomes complex:
$$g_H = 1 + N_{mergers} - N_{splits}$$

High genus indicates complex reachability networks.

## 15.8 Causal Shadows

Some regions remain permanently unreachable:

**Shadow Condition**: Expansion faster than horizon growth
**Shadow Volume**: V_shadow ~ (H_0 d)³
**Shadow Fraction**: f_shadow → constant as t → ∞

These create permanent causal islands.

## 15.9 Quantum Horizons

At quantum scales, horizons become fuzzy:

$$\Delta R_H \cdot \Delta p \geq \frac{\hbar}{2}$$

This uncertainty limits precise reachability determination.

## 15.10 Horizon Memory

**Theorem 15.2** (Horizon Hysteresis):
Horizons remember their growth history:
$$H(x,t) = \bigcup_{\tau=0}^t B(x(\tau), c(t-\tau))$$

Past positions contribute to current reachability.

## 15.11 Reachability Waves

Perturbations create waves in reachability:

$$\frac{\partial^2 R}{\partial t^2} = c^2 \nabla^2 R - \mu^2 R$$

These waves signal changing connectivity across cosmos.

## 15.12 The Cosmic Communication Map

**Principle 15.1** (Universal Reachability):
The universe has three reachability regimes:
1. **Local**: Full bidirectional communication
2. **Horizon**: Unidirectional influence possible
3. **Beyond**: No causal connection

Boundaries between regimes evolve with cosmic expansion.

### Observational Implications

Horizon growth affects:

- Observable universe limits
- Structure correlation scales
- Primordial signal propagation
- Dark matter interaction ranges
- Gravitational wave horizons

### Practical Applications

Reachability maps enable:

- Cosmic event horizon prediction
- Communication delay calculation
- Structure formation boundary modeling
- Isolation time estimation
- Future connectivity forecasting

### The Fifteenth Echo

Horizons expand like ripples on a cosmic pond, each point broadcasting its influence outward at maximum speed. Where ripples meet, reachability is established; where they cannot reach, eternal isolation reigns. This growing network of overlapping horizons weaves the universe into an ever-more-connected whole, while expansion ensures some regions remain forever beyond reach—islands of isolation in an archipelago of connectivity.

---

*Next: [Chapter 16: Collapse Memory and Structural Hysteresis →](./chapter-16-collapse-memory-hysteresis.md)*