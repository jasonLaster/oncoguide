---
title: "Controlled perturbation: change one thing and test the response"
type: "concept"
domain: "evidence-and-statistics/study-design"
summary: "A controlled perturbation changes a defined experimental factor and compares the response with conditions that help explain what caused it."
glossary_anchor: "perturbation-and-controls"
aliases: ["perturbation", "controlled perturbation", "vehicle control", "positive control", "rescue experiment"]
level: "foundation"
prerequisites: ["[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]"]
used_by: ["[[wiki/education/guides/predicting-response-before-treating/02-check-the-experiment]]","[[wiki/education/modeling-tumor-response/verification-and-feedback-loops]]","[[wiki/education/molecular-profiling/05-functional-drug-response]]"]
sensitive: false
tags: ["education", "functional-models"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Controlled perturbation: change one thing and test the response

## In one sentence

A controlled perturbation changes a defined experimental factor and compares the response with conditions that help explain what caused it.

## The intuition

To find out whether a lamp's switch matters, change the switch while checking the bulb and power supply. A dark lamp could have several explanations. In biology, controls similarly separate the intended intervention from background, a failed assay or another changed condition. Cells add feedback and adaptation that a lamp does not have.

## How it works

A **perturbation** is a deliberate change, such as adding a drug or reducing a gene's activity. A measured response after that change supports an intervention claim within the experiment. It still needs a comparison and an interpretable endpoint.

A **vehicle control** contains the carrier or solvent without the active drug. It estimates the response to the surrounding treatment conditions. An untreated sample may answer another question if the solvent itself has an effect.

A **positive control** creates a known relevant response and checks that the system can detect it. A negative or non-targeting control estimates background under its design. These controls do not certify that every test result is correct.

**Mechanism controls** test the proposed explanation. An independent way of disrupting the same function can add support. A **rescue experiment** restores a function to ask whether that reverses the response. Such evidence must fit the intervention and model; off-target effects or incomplete restoration can complicate it.

Specify timing, concentration, assignment of samples and replicate structure. Repeated wells help measure technical variation. Independently obtained biological samples address a different source of variation. Neither repetition nor a small statistical value repairs a missing comparison.


### A closer look

<img src="./images/controlled-conditions-and-causal-questions-b10-v1-light.svg" alt="Matched culture wells distinguish vehicle with carrier only, a known-response positive control, an independent disruption of the same function, and a perturbation plus restoration rescue. Each asks a distinct carrier, detection, mechanism or reversal question. Invented direct counts show 100 at baseline, 200 with vehicle and 100 with treatment, so half the endpoint count does not measure 50 percent killing. Rescue is context dependent and no one control proves target specificity or clinical relevance." width="600" height="1100" data-theme-pair>

*Give each control its own question. In the invented count example, 100 → 100 is no net decline while the vehicle reaches 200; that does not measure 50% killing. Rescue depends on context, and no one control establishes specificity or patient benefit.*

## Why it matters in cancer

Controls make a drug-response result interpretable. They help distinguish slowed growth, cell death and a measured molecular change. A response can be real without proving the proposed target is responsible or that treatment benefits patients.

## Worked example

In a fictional study, vehicle-treated cells grow from 100 to 200. Drug-treated cells remain at 100. The endpoint count is half the vehicle count, but no net loss from the starting count was measured. Calling this 50% killing would overstate the observation. Direct death and recovery measurements could answer further questions.

## Common confusions

- A larger effect than either single drug is not automatically synergy; interaction needs a stated reference model.
- A positive control demonstrates assay capacity, rather than the mechanism of every response.
- Many wells from one tumor do not create many independent patients.
- Agreement between two similar readouts need not be independent mechanistic confirmation.
- A successful rescue strengthens a specific explanation, not every claim about the gene or medicine.

## How it is measured

Record what changed, the comparator, the readout and units, timing, dose range, sample identities and variability. For a two-drug test, retain vehicle, both single drugs and the combination. Appropriate baseline or growth measurements can prevent a slowing-growth result from being relabeled as death.

## Related concepts

- [Ex vivo drug screen](/wiki/education/concepts/measurement/functional-models/ex-vivo-drug-screen)
- [Reading a functional experiment](/wiki/education/guides/from-variant-to-drug/07-reading-a-functional-experiment)
- [Analytical validity, clinical validity and utility](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility)

## Sources and scope

Source check: October 9, 2026. Controlled comparisons, not a universal experimental protocol. Expert and learner review remain pending.

- [Hafner et al., 2016: primary growth-rate and drug-response experiments](https://pmc.ncbi.nlm.nih.gov/articles/PMC4887336/).
- [Measuring cancer drug sensitivity and resistance in cultured cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC5538315/) — a defined method and its controls.
- [Cell viability assays, NIH Assay Guidance Manual](https://www.ncbi.nlm.nih.gov/books/NBK144065/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Check what the experiment actually tests](/wiki/education/guides/predicting-response-before-treating/02-check-the-experiment)
- [Test clinical relevance and learn from feedback](/wiki/education/modeling-tumor-response/verification-and-feedback-loops)
- [Test a mechanism in a living model](/wiki/education/molecular-profiling/05-functional-drug-response)
<!-- END GENERATED USED IN -->
