---
title: "Residual cancer burden (RCB)"
type: concept
domain: breast-cancer/surgery-and-pathology-results
summary: "Residual cancer burden combines breast tumor-bed measurements and regional-node findings into a score after neoadjuvant chemotherapy."
glossary_anchor: rcb
aliases: ["rcb"]
prerequisites: []
reviewed: pending
reviewed_by: ""
level: foundation
sensitive: false
tags: [education, breast-cancer]
used_by: ["[[wiki/education/guides/reading-pathology-and-surgery-results/02-read-residual-disease-and-margins]]","[[wiki/education/guides/reading-pathology-and-surgery-results/03-build-the-next-question]]","[[wiki/education/guides/reading-pathology-and-surgery-results/index]]","[[wiki/education/guides/treating-early-tnbc/03-use-the-findings-in-the-next-conversation]]","[[wiki/education/guides/treating-early-tnbc/index]]"]
updated: 2026-10-10
source_checked: 2026-10-10
review_status: "Expert and learner review pending"
---

# Residual cancer burden (RCB)

## In one sentence

Residual cancer burden combines breast tumor-bed measurements and regional-node findings into a score after neoadjuvant chemotherapy.

## The intuition

Imagine describing what is left using both its footprint and how much of that footprint contains invasive cancer. A large treated bed can contain sparse viable cells. RCB combines this with node findings rather than using the longest tumor dimension alone.

## How it works

The method is not validated for neoadjuvant endocrine therapy. The College of American Pathologists' June 2026 breast-resection protocol advises against reporting an RCB score or class in that setting, even though individual [cellularity observations](/about/Terminology#tumor-cellularity) may still describe remaining disease. [CAP version 4.11.0.0, note K](https://www.cap.org/wp-content/uploads/2026/06/Breast.Invasive.Res_4.11.0.0.REL_CAPCP.pdf?download=true).

The calculation uses two tumor-bed dimensions, overall [cancer cellularity](/about/Terminology#tumor-cellularity) and the proportion that is in situ, plus the number of involved nodes and the largest nodal metastasis. These are pathology measurements obtained under the scoring protocol, rather than values inferred from an imaging report or the longest invasive focus alone.

| Input | Meaning and units |
| --- | --- |
| `d1`, `d2` | Two dimensions of the residual breast tumor bed, in **millimeters** |
| `C` | Overall cancer cellularity, entered as a percentage of tumor-bed area |
| `S` | Percentage of the cancer that is in situ, rather than a percentage of the whole bed |
| `N` | Number of positive regional lymph nodes under the assessment protocol |
| `dmet` | Largest nodal metastasis diameter, in **millimeters** |

The [MD Anderson protocol](https://www.mdanderson.org/content/dam/mdanderson/documents/for-physicians/clinical-calculators/PLM_protocol_RCB_calculators_BRO.pdf) uses the largest residual tumor bed for multicentric disease and revises its gross dimensions when microscopic findings show a different extent. Cellularity is averaged across that defined bed, including sparse areas; sampling only the densest cancer foci would misrepresent the input.

First calculate `dprim = sqrt(d1 × d2)` and `finv = (C / 100) × (1 − S / 100)`. The original formula then combines breast and nodal contributions:

```text
RCB = 1.4 × (finv × dprim)^0.17
      + [4 × (1 − 0.75^N) × dmet]^0.17
```

The entire bracketed nodal contribution is raised to `0.17`. A zero breast or nodal contribution contributes zero. Keep full precision when assigning a class; rounding a displayed score near a cutoff can obscure its category.

| Class | Continuous RCB score | Residual burden category |
| --- | --- | --- |
| RCB-0 | 0 | No residual invasive cancer in breast or regional nodes; residual in situ disease is permitted |
| RCB-I | Greater than 0 through 1.36 | Minimal |
| RCB-II | Greater than 1.36 through 3.28 | Moderate |
| RCB-III | Greater than 3.28 | Extensive |

RCB-0 corresponds to [pCR (pathologic complete response)](/wiki/education/concepts/breast-cancer/surgery-and-pathology-results/pcr) under this definition. A clinical report should use the pathology team's validated assessment and official calculator, including protocol rules for unusual findings.

Cellularity is the proportion of the evaluated tumor bed occupied by cancer under the scoring method. It differs from the purity estimate used in sequencing a selected sample. A low cellularity does not mean every part of the bed or every node is free of cancer.

RCB is prognostic in studied breast-cancer populations, but an RCB class is not a single personal recurrence probability. Receptor subtype, treatment era, follow-up, clinical stage and subsequent therapy affect how a cohort applies. The score does not establish that an investigational vaccine works best in one class or needs more boosters in another.

RCB and ypTNM answer related but different questions: one summarizes residual burden, the other classifies residual anatomic extent. Neither replaces the report’s margins, receptor findings or other local-management details.

## Why it matters in cancer

It provides a reproducible description of residual disease, while keeping prognostic evidence separate from the choice of additional treatment.

## Worked example

For a **fictional specimen**, the tumor bed measures 20 × 10 millimeters. Overall cancer cellularity is 20%, and half of that cancer is in situ. Two regional nodes are positive; the largest nodal metastasis is 3 millimeters.

- `dprim = sqrt(20 × 10) ≈ 14.142` millimeters.
- `finv = 0.20 × (1 − 0.50) = 0.10`: invasive cancer occupies an estimated 10% of the bed.
- Breast contribution: `1.4 × (0.10 × 14.142)^0.17 ≈ 1.485`.
- Nodal contribution: `[4 × (1 − 0.75^2) × 3]^0.17 ≈ 1.326`.
- Total: approximately **2.811, RCB-II**.

This describes residual burden. It does not mean “stage II,” a 2.811% recurrence risk, or 20% invasive cellularity. If the fictional nodal contribution were zero while the breast inputs stayed the same, the score would be approximately 1.485 and still RCB-II. One class can therefore contain different combinations of breast and nodal findings.

## Common confusions

- RCB-II means a residual-burden category, not “stage II.”
- RCB is not interchangeable with a percentage of living cells in a sequencing tube.
- Prognostic association does not establish benefit from a proposed additional drug.

## Related concepts

[[wiki/education/concepts/breast-cancer/surgery-and-pathology-results/pcr|pCR]] and [[wiki/education/concepts/breast-cancer/grade-and-stage/tnm-staging|TNM staging]].

## Sources and scope

General teaching, source-checked October 10, 2026. The numeric specimen is fictional. Arithmetic illustrates the published formula; clinical scoring depends on a valid pathology assessment. Expert and learner review remain pending.

- [MD Anderson RCB calculator and method](https://www3.mdanderson.org/app/medcalc/index.cfm?pagename=jsconvert3).
- [MD Anderson pathology assessment protocol](https://www.mdanderson.org/content/dam/mdanderson/documents/for-physicians/clinical-calculators/PLM_protocol_RCB_calculators_BRO.pdf), for obtaining the inputs.
- [Symmans and colleagues, original RCB development and validation](https://pubmed.ncbi.nlm.nih.gov/17785706/), for the formula and class cutoffs.
- [Multicenter pooled RCB analysis](https://pubmed.ncbi.nlm.nih.gov/34902335/).
- [CAP breast-resection protocol, June 2026, version 4.11.0.0, note K](https://www.cap.org/wp-content/uploads/2026/06/Breast.Invasive.Res_4.11.0.0.REL_CAPCP.pdf?download=true) — applicability boundary for endocrine treatment.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read residual disease and margins](/wiki/education/guides/reading-pathology-and-surgery-results/02-read-residual-disease-and-margins)
- [Build the next question](/wiki/education/guides/reading-pathology-and-surgery-results/03-build-the-next-question)
- [Read pathology and surgery results](/wiki/education/guides/reading-pathology-and-surgery-results/index)
- [Use the findings in the next conversation](/wiki/education/guides/treating-early-tnbc/03-use-the-findings-in-the-next-conversation)
- [Understand how treatment is sequenced](/wiki/education/guides/treating-early-tnbc/index)
<!-- END GENERATED USED IN -->
