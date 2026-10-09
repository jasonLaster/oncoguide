---
title: "Ex vivo drug screen: response outside the original body"
type: "concept"
domain: "measurement/functional-models"
summary: "An ex vivo drug screen measures how collected living material responds to drug exposure outside its original organism."
glossary_anchor: "ex-vivo-drug-screen"
aliases: ["ex vivo drug screen", "ex vivo drug screening", "drug sensitivity screen", "functional drug testing"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]", "[[wiki/education/concepts/evidence-and-statistics/study-design/perturbation-and-controls]]"]
used_by: ["[[wiki/education/guides/predicting-response-before-treating/02-check-the-experiment]]","[[wiki/education/guides/predicting-response-before-treating/index]]","[[wiki/education/modeling-tumor-response/index]]"]
sensitive: false
tags: ["education", "functional-models"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Ex vivo drug screen: response outside the original body

## In one sentence

An ex vivo drug screen measures how collected living material responds to drug exposure outside its original organism.

## The intuition

Testing a spare component on a workbench can reveal how it responds. The bench does not recreate the complete machine. A living tumor sample also permits a direct experiment, while leaving body-level delivery, metabolism and toxicity outside its scope. Direct measurement in a model and prediction of patient benefit remain different claims.

## How it works

Researchers obtain suitable living material, prepare the model, expose it to drugs and measure a defined response. Some screens use freshly dissociated cells or short-lived tissue fragments. Others use expanded [organoids](/wiki/education/concepts/measurement/functional-models/organoid). The model and its preparation must be named; “ex vivo” alone does not tell us what survived.

The cells supplying the readout matter. A mixed sample can contain normal neighbors, and expansion can favor selected cancer populations. Fixed tissue cannot supply a living culture. Ordinary snap-freezing and validated viable cryopreservation preserve different properties; suitability is protocol-specific.

A screen may measure cell number, metabolism, mass, growth or death. These are not interchangeable. For example, a fall in **adenosine triphosphate (ATP)**, a cellular energy molecule, can reflect fewer cells or altered metabolism. A death claim needs a suitable death readout and controls. Baseline growth also changes how an endpoint comparison should be interpreted.

[Controlled perturbation](/wiki/education/concepts/evidence-and-statistics/study-design/perturbation-and-controls) compares treatment with suitable controls over stated concentrations and times. Drug access, medium and exposure duration can change the result. A laboratory concentration must not be relabeled as a safe human dose.

## Why it matters in cancer

A screen can test a drug-response hypothesis in a defined model. Agreement with patient outcomes requires validation of the actual assay, drug class, disease and setting. Showing that decisions guided by the screen improve outcomes is a further clinical-utility question.

## Worked example

In a fictional screen, drug A leaves half the vehicle-normalized metabolic signal. Imaging finds similar numbers of living malignant cells but lower activity per cell. The supported claim is a metabolic response under those conditions. Calling it 50% cancer-cell killing would change the measured endpoint.

## Common confusions

- Less growth relative to vehicle does not necessarily mean fewer cells than at the experiment's start.
- A tumor-only culture cannot fully test a medicine that needs immune-cell interactions.
- A ranked drug list does not establish that the top drug benefits a patient.
- Failed or uninterpretable samples belong in the validation record; omitting them changes the reported population.

## How it is measured

| Assay-card field | What to retain |
|---|---|
| Input and tissue cost | Viable preparation, source and transport/processing conditions; testing consumes material |
| Output and units | Exact readout, normalization, dose range, time and replicate variability |
| Threshold | Assay- and study-specific rule set before interpretation |
| Controls | Vehicle, adequate response controls, tumor-cell attribution and mechanism controls |
| Failure modes | Poor viability, missing cells, unrealistic exposure, culture selection or an ambiguous endpoint |
| Validation | Assay version and reporting scope; validity and clinical utility assessed separately |

## Related concepts

- [Organoid](/wiki/education/concepts/measurement/functional-models/organoid)
- [Patient-derived xenograft](/wiki/education/concepts/measurement/functional-models/patient-derived-xenograft)
- [Analytical validity, clinical validity and utility](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility)

## Sources and scope

Source check: October 9, 2026. General assay interpretation; no universal response threshold. Expert and learner review remain pending.

- [Ladan et al., 2023: a specified ex vivo anthracycline assay compared with neoadjuvant breast-cancer response](https://pubmed.ncbi.nlm.nih.gov/37777518/) — proof of concept for that assay and setting.
- [Hafner et al., 2016: growth-rate confounding in cell-based drug measurements](https://pmc.ncbi.nlm.nih.gov/articles/PMC4887336/).
- [Cell viability assays, NIH Assay Guidance Manual](https://www.ncbi.nlm.nih.gov/books/NBK144065/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Check what the experiment actually tests](/wiki/education/guides/predicting-response-before-treating/02-check-the-experiment)
- [Understand what a tumor model can predict](/wiki/education/guides/predicting-response-before-treating/index)
- [Choose a tumor model for the question](/wiki/education/modeling-tumor-response/index)
<!-- END GENERATED USED IN -->
