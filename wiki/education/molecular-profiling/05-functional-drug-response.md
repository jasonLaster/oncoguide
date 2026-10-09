---
title: What a living tumor model can tell us
type: guide-lesson
guide: multi-omics
step: 5
level: intermediate
updated: 2026-10-08
objectives:
  - Compare cells, organoids, and patient-derived xenografts.
  - Explain why response in a model does not establish clinical benefit.
prerequisites:
  - "[[wiki/education/reading-a-tumor/omics-and-multi-omics]]"
reviewed: pending
reviewed_by: ""
---

# What a living tumor model can tell us

**Functional testing measures a response in a model. The next question is how well that model represents the patient.** DNA, RNA, and protein suggest mechanisms. A living model lets researchers perturb those mechanisms with a drug.

**Before you start:** [[wiki/education/reading-a-tumor/omics-and-multi-omics|Review the molecular layers]]. Function adds an experiment rather than another parts list.

## Choose a model for the question

| Model | What researchers do | What it preserves | Important limitation |
|---|---|---|---|
| Dissociated cells | Separate cells and expose them to drugs | Some original tumor-cell properties | Tissue organization and interactions change |
| Organoids or spheroids | Grow cells in three-dimensional culture | Some architecture and heterogeneity | Culture selects cells; standard epithelial cultures lack a complete immune compartment |
| Tissue fragments | Test living pieces without extensive expansion | Some local stromal and immune interactions | Short survival and uneven penetration |
| Patient-derived xenograft (PDX) | Grow human tumor in a mouse and treat the animal | Many tumor features and whole-animal exposure | Human stroma is largely replaced by mouse stroma; conventional mice lack an intact human immune system |

PDX is an **in vivo** model. A mouse-derived organoid tested in a dish is an ex vivo or in vitro experiment. Neither is universally best. Establishment time and success depend on specimen, method, and disease. TNBC often engrafts more readily than estrogen-receptor-positive breast cancer; there is no single success rate or guaranteed turnaround for a new specimen. [Breast tumor graft study](https://pmc.ncbi.nlm.nih.gov/articles/PMC3553601/); [TNBC establishment study](https://www.nature.com/articles/s41523-022-00502-1).

## Immune effects need the relevant immune cells

A tumor-only organoid cannot reproduce a checkpoint inhibitor's full immune mechanism. Researchers can add immune cells, use air–liquid-interface cultures, or build other co-cultures. “Organoid” does not tell you whether an assay contains functional T cells. [Primary organoid immune-microenvironment study](https://doi.org/10.1016/j.cell.2018.11.021).

Ask which cells are present, whether tumor and immune cells come from the same person, what is measured, and which controls establish tumor-specific killing. A change in mass, growth, or viability is a readout; it does not automatically identify the mechanism.

## A worked example: two antibodies, different scores

Imagine two anti-PD-1 antibodies scoring 80 and 30 in one well-based assay. The numbers are invented.

The difference could reflect exposure, viability, cell composition, sampling, or measurement variation. Check reproducibility and controls first. A same-class difference in a single unvalidated assay does not prove one antibody would work better clinically. It cannot justify replacing an evidence-based regimen or adding a drug with a different toxicity profile.

## What can go wrong

- The model grows a subset of the original clones.
- Laboratory concentrations differ from achievable patient exposure.
- A drug reduces growth without killing cells.
- The model omits cells required for the mechanism.
- The experiment measures tumor response but not normal-tissue toxicity.
- Reported model–patient agreement excludes samples that failed to grow.

Interpretation needs dose ranges, controls, replicates, a stated endpoint, and validation in the relevant population. A model result does not establish an adjuvant indication. Retrospective agreement does not prove that model-guided treatment improves survival.

## Try it

A tumor-only organoid does not respond to pembrolizumab. Has it shown that the patient's immune system will not respond?

**Answer:** no. The model may omit the required immune cells. Even a suitable co-culture requires clinical validation.

## Explain it back

Read “the model responded” as an experimental finding, then ask what connects it to patient benefit.

## Takeaway

**Read “the model responded” as an experimental finding, then ask what connects it to patient benefit.**

**Next:** [[wiki/education/molecular-profiling/06-ctdna-and-mrd|Blood testing over time]]. Provider capabilities and specimen operations belong in [[wiki/diagnostics/functional-drug-testing|Functional drug testing]] and [[about/overview/test-tracker|the tracker]].

## Sources and scope

Source check: October 8, 2026. The studies above establish model characteristics, not a prescription for model-guided care. For controls and combination effects, see [[wiki/education/molecular-profiling/parp-and-cell-survival/04-reading-a-functional-experiment|Reading a functional experiment]].
