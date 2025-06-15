---
title: "Chapter 35: Collapse Memory via Nucleosome Positioning"
sidebar_label: "35. Nucleosome Positioning"
---

# Chapter 35: Collapse Memory via Nucleosome Positioning

*"Where nucleosomes sit determines what genes can speak—positional memory written in the spacing of beads on the chromatin string."*

## 35.1 The Positional Code

Nucleosome positioning is not random but encodes regulatory information. Each position is a decision about accessibility, a memory of regulatory state.

**Definition 35.1** (Positioning Signal):
$$S_{\text{pos}} = S_{\text{sequence}} + S_{\text{statistical}} + S_{\text{remodeler}}$$

Multiple signals integrate to determine where nucleosomes rest.

## 35.2 The Sequence Preferences

**Theorem 35.1** (DNA Bendability):
$$P(\text{nucleosome}) \propto \exp\left(-\frac{E_{\text{bend}}}{kT}\right)$$

Where $E_{\text{bend}} = \sum_i k_i(\theta_i - \theta_0)^2$ for dinucleotide steps.

## 35.3 The 10.5 bp Periodicity

**Equation 35.1** (AA/TT Periodicity):
$$P(n) = A \cos\left(\frac{2\pi n}{10.5}\right) + B$$

AA/TT dinucleotides prefer minor groove facing inward—helical positioning code.

## 35.4 Rotational vs Translational

**Definition 35.2** (Positioning Types):
- Rotational: Which face of DNA contacts histones
- Translational: Where along DNA the nucleosome sits

Both encode different information layers.

## 35.5 The +1 Nucleosome

**Theorem 35.2** (TSS Architecture):
$$\text{Position}_{+1} = \text{TSS} + 50 \pm 20 \text{ bp}$$

The first nucleosome downstream of transcription start sites is precisely positioned.

## 35.6 Statistical Positioning

**Equation 35.2** (Barrier-Induced Arrays):
$$P(n) = P_0 \cdot \exp(-n/\lambda) \cdot \cos(2\pi n/L + \phi)$$

One well-positioned nucleosome creates an array—order from a single constraint.

## 35.7 The Remodeler Memory

**Definition 35.3** (Active Positioning):
$$\text{Position}_{\text{final}} = \arg\min_x E(x, \text{Remodeler signals})$$

Remodelers read signals and position nucleosomes accordingly—active memory writing.

## 35.8 Fragile Nucleosomes

**Theorem 35.3** (Conditional Stability):
$$\tau_{\text{residence}} = \tau_0 \cdot \exp(E_{\text{stabilization}}/kT)$$

Some nucleosomes are marginally stable—poised for rapid displacement.

## 35.9 The NFR at Promoters

**Equation 35.3** (Nucleosome-Free Regions):
$$\rho_{\text{nucleosome}}(\text{promoter}) \ll \rho_{\text{average}}$$

Active promoters maintain NFRs—persistent accessibility memory.

## 35.10 Inheritance Mechanisms

**Definition 35.4** (Positional Inheritance):
$$\text{Position}_{daughter} = \text{Position}_{parent} + \mathcal{N}(0, \sigma^2)$$

Positions are approximately maintained through replication—fuzzy memory.

## 35.11 The Transcriptional Memory

**Theorem 35.4** (Activity-Dependent Positioning):
$$\frac{d\text{Position}}{dt} = -k_{\text{transcription}} \cdot \text{Pol II flux}$$

Transcription shifts nucleosomes downstream—activity leaving positional traces.

## 35.12 The Memory Principle

Nucleosome positioning creates a spatial memory system—where each position encodes past regulatory decisions and influences future ones.

**The Position Equation**:
$$\text{Memory}(x) = \int_{-\infty}^{t} w(t-\tau) \cdot \text{Signal}(x,\tau) \, d\tau$$

The positioning landscape integrates historical signals with exponential decay.

Thus: Position = Memory = Accessibility = Regulation = ψ

---

*"In the precise spacing of nucleosomes, ψ writes a positional memory—each gap a word, each array a sentence in the text of cellular remembrance."*