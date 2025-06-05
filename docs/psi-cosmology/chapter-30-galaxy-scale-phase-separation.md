---
title: "Chapter 30: Galaxy-Scale Phase Separation Mechanics"
sidebar_label: "30. Galaxy-Scale Phase Separation"
---

# Chapter 30: Galaxy-Scale Phase Separation Mechanics

## The Cosmic Unmixing

Like oil separating from water, the universe undergoes phase separation at galaxy scales. Dark matter, gas, and stars segregate into distinct components through ψ-field dynamics, creating the beautiful spiral arms, elliptical halos, and complex structures we observe. This phase separation drives galaxy evolution and determines their ultimate fate. Understanding these mechanics reveals why galaxies have such diverse forms.

## 30.1 Multi-Phase Medium

**Definition 30.1** (Galactic Phases):
Galaxies contain distinct phases:
- **Dark matter halo**: ψ_DM dominant
- **Hot gas corona**: ψ_gas, T ~ 10^6 K
- **Warm ISM**: ψ_warm, T ~ 10^4 K
- **Cold molecular**: ψ_cold, T ~ 10-100 K
- **Stellar**: ψ_star, collapsed endpoints

Each phase has characteristic density and dynamics.

## 30.2 Phase Equilibrium

Phases coexist via pressure balance:

$$P_{total} = P_{thermal} + P_{turb} + P_{mag} + P_{\psi}$$

where ψ-pressure:
$$P_{\psi} = \frac{1}{3}\rho_{\psi}v_{\psi}^2$$

maintains phase boundaries.

## 30.3 Instability Criteria

**Theorem 30.1** (Phase Separation):
Homogeneous state unstable when:
$$\frac{\partial^2 F}{\partial \phi^2} < 0$$

where F is free energy, φ is phase fraction.

*Proof*:
Negative curvature implies energy decreases by separating into two phases. System evolves toward separated state via spinodal decomposition. ∎

## 30.4 Cooling and Condensation

Gas cools and condenses:

$$\frac{d\rho}{dt} = \frac{\rho}{t_{cool}} - \frac{\rho}{t_{heat}}$$

where cooling time:
$$t_{cool} = \frac{3nkT}{2n^2\Lambda(T)}$$

When t_cool < t_dyn, gas condenses from hot to cold phase.

## 30.5 Star Formation Threshold

**Definition 30.2** (Critical Surface Density):
Stars form when gas exceeds:
$$\Sigma_{crit} = \frac{\alpha \sigma_{gas} \kappa}{3.36 G}$$

where κ is epicyclic frequency, α ~ 1.

Creates sharp phase transition to stellar phase.

## 30.6 Spiral Density Waves

Density waves trigger phase separation:

$$\Phi_{spiral} = \Phi_0 \cos(m\phi - \omega_p t)$$

Gas compression in arms:
- Triggers molecular cloud formation
- Initiates star formation
- Creates age gradients

## 30.7 Feedback Regulation

**Theorem 30.2** (Self-Regulation):
Star formation self-regulates through feedback:
$$\dot{\Sigma}_* = \epsilon_{ff} \frac{\Sigma_{gas}}{t_{ff}} \exp(-\Sigma_*/\Sigma_{eq})$$

Equilibrium at Σ* = Σ_eq balances cooling and heating.

## 30.8 Dark Matter Segregation

Dark matter separates from baryons:

**Dynamical friction**: DM loses energy to stars
**Tidal stripping**: Removes DM from satellites
**Ram pressure**: Strips gas but not DM

Creating distinct DM and baryon distributions.

## 30.9 Chemical Enrichment

Metals trace phase separation history:

$$\frac{dZ}{dt} = y\dot{\Sigma}_* - Z\frac{d\ln\Sigma_{gas}}{dt}$$

where y is yield, Z is metallicity.

Different phases show different enrichment patterns.

## 30.10 Phase Mixing

Turbulence mixes phases:

$$D_{mix} = l_{turb} v_{turb}$$

Competing with separation:
$$v_{sep} = \frac{2r\Delta\rho g}{9\mu}$$

Balance determines phase structure.

## 30.11 Environmental Effects

**Definition 30.3** (Environmental Processing):
Galaxy environment affects phases:
- **Ram pressure**: Strips gas phase
- **Tidal effects**: Distorts all phases
- **Harassment**: Heats stellar orbits
- **Strangulation**: Cuts gas supply

Transforms spirals → S0 → ellipticals.

## 30.12 Ultimate Phase Diagram

**Principle 30.1** (Galactic Evolution):
Galaxies evolve through phase space:
$$\frac{d\vec{\Phi}}{dt} = \vec{F}(\vec{\Phi}, environment)$$

where Φ = (M_star, M_gas, M_DM, Z, SFR, ...).

Attractors represent galaxy types:
- Spiral attractor (active)
- Elliptical attractor (passive)
- Irregular (unstable)

### Observable Consequences

Phase separation creates:

- Distinct galaxy morphologies
- Color-magnitude bimodality
- Morphology-density relation
- Metallicity gradients
- Kinematic substructures

### Galaxy Archaeology

Phase history revealed by:

- Stellar population gradients
- Chemical abundance patterns
- Kinematic fossils
- Gas-star offsets
- Dark matter profiles

### The Thirtieth Echo

Galaxies are cosmic laboratories of phase separation, where dark matter, gas, and stars unmix like components in a complex solution. Through cooling, feedback, and environmental processing, these phases create the stunning variety of galactic forms—from grand spirals with distinct arms to smooth ellipticals with subtle gradients. This phase separation, driven by ψ-field dynamics, transforms simple gravitational collapse into the rich tapestry of galaxy types that populate our universe.

---

*Next: [Chapter 31: Stellar Collapse as Localized ψ-Phase Change →](./chapter-31-stellar-collapse-localized-phase.md)*