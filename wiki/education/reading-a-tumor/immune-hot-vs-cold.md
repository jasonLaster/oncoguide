---
title: "Read an immune map without overreading it"
type: "guide-lesson"
guide: "how-the-immune-system-fights-cancer"
step: 4
minutes: 10
objectives: ["Distinguish inflamed, excluded and desert observations.", "Explain why tissue pattern, receptor specificity and treatment prediction are different claims."]
prerequisites: ["[[wiki/education/concepts/immunology/tumor-immunology/hot-excluded-cold-tumor]]", "[[wiki/education/concepts/measurement/pathology-readouts/stil-scoring]]", "[[wiki/education/concepts/immunology/tumor-immunology/cancer-immunity-cycle]]", "[[wiki/education/concepts/immunology/antibodies-and-b-cells/tertiary-lymphoid-structures]]"]
sensitive: false
tags: ["education", "immunology"]
updated: 2026-10-12
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Read an immune map without overreading it

**An immune map tells you where cells were seen in sampled tissue. It does not, by itself, tell you what they recognize or which treatment will help.**

“[Hot](/wiki/education/concepts/immunology/tumor-immunology/hot-excluded-cold-tumor#how-it-works)” sounds encouraging; “cold” sounds discouraging. The words are memorable, but a useful report needs something more concrete: which cells, which region, which specimen and which method?

**Before you start:** Read the immune-pattern definitions linked above. [Stromal tumor-infiltrating lymphocyte (sTIL) scoring](/wiki/education/concepts/measurement/pathology-readouts/stil-scoring) explains one pathology measurement. [The cancer-immunity cycle](/wiki/education/concepts/immunology/tumor-immunology/cancer-immunity-cycle) shows where access sits.

## Where this step sits

This is lesson 4 of [the immune-system guide](/wiki/education/guides/how-the-immune-system-fights-cancer/index). It is also a practical companion to [reading a tumor](/wiki/education/reading-a-tumor/index).

**Cell identity → location → possible bottleneck → additional measurement.**

## Start with the observation

Imagine a map showing people inside a building, gathered outside or scarce throughout. Location tells you about access. It does not reveal whether they came for the task you care about. Tissue patterns deserve the same careful reading.

Use the [canonical inflamed, excluded and desert definitions](/wiki/education/concepts/immunology/tumor-immunology/hot-excluded-cold-tumor#how-it-works) when reading the map. Ask the author what “cold” means in that report rather than assuming everyone uses it the same way.

A map can also show a mixed pattern. One edge may contain many cells while another region has few. Different disease sites can differ. Sampling one region does not erase the rest of the map. The [tumor microenvironment](/wiki/education/concepts/cancer-biology/tumor-microenvironment/tumor-microenvironment) places these cells alongside vessels, support cells and extracellular material.

## Give the other neighbors their own questions

Lymphocyte scoring is one view of the tissue. [Tumor-associated macrophages](/wiki/education/concepts/cancer-biology/tumor-microenvironment/tumor-associated-macrophages) are macrophages associated with tumor tissue; the location label does not assign a suppressive job. [Macrophage states](/wiki/education/concepts/immunology/innate-and-unconventional-cells/macrophage-states) vary beyond a fixed M1/M2 pair.

[Myeloid-derived suppressor cells](/wiki/education/concepts/cancer-biology/tumor-microenvironment/myeloid-derived-suppressor-cells) need an appropriate cell definition and evidence of suppressive function. A marker-positive cell in an image does not by itself establish that function. Keep the observation, proposed job and functional test in separate sentences.

## Choose the measurement for the question

Routine pathology and molecular profiling add different layers:

| Question | Useful measurement | Limit to keep beside it |
|---|---|---|
| How much sampled stroma contains lymphocytes? | sTIL scoring under a stated method | Does not assign every cell a subtype or target |
| Which proteins identify cells and their location? | [Immunohistochemistry](/wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry) or [multiplex immunofluorescence](/wiki/education/concepts/measurement/proteins-and-spatial/multiplex-immunofluorescence) | Selected markers and sampled regions constrain the view |
| Which immune expression programs appear in a mixed sample? | [Bulk RNA sequencing](/wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq) | Mixed signals do not directly preserve cell location |
| Which receptors are sampled? | [T-cell receptor sequencing](/wiki/education/concepts/measurement/immune-monitoring/tcr-sequencing) | Sequence does not establish antigen specificity or position inside a tissue section |

The stromal denominator matters. A high stromal lymphocyte score is not the percentage of all cancer cells that are immune cells. Nor is it identical to a count inside cancer-cell nests.

## A gathering can have its own organization

[Tertiary lymphoid structures (TLS)](/wiki/education/concepts/immunology/antibodies-and-b-cells/tertiary-lymphoid-structures) are organized immune gatherings that develop outside native lymphoid organs. A tumor-associated TLS can contain B-cell and T-cell regions. Some mature structures include germinal centers, where B-cell responses undergo selection. A loose lymphocyte cluster does not automatically meet those criteria.

This adds another spatial question: are the cells merely numerous, or do they form a structure under a stated scoring definition? Density, organization and maturity are separate properties. A lymph-node specimen naturally contains lymphoid architecture; do not relabel its native structure as a TLS.

Breast-cancer and immunotherapy cohort studies have linked organized immune features with outcomes in their defined settings. Those associations do not establish that making a TLS causes benefit or that one image selects a drug. Ask which population, specimen and treatment support the proposed interpretation.

## A worked example: the edge and the center

In a fictional biopsy, a pathologist sees many lymphocytes in the surrounding stroma. Multiplex imaging shows fewer cells inside cancer-cell nests. The defensible first sentence is: “This specimen contains immune-rich stroma with less entry into the cancer-cell regions examined.”

That observation suggests an access question. It does not yet prove a collagen wall, a particular suppressive signal or a failure of priming. Vessels, matrix and local signaling may each contribute. Follow-up measurements should test the proposed mechanism rather than treat the pattern label as its cause.

Now suppose a second sample has cells throughout the tumor. That establishes a different distribution. Their receptor targets and function remain open. [T-cell states](/wiki/education/concepts/immunology/t-cells/t-cell-states) and antigen-response measurements can help address those questions.


### Shared visual reference

<img src="../concepts/immunology/tumor-immunology/images/matched-tissue-fields-v2-light.svg" alt="Three matching fictional tumor-tissue fields show eight specified T-cell symbols in both inflamed and excluded patterns, relocated from mainly inside cancer-cell regions to surrounding stroma; a desert field has two. Symbol count is distinct from a stromal-area score." data-theme-pair width="600" height="1500">

[Open the canonical matched tissue fields](/wiki/education/concepts/immunology/tumor-immunology/hot-excluded-cold-tumor#shared-visual-reference). Compare where the same specified T-cell symbols sit before looking at how many there are.

*Fictional fields: inflamed and excluded have the same eight T-cell symbols, with different locations; desert has two. The outlines mark regions, not a proven wall. Counts are not a stromal-area lymphocyte score, and no clinical cutoff, receptor target, killing or treatment response follows.*

The matched fields count specified T-cell symbols in a fixed fictional field. Stromal TIL scoring uses method-defined intratumoral stromal area; these symbols are not a stromal-area score, do not represent all scored mononuclear cells and cannot be converted into an sTIL percentage. Site, sampling time and method remain necessary. The outer frame is sampled tumor tissue containing stroma and cancer-cell regions. It is not a lymph node, and the region outlines do not prove collagen caused exclusion. Keep the native-follicle/TLS distinction and the scoring rules in the surrounding lesson.

## What can go wrong at this step

The biggest error is jumping directly from a descriptive label to a drug. “Excluded” becomes “use a barrier-targeting treatment.” “Hot” becomes “checkpoint therapy is guaranteed.” Those conclusions require clinical evidence for an assay, population and treatment setting.

Technical shortcuts matter too. A tiny sample can miss a cell-rich region. Treatment timing can change what is being measured. A lymph-node specimen contains native immune tissue, making its context different from a primary-tumor specimen. The [scoring concept](/wiki/education/concepts/measurement/pathology-readouts/stil-scoring) explains why such distinctions belong in the report.

## Try it

A report shows many lymphocytes but gives no location, marker panel or scoring denominator. Which question should you ask first?

**Answer:** Ask what was measured, in which region and under which scoring rules. You need that information before deciding whether “hot” describes the observation accurately.

## Explain it back

“An immune pattern describes ___; it does not yet establish ___.”

One possible answer: “presence and distribution in sampled tissue; tumor specificity, useful killing or treatment benefit.”

## Takeaway

**Use the map to ask the next biological question, and keep the specimen and method attached to the answer.**

**Next:** [Measure each part of a T-cell response](/wiki/education/reading-a-tumor/measuring-t-cell-engagement).

## Sources and scope

Source check: October 9, 2026. Descriptive immune patterns and measurement limits; the biopsy example is fictional. Expert and learner review remain pending.

The tissue-ecosystem and myeloid-cell links were added October 10, 2026. Linked concepts carry their scoped cell-definition and function sources.

- [Chen and Mellman, 2017: the cancer–immune set point](https://www.nature.com/articles/nature21349).
- [Salgado et al., 2015: breast-cancer lymphocyte-scoring recommendations](https://pubmed.ncbi.nlm.nih.gov/25214542/).
- [Kos et al., 2020: scoring pitfalls and heterogeneity](https://pubmed.ncbi.nlm.nih.gov/32411819/).
- [Gu-Trantien et al., 2013: organized infiltrates in breast cancer](https://pubmed.ncbi.nlm.nih.gov/23778140/).
- [Vanhersecke et al., 2021: mature TLS in retrospective immunotherapy cohorts](https://pubmed.ncbi.nlm.nih.gov/35118423/) — study-specific associations, not an intervention proof.
