---
title: "Patient-derived xenograft: a tumor growing in another host"
type: "concept"
domain: "measurement/functional-models"
summary: "A patient-derived xenograft is a model made by implanting patient tumor material into an animal of another species."
glossary_anchor: "pdx"
aliases: ["patient-derived xenograft", "PDX", "pdx", "tumor graft"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]"]
used_by: ["[[wiki/education/guides/predicting-response-before-treating/index]]","[[wiki/education/modeling-tumor-response/index]]"]
sensitive: false
tags: ["education", "functional-models"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Patient-derived xenograft: a tumor growing in another host

## In one sentence

A patient-derived xenograft is a model made by implanting patient tumor material into an animal of another species.

## The intuition

Moving a plant into another garden lets you study it in living surroundings. The plant may keep important features, while the soil, weather and neighboring organisms change. A tumor graft also keeps some tumor properties within a different host. The analogy is limited: cancer populations can evolve, and the host's immune system changes which cells can survive.

## How it works

A **patient-derived xenograft (PDX)** starts with tumor material from a patient. **Engraftment** means establishing growth after implantation. Conventional cancer PDX models commonly use immunodeficient mice, whose immune defenses are altered to permit human tissue growth. They do not reproduce the patient's intact immune system.

A graft can retain useful tumor morphology and molecular features. At the same time, human supporting tissue can be lost and replaced by mouse-derived vessels, fibroblasts and other host components. A human tumor-cell target and a mouse stromal target may respond differently to the same reagent.

Engraftment is a selection step. Not every submitted tumor grows, and the growing population may not preserve every original branch. Further transfer between animals can add selection and change. Check the actual model against the source specimen and record its passage history; neither perfect fidelity nor inevitable complete divergence should be assumed.

**Humanized** models add selected human immune components. Their source, compatibility, development and persistence matter. Adding human cells does not automatically reconstruct the patient's entire immunity or remove species differences.

Drug dosing in a living animal is **in vivo**. Removing graft cells and treating them in a dish is a different, outside-body experiment. The specimen's animal history does not make its later dish assay in vivo.

## Why it matters in cancer

A PDX can support tumor-growth and treatment experiments with circulation and whole-animal exposure. That is useful biology. Mouse metabolism, tolerance and immune context still differ from human care. An animal response does not establish a safe human dose or a beneficial treatment choice.

## Worked example

A fictional breast-tumor graft keeps a malignant-cell receptor but its vessels are mouse-derived. A human-specific antibody binds the tumor cells in the model. If the proposed mechanism also requires binding human vessel cells, that component has not been reproduced. The species assignment changes what the experiment can test.

## Common confusions

- Patient-derived does not mean patient-identical.
- Failed engraftment is a model-establishment outcome, not proof of treatment resistance.
- A conventional PDX is not an intact human immune model.
- Growth delay and tumor-cell death are different endpoints.
- Matching molecular features does not validate every possible drug prediction.

## How it is measured

| Assay-card field | What to retain |
|---|---|
| Input and tissue cost | Suitable patient tumor material; establishment and experiments use finite material |
| Model identity | Cancer type, source site and time, host strain, human/mouse compartments and passage |
| Output | Stated growth, burden, survival or mechanistic readout, with measurement rules |
| Controls | Comparator animals, exposure measurements and mechanism-relevant controls |
| Failure modes | No engraftment, selection, changed compartments or an unsuitable host |
| Validation | Fidelity for the particular question and independent evidence for intended use |

## Related concepts

- [Organoid](/wiki/education/concepts/measurement/functional-models/organoid)
- [Tumor heterogeneity](/wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity)
- [Controlled perturbation](/wiki/education/concepts/evidence-and-statistics/study-design/perturbation-and-controls)

## Sources and scope

Source check: October 9, 2026. Model mechanisms, not a universal fidelity or clinical-benefit claim. Expert and learner review remain pending.

- [DeRose et al., 2011: primary breast-tumor graft study and human/mouse stromal assessment](https://pmc.ncbi.nlm.nih.gov/articles/PMC3553601/).
- [Ben-David et al., 2017: copy-state changes and selection during PDX propagation](https://www.nature.com/articles/ng.3967) — the extent of change needs assessment in the actual model.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Understand what a tumor model can predict](/wiki/education/guides/predicting-response-before-treating/index)
- [Choose a tumor model for the question](/wiki/education/modeling-tumor-response/index)
<!-- END GENERATED USED IN -->
