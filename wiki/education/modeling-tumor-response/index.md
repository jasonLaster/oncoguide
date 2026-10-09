---
title: "Choose a tumor model for the question"
type: "guide-lesson"
guide: "predicting-response-before-treating"
step: 1
minutes: 12
objectives: ["Match a biological question to a model and an observable response.", "Explain what changes when patient tissue is cultured, implanted or represented computationally."]
prerequisites: ["[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]", "[[wiki/education/concepts/measurement/functional-models/organoid]]", "[[wiki/education/concepts/measurement/computational-analysis/virtual-cell-model]]"]
sensitive: false
tags: ["education", "functional-models"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Choose a tumor model for the question

**A model is useful when it contains the biology your question needs and produces a readout you can interpret.**

**Before you start:** [Tumor heterogeneity](/wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity) explains why one sample can miss populations. An [organoid](/wiki/education/concepts/measurement/functional-models/organoid) preserves selected tissue features in culture. A [virtual cell model](/wiki/education/concepts/measurement/computational-analysis/virtual-cell-model) computes selected properties or responses.

## Where this step sits

This is step 1 of [Predict response before treating](/wiki/education/guides/predicting-response-before-treating/index). First choose a question and model. The next lessons check the experiment, then ask how far its result can travel toward patient care.

## Begin with the sentence you want to test

A model is a deliberately incomplete representation. Think of trying out a bicycle brake on a workbench. The bench can test the brake, but not the rider's journey through traffic. Tumor models similarly answer selected questions. Adding more parts helps only if they matter to the claim.

Write the question with a biological action and an endpoint: “Does drug A reduce the number of living malignant cells at these exposures?” That is clearer than “Which drug works?” The second question hides delivery, immune interactions, toxicity, timing and clinical outcomes inside one word.

A [molecular profile](/wiki/education/reading-a-tumor/omics-and-multi-omics) can suggest an intervention. Detecting a sequence change or high [ribonucleic acid (RNA)](/wiki/education/concepts/biology-basics/genetics/central-dogma) is different from exposing living cells to a drug. A computed response is also a prediction, even when the input came from measured patient tissue.

## Choose what must be present

| Model | A question it can help test | What must still be checked |
|---|---|---|
| [Ex vivo drug screen](/wiki/education/concepts/measurement/functional-models/ex-vivo-drug-screen) using cells or fragments | What response follows a defined exposure outside the original body? | Viability, tumor-cell attribution, retained neighbors and exposure |
| Patient-derived organoid | What do selected cultured populations do under repeated experiments? | Malignant identity, culture selection, matrix and missing cell types |
| [Patient-derived xenograft (PDX)](/wiki/education/concepts/measurement/functional-models/patient-derived-xenograft) | What happens to tumor growth after dosing an animal host? | Host immunity, species-specific compartments, engraftment and passage |
| Immune co-culture or a method retaining immune cells | Do specified immune and tumor populations interact after an intervention? | Compatibility, cell persistence, recognition controls and readout |
| Virtual cell model | Which measured cellular response might follow an intervention? | Task, version, training context, independent tests and uncertainty |

These categories overlap. An organoid can supply an ex vivo screen. A model can retain selected immune cells without retaining an entire immune system. The name tells you where to begin checking; it does not complete the check.

A living animal experiment is **in vivo**. A later experiment on cells removed from that animal is outside-body testing. A computer simulation is **in silico**. These labels describe the experimental setting rather than a ranking of fidelity.

## The surroundings can change the question

Conventional epithelial organoids commonly lack the original immune populations. Specialized cultures can retain or add selected components. Primary organoid studies demonstrate that immune experiments are possible; they do not establish that every culture has that ability.

Conventional PDX hosts commonly have impaired immunity. Human supporting tissue can also give way to mouse-derived stroma and vessels. A drug needing a human immune or stromal interaction may therefore need another design. Humanized models add selected human components whose source and compatibility still matter.

Engineered matrices and perfused channels can help study selected access or architecture questions. They do not add every missing organ or reproduce human metabolism. Likewise, a virtual model that predicts RNA after gene disruption has not automatically learned safe drug dosing or whole-body response.

## Work through a fictional choice

Imagine a team testing three ideas in a breast-tumor sample. All observations here are invented.

First, drug A may directly disrupt a tumor-cell repair process. A verified living tumor culture could test that response under defined exposures. Its endpoint needs to distinguish slowed growth from death.

Second, antibody B may release a T-cell response through an [immune checkpoint](/wiki/education/concepts/immunology/immune-regulation/immune-checkpoint). A tumor-only culture lacks the relevant interaction. A characterized immune-containing model is a closer choice, with target-specific controls. Mouse growth alone is not a substitute for those missing cells.

Third, a computational model predicts that disrupting gene C changes an RNA program. That can prioritize a measured experiment. It has not shown that a drug achieves the same perturbation, kills the tumor or benefits a patient.

There may be several suitable models, each exposing a different bridge. The strongest plan names that bridge rather than declaring one platform universally best.

## What can go wrong at this step

- A model omits the cells required by the medicine's mechanism.
- Culture or engraftment favors only part of the original tumor.
- A mouse-derived compartment is mistaken for patient tissue.
- A computed prediction is described as a performed intervention.
- Model establishment takes too long for the intended decision window.

A failed culture or graft means that model did not yield an interpretable experiment. It is not a direct statement about whether the patient's cancer would resist the drug.

## Try it

A tumor-only organoid is available. Researchers want to know whether a checkpoint-blocking antibody improves tumor killing by immune cells. What is missing?

**Answer:** The required immune interaction, including suitable immune cells and their compatibility with the tumor. Adding them creates a new experiment whose composition, controls and response need characterization. Even a positive result still needs clinical validation.

## Explain it back

“Our question is ______. The model contains ______, but leaves out ______. Its readout can establish ______.”

One answer: “a direct drug effect on living malignant cells; selected tumor populations; the full body and immunity; a response under the tested conditions.”

## Takeaway

**Choose the model by the missing biological question, and keep its omissions beside the result.**

**Next:** [Check what the experiment actually tests](/wiki/education/guides/predicting-response-before-treating/02-check-the-experiment).

## Sources and scope

Source check: October 9, 2026. Model-selection education, not a testing recommendation or universal accuracy ranking. Expert and learner review remain pending.

- [Neal et al., 2018: selected immune-containing organoid systems](https://pubmed.ncbi.nlm.nih.gov/30550791/).
- [DeRose et al., 2011: breast-tumor graft features and species-specific stroma](https://pmc.ncbi.nlm.nih.gov/articles/PMC3553601/).
- [Lotfollahi et al., 2019: a specified computational perturbation-response model](https://www.nature.com/articles/s41592-019-0494-8).
