---
title: "Tumor-informed molecular residual disease assays"
sensitive: false
tags: ["education", "monitoring"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
type: "concept"
glossary_anchor: "tumor-informed-mrd-assay"
domain: "measurement/liquid-biopsy"
summary: "A tumor-informed molecular residual disease assay uses features identified in a tumor sample to look for a qualifying tumor signal in later blood samples."
aliases: ["tumor-informed MRD assay", "tumor-informed", "personalized mutation tracking"]
level: "intermediate"
prerequisites: []
used_by: ["[[wiki/education/guides/monitoring-residual-disease/01-read-the-blood-result]]","[[wiki/education/guides/monitoring-residual-disease/index]]","[[wiki/education/molecular-profiling/06-ctdna-and-mrd]]"]
---

# Tumor-informed molecular residual disease assays

## In one sentence

A tumor-informed molecular residual disease assay uses features identified in a tumor sample to look for a qualifying tumor signal in later blood samples.

## The intuition

A familiar handwriting sample can help you look for the same writer in a pile of scraps. You are asking whether recognizable features appear, rather than reading every possible message.

A tumor-informed assay starts with a tumor reference. It then tracks selected features in blood. The handwriting analogy is limited: sequence errors and other biological sources can imitate a feature, so origin and error controls are part of the method.

## How it works

First, a laboratory profiles tumor material and, under its method, suitable non-tumor material. It selects a set of features for a personalized assay. For mutation-based designs, these are chosen tumor-associated sequence changes. The exact selection method and number of targets vary.

Next, blood is collected and its [[wiki/education/concepts/measurement/liquid-biopsy/cfdna-vs-ctdna|cell-free DNA (cfDNA)]] is extracted. The test looks for evidence at the selected targets. Multiple reads of the same original molecule are not multiple independent molecules. Error suppression and the rule for combining evidence across targets matter.

The later blood test looks for [[wiki/education/concepts/measurement/liquid-biopsy/cfdna-vs-ctdna|circulating tumor DNA (ctDNA)]]. The assay reports whether its qualifying [[about/Terminology#mrd|molecular residual disease (MRD)]] signal was detected. It may also report an assay-specific quantity. MRD refers to the molecular finding in a treatment context; a positive assay does not by itself establish that disease is below imaging resolution.

A fixed target list also creates a boundary. The test may track known variants well while missing a new alteration outside the list. It cannot be assumed to discover every resistance mechanism. Rebuilding a panel and broad genomic profiling are different tasks.

## Why it matters in cancer

A reference can help distinguish low tumor signal from background. It also creates dependencies: suitable tissue, successful assay construction, relevant targets and enough tumor DNA in the blood sample. The right question is whether a particular assay has evidence for its proposed use.

## How it is measured

| Assay-card field | What to inspect |
|---|---|
| Measures | Evidence for selected tumor-associated features in blood |
| How | Profile reference material, select features, extract plasma DNA, test targets, apply a result rule |
| Input and tissue cost | Reference tumor material plus required normal material; later blood draws; tissue requirements vary |
| Output and units | Detection call and any calibrated quantity, with version-specific definitions |
| Thresholds | Qualifying-target and signal rules established by the method's validation |
| Failure modes | Build failure, low shedding, inadequate input, target loss, contamination or mistaken origin |
| What it cannot tell you | Lesion location, every new mutation, zero disease after a negative draw, or which treatment helps |
| Validation and intended use | Check the specific assay, jurisdiction, disease setting and proposed decision |

## Common confusions

**Tumor-informed versus always more sensitive:** a design category does not establish a universal ranking. Compare assays under compatible inputs and clinical settings.

**Tumor-naive versus mutation discovery:** an assay without a tissue reference may detect a cancer-associated pattern without supplying a broad mutation profile.

**Reference tumor versus current tumor:** evolution and sampling differences can change which features remain informative.

**Predicting recurrence versus improving outcomes:** risk association and benefit from an assay-guided intervention require different evidence.

## Related concepts

[[wiki/education/concepts/measurement/liquid-biopsy/ctdna-units|ctDNA units and limits]], [[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive|prognostic versus predictive biomarkers]], and [[wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility|validity and utility]].

## Sources and scope

Source check: October 9, 2026. This describes an assay category; product indications and care decisions require current, setting-specific review. Expert and learner review pending.

- [FDA 2024 ctDNA drug-development guidance](https://www.fda.gov/media/183874/download) — assay and trial considerations.
- [Garcia-Murillas et al. 2019, personalized mutation tracking in early breast cancer](https://doi.org/10.1001/jamaoncol.2019.1838) — primary longitudinal study.
- [Magbanua et al. 2025, ctDNA and residual cancer burden in I-SPY2](https://www.nature.com/articles/s41467-025-65432-5) — risk association in a defined cohort, not a treatment-omission rule.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the blood result before reading the trend](/wiki/education/guides/monitoring-residual-disease/01-read-the-blood-result)
- [Understand blood tests and imaging after treatment](/wiki/education/guides/monitoring-residual-disease/index)
- [Read blood measurements as a time series](/wiki/education/molecular-profiling/06-ctdna-and-mrd)
<!-- END GENERATED USED IN -->
