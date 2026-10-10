---
title: "Minimal, measurable and molecular residual disease"
type: "concept"
domain: "measurement/liquid-biopsy"
summary: "Residual disease is cancer remaining after treatment; MRD describes small amounts sought with sensitive methods, whose meaning depends on the disease, specimen and assay."
glossary_anchor: "mrd"
aliases: ["MRD", "minimal residual disease", "measurable residual disease", "molecular residual disease"]
level: "foundation"
prerequisites: ["[[wiki/education/concepts/measurement/liquid-biopsy/cfdna-vs-ctdna]]"]
used_by: ["[[wiki/education/guides/monitoring-residual-disease/01-read-the-blood-result]]","[[wiki/education/guides/monitoring-residual-disease/index]]","[[wiki/education/molecular-profiling/06-ctdna-and-mrd]]"]
sensitive: false
tags: ["education", "measurement"]
updated: "2026-10-10"
source_checked: "2026-10-10"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Minimal, measurable and molecular residual disease

## In one sentence

Residual disease is cancer remaining after treatment; MRD describes small amounts sought with sensitive methods, whose meaning depends on the disease, specimen and assay.

## The intuition

After clearing a garden, you may inspect the ground for roots too small to see from a distance. Different tools inspect different patches. A negative inspection says what that tool found in its patch, rather than proving the whole garden is empty.

The analogy has limits: an MRD assay may measure molecules or cell features, not directly count viable cancer cells. Its result is an inference with defined performance and clinical context.

## How it works

MRD has several expansions. **Minimal residual disease** emphasizes small remaining amounts. **Measurable residual disease**, used in blood-cancer guidance, emphasizes the method's ability to detect them. **Molecular residual disease** often describes tumor-associated molecular signals after treatment, particularly blood [circulating tumor DNA (ctDNA)](/wiki/education/concepts/measurement/liquid-biopsy/cfdna-vs-ctdna) in solid-tumor studies. Always check which meaning a paper uses.

In blood cancers, methods can examine characteristic cells by [flow cytometry](/wiki/education/concepts/measurement/immune-monitoring/flow-cytometry), or track molecular features in blood or bone marrow. In solid tumors, plasma assays may look for tumor-associated DNA variants or other features. Cell-frequency thresholds, molecular ratios and plasma detection rules are different quantities. A leukemia cutoff is not a breast-cancer plasma cutoff.

“Residual disease” on surgical pathology also has its own meaning: tissue can show remaining invasive cancer even if blood has no qualifying signal. [Residual cancer burden](/wiki/education/concepts/breast-cancer/surgery-and-pathology-results/residual-cancer-burden) measures a defined tissue endpoint. It is not interchangeable with a blood MRD call.

A positive molecular call can supply evidence consistent with remaining disease and can be associated with later recurrence in a studied setting. It does not reveal where the disease is, prove every detected molecule came from a currently living tumor cell, or guarantee recurrence. A negative call leaves [sampling and analytical limits](/wiki/education/concepts/measurement/liquid-biopsy/limit-of-detection-and-sampling). Timing relative to treatment and specimen handling belong beside either result.

## Why it matters in cancer

MRD can enrich a research cohort for higher recurrence risk. Whether changing treatment after that result helps requires separate [clinical-utility evidence](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility). Marker clearance is a measured endpoint; using it as a substitute for survival benefit requires validation in the intended setting.

## How it is measured

| Assay-card item | Scope to keep attached |
|---|---|
| Measures / how | Disease-associated cells or molecular features, with an explicit method |
| Input and cost | Blood, marrow or another defined specimen; finite material and collection burden |
| Output / units | Cell percentage, molecular ratio, concentration or assay-defined positive/negative call |
| Thresholds | Method-, disease- and time-point-specific criteria; no universal MRD cutoff |
| Failure modes | Unrepresentative specimen, low input, unsuitable targets, background or collection artifacts |
| Cannot tell | Guaranteed cure, inevitable recurrence, location or benefit from a proposed intervention |
| Validation | Exact disease, treatment setting, specimen, timing and intended decision |

## Common confusions

- MRD-negative does not mean “no cancer cell remains anywhere.”
- A plasma MRD result and a pathology result can differ because they observe different material.
- A prognostic association does not establish an MRD-triggered treatment strategy.

## Try it

In a fictional study, a postoperative plasma test is negative but surgery shows residual invasive cancer. Must one test be wrong?

**Answer:** No. Pathology directly examined tissue at surgery; plasma testing sought a qualifying molecular signal in a later blood sample. Both can be valid within their scopes. Dates, specimen and assay limits must be reconciled before interpreting the pair.

## Explain it back

What specimen and rule would you need before interpreting the words “MRD-negative”?

## Takeaway

MRD is a method-bound residual-disease assessment, not a universal declaration of cure or a treatment instruction.

## Related concepts

- [tumor informed mrd assay](/wiki/education/concepts/measurement/liquid-biopsy/tumor-informed-mrd-assay)
- [ctdna imaging discordance](/wiki/education/concepts/measurement/liquid-biopsy/ctdna-imaging-discordance)

## Sources and scope

Source check: October 10, 2026. Fictional exercise; expert and learner review remain pending.

- [NCI definition of minimal residual disease](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/minimal-residual-disease) — small residual amounts and sensitive testing.
- [Heuser et al. 2021 ELN consensus](https://doi.org/10.1182/blood.2021013626) — disease-specific methods, specimens, time points and reporting in acute myeloid leukemia; its thresholds are not transferred here.
- [FDA 2024 circulating tumor DNA (ctDNA) drug-development guidance](https://www.fda.gov/media/183874/download) — solid-tumor prognostic, strategy and endpoint-validation questions.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the blood result before reading the trend](/wiki/education/guides/monitoring-residual-disease/01-read-the-blood-result)
- [Understand blood tests and imaging after treatment](/wiki/education/guides/monitoring-residual-disease/index)
- [Read blood measurements as a time series](/wiki/education/molecular-profiling/06-ctdna-and-mrd)
<!-- END GENERATED USED IN -->
