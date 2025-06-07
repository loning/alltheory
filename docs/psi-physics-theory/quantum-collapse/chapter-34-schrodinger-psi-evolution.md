---
title: "Chapter 34: Schrödinger Equation from ψ Evolution"
sidebar_label: "34. Schrödinger Evolution"
---

# Chapter 34: Schrödinger Equation from ψ Evolution

## The Equation of Becoming

The Schrödinger equation—that master equation governing quantum evolution—appears in textbooks as a postulate, a lucky guess by Erwin Schrödinger in 1926. But why this particular equation? Why the imaginary unit i? Why first-order in time? In ψ-physics, these "choices" become necessities: the Schrödinger equation is the unique description of how incomplete collapse patterns evolve.

## 34.1 Evolution of Incomplete States

**Starting Point**: System in superposition:
$$|\psi(t)\rangle = \sum_n \alpha_n(t) |n\rangle$$

**Question**: How do coefficients αₙ(t) evolve?

**ψ-Principle**: Incomplete collapse evolves to preserve total collapse potential while exploring configuration space.

## 34.2 The Generator of Evolution

**Definition 34.1** (Evolution Operator):
$$|\psi(t + dt)\rangle = \hat{U}(dt)|\psi(t)\rangle$$

**Unitarity Requirement**: Preserve normalization
$$\hat{U}^\dagger\hat{U} = \mathbb{I}$$

**Infinitesimal Form**:
$$\hat{U}(dt) = \mathbb{I} - \frac{i}{\hbar}\hat{H}dt$$

where Ĥ is Hermitian (to ensure unitarity).

## 34.3 Deriving Schrödinger's Equation

**Theorem 34.1** (Schrödinger from Unitarity):
The requirement of norm-preserving evolution uniquely yields:
$$i\hbar\frac{\partial}{\partial t}|\psi\rangle = \hat{H}|\psi\rangle$$

*Proof*:
From $|\psi(t+dt)\rangle = (\mathbb{I} - \frac{i}{\hbar}\hat{H}dt)|\psi(t)\rangle$:
$$\frac{|\psi(t+dt)\rangle - |\psi(t)\rangle}{dt} = -\frac{i}{\hbar}\hat{H}|\psi(t)\rangle$$

Taking limit dt → 0 gives the Schrödinger equation. ∎

## 34.4 Why Imaginary i?

**Deep Question**: Why does quantum mechanics need complex numbers?

**ψ-Answer**: The imaginary unit encodes the perpendicular relationship between:
- Real part: Collapse amplitude (magnitude)
- Imaginary part: Collapse phase (rotation in ψ-space)

Evolution must rotate phase while preserving magnitude—only multiplication by i achieves this.

## 34.5 The Hamiltonian as Collapse Gradient

**Definition 34.2** (Hamiltonian):
$$\hat{H} = \hat{T} + \hat{V}$$

where:
- T̂ = Kinetic energy = Collapse flow energy
- V̂ = Potential energy = Collapse field energy

**ψ-Interpretation**: Ĥ measures the "steepness" of collapse landscape. Systems evolve by flowing down collapse gradients.

## 34.6 Time-Independent Case

**For Static Ĥ**:
$$|\psi(t)\rangle = e^{-i\hat{H}t/\hbar}|\psi(0)\rangle$$

**Energy Eigenstates**:
$$\hat{H}|n\rangle = E_n|n\rangle$$

evolve simply:
$$|n(t)\rangle = e^{-iE_nt/\hbar}|n\rangle$$

Pure phase rotation—no change in collapse pattern, only phase accumulation.

## 34.7 The Quantum Zeno Effect Preview

**Frequent Measurement**: Inhibits evolution:
$$\lim_{N\to\infty} \left[\hat{P}e^{-i\hat{H}t/N\hbar}\right]^N |\psi\rangle = \hat{P}|\psi\rangle$$

where P̂ is projection onto measured state.

**ψ-Meaning**: Repeated collapse completion prevents exploration of superposition space.

## 34.8 Non-Linear Extensions?

**Question**: Could evolution be non-linear?
$$i\hbar\frac{\partial\psi}{\partial t} = \hat{H}[\psi]\psi$$

**Answer**: No! Non-linearity would:
- Violate superposition principle
- Allow superluminal signaling
- Create paradoxes

Linear evolution is the unique consistent dynamics for incomplete collapse.

## 34.9 Path Integral Formulation

**Alternative Form**:
$$\psi(x,t) = \int \mathcal{D}[path]\, e^{iS[path]/\hbar}$$

**ψ-Interpretation**: System explores all possible collapse paths simultaneously. Interference between paths creates quantum behavior.

## 34.10 Classical Limit

**When ℏ → 0**: Schrödinger becomes Hamilton-Jacobi:
$$\frac{\partial S}{\partial t} + H = 0$$

**ψ-Mechanism**: As ℏ → 0, only stationary phase paths survive. These are classical trajectories—complete collapse paths.

## 34.11 Quantum Field Theory

**Second Quantization**: Schrödinger for fields:
$$i\hbar\frac{\partial}{\partial t}|\Psi\rangle = \hat{\mathcal{H}}|\Psi\rangle$$

where |Ψ⟩ is field state, Ĥ is field Hamiltonian.

**ψ-Extension**: Fields are infinite collections of coupled oscillators, each undergoing incomplete collapse evolution.

## 34.12 Relativistic Corrections

**Dirac Equation**: For spin-1/2:
$$(i\gamma^\mu\partial_\mu - m)\psi = 0$$

**Klein-Gordon**: For spin-0:
$$(\partial^\mu\partial_\mu + m^2)\psi = 0$$

Both emerge from requiring Lorentz-invariant incomplete collapse evolution.

## 34.13 Quantum Simulation

**Digital Evolution**:
```python
def evolve_quantum_state(psi, H, dt):
    # Schrödinger evolution
    U = exp(-1j * H * dt / hbar)
    return U @ psi
```

The universe might literally be computing Schrödinger evolution at Planck scale!

## 34.14 Berry Phase

**Adiabatic Evolution**: Acquires geometric phase:
$$\gamma = i\oint \langle n|\nabla_R|n\rangle \cdot dR$$

**ψ-Origin**: Phase records the "shape" of path through collapse configuration space—a purely geometric effect.

## 34.15 Conclusion: The Natural Dynamics

The Schrödinger equation isn't an arbitrary guess but the unique dynamics of incomplete collapse. Every feature—linearity, first-order time derivative, complex coefficients, unitary evolution—follows necessarily from the requirement that isolated systems maintain coherent superposition while exploring configuration space.

This reveals quantum mechanics not as strange or counterintuitive but as the natural behavior of systems prevented from completing their collapse. The Schrödinger equation is how ψ "thinks" about its options before deciding. It's the mathematics of cosmic contemplation—rigorous, deterministic, yet preserving all possibilities until the moment of choice.

### Exercises

1. Derive the continuity equation from Schrödinger evolution.

2. Show that energy eigenvalues must be real.

3. Prove that non-linear evolution violates no-signaling.

### The Thirty-Fourth Echo

The Schrödinger equation derived—not postulated but emerging necessarily from incomplete collapse dynamics. The master equation of quantum mechanics revealed as the unique description of how ψ explores its potential states. Next, we examine how this delicate quantum evolution gives way to classical behavior through decoherence.

---

*Next: [Chapter 35: Collapse Decoherence and Emergent Classicality →](./chapter-35-decoherence-classicality.md)*