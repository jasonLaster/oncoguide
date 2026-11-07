---
title: "Hot, excluded and cold tumor patterns"
type: "concept"
domain: "immunology/tumor-immunology"
summary: "Hot, excluded and cold describe patterns of immune-cell presence and location in sampled tumor tissue, rather than proving tumor recognition or treatment benefit."
glossary_anchor: "hot-excluded-cold-tumor"
aliases: ["immune-hot", "immune-excluded", "immune-cold", "immune desert", "inflamed tumor"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/immunology/the-immune-system/immune-cell-roster]]"]
used_by: ["[[wiki/education/comparisons/index]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]","[[wiki/education/index]]","[[wiki/education/molecular-profiling/04-spatial-biology]]","[[wiki/education/multi-omics-foundations/06-immune-presence-and-recognition]]","[[wiki/education/reading-a-tumor/immune-hot-vs-cold]]","[[wiki/education/reading-a-tumor/measuring-t-cell-engagement]]"]
sensitive: false
tags: ["education", "immunology"]
updated: 2026-11-07
source_checked: 2026-11-07
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Hot, excluded and cold tumor patterns

## In one sentence

Hot, excluded and cold describe patterns of immune-cell presence and location in sampled tumor tissue, rather than proving tumor recognition or treatment benefit.

## The intuition

Imagine looking at a building: people may be inside, gathered outside or scarce throughout. That tells you something about access. It does not tell you why they came or what they are doing. Tumor immune patterns carry the same limit.

## How it works

These patterns commonly emphasize where T cells are found. Other immune-cell populations need their own identities and counts; a macrophage-rich sample is not automatically T-cell inflamed.

An **inflamed**, often called hot, pattern has immune cells within sampled tumor regions. An **excluded** pattern has cells concentrated in surrounding tissue or at a boundary, with less entry into cancer-cell areas. An **immune-desert** pattern has few relevant immune cells in the examined regions. “Cold” is used inconsistently: some writers mean desert; others include excluded tumors. State which meaning you are using. [The cancer–immune set-point framework](https://www.nature.com/articles/nature21349) describes these patterns.

| Pattern | Observation | What remains open |
|---|---|---|
| Inflamed or hot | Immune cells reach sampled tumor regions | Their targets, function and treatment responsiveness |
| Excluded | Immune cells concentrate outside cancer-cell regions | Which barrier or signal limits entry |
| Desert | Few relevant immune cells are seen | Whether priming, recruitment, sampling or another factor explains scarcity |

Different tumor regions or disease sites can have different patterns. A small biopsy gives a window, not a census of all cancer. Treatment can change the sampled environment. Timing and location belong beside the label.

Presence also differs from specificity. Some cells in a tumor respond to infections or other antigens. Others restrain immune activity. “Hot” therefore does not mean every visible T cell is attacking cancer. Conversely, few visible cells do not show that no immune response exists elsewhere.

### Candidate reasons T cells stay out

"Excluded" names a pattern. Studies have identified several mechanisms that can produce it, each tested in its own setting:

| Candidate mechanism | What it does | Example evidence |
|---|---|---|
| Missing recruitment signals | T cells follow chemokines such as CXCL9 and CXCL10 through their receptor CXCR3; without them, fewer cells enter | Mouse tumors: anti-PD-1 benefit needed intratumoral CXCR3 signaling ([Chow et al., 2019](https://pubmed.ncbi.nlm.nih.gov/31097342/)) |
| Fibroblast-rich stroma and TGF-β | Transforming growth factor beta (TGF-β) signaling in stroma keeps T cells at the edge | Urothelial cancer treated with atezolizumab: a stromal TGF-β signature went with non-response and exclusion; in mice, blocking TGF-β together with PD-L1 let T cells into the tumor ([Mariathasan et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29443960/)) |
| Tumor-intrinsic WNT/β-catenin signaling | Reduces recruitment of the dendritic cells that start a response, which yields a desert more than an excluded rim | Melanoma patients and mouse models ([Spranger et al., 2015](https://pubmed.ncbi.nlm.nih.gov/25970248/)) |
| Abnormal vessels | Leaky, disorganized vessels and low adhesion-molecule display limit entry | Proposed across many tumor types; see [cytokines and chemokines](/wiki/education/concepts/immunology/immune-regulation/cytokine-and-chemokine) for the signals involved |

None of these is shown by the image itself. Each needs its own measurement.


### Shared visual reference

<img src="./images/matched-tissue-fields-v2-light.svg" alt="Three matching fictional tumor-tissue fields show eight specified T-cell symbols in both inflamed and excluded patterns, relocated from mainly inside cancer-cell regions to surrounding stroma; a desert field has two. Symbol count is distinct from a stromal-area score." data-theme-pair width="600" height="1500">

*Fictional fields: inflamed and excluded have the same eight T-cell symbols, with different locations; desert has two. The outlines mark regions, not a proven wall. Counts are not a stromal-area lymphocyte score, and no clinical cutoff, receptor target, killing or treatment response follows.*

The matched fields count specified T-cell symbols in a fixed fictional field. Stromal TIL scoring uses method-defined intratumoral stromal area; these symbols are not a stromal-area score, do not represent all scored mononuclear cells and cannot be converted into an sTIL percentage. Site, sampling time and method remain necessary. The [working-group recommendations](https://pubmed.ncbi.nlm.nih.gov/25214542/) define the area denominator. These fictional primary-tumor fields contain no lymph-node follicle or tertiary lymphoid structure (TLS) illustration; neither organization nor a causal barrier has been inferred.

## Why it matters in cancer

The pattern helps organize questions about priming, recruitment, access and local function. It does not by itself select a vaccine, checkpoint drug or treatment combination.

- **Outcome association in early triple-negative breast cancer (TNBC):** the best-studied version of "hot" is the stromal tumor-infiltrating lymphocyte (sTIL) score. In 2,148 patients with early TNBC given adjuvant chemotherapy, each 10% increase in sTILs was associated with an invasive disease-free survival hazard ratio of 0.87 and an overall survival hazard ratio of 0.84 ([Loi et al., 2019](https://pubmed.ncbi.nlm.nih.gov/30650045/)). That is a prognostic finding; see [tumor-infiltrating lymphocytes](/wiki/education/concepts/immunology/tumor-immunology/tumor-infiltrating-lymphocytes#why-it-matters-in-cancer) for the population and the neoadjuvant data.
- **Prognostic is not predictive:** those data do not show that a hot tumor gains more from adding a checkpoint inhibitor. See [prognostic vs predictive](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive).
- **From hot to PD-L1:** T cells that recognize a tumor release interferon gamma, which can make tumor and immune cells display programmed death-ligand 1 (PD-L1). This [adaptive immune resistance](/wiki/education/concepts/immunology/tumor-immunology/adaptive-immune-resistance) links an inflamed pattern to the [PD-L1 score](/wiki/education/concepts/measurement/pathology-readouts/pd-l1-scoring) ([Taube et al., 2012](https://pubmed.ncbi.nlm.nih.gov/22461641/)).

## Worked example

A fictional biopsy has many lymphocytes in surrounding stroma but few inside cancer-cell nests. “Immune-rich stroma” describes the observation. Calling it effective tumor killing goes beyond the image. Calling the whole patient immune-excluded may also be too broad if other sites were not sampled.

## Common confusions

- Hot is not synonymous with tumor-specific or effective.
- Exclusion describes distribution, not a proven physical-wall mechanism.
- A stromal score and an intratumoral-cell count have different denominators.
- There is no universal hot/cold threshold shared by every assay and cancer.

## How it is measured

Routine pathology counts or scores cells under specified rules. Multiplex imaging distinguishes cell identities and locations. Gene-expression profiles describe mixed activity programs but usually lose direct location. The [immune-readout lesson](/wiki/education/reading-a-tumor/measuring-t-cell-engagement) explains how the layers fit together. Breast-cancer stromal lymphocyte guidelines define a particular scoring method, rather than a universal hot/cold test. [The working-group recommendations](https://pubmed.ncbi.nlm.nih.gov/25214542/) give that scope.

## Assay card: report a tissue pattern

| Field | What to keep with the pattern |
|---|---|
| Measures | Presence and distribution of specified immune cells in sampled tissue |
| How | Define regions; identify or stain cells; score or count; report regional variation |
| Input and tissue cost | A tissue section or biopsy under a stated preparation; sectioning and staining consume finite material |
| Output and units | A descriptive pattern, counts per area or a method-defined score; these are different outputs |
| Thresholds | Defined by the method and study, not a universal hot/cold cutoff |
| Failure modes | Unrepresentative region, damaged section, poor staining, incorrect cell boundaries or wrong regional denominator |
| What it cannot tell you | Cell targets, causal barriers, killing at all sites or benefit from a particular drug |
| Validation tier | Depends on the exact method and use; a research pattern classifier is not automatically a clinical treatment-selection test |

[Stromal tumor-infiltrating lymphocyte scoring](/wiki/education/concepts/measurement/pathology-readouts/stil-scoring) uses stromal **area** as its denominator. It does not mean the fraction of all cells that are lymphocytes. [Multiplex imaging](/wiki/education/concepts/measurement/proteins-and-spatial/multiplex-immunofluorescence) adds selected identities and locations, with its own controls.

## Try it

A fictional section shows many T cells at the border but few within cancer-cell nests. Has the image identified collagen as the cause?

**Answer:** No. It supports a distribution consistent with exclusion under the stated definition. Matrix, vessels, signals and sampling are candidate explanations requiring their own evidence.

## Explain it back

“The pattern says where ___; it leaves ___ unresolved.” One answer: “specified cells were seen; their targets, function and the cause of the distribution.”

## Takeaway

**Keep the cell identity, region, specimen and scoring rule beside every immune-pattern label.**

## Related concepts

- [Cancer-immunity cycle](/wiki/education/concepts/immunology/tumor-immunology/cancer-immunity-cycle)
- [Cytokines and chemokines](/wiki/education/concepts/immunology/immune-regulation/cytokine-and-chemokine)
- [Immune escape](/wiki/education/concepts/immunology/tumor-immunology/immune-escape)

## Sources and scope

Source check: November 7, 2026. Descriptive tissue patterns; clinical predictions require assay-, population- and treatment-specific evidence. Expert and learner review remain pending.

- [Chen and Mellman, 2017: immune profiles in the cancer–immune set-point framework](https://www.nature.com/articles/nature21349).
- [Loi et al., 2019: pooled sTIL prognosis in early TNBC](https://pubmed.ncbi.nlm.nih.gov/30650045/).
- [Taube et al., 2012: interferon-linked PD-L1 and adaptive resistance](https://pubmed.ncbi.nlm.nih.gov/22461641/).
- Exclusion mechanisms: [Chow et al., 2019](https://pubmed.ncbi.nlm.nih.gov/31097342/); [Mariathasan et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29443960/); [Spranger et al., 2015](https://pubmed.ncbi.nlm.nih.gov/25970248/).
- [Salgado et al., 2015: breast-cancer lymphocyte-scoring recommendations](https://pubmed.ncbi.nlm.nih.gov/25214542/).
- [Kos et al., 2020: variability and pitfalls in stromal lymphocyte assessment](https://pubmed.ncbi.nlm.nih.gov/32411819/).
- [Preclinical in-situ tumor-array study, 2023](https://www.nature.com/articles/s41586-023-06132-2). Spatially distinct and changing patterns in mouse models support keeping location and timing attached; model associations do not create a universal clinical cutoff.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Compare related ideas](/wiki/education/comparisons/index)
- [What checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change)
- [How the immune system fights cancer](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
- [Learn the biology and evidence](/wiki/education/index)
- [Add the geography of cells and signals](/wiki/education/molecular-profiling/04-spatial-biology)
- [Separate immune presence from tumor recognition](/wiki/education/multi-omics-foundations/06-immune-presence-and-recognition)
- [Read an immune map without overreading it](/wiki/education/reading-a-tumor/immune-hot-vs-cold)
- [Measure each part of a T-cell response](/wiki/education/reading-a-tumor/measuring-t-cell-engagement)
<!-- END GENERATED USED IN -->
