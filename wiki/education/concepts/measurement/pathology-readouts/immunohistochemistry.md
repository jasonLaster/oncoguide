---
title: "Immunohistochemistry: protein staining in tissue"
type: "concept"
domain: "measurement/pathology-readouts"
summary: "Immunohistochemistry uses antibodies to visualize selected proteins in tissue while preserving information about the stained cells and their location."
glossary_anchor: "immunohistochemistry"
aliases: ["IHC", "ihc", "immunohistochemistry", "H-score"]
level: "foundation"
sensitive: false
tags: ["education", "measurement"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/central-dogma]]"]
used_by: ["[[wiki/education/guides/aiming-a-drug-at-a-surface-target/index]]","[[wiki/education/local-treatment-modalities/05-tissue-and-sample-budget]]","[[wiki/education/molecular-profiling/03-protein-expression-and-activation]]","[[wiki/education/molecular-profiling/04-spatial-biology]]","[[wiki/education/multi-omics-foundations/07-comparisons-and-evidence]]","[[wiki/education/reading-a-tumor/immune-hot-vs-cold]]","[[wiki/education/reading-a-tumor/omics-and-multi-omics]]","[[wiki/education/targeted-therapy-modalities/01-mechanism]]"]
---

# Immunohistochemistry: protein staining in tissue

## In one sentence

Immunohistochemistry uses antibodies to visualize selected proteins in tissue while preserving information about the stained cells and their location.

## The intuition

A labeled highlighter marks one feature on a tissue map. You can see which cells are marked and where the mark sits. That is the useful idea behind immunohistochemistry. An antibody stain is not a perfect highlighter: binding specificity, tissue preparation and background must be checked.

## How it works

**Immunohistochemistry (IHC)** combines antibody binding with a visible signal, often a colored product. The laboratory prepares a tissue section, makes the target accessible under a specified protocol, applies antibodies and develops the signal. A pathologist interprets staining alongside cell shape and tissue organization.

Different questions require different targets and scoring rules. A nuclear stain and a membrane stain do not mean the same thing. The fraction of relevant cells, staining intensity and distribution can each matter. A report must say which cells were scored and how.

**Immunofluorescence** uses fluorescent labels rather than a conventional color product. Multiplex methods can examine several markers together. More markers can add context, but antibody performance and cell-boundary assignment still require validation.

## Why it matters in cancer

IHC supports diagnosis and selected clinical biomarker assessments. It can also test whether a proposed protein lies on malignant cells or normal neighbors. A cell-surface treatment needs an accessible target; total protein in a tissue lysate cannot supply that localization alone.

## Worked example

A fictional bulk protein assay detects a receptor. Tissue staining shows it mainly on blood-vessel cells, with little staining on malignant cells. Both results can be correct. The first found protein in the mixture; the second identified where the signal sits. Neither alone quantifies how a proposed medicine will behave in a patient.

## Common confusions

- A negative clinical category does not always mean literally zero protein molecules.
- Research staining does not automatically replace a validated treatment-selection assay.
- A generic H-score is not interchangeable with every marker's clinical scoring system.
- A stained protein is not necessarily active, accessible to a medicine or essential for survival.

## How it is measured

| Assay-card field | What to retain |
|---|---|
| Input | Tissue type, fixation and section; the assay uses a section of finite material |
| Output | Relevant cell population, intensity, proportion and localization under the scoring rules |
| Threshold | Marker-specific cutoff, protocol and intended use |
| Controls | Known-positive and negative/background controls that support interpretation |
| Failure modes | Poor preservation, nonspecific binding, inadequate cells, heterogeneous staining and scoring error |
| Validation | Whether this is research measurement or a clinical assay validated for the intended decision |

There is no universal IHC positivity threshold. The specific marker, assay and clinical question define the meaning.

## Related concepts

- [[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq|Why an RNA signal cannot replace staining]]
- [[wiki/education/concepts/measurement/pathology-readouts/stil-scoring|Scoring immune cells in stroma]]

## Sources and scope

Source check: October 9, 2026. General measurement teaching; expert and learner review remain pending.

- [NCI immunohistochemistry definition](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/immunohistochemistry).
- [College of American Pathologists IHC validation guidance](https://www.cap.org/cap-guidelines/principles-of-analytic-validation-of-immunohistochemical-assays/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index)
- [Match each measurement to its claim](/wiki/education/local-treatment-modalities/05-tissue-and-sample-budget)
- [Ask whether protein is present, placed and active](/wiki/education/molecular-profiling/03-protein-expression-and-activation)
- [Add the geography of cells and signals](/wiki/education/molecular-profiling/04-spatial-biology)
- [Choose the comparison before interpreting the signal](/wiki/education/multi-omics-foundations/07-comparisons-and-evidence)
- [Read an immune map without overreading it](/wiki/education/reading-a-tumor/immune-hot-vs-cold)
- [Understand multi-omics, one question at a time](/wiki/education/reading-a-tumor/omics-and-multi-omics)
- [Separate the address from the killing mechanism](/wiki/education/targeted-therapy-modalities/01-mechanism)
<!-- END GENERATED USED IN -->
