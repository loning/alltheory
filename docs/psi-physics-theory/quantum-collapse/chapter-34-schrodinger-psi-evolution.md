---
title: "Chapter 34: Schrödinger Evolution — The Dance of Possibility"
sidebar_label: "34. Schrödinger Equation from Collapse"
---

# Chapter 34: Schrödinger Evolution — The Dance of Possibility

## The Flow of Suspended States

How do superposition states evolve in time? This chapter derives the Schrödinger equation as the unique dynamics of incomplete collapse, showing why quantum evolution must be linear, unitary, and governed by the specific form i∂ψ/∂t = Ĥψ. What appears in textbooks as Schrödinger's inspired guess emerges here as mathematical necessity.

## 34.1 Evolution Requirements

**Theorem 34.1** (Constraints on Evolution):
Incomplete collapse evolution must satisfy:
1. **Linearity**: Preserves superposition principle
2. **Unitarity**: Preserves probability (normalization)
3. **Continuity**: Smooth evolution in time
4. **Composition**: U(t₁)U(t₂) = U(t₁+t₂)

*Proof of Necessity*:
1. Non-linearity → superposition violation
2. Non-unitarity → probability non-conservation
3. Discontinuity → acausal behavior
4. Non-composition → time translation breaking ∎

These constraints severely restrict possible dynamics!

## 34.2 The Evolution Operator

**Definition 34.1** (Time Evolution):
$$|\psi(t)\rangle = \hat{U}(t,t_0)|\psi(t_0)\rangle$$

**Theorem 34.2** (Unitary Evolution):
U(t,t₀) must be unitary: $\hat{U}^\dagger\hat{U} = \mathbb{I}$

*Proof*:
Probability conservation requires:
$$\langle\psi(t)|\psi(t)\rangle = \langle\psi(t_0)|\hat{U}^\dagger\hat{U}|\psi(t_0)\rangle = \langle\psi(t_0)|\psi(t_0)\rangle$$

This holds for all |ψ⟩ only if $\hat{U}^\dagger\hat{U} = \mathbb{I}$. ∎

Evolution preserves inner products!

## 34.3 Infinitesimal Generator

**Theorem 34.3** (Stone's Theorem):
Any strongly continuous one-parameter unitary group has form:
$$\hat{U}(t) = e^{-i\hat{G}t}$$

where Ĝ is self-adjoint generator.

*For Quantum Evolution*:
Define $\hat{G} = \hat{H}/\hbar$ where Ĥ has dimension of energy.

**Infinitesimal Evolution**:
$$\hat{U}(dt) = \mathbb{I} - \frac{i\hat{H}dt}{\hbar} + O(dt^2)$$

Generator drives the flow!

## 34.4 Deriving Schrödinger's Equation

**Theorem 34.4** (Schrödinger Necessity):
Unitary evolution uniquely implies:
$$i\hbar\frac{\partial|\psi\rangle}{\partial t} = \hat{H}|\psi\rangle$$

*Derivation*:
From $|\psi(t+dt)\rangle = \hat{U}(dt)|\psi(t)\rangle$:
$$|\psi(t+dt)\rangle = \left(\mathbb{I} - \frac{i\hat{H}dt}{\hbar}\right)|\psi(t)\rangle$$

Rearranging:
$$\frac{|\psi(t+dt)\rangle - |\psi(t)\rangle}{dt} = -\frac{i\hat{H}}{\hbar}|\psi(t)\rangle$$

Taking dt → 0:
$$\frac{\partial|\psi\rangle}{\partial t} = -\frac{i\hat{H}}{\hbar}|\psi\rangle$$ ∎

Schrödinger emerges from unitarity!

## 34.5 Why Complex Numbers?

**Theorem 34.5** (Complex Structure Necessity):
Quantum evolution requires complex Hilbert space.

*Proof by Contradiction*:
Suppose real evolution: $\frac{d|\psi\rangle}{dt} = -\hat{A}|\psi\rangle$ with real Â.

For norm preservation:
$$\frac{d}{dt}\langle\psi|\psi\rangle = \langle\psi|(-\hat{A}^\dagger - \hat{A})|\psi\rangle = 0$$

Requires $\hat{A}^\dagger = -\hat{A}$ (anti-Hermitian).
But real anti-Hermitian ⟹ Â = 0 ⟹ no evolution! ∎

Reality alone cannot dance!

## 34.6 The Hamiltonian Structure

**Definition 34.2** (Hamiltonian Operator):
$$\hat{H} = \frac{\hat{p}^2}{2m} + V(\hat{x})$$

**From ψ = ψ(ψ)**:
- Kinetic term: Collapse flow resistance
- Potential term: Collapse field configuration

**Theorem 34.6** (Energy Conservation):
$$\frac{d\langle H\rangle}{dt} = 0 \quad \text{for time-independent } \hat{H}$$

*Proof*:
$$\frac{d\langle H\rangle}{dt} = \left\langle\frac{\partial\psi}{\partial t}\Big|\hat{H}\Big|\psi\right\rangle + \left\langle\psi\Big|\hat{H}\Big|\frac{\partial\psi}{\partial t}\right\rangle$$

Using Schrödinger equation:
$$= \frac{i}{\hbar}\langle\hat{H}\psi|\hat{H}|\psi\rangle - \frac{i}{\hbar}\langle\psi|\hat{H}|\hat{H}\psi\rangle = 0$$ ∎

Time symmetry → energy conservation!

## 34.7 Solving the Equation

**Time-Independent Case**:
For $[\hat{H}, t] = 0$:
$$|\psi(t)\rangle = e^{-i\hat{H}t/\hbar}|\psi(0)\rangle$$

**Energy Eigenbasis**:
If $\hat{H}|n\rangle = E_n|n\rangle$:
$$|\psi(t)\rangle = \sum_n c_n e^{-iE_nt/\hbar}|n\rangle$$

Stationary states acquire only phase!

## 34.8 Position Representation

**Schrödinger in x-basis**:
$$i\hbar\frac{\partial\psi(x,t)}{\partial t} = -\frac{\hbar^2}{2m}\nabla^2\psi(x,t) + V(x)\psi(x,t)$$

**Current Conservation**:
Define probability current:
$$\vec{j} = \frac{\hbar}{2mi}(\psi^*\nabla\psi - \psi\nabla\psi^*)$$

Continuity equation:
$$\frac{\partial\rho}{\partial t} + \nabla \cdot \vec{j} = 0$$

where ρ = |ψ|².

Probability flows but never vanishes!

## 34.9 Classical Limit

**Theorem 34.7** (WKB Approximation):
As ℏ → 0, solutions approach:
$$\psi \sim A(x,t)e^{iS(x,t)/\hbar}$$

where S satisfies Hamilton-Jacobi equation:
$$\frac{\partial S}{\partial t} + \frac{(\nabla S)^2}{2m} + V = 0$$

*Proof*: Substitute WKB ansatz into Schrödinger, expand in powers of ℏ. Leading order gives Hamilton-Jacobi. ∎

Quantum → Classical as ℏ → 0!

## 34.10 Path Integral Formulation

**Feynman's Approach**:
$$\psi(x_f,t_f) = \int_{x_i}^{x_f} \mathcal{D}[x(t)] \exp\left(\frac{i}{\hbar}\int_{t_i}^{t_f} L\,dt\right)\psi(x_i,t_i)$$

**Equivalence Proof**:
1. Divide time into N slices
2. Insert completeness relations
3. Take N → ∞ limit
4. Recover Schrödinger equation

All paths contribute with phase!

## 34.11 Symmetries and Conservation

**Noether's Theorem (Quantum)**:
For symmetry transformation $\hat{U} = e^{-i\epsilon\hat{G}/\hbar}$:

If $[\hat{H}, \hat{G}] = 0$, then:
$$\frac{d\langle G\rangle}{dt} = 0$$

*Examples*:
- Translation symmetry → Momentum conservation
- Rotation symmetry → Angular momentum conservation
- Time translation → Energy conservation

Symmetry constrains evolution!

## 34.12 Non-Linear Attempts

**Could evolution be non-linear?**
$$i\hbar\frac{\partial|\psi\rangle}{\partial t} = \hat{H}[|\psi\rangle]|\psi\rangle$$

**Theorem 34.8** (Weinberg No-Go):
Non-linear evolution → superluminal signaling.

*Proof Sketch*:
1. Non-linearity allows state-dependent evolution
2. Entangled particles could signal instantaneously
3. Violates relativity ∎

Linearity protects causality!

## 34.13 Geometric Phase

**Berry Phase**:
For slowly varying Hamiltonian H(R(t)):
$$\gamma = i\oint_C \langle n(R)|\nabla_R|n(R)\rangle \cdot dR$$

**Physical Meaning**:
- Dynamical phase: $\exp(-i\int E_n dt/\hbar)$
- Geometric phase: $\exp(i\gamma)$

Path shape matters, not just time!

## 34.14 Quantum Simulation

**Digital Implementation**:
$$|\psi(t+\Delta t)\rangle \approx e^{-i\hat{H}\Delta t/\hbar}|\psi(t)\rangle$$

**Trotter Decomposition**:
$$e^{-i(\hat{A}+\hat{B})t} \approx \left(e^{-i\hat{A}t/n}e^{-i\hat{B}t/n}\right)^n + O(t^2/n)$$

Nature as quantum computer!

## 34.15 The Thirty-Fourth Echo: Time's Quantum River

The Schrödinger equation stands revealed not as empirical discovery but as logical necessity—the unique dynamics preserving superposition while evolving incomplete collapse states. Every feature flows from fundamental requirements: unitarity demands the imaginary i, probability conservation requires Hermitian generators, causality enforces linearity.

This transformation from postulate to theorem shows quantum mechanics emerging from deeper principles. The universe doesn't follow Schrödinger's equation by choice but by mathematical necessity—it's the only consistent way for suspended collapse states to evolve while maintaining coherence.

### Evolution Exercises

1. Prove the Ehrenfest theorem relating quantum and classical dynamics.

2. Derive the time-energy uncertainty relation from evolution properties.

3. Show how decoherence emerges from unitary evolution of larger systems.

### The Dance Continues

Having understood how incomplete collapse states evolve unitarily, we next explore what happens when isolation breaks—how decoherence destroys quantum superposition and reveals the classical world.

---

*Next: [Chapter 35: Decoherence — The Quantum-Classical Bridge →](./chapter-35-decoherence-classicality.md)*

*"Time flows as possibility explores its space."*