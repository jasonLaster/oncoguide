---
title: "Bioprinting: building a planned biological layout"
type: "concept"
domain: "measurement/functional-models"
summary: "Bioprinting uses controlled deposition of cells, biomaterials or both to build a planned structure for a biological experiment."
glossary_anchor: "bioprinting"
aliases:
  - "bioprinting"
  - "3D bioprinting"
  - "bioink"
level: "intermediate"
prerequisites:
  - "[[wiki/education/concepts/biology-basics/cells/cell-and-membrane]]"
  - "[[wiki/education/concepts/cancer-biology/tumor-microenvironment/extracellular-matrix]]"
used_by: ["[[wiki/education/guides/predicting-response-before-treating/index]]","[[wiki/education/modeling-tumor-response/index]]"]
sensitive: false
tags:
  - "education"
  - "measurement"
  - "functional-models"
updated: "2026-10-10"
source_checked: "2026-10-10"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Bioprinting: building a planned biological layout

## In one sentence

Bioprinting uses controlled deposition of cells, biomaterials or both to build a planned structure for a biological experiment.

## The intuition

A building plan helps place walls and rooms. It does not prove that the finished building has working plumbing or healthy occupants. Bioprinting similarly controls where material goes. Cells must still survive, interact and behave as intended. The analogy is limited because living cells can migrate, remodel their surroundings and change the printed layout.

## How it works

A printing design specifies positions, materials and fabrication steps. A **bioink** is a formulation used to build the biological construct, often containing cells within a supportive material. The [extracellular matrix](/wiki/education/concepts/cancer-biology/tumor-microenvironment/extracellular-matrix) is the surrounding molecular scaffold in tissue; a chosen printing material reproduces selected features of that environment, not its entire composition.

Different designs deposit cell-containing material or fabricate a structure that receives cells later. Setting the material into a stable gel, creating channels and adding different cell populations are distinct steps. The method must check the resulting geometry and cell health rather than assume the digital design survived fabrication unchanged.

Kolesky and colleagues combined cell-containing inks with a removable **sacrificial ink** that marked channel paths. After that ink was removed, channels were lined with endothelial cells, which form vascular surfaces, and perfused with fluid. This was an engineered tissue experiment using defined cell types, not a completed human organ or a cancer-treatment trial. [Primary methods and figures](https://lewisgroup.seas.harvard.edu/sites/g/files/omnuum11526/files/lewis-lab/files/three-dimensional_bioprinting_of_thick_vascularized_tissues.pdf).

Bioprinting describes **fabrication**. A [tumor-on-chip](./tumor-on-chip) describes an engineered culture device and its controlled conditions. They can combine. Yi and colleagues reported a printed glioblastoma-on-chip with tumor cells, endothelial cells and brain-derived matrix material. That particular research model does not validate every printed tumor as a personal treatment selector. [Primary study abstract](https://www.nature.com/articles/s41551-019-0363-x).

## Why it matters in cancer

A planned layout lets researchers ask whether distance, cell arrangement or a material changes a response. Comparing the same cells in different controlled layouts can investigate environmental contributions that a tumor-only flat culture omits. More detailed fabrication also introduces more variables. If matrix composition and cell arrangement both change, an observed difference cannot automatically be attributed to arrangement.

## Model and assay card

| Field | What to retain |
|---|---|
| Measures / how | Printing constructs a model; imaging and a separately specified assay measure its geometry, viability or response |
| Input and tissue cost | Defined cells, optional patient-derived viable material and matrix components; fabrication/quality control use material and may require expansion |
| Output and units | Actual dimensions in micrometers/millimeters, cell viability or population-specific counts, and the chosen assay's units |
| Thresholds | Geometry, survival and functional acceptance criteria belong to the design; no universal “printed successfully” clinical threshold |
| Failure modes | Incorrect placement, material incompatibility, cell injury, unequal initial composition or inadequate transport |
| Cannot tell alone | Functional blood vessels, complete tumor biology, immune recognition or patient benefit |
| Validation context | Confirm fabrication reproducibility and intended biological function; clinical prediction needs separate population- and endpoint-specific evidence |

## Common confusions

- **Printed versus self-organized:** an [organoid](./organoid) self-organizes selected tissue features; printing imposes an initial layout. A study may use both.
- **Channel versus vessel:** an empty path is not automatically a living vascular barrier.
- **Perfusion versus full circulation:** supplying fluid does not recreate human drug metabolism or every organ exposure.
- **Patient-derived versus patient-complete:** added cells and materials may come from other sources; record each source.

## Try it

An invented printed model contains tumor cells and fibroblasts, connective-tissue cells. A new version uses a different gel and places the fibroblasts closer to tumor cells. Tumor growth rises. Has proximity been proved to cause the difference?

**Answer:** No. Gel composition changed too. Compare layouts using the same material, initial cell numbers and conditions, with tumor-only controls where appropriate. Verify the actual final layout and cell identities; a plan is not a measurement.

## Explain it back

“Printing controls ___; functional checks establish ___.”

One answer: “a planned initial arrangement; whether the constructed model has the measured properties needed for the question.”

## Takeaway

**A precise layout becomes useful evidence when its actual structure and biology are checked.**

## Related concepts

- [Co-culture](./co-culture).
- [Cell lines](./cell-lines).
- [Controlled perturbation](/wiki/education/concepts/evidence-and-statistics/study-design/perturbation-and-controls).

## Sources and scope

Source check: October 10, 2026. Kolesky's accessible primary PDF methods/figures were checked; Yi's accessible primary abstract supports the bounded cancer-model example, not a detailed protocol or universal predictive accuracy. The exercise is fictional. Expert and learner review remain pending.

- [Kolesky et al., 2016: Three-dimensional bioprinting of thick vascularized tissues](https://lewisgroup.seas.harvard.edu/sites/g/files/omnuum11526/files/lewis-lab/files/three-dimensional_bioprinting_of_thick_vascularized_tissues.pdf).
- [Yi et al., 2019: A bioprinted human-glioblastoma-on-a-chip for identification of patient-specific responses to chemoradiotherapy](https://www.nature.com/articles/s41551-019-0363-x).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Understand what a tumor model can predict](/wiki/education/guides/predicting-response-before-treating/index)
- [Choose a tumor model for the question](/wiki/education/modeling-tumor-response/index)
<!-- END GENERATED USED IN -->
