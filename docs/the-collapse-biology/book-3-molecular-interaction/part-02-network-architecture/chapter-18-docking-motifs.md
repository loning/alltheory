---
title: "Chapter 18: Docking Motifs and Collapse Specificity"
sidebar_label: "18. Docking Motifs"
---

# Chapter 18: Docking Motifs and Collapse Specificity

*"Docking motifs are ψ's molecular keys—short sequences that unlock specific interactions, creating from simple patterns the complex specificity of cellular communication."*

## 18.1 The Recognition Code

Docking motifs represent ψ's solution to molecular matchmaking. These short linear sequences—typically 3-10 amino acids—serve as address labels that direct proteins to specific partners with remarkable precision.

**Definition 18.1** (Linear Motif):
$$\text{Motif} = \text{X}_1\text{X}_2...\text{X}_n \text{ where X}_i \in \{\text{specific AA or class}\}$$

Short sequence encoding specificity.

## 18.2 The SH2 Domain Paradigm

**Theorem 18.1** (Phosphotyrosine Recognition):
$$\text{pY-X-X-Φ} \text{ where Φ = hydrophobic}$$

Consensus for SRC-family SH2 domains.

## 18.3 The PDZ Interactions

**Equation 18.1** (C-terminal Binding):
$$K_d = K_0 \exp\left(-\sum_i \Delta G_i^{\text{residue}}/RT\right)$$

Additive contributions to affinity.

## 18.4 The SH3 Domain

**Definition 18.2** (Proline-Rich Motifs):
$$\text{PxxP core} + \text{Flanking specificity}$$

Polyproline II helix recognition.

## 18.5 The WW Domain

**Theorem 18.2** (PPxY Motif):
$$\text{Trp-Trp pocket} + \text{Pro-Pro-X-Tyr} = \text{Binding}$$

Another proline-rich recognition.

## 18.6 The PTB Domains

**Equation 18.2** (NPxY Recognition):
$$\text{Binding} = f(\text{pY state}, \text{N-terminal sequence})$$

Phosphorylation-independent binding.

## 18.7 The Degron Sequences

**Definition 18.3** (Degradation Signals):
$$\text{Degrons} = \{\text{KEN box}, \text{D-box}, \text{Others}\}$$

Motifs targeting protein destruction.

## 18.8 The Nuclear Localization

**Theorem 18.3** (NLS Patterns):
$$\text{Monopartite}: \text{K(K/R)X(K/R)}$$
$$\text{Bipartite}: \text{KR-X}_{10-12}\text{-(K/R)}_3$$

Basic residues for nuclear import.

## 18.9 The Motif Evolution

**Equation 18.3** (Conservation Score):
$$S = -\sum_i p_i \log_2(p_i/q_i)$$

Information content of motif positions.

## 18.10 The Contextual Modulation

**Definition 18.4** (Flanking Effects):
$$K_d^{\text{actual}} = K_d^{\text{core}} \times \prod_i f_i^{\text{context}}$$

Surrounding sequence affecting binding.

## 18.11 The Competitive Binding

**Theorem 18.4** (Motif Competition):
$$\text{Occupancy}_i = \frac{[\text{P}_i]/K_{d,i}}{\sum_j [\text{P}_j]/K_{d,j}}$$

Multiple proteins competing for motif.

## 18.12 The Specificity Principle

Docking motifs embody ψ's principle of economical recognition—achieving exquisite specificity through minimal sequence requirements, creating molecular zip codes that ensure accurate protein delivery.

**The Motif Equation**:
$$\psi_{\text{specificity}} = \exp\left(-\frac{\Delta G_{\text{motif-domain}}}{RT}\right) \times \Theta(\text{Accessibility})$$

Recognition dependent on affinity and accessibility.

Thus: Motif = Code = Specificity = Recognition = ψ

---

*"In docking motifs, ψ writes its postal system—each short sequence an address, each domain a reader, together creating the molecular mail service that ensures cellular messages reach their intended recipients."*