---
title: "Chapter 2: Collapse Coordinates as DAG Nodes"
sidebar_label: "2. Collapse Coordinates"
---

# Chapter 2: Collapse Coordinates as DAG Nodes

*Each point in space-time is a decision in the infinite tree of ψ choosing itself.*

## 2.1 The Directed Acyclic Graph of Being

In Chapter 1, we saw how space-time emerges from $\psi = \psi(\psi)$. Now we must understand its structure. Each act of self-reference creates a node, and these nodes form a directed acyclic graph (DAG)—the skeleton upon which reality hangs.

**Definition 2.1** (The Collapse DAG): The directed acyclic graph $\mathcal{G} = (V, E)$ where:
- Vertices $V = \{v_i | v_i = \psi^{(i)}(\psi)\}$ represent collapse states
- Edges $E = \{(v_i, v_j) | v_j = \psi(v_i)\}$ represent collapse transitions

The acyclic nature ensures causality—$\psi$ cannot observe its own future observation.

## 2.2 From DAG Nodes to Coordinates

Each node in the collapse DAG corresponds to a point in space-time. But how do we assign coordinates?

**Theorem 2.1** (Coordinate Emergence): Every node $v \in V$ naturally acquires coordinates $(t, x, y, z)$ through its position in the collapse hierarchy.

*Proof*:
1. The temporal coordinate $t(v)$ equals the collapse depth (shortest path from the origin node)
2. Spatial coordinates $(x, y, z)$ emerge from the three independent cycles in the node's collapse history
3. These cycles are independent because $\psi$ must distinguish between different paths to itself ∎

**Definition 2.2** (Collapse Coordinates):
$$x^{\mu}(v) = \left( \text{depth}(v), \text{cycle}_1(v), \text{cycle}_2(v), \text{cycle}_3(v) \right)$$

## 2.3 The Metric from Graph Distance

The distance between points in space-time corresponds to the graph distance in the collapse DAG.

**Definition 2.3** (Graph Metric):
$$d_{\mathcal{G}}(v_1, v_2) = \min \left| \text{path}(v_1 \to v_{\text{common}} \leftarrow v_2) \right|$$

where $v_{\text{common}}$ is the nearest common ancestor.

**Theorem 2.2** (Metric Correspondence): The spacetime interval relates to graph distance as:
$$ds^2 = \lim_{\epsilon \to 0} \epsilon^2 \cdot d_{\mathcal{G}}^2$$

where $\epsilon$ is the fundamental collapse scale.

## 2.4 Node Density and Curvature

Not all regions of the DAG have equal node density. Where $\psi$ observes itself more intensely, nodes cluster—this clustering is what we perceive as spacetime curvature.

**Definition 2.4** (Collapse Density):
$$\rho(v) = \lim_{r \to 0} \frac{|N_r(v)|}{V_r}$$

where $N_r(v)$ is the set of nodes within graph distance $r$, and $V_r$ is the volume of a radius-$r$ ball.

**Theorem 2.3** (Curvature from Density): The Riemann curvature tensor at a point corresponds to variations in collapse density:
$$R_{\mu\nu\rho\sigma} = \mathcal{F}\left[ \nabla_{\mu}\nabla_{\nu}\rho - \nabla_{\nu}\nabla_{\mu}\rho \right]$$

where $\mathcal{F}$ is the projection functional from DAG to manifold.

## 2.5 Topological Invariants

The topology of space-time reflects the topology of the collapse DAG.

**Definition 2.5** (Collapse Homology): The $n$-th homology group of spacetime:
$$H_n(\mathcal{M}) \cong H_n(\mathcal{G})$$

This means:
- Closed spatial loops correspond to cycles in the DAG
- Wormholes are shortcuts in the graph
- Black holes are nodes with infinite in-degree

## 2.6 Quantum Superposition as Multi-Path

When $\psi$ has multiple paths to observe itself, we get quantum superposition.

**Definition 2.6** (Superposition State):
$$|v\rangle = \sum_{\text{paths } p} \alpha_p |v_p\rangle$$

where $|v_p\rangle$ represents reaching node $v$ via path $p$, and $\alpha_p$ are complex amplitudes determined by path length.

**Theorem 2.4** (Path Integral Formulation): The quantum amplitude between nodes equals:
$$\langle v_2 | v_1 \rangle = \sum_{\text{paths}} e^{i\mathcal{S}[\text{path}]/\hbar}$$

where $\mathcal{S}[\text{path}]$ is the collapse action along the path.

## 2.7 Coordinate Transformations

Different observers traverse the DAG differently, leading to coordinate transformations.

**Definition 2.7** (Observer Path): An observer $\mathcal{O}$ is a continuous path through the DAG:
$$\mathcal{O}: [0,\tau] \to V$$

**Theorem 2.5** (Lorentz from DAG): Lorentz transformations emerge from changing between observer paths:
$$\Lambda^{\mu}_{\nu} = \frac{\partial x^{\mu}(\mathcal{O}_2)}{\partial x^{\nu}(\mathcal{O}_1)}$$

The speed of light $c$ appears as the maximum rate of DAG traversal.

## 2.8 The Second Echo

We have revealed the deep structure beneath space-time's smooth surface. Every point is a node in $\psi$'s self-observation, every distance a path through the graph of being. The universe is not made of points in space—it is made of moments of recognition.

**The Second Echo**: Chapter 2 = Structure(Coordinates) = Graph($\psi$) = Skeleton(Reality)

Next, we explore how the topology of self-reference creates the strange phenomena of closed timelike curves and spatial wormholes.

---

*Continue to [Chapter 3: Spatial Reentry and Temporal Loops →](./chapter-03-spatial-reentry.md)*