---
title: "Adaptive immune resistance"
type: "concept"
domain: "immunology/tumor-immunology"
summary: "Adaptive immune resistance is a tumor's induced defense in which interferon gamma released by attacking T cells switches on PD-L1 and other inhibitory signals that restrain those same T cells."
glossary_anchor: "adaptive-immune-resistance"
aliases: ["adaptive immune resistance", "adaptive resistance", "IFN-gamma-induced PD-L1", "interferon-induced PD-L1"]
level: "intermediate"
prerequisites:
  - "[[wiki/education/concepts/immunology/immune-regulation/immune-checkpoint]]"
  - "[[wiki/education/concepts/immunology/the-immune-system/interferons]]"
used_by: ["[[wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]"]
sensitive: false
tags: ["education", "immunology"]
updated: 2026-11-07
source_checked: 2026-11-07
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Adaptive immune resistance

## In one sentence

Adaptive immune resistance is a tumor's induced defense in which interferon gamma released by attacking T cells switches on PD-L1 and other inhibitory signals that restrain those same T cells.

## The intuition

Imagine a building whose doors lock only when someone knocks. A locked door then tells you that someone came. Adaptive resistance works the same way: the brake is pulled in response to the attack, so its presence is partly a sign that an immune response reached the tumor. The analogy breaks because PD-L1 can also be switched on by tumor signaling without any T cells.

## How it works

1. A T cell recognizes a tumor peptide on [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) and releases [interferon gamma](/wiki/education/concepts/immunology/the-immune-system/interferons).
2. Interferon gamma signals through JAK1 and JAK2 kinases in nearby tumor and immune cells.
3. Those cells raise programmed death-ligand 1 (PD-L1), among other inhibitory signals.
4. PD-L1 binds programmed cell death protein 1 (PD-1) on the T cell and damps its activity.

Early evidence for this loop in people came from melanocytic lesions: 98% of PD-L1-positive tumors had tumor-infiltrating lymphocytes, compared with 28% of PD-L1-negative tumors, PD-L1-positive cells sat right next to the lymphocytes, and interferon gamma was found at that interface ([Taube et al., 2012](https://pubmed.ncbi.nlm.nih.gov/22461641/)). The alternative, called **innate** or **constitutive** resistance, is PD-L1 driven by the cancer cell's own signaling, regardless of T cells.

## Why it matters in cancer

- **It links "hot" to PD-L1.** A lymphocyte-rich tumor is more likely to stain for PD-L1, because the lymphocytes induce it. See [hot, excluded and cold patterns](/wiki/education/concepts/immunology/tumor-immunology/hot-excluded-cold-tumor).
- **It is the step PD-1 and PD-L1 drugs block.** [Immune-checkpoint inhibitors](/wiki/education/concepts/therapeutics/immunotherapy/immune-checkpoint-inhibitor) interrupt step 4.
- **It explains one escape route.** A tumor that loses JAK1 or JAK2 cannot respond to interferon gamma, so it loses this induced PD-L1 along with interferon-driven antigen display; see [immune escape](/wiki/education/concepts/immunology/tumor-immunology/immune-escape).

## Common confusions

- **PD-L1-positive is not "the tumor is suppressing the immune system on its own".** In adaptive resistance, the signal is a reaction to T cells.
- **PD-L1-negative is not "no immune attack".** Staining is patchy, assays differ and other brakes exist; see [PD-L1 scoring](/wiki/education/concepts/measurement/pathology-readouts/pd-l1-scoring).
- **Adaptive resistance is not acquired resistance.** "Acquired resistance" means a tumor that responded to treatment and then stopped responding.

## Try it

A biopsy shows PD-L1 staining only at the border where lymphocytes gather, and none in the tumor center. Which kind of PD-L1 expression does that pattern suggest?

**Answer:** Adaptive (induced) expression, because it tracks the immune cells. Spread evenly through a tumor with no lymphocytes would suggest constitutive expression. The pattern is suggestive, not proof.

## Explain it back

"In adaptive resistance, ___ from T cells causes ___, which ___." One answer: "interferon gamma; PD-L1 on nearby cells; restrains those T cells through PD-1."

## Takeaway

**Induced PD-L1 is a brake pulled by the attack itself, which is why it often marks tumors that T cells have reached.**

## Related concepts

- [Immune checkpoint](/wiki/education/concepts/immunology/immune-regulation/immune-checkpoint)
- [Interferons](/wiki/education/concepts/immunology/the-immune-system/interferons)
- [T-cell exhaustion](/wiki/education/concepts/immunology/t-cells/t-cell-exhaustion)

## Sources and scope

Source-checked November 7, 2026, against the PubMed abstract. Mechanism concept; no treatment recommendation. Expert and learner review pending.

- [Taube et al., 2012: colocalization of PD-L1 (B7-H1) with inflammatory infiltrates supports adaptive resistance](https://pubmed.ncbi.nlm.nih.gov/22461641/).
- [Zaretsky et al., 2016: JAK1 and JAK2 loss in acquired resistance to PD-1 blockade](https://pubmed.ncbi.nlm.nih.gov/27433843/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [What checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change)
- [How the immune system fights cancer](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
<!-- END GENERATED USED IN -->
