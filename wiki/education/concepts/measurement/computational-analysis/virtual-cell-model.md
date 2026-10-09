---
title: "Virtual cell model: a computed biological response"
type: "concept"
domain: "measurement/computational-analysis"
summary: "A virtual cell model uses computation to represent selected cell properties or responses rather than growing a living experimental preparation."
glossary_anchor: "virtual-cell"
aliases: ["virtual cell", "virtual cell model", "virtual cells", "in silico perturbation"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq]]", "[[wiki/education/concepts/evidence-and-statistics/study-design/perturbation-and-controls]]"]
used_by: ["[[wiki/education/guides/predicting-response-before-treating/02-check-the-experiment]]","[[wiki/education/guides/predicting-response-before-treating/index]]","[[wiki/education/modeling-tumor-response/index]]"]
sensitive: false
tags: ["education", "functional-models"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Virtual cell model: a computed biological response

## In one sentence

A virtual cell model uses computation to represent selected cell properties or responses rather than growing a living experimental preparation.

## The intuition

A weather model can explore tomorrow's conditions without creating tomorrow's weather. A virtual cell model similarly estimates selected biology. Its predictions depend on its inputs, assumptions and testing. The analogy ends at the scale: a cellular model might predict one [ribonucleic acid (RNA) program](/wiki/education/concepts/biology-basics/genetics/central-dogma), not the full behavior of a cell or person.

## How it works

Some models use equations describing mechanisms. Others learn statistical relationships from measured data, including machine learning. These approaches can be combined. “Virtual cell” names an ambition or model category; it does not establish one architecture or a complete simulation of life.

The **task** defines what the output means. Predicting a missing RNA value from an image, estimating a drug response and predicting a gene-disruption response are different tasks. Success at filling a measurement gap does not validate an intervention prediction.

A **virtual perturbation** changes a model input and calculates an output. It is not a performed cellular experiment. In particular, masking a gene value is not automatically equivalent to removing that gene's function. The biological intervention must be represented and evaluated appropriately.

**Held-out** data are reserved for evaluation rather than model fitting or selection. Holding out more cells from a familiar experiment asks a different question from holding out an entire intervention, donor or cell type. Tests should match the intended new use. Avoid shared patients, batches or labels leaking information across the split.

**Portability** asks whether the model still works when its context changes. A new cancer type, preparation, drug dose or laboratory may differ from training data. Inputs must be compatible, and performance needs fresh evaluation. A broadly trained model is not automatically validated everywhere.

## Why it matters in cancer

A model can help prioritize experiments or organize candidate mechanisms. It can explore more possibilities than a small physical screen. Whether a prediction supports treatment selection requires separate intended-use clinical evidence.

## Worked example

A fictional model learns RNA responses after interventions in one cell line. It correctly predicts additional cells exposed to a familiar intervention. Researchers next ask about a never-tested intervention in breast tumor cells. The first result did not test that new task. A reserved set of measured interventions and compatible breast-cell data would support a closer evaluation.

## Common confusions

- Predicted RNA is not measured RNA, protein activity or patient benefit.
- High agreement across all genes can conceal poor prediction of the few genes that changed.
- A **baseline** is a simple comparison method, such as predicting an average response. A complex model should earn its added value against meaningful baselines.
- An association learned from untreated tissue does not automatically identify a causal drug effect.
- Changing the test set repeatedly until performance looks good weakens its independence.

## How it is measured

| Model-card field | What to retain |
|---|---|
| Input and tissue cost | Required measured data, preprocessing and missing inputs; computation uses data, while new data collection may consume tissue |
| Output | Predicted object, units, intervention, dose and time context |
| Version and scope | Model version, training population and intended task |
| Evaluation | What was held out, comparator baselines, error measures and external data |
| Failure modes | Leakage, incompatible inputs, context shift or prediction of the wrong endpoint |
| Cannot establish alone | A performed perturbation, complete cell biology or improved clinical outcomes |

## Related concepts

- [Bulk RNA sequencing](/wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq)
- [Controlled perturbation](/wiki/education/concepts/evidence-and-statistics/study-design/perturbation-and-controls)
- [Analytical validity, clinical validity and utility](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility)

## Sources and scope

Source check: October 9, 2026. Model evaluation principles; performance belongs to a particular task and version. Expert and learner review remain pending.

- [Lotfollahi et al., 2019: scGen perturbation-response experiments](https://www.nature.com/articles/s41592-019-0494-8) — particular evaluated data contexts, rather than universal portability.
- [Ahlmann-Eltze et al., 2025: primary comparison with simple perturbation-prediction baselines](https://pmc.ncbi.nlm.nih.gov/articles/PMC12328236/) — benchmark-specific findings.
- [Bunne et al., 2024: virtual-cell priorities and opportunities](https://www.cell.com/cell/fulltext/S0092-8674(24)01332-1) — perspective, not clinical validation.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Check what the experiment actually tests](/wiki/education/guides/predicting-response-before-treating/02-check-the-experiment)
- [Understand what a tumor model can predict](/wiki/education/guides/predicting-response-before-treating/index)
- [Choose a tumor model for the question](/wiki/education/modeling-tumor-response/index)
<!-- END GENERATED USED IN -->
