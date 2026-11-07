---
title: "PD-L1 scoring: CPS, TPS and IC score"
type: "concept"
domain: "measurement/pathology-readouts"
aliases:
  - "PD-L1 scoring"
  - "CPS"
  - "combined positive score"
  - "TPS"
  - "tumor proportion score"
  - "IC score"
  - "immune-cell score"
  - "SP142"
  - "SP263"
  - "22C3"
summary: "PD-L1 scoring measures defined staining patterns using an assay-specific antibody and algorithm; combined positive score, tumor proportion score and immune-cell score count different cells and are not interchangeable."
level: "intermediate"
prerequisites:
  - "[[wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry]]"
  - "[[wiki/education/concepts/measurement/pathology-readouts/h-and-e-morphology]]"
used_by: ["[[wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]","[[wiki/education/guides/reading-pathology-and-surgery-results/03-build-the-next-question]]","[[wiki/education/molecular-profiling/03-protein-expression-and-activation]]"]
reviewed: "pending"
source_checked: 2026-11-07
updated: 2026-11-07
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
glossary_anchor: "pd-l1-scoring"
sensitive: false
---

# PD-L1 scoring: CPS, TPS and IC score

## In one sentence

PD-L1 scoring measures defined staining patterns using an assay-specific antibody and algorithm; combined positive score, tumor proportion score and immune-cell score count different cells and are not interchangeable.

## The intuition

Two classroom surveys can give different answers: one counts students; another includes selected staff but divides by student enrollment. PD-L1 scores similarly depend on the numerator and denominator. Unlike a simple headcount, the assay also defines which stained cells and locations qualify.

## How it works

**Programmed death-ligand 1 (PD-L1)** is a protein assessed by [[wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry|immunohistochemistry (IHC)]]. A pathologist identifies eligible cells and staining under the specified method. A score is meaningful only with its antibody assay, preparation, algorithm and disease context.

**Combined positive score (CPS)** is calculated as:

`100 × (PD-L1-staining tumor cells + PD-L1-staining eligible lymphocytes + PD-L1-staining eligible macrophages) / all viable tumor cells`

For the 22C3 breast assay manual used here, tumor cells qualify with convincing partial or complete membrane staining. Eligible lymphocytes and macrophages may have membrane and/or cytoplasmic staining within invasive tumor nests or directly associated supporting stroma. Not every stained immune cell anywhere on the slide belongs in the numerator. Neutrophils, nonviable cells and cells associated only with benign or in-situ tissue are among the exclusions. The denominator contains viable invasive tumor cells, including unstained ones; immune cells are excluded from it. Raw arithmetic can exceed 100, but **reported CPS is capped at 100**.

**Tumor proportion score (TPS)** is the percentage of viable tumor cells with qualifying partial or complete membrane staining. It excludes immune cells from its numerator. The [FDA assay document](https://www.accessdata.fda.gov/cdrh_docs/pdf15/P150013S016B.pdf) describes this algorithm in a non-small-cell lung cancer context; it does not make TPS a substitute for breast CPS.

**Immune-cell (IC) score** is the percentage of tumor area occupied by PD-L1-staining tumor-infiltrating immune cells. It ignores tumor-cell staining. It was the scoring rule for the VENTANA **SP142** assay used with atezolizumab: in the IMpassion130 trial of advanced TNBC, "PD-L1-positive" meant IC ≥1% by SP142 ([Schmid et al., 2018](https://pubmed.ncbi.nlm.nih.gov/30345906/)).

Three antibody assays recur in breast cancer: **22C3** (scored as CPS, paired with pembrolizumab), **SP142** (scored as IC, paired with atezolizumab) and **SP263** (a third clone, studied with IC scoring in TNBC). Each is a different antibody, staining protocol and algorithm.

```mermaid
flowchart TD
    A[Validated PD-L1 stain] --> B[Identify eligible cells]
    B --> C["CPS includes<br>stained immune cells"]
    B --> D["TPS counts<br>stained tumor cells"]
    C --> E["Attach assay<br>and clinical context"]
    D --> E
```

## Why it matters in cancer

A clinical cutoff belongs to a defined assay, drug, population and treatment setting. In **[[wiki/education/concepts/breast-cancer/receptors-and-subtypes/tnbc|triple-negative breast cancer (TNBC)]]**:

| Setting | Assay and cutoff | Drug context | Evidence |
|---|---|---|---|
| Advanced TNBC, first line | 22C3, CPS ≥10 | Pembrolizumab **with chemotherapy**; the 2026 US label also lists pembrolizumab with sacituzumab govitecan at the same cutoff. Not pembrolizumab alone | In KEYNOTE-355 (847 patients enrolled regardless of PD-L1), median overall survival was 23.0 vs 16.1 months in the CPS ≥10 group (HR 0.73); the CPS ≥1 group did not reach significance (HR 0.86) ([Cortés et al., 2022](https://pubmed.ncbi.nlm.nih.gov/35857659/)) |
| Advanced TNBC, first line (withdrawn in the US) | SP142, IC ≥1% | Atezolizumab with nab-paclitaxel | US accelerated approval granted in 2019 on IMpassion130; Roche voluntarily withdrew the US TNBC indication in August 2021 after consulting the FDA ([Roche, 2021](https://www.roche.com/media/releases/med-cor-2021-08-27.html)) |
| Early, high-risk TNBC | No PD-L1 cutoff | Pembrolizumab with chemotherapy before surgery, then alone after ([KEYNOTE-522 regimen](/wiki/education/concepts/breast-cancer/treatment-setting/the-keynote-522-regimen)) | KEYNOTE-522 enrolled patients regardless of PD-L1, and the early-disease label carries no PD-L1 requirement |

The [FDA 2026 pembrolizumab label](https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/125514s194lbl.pdf), sections 1.20 and 14.20, gives the current US indication wording. This page does not list every treatment option.

A PD-L1 score is partly **predictive** in advanced TNBC: it was used to find the group that gained from adding a checkpoint inhibitor in a randomized comparison. In early TNBC it does not select patients. See [prognostic vs predictive](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive).

Tumors that T cells already attack often show more PD-L1, because T cells release interferon gamma, which induces it. This [adaptive immune resistance](/wiki/education/concepts/immunology/tumor-immunology/adaptive-immune-resistance) is why PD-L1 staining often sits beside lymphocyte-rich areas ([hot, excluded and cold patterns](/wiki/education/concepts/immunology/tumor-immunology/hot-excluded-cold-tumor)).

## How it is measured

| Assay-card field | What to retain |
|---|---|
| Measures | Eligible staining under a named scoring algorithm |
| How | Prepare tissue → stain with controls → assess adequacy → identify/count eligible cells → score |
| Input and tissue cost | A formalin-fixed tissue section for the specified workflow; further sections use finite tissue |
| Output and units | CPS, a capped score, or TPS, a tumor-cell percentage |
| Thresholds | Assay/population-specific; the cited TNBC 22C3 manual requires at least 100 viable tumor cells for evaluation |
| Failure modes | Inadequate cells, poor staining controls, wrong cell attribution, necrosis or heterogeneous sampling |
| Cannot show alone | A complete immune state, guaranteed individual benefit or eligibility in another setting |
| Validation context | Antibody clone, platform, scoring method, specimen and intended clinical use must match the supporting evidence |

## Common confusions

- CPS is not the percentage of all cells that stain and is not the percentage of tumor cells alone.
- CPS 100 does not imply every tumor cell is positive.
- The same cutoff cannot be transferred between CPS, TPS and IC scores.
- **Different assays select different patients.** In 614 IMpassion130 samples, IC ≥1% was positive in 46.4% by SP142, 74.9% by SP263 and 73.1% by 22C3; almost all SP142-positive cases were positive by the others, but not the reverse ([Rugo et al., 2021](https://pubmed.ncbi.nlm.nih.gov/34097070/)). A "positive" result needs its antibody named.
- **Pathologists disagree on IC scores.** When 19 pathologists scored the same TNBC sections, SP142 was read as positive in an average 58% of cases and SP263 in 78%, and all pathologists agreed on only 38% of SP142 cases and 50% of SP263 cases ([Reisenbichler et al., 2020](https://pubmed.ncbi.nlm.nih.gov/32300181/)).
- A low score is not a complete description of tumor immunity or a universal exclusion from immunotherapy.

## Try it

<img src="./images/pd-l1-eligible-cells-and-tumor-denominator-v1-light.svg" alt="Grouped fictional inventories show 200 viable tumor cells with 20 staining, 40 eligible stained lymphocytes and 20 eligible stained macrophages, yielding CPS 40 and tumor-cell percentage 10%." width="780" height="1360" data-theme-pair>

*The exact original fictional counts yield CPS 40 and a tumor-cell percentage of 10%. Tumor inventories include 180 unstained cells; immune cells add only to the CPS numerator. These are grouped counting cartoons, not slide coordinates. Eligibility, controls and assay/indication rules remain necessary, and TPS arithmetic applies only under its own rules.*

[Open the light diagram](./images/pd-l1-eligible-cells-and-tumor-denominator-v1-light.svg) · [Open the dark diagram](./images/pd-l1-eligible-cells-and-tumor-denominator-v1-dark.svg)

A fictional eligible section contains 200 viable invasive tumor cells. Twenty tumor cells stain; 40 eligible lymphocytes and 20 eligible macrophages also stain. What are CPS and the illustrative tumor-cell percentage?

**Answer:** CPS = `100 × (20 + 40 + 20) / 200 = 40`. The tumor-cell percentage is `100 × 20 / 200 = 10%`, corresponding to TPS arithmetic if those cells satisfy its assay rules. These different values do not authorize switching algorithms or choosing treatment. All counts are fictional.

## Explain it back

Why can CPS exceed the tumor-cell staining percentage? **One answer:** It includes selected stained immune cells in the numerator while retaining viable tumor cells as the denominator.

## Takeaway

Keep the eligible cells, denominator, assay and clinical setting attached to every PD-L1 score.

## Related concepts

- [[wiki/education/concepts/measurement/specimens/core-needle-biopsy|Sampling and representativeness]]
- [[wiki/education/concepts/breast-cancer/receptors-and-subtypes/tnbc|What TNBC defines]]

## Sources and scope

Source check: November 7, 2026. Scoring education, not a treatment-selection instruction; expert and learner review remain pending.

- [22C3 TNBC interpretation manual, EU CE-IVD](https://www.agilent.com/cs/library/usermanuals/public/29440-d67159-pdl1-ihc-22C3-pharmdx-tnbc-interpretation-manual-eu.pdf) — pp.18, 24–26: adequacy, cell eligibility, denominator and CPS cap; p.31: trial score distribution. This technical manual is not a US authorization document.
- [FDA: 22C3 assay SSED, P150013/S016 (2019)](https://www.accessdata.fda.gov/cdrh_docs/pdf15/P150013S016B.pdf) — p.2 TPS definition in its specified disease context.
- [Cortés et al., 2022: KEYNOTE-355 overall survival](https://pubmed.ncbi.nlm.nih.gov/35857659/) — advanced-TNBC trial and prespecified analysis populations.
- [Schmid et al., 2018: IMpassion130](https://pubmed.ncbi.nlm.nih.gov/30345906/) — SP142 IC ≥1% as the PD-L1-positive definition.
- [Rugo et al., 2021: SP142, SP263 and 22C3 in IMpassion130](https://pubmed.ncbi.nlm.nih.gov/34097070/) — assay prevalence and non-equivalence.
- [Reisenbichler et al., 2020: multi-pathologist PD-L1 reproducibility in TNBC](https://pubmed.ncbi.nlm.nih.gov/32300181/).
- [Roche, August 27, 2021: update on the US atezolizumab TNBC indication](https://www.roche.com/media/releases/med-cor-2021-08-27.html).
- [FDA: pembrolizumab label, supplement 194 (2026)](https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/125514s194lbl.pdf) — early/advanced TNBC trial context, without an exhaustive regimen inventory here.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [What checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change)
- [How the immune system fights cancer](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
- [Build the next question](/wiki/education/guides/reading-pathology-and-surgery-results/03-build-the-next-question)
- [Ask whether protein is present, placed and active](/wiki/education/molecular-profiling/03-protein-expression-and-activation)
<!-- END GENERATED USED IN -->
