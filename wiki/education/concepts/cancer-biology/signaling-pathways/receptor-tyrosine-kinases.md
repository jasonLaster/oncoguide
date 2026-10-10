---
title: "Receptor tyrosine kinases: turning a surface signal into protein phosphorylation"
type: "concept"
domain: "cancer-biology/signaling-pathways"
summary: "Receptor tyrosine kinases are membrane receptors whose intracellular kinase machinery transfers phosphate groups to proteins to transmit a signal."
glossary_anchor: "receptor-tyrosine-kinases"
aliases: ["receptor tyrosine kinase", "RTK", "RTKs", "FGFR", "fibroblast growth factor receptor"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/biology-basics/signaling/ligand-and-receptor]]", "[[wiki/education/concepts/measurement/proteins-and-spatial/phosphoproteomics]]"]
used_by: ["[[wiki/education/molecular-profiling/evee-pathways/03-notch-wnt-and-fgfr]]"]
sensitive: false
tags: ["education", "cancer-biology"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Receptor tyrosine kinases: turning a surface signal into protein phosphorylation

## In one sentence

Receptor tyrosine kinases are membrane receptors whose intracellular kinase machinery transfers phosphate groups to proteins to transmit a signal.

## The intuition

Think of a door sensor connected to several machines inside a workshop. Detecting a visitor can start the machinery, but having more sensors does not prove the machinery is running. The analogy stops at the wiring: receptors are flexible proteins, and their partners and chemical modifications control the signal.

## How it works

A [ligand](/wiki/education/concepts/biology-basics/signaling/ligand-and-receptor) is a binding partner. Many receptor tyrosine kinases, often shortened to **RTKs**, have a ligand-binding region outside the cell, a membrane-spanning region, and kinase machinery inside. A **kinase** transfers a phosphate group; a tyrosine kinase acts on tyrosine, one amino acid in proteins.

Ligand binding can bring receptors into an active arrangement. In the **epidermal growth factor receptor (EGFR)** family, an asymmetric interaction between kinase domains helps activate the machinery. Different receptor families use different arrangements. Activation is not simply one universal phosphorylation switch.

Activated receptors can phosphorylate tyrosines on themselves and other proteins. These changes create binding sites or alter protein function. Several intracellular branches can then change growth, survival or metabolism. [Phosphoproteomics](/wiki/education/concepts/measurement/proteins-and-spatial/phosphoproteomics) measures sampled phosphorylation sites; a single downstream site does not identify which receptor supplied the signal.

**Fibroblast growth factor receptors (FGFRs)** provide another example. Their ligand interactions can involve helper molecules. Primary structural work used FGF, FGFR and heparin to study receptor assembly; related heparan-sulfate molecules occur on cells and in surrounding tissue. Ligand supply, receptor family member and cellular context all matter.

```mermaid
flowchart TD
  A[Ligand and receptor context] --> B[Active kinase arrangement]
  B --> C[Protein phosphorylation]
  C --> D[Cell behavior]
  D --> E[Test whether the cell depends on it]
```

*The signal can be measured at several steps; dependence requires a separate experiment.*

## Why it matters in cancer

Cancer can alter receptor sequence, copy number, ligand supply or downstream regulation. These are different hypotheses. Particular kinase-domain FGFR4 mutations activated signaling in rhabdomyosarcoma experiments. That result cannot assign the same effect to every FGFR4 variant or another cancer type.

A drug also has its own target profile. A compound described as an “FGFR inhibitor” need not inhibit each FGFR equally at the tested exposure. Confirm engagement of the actual receptor before interpreting growth. Lower receptor phosphorylation supports a biochemical effect; selective killing and patient benefit require additional evidence.

## How it is measured

| Question | Useful research measurement | Limit |
|---|---|---|
| Is the receptor present? | Protein staining, with cell identity and location | Total amount is not activation |
| Is the circuit responding? | Receptor and downstream phosphorylation, before and after a defined signal | Sites can have several upstream causes |
| Is it needed? | Genetic perturbation and an independent inhibitor, followed by growth/death and restoration controls | A model dependence is not a clinical result |

Fixed tissue can support validated staining. Phosphorylation experiments need suitable preservation; live perturbations consume viable cells or models. Outputs may be staining scores or normalized phosphosite signals. There is no universal RTK-positive cutoff that selects a medicine. Specify the assay, receptor, exposure, comparator and validation context.

## Common confusions

- **RNA versus surface protein:** a message does not establish accessible receptor protein.
- **Amount versus activity:** many receptors can be present without an active circuit.
- **Activity versus dependence:** a cell can keep growing after one signal falls.
- **Family name versus exact target:** receptor members, variants and drug profiles are not interchangeable.

## Try it

A fictional culture has abundant FGFR4. Compound A lowers measured FGFR4 phosphorylation, but growth and death remain unchanged. Has FGFR4 dependence been established?

**Answer:** No. The experiment supports a biochemical response under that exposure. Test independent receptor perturbation and compensation, with relevant control cells, before claiming dependence. A patient's benefit would remain another question.

## Explain it back

“Receptor amount tells me ___; phosphorylation helps test ___; dependence requires ___.”

One answer: “what is present; the signaling state; an attributed functional effect.”

## Takeaway

**Name the receptor, locate the active step, and test its importance before drawing a drug-response conclusion.**

## Related concepts

- [PI3K–AKT–mTOR](/wiki/education/concepts/cancer-biology/signaling-pathways/pi3k-akt-mtor), a downstream signaling network.
- [Notch signaling](/wiki/education/concepts/cancer-biology/signaling-pathways/notch-signaling), which uses receptor cleavage rather than an RTK mechanism.
- [Ex vivo drug screening](/wiki/education/concepts/measurement/functional-models/ex-vivo-drug-screen), for functional evidence and its limits.

## Sources

Source check: October 9, 2026; expert and learner review pending. The practice culture is fictional. Structural and model experiments do not establish clinical selection.

- [Stauber et al., 2000: FGF–FGFR structural interactions](https://pubmed.ncbi.nlm.nih.gov/10618369/).
- [Zhang et al., 2006: EGFR kinase activation through an asymmetric dimer](https://pubmed.ncbi.nlm.nih.gov/16777603/).
- [Taylor et al., 2009: particular activating FGFR4 mutations in rhabdomyosarcoma models](https://pubmed.ncbi.nlm.nih.gov/19809159/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Notch, Wnt, and FGFR: locate the signal before choosing a target](/wiki/education/molecular-profiling/evee-pathways/03-notch-wnt-and-fgfr)
<!-- END GENERATED USED IN -->
