---
title: "Chapter 55: Gravitational Waves - Collapse Ripples"
sidebar_label: "55. Gravitational Waves"
---

# Chapter 55: Gravitational Waves - Collapse Ripples

## 55.1 Spacetime Tremors: When Collapse Propagates

Gravitational waves are ripples in spacetime itself, propagating at light speed and carrying information about the universe's most violent events. These waves represent the dynamic aspect of gravity—Ψ-collapse patterns that propagate through the cosmic fabric, revealing accelerating masses and catastrophic mergers.

**Definition 55.1** (Gravitational Wave Strain):
$$h_{ij} = \frac{2G}{c^4r} \ddot{Q}_{ij}^{TT}$$

where:
- Q_{ij} = quadrupole moment
- TT = transverse-traceless gauge
- r = distance to source
- Typical strain: h ~ 10^{-21}

## 55.2 Wave Generation: Quadrupole Radiation

Gravitational waves require accelerating quadrupole moments:

**Theorem 55.1** (Quadrupole Formula): Power radiated:
$$P = \frac{G}{5c^5} \dddot{Q}_{ij} \dddot{Q}^{ij}$$

For binary system:
$$P = \frac{32G^4}{5c^5} \frac{μ^2M^3}{a^5}$$

*Proof*: From linearized Einstein equations in weak field... ∎

No monopole (mass conservation) or dipole (momentum conservation) radiation.

## 55.3 Binary Inspirals: Cosmic Chirps

Binary systems spiral inward via GW emission:

**Definition 55.2** (Inspiral Evolution):
$$\frac{da}{dt} = -\frac{64G^3}{5c^5} \frac{μM^2}{a^3}$$

Leading to merger time:
$$t_{merge} = \frac{5c^5}{256G^3} \frac{a_0^4}{\mu M^2}$$

Frequency evolution:
$$f_{GW} = 2f_{orb} = \frac{1}{π}\sqrt{\frac{GM}{a^3}}$$

Creates characteristic "chirp" signal.

## 55.4 Waveform Modeling: Matched Filtering

GW detection requires precise waveform templates:

**Theorem 55.2** (Signal-to-Noise Ratio):
$$\rho^2 = 4 \int_0^∞ \frac{|\tilde{h}(f)|^2}{S_n(f)} df$$

where S_n(f) is detector noise spectrum.

Waveform phases:
1. **Inspiral**: Post-Newtonian expansion
2. **Merger**: Numerical relativity
3. **Ringdown**: Quasinormal modes

Combined in IMRPhenomD/SEOBNRv4 models.

## 55.5 LIGO/Virgo Detections: New Astronomy

Ground-based interferometers have detected ~100 events:

**Definition 55.3** (Detector Sensitivity):
$$h_{min} \sim \sqrt{\frac{S_n(f)}{T_{obs}}}$$

Current sensitivities:
- LIGO: h ~ 10^{-23} at 100 Hz
- Virgo: Similar sensitivity
- KAGRA: Joining network
- Range: ~100 Mpc (NS), ~1 Gpc (BH)

Key discoveries:
- Binary black hole mergers
- Binary neutron star merger (GW170817)
- Intermediate mass black holes
- Mass gap objects

## 55.6 Neutron Star Mergers: Multi-Messenger Events

NS-NS mergers produce EM counterparts:

**Theorem 55.3** (Kilonova Emission):
$$L_{KN} \sim \frac{M_{ej}v_{ej}^2}{2t_{diff}^2}$$

where:
- M_{ej} ~ 0.01 M__\odot (ejecta mass)
- v_{ej} ~ 0.1-0.3c (velocity)
- t_{diff} ~ days (diffusion time)

GW170817 observations:
- GW signal: 100s inspiral
- Gamma-ray burst: 1.7s delay
- Kilonova: Optical/IR afterglow
- Radio: Months-long emission

## 55.7 Black Hole Mergers: Strong Field Tests

BH-BH mergers probe extreme gravity:

**Definition 55.4** (Merger/Ringdown):
Post-merger BH characterized by:
- Mass: $M_f = M_1 + M_2 - E_{rad}/c^2$
- Spin: $a_f = f(a_1, a_2, q, \hat{L})$
- Ringdown: $h \sim e^{-t/\tau} \cos(2\pi f_{QNM} t)$

Where quasinormal modes:
$$f_{QNM} = \frac{c^3}{2\pi GM_f}[0.63(1-a_f)^{0.3}]$$

Tests of GR:
- Consistency between inspiral/merger/ringdown
- No-hair theorem
- GW propagation speed
- Parametrized post-Einsteinian constraints

## 55.8 Stochastic Background: Cosmic Symphony

Overlapping sources create GW background:

**Theorem 55.4** (Energy Density Spectrum):
$$\Omega_{GW}(f) = \frac{1}{\rho_c} \frac{d\rho_{GW}}{d\ln f}$$

Sources include:
1. **Astrophysical**: Unresolved binaries
2. **Cosmological**: Inflation, phase transitions
3. **Primordial**: Cosmic strings, domain walls

Current limits: Ω_{GW} < 10^{-8} (LIGO band)

Pulsar timing arrays probe nHz frequencies:
- NANOGrav 15-year hint
- EPTA/PPTA/IPTA collaborations
- Possible SMBH background detection

## 55.9 Future Detectors: Expanding Horizons

Next-generation GW observatories:

**Definition 55.5** (Future Instruments):
1. **LISA** (space-based):
   - Frequency: 10^{-4} - 10^{-1} Hz
   - Sources: SMBH mergers, EMRIs
   - Launch: ~2037

2. **Einstein Telescope** (ground):
   - 10× better sensitivity
   - Underground, triangular
   - Cosmological reach

3. **Cosmic Explorer**:
   - 40 km arms
   - z ~ 100 reach
   - Precision cosmology

4. **DECIGO/BBO**:
   - Decihertz gap
   - Primordial GWs

## 55.10 Cosmological Sources: Early Universe

Primordial GWs probe inflation and beyond:

**Theorem 55.5** (Inflationary GWs):
$$P_T(k) = \frac{2H^2}{\pi^2 M_P^2}\bigg|_{k=aH}$$

Leading to:
$$\Omega_{GW}^{inf}(f) \sim r × \Omega_{rad} × Transfer(f)$$

Other primordial sources:
- First-order phase transitions
- Cosmic strings
- Primordial black holes
- Preheating dynamics

Each with characteristic spectrum.

## 55.11 GW Cosmology: Standard Sirens

GWs enable distance measurements without cosmic ladder:

**Definition 55.6** (Luminosity Distance):
$$d_L = \frac{\sqrt{F(\iota, \psi)}}{h_0} × \frac{(GM_c)^{5/6}}{c^{3/2}\pi^{2/3}f^{2/3}}$$

where M_c = chirp mass, F = angular factor.

With EM counterpart or statistical methods:
$$H_0 = 70_{-8}^{+12}$$ km/s/Mpc (GW170817)

Future: 1% H_0 precision with O(100) events.

## 55.12 Tests of Fundamental Physics

GWs probe fundamental questions:

**Theorem 55.6** (Modified Gravity Constraints):
Parametrized deviations:
$$\Psi_{PN} = \Psi_{GR}(1 + \delta\hat{p}_i)$$

Current constraints:
- |c_g/c - 1| < 10^{-15}
- Graviton mass: m_g < 10^{-23} eV
- Extra dimensions: Limited
- Lorentz violation: Stringent bounds

Testing:
- Equivalence principle
- Black hole no-hair theorem
- Quantum gravity effects

## 55.13 Environmental Effects: Matter Interactions

GWs interact weakly with matter:

**Definition 55.7** (Astrophysical Effects):
1. **Lensing**: Magnification, multiple images
2. **Scattering**: Negligible below 10^{-10} Hz
3. **Absorption**: Extremely weak
4. **Mode conversion**: EM fields

Enables:
- Lensed GW searches
- Dark matter substructure
- Primordial black hole limits

## 55.14 Data Analysis: Finding Needles

GW detection requires sophisticated analysis:

**Theorem 55.7** (Matched Filter):
$$\rho = \frac{(s|h)}{\sqrt{(h|h)}}$$

where inner product:
$$(a|b) = 4\Re \int_0^∞ \frac{\tilde{a}^*(f)\tilde{b}(f)}{S_n(f)} df$$

Techniques:
- Template banks: ~10^6 waveforms
- Machine learning: Anomaly detection
- Bayesian inference: Parameter estimation
- Coherent analysis: Network detection

## 55.15 The New Cosmic Messengers

Gravitational waves have opened a new window on the universe, revealing:
- Black hole populations
- Neutron star physics
- Tests of general relativity
- Cosmological measurements
- Multi-messenger astronomy

Each detection deepens our understanding of gravity's strong-field regime.

## 55.16 Listening to the Universe

Gravitational waves are the universe's sound—vibrations in spacetime itself that carry information about cosmic catastrophes. In detecting these faint whispers, humanity has gained a new sense, able to "hear" the universe's most violent events across billions of light-years.

**The Fifty-Fifth Echo**: "Gravitational waves are spacetime's memory—ripples that carry the story of merging black holes, colliding neutron stars, and perhaps the universe's birth itself. In their passage, space trembles with the echo of distant catastrophes."

[Continue to Chapter 56: Future of Cosmology - Ultimate Questions](chapter-56-future-cosmology-ultimate-questions.md)