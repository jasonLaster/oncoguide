---
title: "Stromal TIL scoring: what the percentage counts"
type: "concept"
domain: "measurement/pathology-readouts"
summary: "A stromal tumor-infiltrating lymphocyte score estimates the percentage of eligible tumor-associated stromal area occupied by mononuclear inflammatory cells."
glossary_anchor: "stil-scoring"
aliases: ["sTIL", "sTILs", "stils", "stromal TIL", "stromal tumor-infiltrating lymphocytes"]
level: "foundation"
sensitive: false
tags: ["education", "measurement"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
prerequisites: ["[[wiki/education/concepts/immunology/the-immune-system/immune-cell-roster]]"]
used_by: ["[[wiki/education/molecular-profiling/04-spatial-biology]]","[[wiki/education/multi-omics-foundations/06-immune-presence-and-recognition]]","[[wiki/education/reading-a-tumor/immune-hot-vs-cold]]","[[wiki/education/reading-a-tumor/omics-and-multi-omics]]"]
---

# Stromal TIL scoring: what the percentage counts

## In one sentence

A stromal tumor-infiltrating lymphocyte score estimates the percentage of eligible tumor-associated stromal area occupied by mononuclear inflammatory cells.

## The intuition

Before using a percentage, ask what counts as the whole. A stromal score uses the relevant supporting-tissue area as its denominator. It does not use every cell in the biopsy. Think of shading a proportion of a map, rather than counting how many people stand on it.

## How it works

**Stromal tumor-infiltrating lymphocytes (sTILs)** are assessed in tumor-associated **stroma**, the supporting tissue around malignant structures. Under the International TILs Working Group method, a pathologist uses **hematoxylin and eosin (H&E)** staining and evaluates the relevant stromal area within the invasive-tumor borders.

The numerator reflects the area occupied by mononuclear inflammatory cells, including lymphocytes and plasma cells, under the scoring rules. It is not a count of all immune-cell types or a direct count of CD8 T cells. Normal structures, necrosis, artifacts and regions outside the defined area require the method's exclusions.

The score should represent the assessed region overall rather than only its hottest spot. Sampling and observer differences matter. A core biopsy, surgical specimen and lymph-node sample can supply different tissue contexts. Applying one breast-tumor scoring rule to another context needs justification.

## Why it matters in cancer

sTILs describe an immune feature of a sampled tissue. Study-specific associations can make them useful for research and prognosis. A score alone does not prove tumor-specific recognition, immune-cell access to each malignant nest or a benefit from a particular immunotherapy. Those are separate measurements and validation questions.

## Worked example

In a fictional section, mononuclear inflammatory cells occupy about 30% of the eligible stromal area. The result is an sTIL score of about 30% under that assessment. It does **not** say that 30% of all cells are lymphocytes, that 30% of cancer cells are being killed or that 30% of cells are CD8 T cells. The invented value teaches the denominator; it is not a treatment cutoff.

## Common confusions

- Stromal TILs and lymphocytes inside malignant nests use different locations.
- A high bulk immune-RNA signal is not a microscopy-based sTIL score.
- A computational estimate must be labeled and validated as such; it is not automatically a pathologist's assessment.
- A high score is not a permanent “hot tumor” label or a universal immunotherapy rule.

## How it is measured

Keep the specimen, region, staining, scoring method and whether a human or model supplied the estimate. H&E assessment does not resolve all functional subtypes. Additional stains can answer cell-type and location questions, but they change the measurement rather than quietly changing the denominator.

## Related concepts

- [[wiki/education/concepts/immunology/the-immune-system/immune-cell-roster|The immune-cell roster]]
- [[wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry|Protein staining and cell identity]]
- [[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive|Prognostic versus predictive evidence]]

## Sources and scope

Source check: October 9, 2026. This describes the 2014 Working Group breast-tumor method, published in 2015; it is not a therapy-selection rule. Expert and learner review remain pending.

- [Salgado et al., International TILs Working Group recommendations](https://pubmed.ncbi.nlm.nih.gov/25214542/).
- [International Immuno-Oncology Biomarker Working Group resources](https://www.tilsinbreastcancer.org/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Add the geography of cells and signals](/wiki/education/molecular-profiling/04-spatial-biology)
- [Separate immune presence from tumor recognition](/wiki/education/multi-omics-foundations/06-immune-presence-and-recognition)
- [Read an immune map without overreading it](/wiki/education/reading-a-tumor/immune-hot-vs-cold)
- [Understand multi-omics, one question at a time](/wiki/education/reading-a-tumor/omics-and-multi-omics)
<!-- END GENERATED USED IN -->
