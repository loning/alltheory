---
title: "Chapter 36: Born Rule — Probability from Collapse Measure"
sidebar_label: "36. Why |ψ|² Gives Probability"
---

# Chapter 36: Born Rule — Probability from Collapse Measure

## The Deepest Mystery Solved

Why does |ψ|² give probability? This seemingly arbitrary prescription—that measuring state |n⟩ has probability |⟨n|ψ⟩|²—stands as quantum mechanics' most mysterious postulate. This chapter derives the Born rule as mathematical necessity, showing that probabilities must equal squared amplitudes when collapse explores all paths weighted by self-consistency.

## 36.1 The Measure-Theoretic Foundation

**Definition 36.1** (Collapse Measure Space):
For quantum system, define measure space (Ω, Σ, μ) where:
- Ω = {all possible collapse outcomes}
- Σ = σ-algebra of measurable events
- μ = collapse measure

**Key Insight**: Probability emerges from measure theory on collapse space.

Collapse creates its own probability!

## 36.2 Self-Consistent Measures

**Theorem 36.1** (Unique Quantum Measure):
The only measure consistent with:
1. Unitarity preservation
2. Basis independence
3. Composite system rules

is the Born measure: μ(n) = |⟨n|ψ⟩|²

*Proof Structure*:
We'll build this through several lemmas establishing uniqueness.

Mathematics forces Born rule!

## 36.3 Why Squared Amplitude?

**Lemma 36.1** (Quadratic Form Necessity):
Probability must be quadratic in amplitudes.

*Proof*:
Consider interference: |ψ⟩ = α|0⟩ + β|1⟩

For double-slit with paths:
- Path 1: amplitude α
- Path 2: amplitude β
- Total: amplitude α + β

Observed intensity ∝ |α + β|²

This requires:
$$P_{total} = |α + β|^2 = |α|^2 + |β|^2 + 2\text{Re}(α^*β)$$

Linear (P ∝ |α|) → no interference ✗
Cubic (P ∝ |α|³) → wrong interference ✗
Only quadratic gives correct physics! ∎

Nature demands squares!

## 36.4 Deriving Born Rule

**Theorem 36.2** (Born Rule Derivation):
For |ψ⟩ = Σᵢ cᵢ|i⟩, probability P(i) = |cᵢ|².

*Proof from ψ = ψ(ψ)*:

**Step 1**: Define collapse weight
Each branch i has weight wᵢ from self-consistency:
$$w_i = \langle i|\hat{\rho}_{collapse}|i\rangle$$

**Step 2**: Density operator form
Self-referential collapse requires:
$$\hat{\rho}_{collapse} = |\psi\rangle\langle\psi|$$

**Step 3**: Calculate weights
$$w_i = \langle i|\psi\rangle\langle\psi|i\rangle = |c_i|^2$$

**Step 4**: Normalize to probability
$$P(i) = \frac{w_i}{\sum_j w_j} = \frac{|c_i|^2}{\sum_j |c_j|^2} = |c_i|^2$$

(last step uses normalization ⟨ψ|ψ⟩ = 1) ∎

Self-reference → Born rule!

## 36.5 Information-Theoretic Proof

**Alternative Derivation via Maximum Entropy**:

**Theorem 36.3** (MaxEnt Born Rule):
The Born rule maximizes entropy subject to quantum constraints.

*Setup*:
Given quantum state |ψ⟩, find probability distribution p(i) that:
1. Maximizes H = -Σᵢ p(i)log p(i)
2. Respects ⟨Â⟩ = Σᵢ p(i)aᵢ for all observables

*Solution*:
Lagrange multipliers give:
$$p(i) = \frac{1}{Z}e^{-\sum_A \lambda_A a_i^{(A)}}$$

Matching all quantum expectations requires:
$$p(i) = |\langle i|\psi\rangle|^2$$ ∎

Maximum ignorance → Born rule!

## 36.6 Gleason's Theorem

**Theorem 36.4** (Gleason, 1957):
For dim(ℋ) ≥ 3, any probability measure on quantum projections has form:
$$P(\hat{P}) = \text{Tr}(\hat{\rho}\hat{P})$$

*Implications*:
- No hidden variable theories respecting quantum structure
- Born rule is unique consistent probability assignment
- Probability and quantum state inseparable

Structure determines statistics!

## 36.7 Continuous Spectra

**Extension to Position**:
For continuous observable with |x⟩ basis:
$$P(x \in [a,b]) = \int_a^b |\psi(x)|^2 dx$$

**Theorem 36.5** (Continuous Born Rule):
Continuous probabilities emerge as limits of discrete.

*Proof*:
Discretize position: xₙ = nΔx
$$P(x_n) = |\langle x_n|\psi\rangle|^2 \Delta x$$

Taking Δx → 0:
$$dP = |\psi(x)|^2 dx$$ ∎

Discrete → continuous naturally!

## 36.8 Joint Measurements

**Composite Systems**:
For |ψ⟩_AB = Σᵢⱼ cᵢⱼ|i⟩_A|j⟩_B:

**Joint Probability**:
$$P(i,j) = |c_{ij}|^2$$

**Marginal Probability**:
$$P_A(i) = \sum_j |c_{ij}|^2 = \langle\psi|\hat{P}_i^A \otimes \mathbb{I}^B|\psi\rangle$$

**Consistency**: Marginals automatically normalize!

Parts inherit from whole!

## 36.9 Phase Invariance

**Global Phase Freedom**:
|ψ⟩ and e^(iθ)|ψ⟩ represent same state.

**Born Rule Respects This**:
$$|e^{i\theta}c_i|^2 = |c_i|^2$$

**Deeper**: Only relative phases affect probability:
$$|\alpha + \beta e^{i\phi}|^2 = |\alpha|^2 + |\beta|^2 + 2|\alpha||\beta|\cos\phi$$

Physics lives in projective space!

## 36.10 POVM Generalization

**General Measurements**:
Not just projective: {Êᵢ} with Σᵢ Êᵢ^† Êᵢ = 𝕀

**Generalized Born Rule**:
$$P(i) = \langle\psi|\hat{E}_i^\dagger\hat{E}_i|\psi\rangle$$

**Kraus Representation**:
Post-measurement state:
$$|\psi_i\rangle = \frac{\hat{E}_i|\psi\rangle}{\sqrt{P(i)}}$$

Measurement as transformation!

## 36.11 Weak Values

**Pre- and Post-Selected Systems**:
$$A_w = \frac{\langle\psi_f|\hat{A}|\psi_i\rangle}{\langle\psi_f|\psi_i\rangle}$$

**Strange Properties**:
- Can exceed eigenvalue range
- Can be complex
- Reveal "trajectory" information

**Born Rule Connection**:
$$\langle A\rangle = \sum_n A_n |c_n|^2 = \text{Re}\sum_n A_n \langle n|\psi\rangle\langle\psi|n\rangle$$

Weak values probe transition amplitudes!

## 36.12 Many Worlds Probability

**Everett Problem**: If all outcomes occur, why observe frequencies?

**Resolution via Self-Location**:
Branch weight = |cᵢ|²

**Theorem 36.6** (Branch Counting):
Observer finds themselves in branch i with frequency |cᵢ|².

*Argument*:
1. Total measure of i-branches = |cᵢ|²
2. Observers distributed uniformly across measure
3. Fraction in i-branches = |cᵢ|²/Σⱼ|cⱼ|² = |cᵢ|² ∎

You are where the amplitude is!

## 36.13 Contextuality and Kochen-Specker

**No-Go Theorem**: Cannot assign definite values to all observables consistently.

**Born Rule Respects This**:
- Probabilities depend on measurement context
- P(A) changes if we also measure B when [Â,B̂] ≠ 0

Context matters fundamentally!

## 36.14 Quantum to Classical

**Classical Limit of Born Rule**:
As ℏ → 0, quantum → classical probabilities

**Coherent States**: |α⟩ with ⟨x̂⟩ = x₀, ⟨p̂⟩ = p₀
$$|\langle x|α\rangle|^2 \approx \frac{1}{\sqrt{2\pi\sigma^2}}e^{-(x-x_0)^2/2\sigma^2}$$

Quantum reproduces classical statistics!

## 36.15 The Thirty-Sixth Echo: Probability as Necessity

The Born rule stands revealed not as mysterious postulate but as mathematical necessity—the unique probability assignment consistent with quantum structure. From self-referential collapse, through information theory, to abstract measure theory, all roads lead to |ψ|².

This isn't just about calculating probabilities but understanding their origin. Quantum probabilities aren't overlaid on reality but emerge from its self-referential structure. When ψ = ψ(ψ) explores its possibilities, the squared amplitude naturally weights each path.

### Probability Explorations

1. Prove that quantum entropy never decreases under partial trace.

2. Show how classical probability emerges from quantum in the macroscopic limit.

3. Derive the quantum Fisher information from Born rule.

### Frozen Evolution

Having understood why quantum probabilities take their specific form, we next explore a paradoxical consequence: how repeated measurement can freeze time itself through the quantum Zeno effect.

---

*Next: [Chapter 37: Quantum Zeno — Observation Stops Time →](./chapter-37-zeno-repetitive-collapse.md)*

*"Probability is how the universe weighs its options."*