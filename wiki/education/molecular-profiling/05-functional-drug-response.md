---
title: "Test a mechanism in a living model"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 13
minutes: 10
objectives: ["Choose a living model that contains the biology required by the mechanism.", "Evaluate controls, exposure and clinical relevance of a model response."]
prerequisites: ["[[wiki/education/concepts/cancer-biology/what-cancer-is/oncogene-and-tumor-suppressor]]", "[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]", "[[wiki/education/concepts/evidence-and-statistics/biomarkers/actionability]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Test a mechanism in a living model

**A functional experiment changes something and observes the response. Its meaning depends on what the model preserves and what it leaves out.**

**Before you start:** [[wiki/education/concepts/cancer-biology/what-cancer-is/oncogene-and-tumor-suppressor|Cancer-driving gene roles]] separates activation and loss. [[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity|Heterogeneity]] explains what culture can select. [[wiki/education/concepts/evidence-and-statistics/biomarkers/actionability|Actionability]] keeps a model result separate from clinical benefit.

## Where this step sits

This is step 13 of [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. A parts list can suggest how a machine works. Changing one part tests that suggestion. Living tumor models let researchers perturb a proposed mechanism, often with a drug. The model must contain the components the question requires.

## Match the model to the question

| Model | What researchers do | Useful feature | Main limitation |
|---|---|---|---|
| Dissociated cells | Separate cells and expose them to a perturbation | Controlled cell measurements | Tissue interactions change |
| Organoids or spheroids | Grow cells in three dimensions | Some organization and cell diversity | Culture selects populations; immune components vary |
| Tissue fragments | Test short-lived pieces | Some original neighbors and structure | Viability and penetration vary |
| Patient-derived xenograft (PDX) | Grow human tumor in an animal | Whole-animal exposure and many tumor features | Host biology differs; conventional models lack an intact human immune system |

An organoid is not a promise of complete biology. A tumor-only culture cannot reproduce an immune medicine's full mechanism. Specialized co-cultures or other methods can add selected immune cells. Ask which cells are present, where they came from and what endpoint was actually measured.

A PDX drug experiment is **in vivo**, inside a living animal. A culture removed from a tumor is tested **ex vivo**, outside its original organism. Growing an animal-derived organoid in a dish does not make that dish experiment in vivo.

## Design the comparison before reading the score

A sound experiment needs a stated endpoint, dose range, timing and controls. **Vehicle control** contains the carrier without the active perturbation. Positive controls show the system can produce a known response. Mechanism controls distinguish the proposed target effect from a nonspecific toxic effect.

Replicates address variability, but repeated wells from one preparation are not independent patients. A dose that works in a dish may not be reachable safely in a person. Reduced growth and cell death are different endpoints. Normal-tissue toxicity is often missing from a tumor-only readout.

## A worked repair experiment

The fictional repair finding now has supporting DNA, RNA and protein evidence. A suitable model shows impaired repair under controlled conditions. A drug then reduces model growth across replicated, relevant exposures.

This strengthens the biological hypothesis. It does not establish that the same exposure is safe, that every original clone survived culture or that treatment improves patient outcomes. The clinical evidence question remains even after a persuasive laboratory sequence.

Now imagine two drugs of one immune class scoring differently in a single well. Before inventing a biological reason, inspect cell composition, viability, exposure, controls and reproducibility. An unvalidated score does not establish clinical superiority or justify switching a proven regimen.

## Ask how models that failed were counted

A study may report agreement only among models that successfully grew. The failed specimens matter too: they may differ systematically. A reported agreement rate should keep its population, model-establishment rule, endpoint and prospective or retrospective design attached.

Agreement with past outcomes is useful validation. Demonstrating that model-guided decisions improve outcomes is a further question, requiring an appropriate clinical study. Neither the word “personalized” nor a ranked drug list supplies that evidence.

## What can go wrong at this step

- Missing the immune cells needed for the treatment's mechanism.
- Culture selecting an easier-growing subset of clones.
- Using unrealistic exposure or an ambiguous viability endpoint.
- Excluding failed cultures from a flattering headline without disclosure.
- Turning a model effect into an approved indication.

## Try it

A tumor-only organoid does not respond to a checkpoint-blocking antibody. Has the experiment proved that the patient's immune system cannot respond?

**Answer:** No. The model may omit the required immune components. Even a more suitable co-culture still needs controls and clinical validation.

## Explain it back

“The model responded under ______. To connect that with patient benefit, I need ______.”

One answer: “defined cells, exposure and readout; model relevance, reproducibility, achievable exposure and clinical evidence.”

## Takeaway

**A controlled model response tests a mechanism within the model's scope; translation is the next evidence question.**

**Next:** [[wiki/education/molecular-profiling/06-ctdna-and-mrd|Read blood measurements as a time series]].

## Sources and scope

Source check: October 9, 2026. The examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [Neal et al., primary organoid immune-microenvironment experiment](https://doi.org/10.1016/j.cell.2018.11.021).
- [Primary breast-tumor graft study](https://pmc.ncbi.nlm.nih.gov/articles/PMC3553601/).
- [[wiki/education/molecular-profiling/parp-and-cell-survival/04-reading-a-functional-experiment|Controls and combination experiments]].
