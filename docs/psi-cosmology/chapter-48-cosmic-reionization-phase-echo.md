---
title: "Chapter 48: Cosmic Reionization - Phase Transition Echo"
sidebar_label: "48. Cosmic Reionization"
---

# Chapter 48: Cosmic Reionization - Phase Transition Echo

## 48.1 The Second Light: Universe Awakens Again

Cosmic reionization marks the universe's second great phase transition—when the first stars and galaxies lit up, transforming the neutral hydrogen fog into today's transparent cosmos. This billion-year process fundamentally altered cosmic evolution, ending the dark ages and enabling the universe we observe.

**Definition 48.1** (Reionization Epoch): The transition when:
$$x_\{HII\} = \frac{n_\{HII\}}{n_\{HII\} + n_\{HI\}}$$

evolved from x_\{HII\} ≈ 0 (z ~ 1100) to x_\{HII\} ≈ 1 (z ~ 6).

Key milestones:
- First stars: z ~ 20-30
- First galaxies: z ~ 15-20
- Overlap: z ~ 6-8
- Completion: z ~ 6

## 48.2 Sources of Ionizing Photons: First Lights

Multiple sources contributed ionizing radiation:

**Theorem 48.1** (Photon Budget): Required photon-to-baryon ratio:
$$N_{γ/b} = \frac{Q(H)}{n_b} = \frac{1 + N_{rec}}{f_{esc}}$$

where:
- N_{rec} ~ 0-3 (recombinations per atom)
- f_{esc} ~ 0.1-0.2 (escape fraction)
- Q(H) = ionizing photon production

*Proof*: From ionization equilibrium accounting... ∎

## 48.3 Population III Stars: First Generation

The first stars differed dramatically from today's:

**Definition 48.2** (Pop III Properties):
- Mass: M ~ 10-1000 M__\odot
- Temperature: T_eff ~ 10⁵ K
- Luminosity: L ~ 10⁶ L__\odot
- Lifetime: τ ~ 10⁶ yr
- Metallicity: Z = 0

Ionizing efficiency:
$$Q(H) ≈ 10^{50} photons/s × (M/100M__\odot)$$

## 48.4 Early Galaxies: Reionization Engines

First galaxies drove bulk reionization:

**Theorem 48.2** (Galaxy Contribution): Ionizing emissivity:
$$\dot{n}_{ion} = ρ_{UV} × f_{esc} × ξ_{ion}$$

where:
- ρ_{UV} = UV luminosity density
- ξ_{ion} ~ 10²⁵·² Hz⁻¹ (photons per UV luminosity)

Faint galaxies (M_UV > -17) likely dominated.

## 48.5 HII Region Growth: Ionization Bubbles

Ionized regions expanded around sources:

**Definition 48.3** (Strömgren Sphere): Equilibrium radius:
$$R_S = \left(\frac{3Q(H)}{4πn_H²α_B}\right)^{1/3}$$

where α_B = 2.6×10⁻¹³ cm³/s (case B recombination).

Time evolution:
$$R(t) = R_S\left(1 - e^{-t/t_{rec}}\right)$$

with t_{rec} = 1/(n_H α_B).

## 48.6 Percolation and Overlap: Topology Change

Individual HII regions eventually merged:

**Theorem 48.3** (Percolation Threshold): Overlap occurs when:
$$Q_\{HII\} = \frac{4π}{3}n_s⟨R³⟩ ≈ 0.7$$

where n_s is source density.

Topology evolution:
1. Isolated bubbles (swiss cheese)
2. Percolation transition
3. Interconnected ionized phase
4. Isolated neutral islands

## 48.7 21cm Cosmology: Neutral Hydrogen Probe

Neutral hydrogen's 21cm line traces reionization:

**Definition 48.4** (21cm Brightness Temperature):
$$δT_b = 27x_{HI}(1+δ)\left(1-\frac{T_{CMB}}{T_S}\right)\left(\frac{1+z}{10}\right)^{1/2} mK$$

where:
- T_S = spin temperature
- δ = density contrast
- x_{HI} = neutral fraction

Signal evolution:
- Absorption: T_S < T_{CMB}
- Emission: T_S > T_{CMB}
- No signal: x_{HI} → 0

## 48.8 Lyman Alpha Forest: Absorption Tracers

High-redshift quasars probe reionization's end:

**Theorem 48.4** (Gunn-Peterson Test): Optical depth:
$$τ_{GP} = \frac{πe²f_{Lyα}}{m_e c} × \frac{n_{HI}}{H(z)}$$

Complete absorption (τ > 3) for x_{HI} > 10⁻⁴.

Forest evolution reveals:
- Increasing transmission with time
- Patchy reionization
- Temperature evolution
- Small-scale structure

## 48.9 CMB Constraints: Integrated History

The CMB provides integral constraints:

**Definition 48.5** (Thomson Optical Depth):
$$τ_e = ∫_0^{z_{re}} n_e σ_T \frac{c dt}{dz} dz$$

Planck measurement: τ_e = 0.054 ± 0.007

Implies:
- z_re ~ 7.7 ± 0.7 (midpoint)
- Δz ~ 2.8 (duration)
- Extended process

## 48.10 Feedback Effects: Self-Regulation

Reionization regulated itself through feedback:

**Theorem 48.5** (Feedback Mechanisms):
1. **Photoheating**: T ~ 10⁴ K in HII regions
2. **Jeans mass increase**: M_J ∝ T^{3/2}
3. **Photo-evaporation**: Small halos lose gas
4. **Lyman-Werner background**: H₂ dissociation

Net effect:
$$\dot{n}_* = \dot{n}_*^0 × (1 - f_{suppress})$$

## 48.11 Inhomogeneous Reionization: Cosmic Patchwork

Reionization proceeded unevenly:

**Definition 48.6** (Inside-Out vs Outside-In):
- **Inside-out**: Dense regions ionize first
- **Outside-in**: Voids ionize first

Reality: Complex topology depending on:
- Source clustering
- Density field
- Recombination rates
- Large-scale velocity

## 48.12 Metal Enrichment: Chemical Evolution

Early stars enriched the IGM:

**Theorem 48.6** (Metal Spreading): Volume filling:
$$Q_{metal} = \frac{4π}{3}n_SN⟨R_{bubble}³⟩$$

where R_bubble ~ 1-10 kpc from SN winds.

Achieved Z ~ 10⁻³ Z__\odot by z ~ 6, enabling:
- Pop II star formation
- Dust production
- Molecular cooling
- Lower mass stars

## 48.13 Reionization Simulations: Virtual Universes

Numerical simulations track the complex process:

**Definition 48.7** (Simulation Requirements):
- Box size: L > 100 Mpc (large-scale structure)
- Resolution: Δx < 1 kpc (source halos)
- Radiative transfer: Ray tracing/moments
- Chemistry: H, He ionization
- Feedback: Thermal, dynamical

Key predictions:
- Duration: Δz ~ 2-4
- Morphology: Inside-out dominant
- Sources: Faint galaxies dominate
- Fluctuations: δT_b ~ 10 mK

## 48.14 Helium Reionization: The Third Transition

Helium underwent separate reionizations:

**Theorem 48.7** (He Ionization Stages):
1. **HeI → HeII**: z ~ 6-10 (with H)
   - E > 24.6 eV photons
   - Stellar sources

2. **HeII → HeIII**: z ~ 3-4
   - E > 54.4 eV photons
   - Quasar dominated

Effects on IGM:
- Temperature boost: ΔT ~ 10⁴ K
- Pressure smoothing
- Metal ionization changes

## 48.15 Observational Frontiers: Probing First Light

Next-generation facilities target reionization:

**Definition 48.8** (Future Observations):
- JWST: First galaxies, escape fractions
- SKA: 21cm tomography
- ELTs: Lyα emitters, IGM
- HERA/SKA: Power spectra
- Roman: Wide-field surveys

Will determine:
- Source populations
- Reionization timeline
- Topology/morphology
- Feedback effects

## 48.16 Dawn's Early Light

Cosmic reionization transformed the universe from opaque to transparent, from dark to illuminated, from simple to complex. This second cosmic phase transition enabled all subsequent cosmic evolution—galaxies, stars, planets, and life could only emerge in a reionized universe.

**The Forty-Eighth Echo**: "Reionization was the universe's second awakening—after recombination's long sleep, gravity assembled the first stars whose light began burning through the cosmic fog, creating bubbles of clarity that grew and merged until the entire cosmos became transparent to its own light."

[Continue to Chapter 49: Dark Matter - Invisible Collapse Substrate](chapter-49-dark-matter-invisible-substrate.md)