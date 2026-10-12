---
title: "Measure each part of a T-cell response"
type: "guide-lesson"
guide: "how-the-immune-system-fights-cancer"
step: 5
minutes: 12
objectives: ["Match an immune assay to the claim it supports.", "Separate tissue location, receptor identity, function and tumor-response attribution.", "Explain how cell boundaries and frequency denominators can change an immune interpretation."]
prerequisites: ["[[wiki/education/concepts/measurement/immune-monitoring/tcr-sequencing]]", "[[wiki/education/concepts/immunology/t-cells/t-cell-states]]", "[[wiki/education/concepts/immunology/tumor-immunology/hot-excluded-cold-tumor]]", "[[wiki/education/concepts/measurement/immune-monitoring/flow-cytometry]]", "[[wiki/education/concepts/measurement/proteins-and-spatial/cell-segmentation]]"]
sensitive: false
tags: ["education", "immunology"]
updated: 2026-10-12
source_checked: 2026-10-10
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Measure each part of a T-cell response

**Location, receptor identity, function and tumor response are different measurements. A useful immune story connects them without treating one as proof of all the others.**

“Are the T cells doing useful work?” is a reasonable question. It is also several questions packed together. This lesson unpacks them so you can read a report one claim at a time.

**Before you start:** [T cells](/wiki/education/concepts/immunology/t-cells/t-cell) establishes cell identity. A [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) is the reader. [TCR sequencing (TCR-seq)](/wiki/education/concepts/measurement/immune-monitoring/tcr-sequencing) explains sequence identities. [T-cell states](/wiki/education/concepts/immunology/t-cells/t-cell-states) separates markers from function. [Hot, excluded and cold patterns](/wiki/education/concepts/immunology/tumor-immunology/hot-excluded-cold-tumor) explains tissue location. [Flow cytometry](/wiki/education/concepts/measurement/immune-monitoring/flow-cytometry) groups prepared cells by measured features; [cell segmentation](/wiki/education/concepts/measurement/proteins-and-spatial/cell-segmentation) estimates cell regions in images.

## Where this step sits

This is lesson 5 of [the immune-system guide](/wiki/education/guides/how-the-immune-system-fights-cancer/index). We turn the biological chain into a measurement plan for a fictional study.

**Find and locate cells → identify receptors → test a response → test tumor recognition → assess clinical effect.**

## Name the interaction before choosing the measurement

When someone says “T-cell engagement,” ask what they mean: target recognition, a signaling or secretion response, or killing in a defined experiment? Then ask which test directly addressed that claim. A receptor sequence, tissue location and clinical outcome each answer other parts of the story. The evidence ladder below keeps those parts visible.

For the receptor mechanism, use [T-cell receptors and TCR sequencing](/wiki/education/molecular-profiling/tcr-and-tcr-sequencing). For definitions, the glossary has [TCR](/about/Terminology#tcr), [TCR sequencing](/about/Terminology#tcr-seq) and [T-cell states](/about/Terminology#t-cell-states). This lesson's job is to match measurements to claims, rather than repeat those definitions.

## Two sample lanes, several jobs

A tissue sample preserves a local view. A blood sample allows repeated views of circulating populations. Neither is the universal first step. The right sample depends on the question, available material and assay requirements.

Blood assays often begin with [peripheral blood mononuclear cells (PBMCs)](/wiki/education/concepts/measurement/immune-monitoring/peripheral-blood-mononuclear-cells). This prepared mixture is neither all blood cells nor a substitute for tumor tissue. Flow measures selected features of recovered cells; it loses their original tissue arrangement when tissue is dissociated.

[Multiplex immunofluorescence (mIF)](/wiki/education/concepts/measurement/proteins-and-spatial/multiplex-immunofluorescence) and [imaging mass cytometry (IMC)](/wiki/education/concepts/measurement/proteins-and-spatial/imaging-mass-cytometry) preserve a section's geography through different marker-detection methods. Their per-cell interpretations depend on segmentation. A merged boundary can falsely assign an immune marker and a cancer-cell marker to one cell. Inspecting the original image and boundary overlay comes before interpreting that combination.

Blood repertoire sequencing can track which sampled receptor identities become more common. [Clonality metrics](/wiki/education/concepts/measurement/immune-monitoring/tcr-clonality-metrics) summarize how uneven the distribution is. Matching receptors across compartments adds evidence of overlap. It does not identify their target, and a bulk tissue sequence does not show where in the section that cell sat.

A third job is functional testing. The [enzyme-linked immunospot (ELISpot) assay](/wiki/education/concepts/measurement/immune-monitoring/elispot) measures secretion under defined stimulation. [Human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) displays fragments. [Peptide–HLA multimer staining](/wiki/education/concepts/measurement/immune-monitoring/peptide-hla-multimer-staining) tests binding to a defined display complex. Tumor-cell response assays ask another question: does natural presentation on the tested cancer cells support recognition or killing?

## Match the readout to the missing question

If the question is **which sampled population responded**, [intracellular cytokine staining (ICS)](/wiki/education/concepts/measurement/immune-monitoring/intracellular-cytokine-staining) can connect a cytokine response to stained cell types. [CD4 and CD8](/wiki/education/concepts/immunology/t-cells/cd4-vs-cd8) distinguish co-receptor populations; neither is a complete function label. State whether a percentage uses all viable T cells or a particular subset as its denominator. Its output still lacks a receptor sequence unless an additional identification strategy supplies one.

If the question is **whether specified targets died**, [functional cytotoxicity assays](/wiki/education/concepts/measurement/immune-monitoring/functional-cytotoxicity-assays) test that outcome with target-only and other appropriate controls. A peptide-loaded target and a naturally presenting cancer cell are different test systems. The latter helps address the processing-and-presentation bridge that added peptide can bypass.

Read the units before comparing results: spots per input cells, percent positive within a flow gate, relative receptor frequency, cells per tissue area and percent target death are different quantities. More positive-looking measurements do not remove those distinctions.

## Read the evidence ladder

| Finding | What it supports | What it does not establish |
|---|---|---|
| Lymphocytes seen in a tissue region | Presence and distribution under that method | Their antigen targets or useful killing |
| A clonotype becomes more frequent in blood | A measured repertoire change in that compartment | Absolute expansion, cancer specificity or the cause of the change |
| The clonotype is also detected in tumor | Detected overlap between sampled compartments | Recognition of the cancer |
| Defined peptide stimulation produces a response | Activity under those assay conditions | Natural tumor presentation or safe killing |
| Tested cancer cells provoke recognition or killing | Function against that model with its controls | Activity at every disease site or patient benefit |
| Clinical outcomes improve in a suitable study | Benefit supported for that population and comparison | That one measured clone caused the benefit |

The steps are related, but each has its own controls. A laboratory result does not become a clinical result by being placed beside it in a chart.

## A worked example: a promising clone

In a fictional vaccine study, clonotype A becomes more frequent after dosing. The same sequence is found in a tumor sample. An intended-peptide stimulation test is positive.

This is more informative than a frequency change alone. Still, several questions remain. Did the frequency rise because A increased, because other cells declined, or both? Is the sequence definition precise enough to identify the intended receptor? Did A's cells produce the peptide-stimulation response, or did another population respond? Do cancer cells naturally display the peptide? Can responding cells reach them and act safely?

A compatible single-cell method can pair receptor identity with gene-expression features. Paired alpha-beta sequences supply a more complete identity than a beta-chain junction alone; a match under one chain definition does not establish the same complete receptor. That may help select candidates for testing. “Cytotoxic-looking” gene expression still does not replace a killing assay.

Uneven per-target responses can describe [immunodominance](/wiki/education/concepts/immunology/t-cells/immunodominance). Newly detected responses to targets outside a vaccine set can support [epitope spreading](/wiki/education/concepts/immunology/t-cells/epitope-spreading) when baseline, specificity and assay controls are suitable. Additional receptor sequences alone establish neither finding. Both remain immune observations rather than proof of clinical benefit.

## Pair tumor and immune readouts carefully

[Circulating tumor DNA (ctDNA)](/about/Terminology#ctdna) measures tumor-derived DNA in blood. Its [units and assay rules](/wiki/education/concepts/measurement/liquid-biopsy/ctdna-units) matter. It does not directly measure T-cell activity.

If a tumor-DNA signal falls while a clone becomes more frequent, both observations can be reported. Their timing does not prove that the clone caused the decline. Chemotherapy, surgery, other treatment effects, shedding changes and assay sampling may also matter. Likewise, a stable blood repertoire does not prove that a response was caused only by chemotherapy: relevant cells may be unsampled or located elsewhere.

Attribution becomes stronger through appropriate comparison groups, timing, target-specific experiments and clinical design. The [evidence guide](/wiki/education/guides/reading-cancer-evidence/index) explains that next step.

## What can go wrong at this step

Samples can differ in handling, timing, quality and depth. A relative frequency is easily mistaken for an absolute cell count. A tissue section or selected field can miss another region's biology. An antigen assay can use conditions that differ from natural tumor presentation. A negative blood result can miss a tissue-localized response.

The remedy is to write the claim beside the readout and name its limit. This keeps a promising signal useful while making the next experiment clear.

## Try it

A clone becomes more frequent after treatment, while ctDNA is no longer detected. Has the immune assay established that the clone eliminated the cancer?

**Answer:** No. It establishes a repertoire change alongside a tumor-DNA result. Tumor specificity, function, causal attribution and assay detection limits remain separate questions.

## Explain it back

“Sequencing tells me ___; functional testing asks ___; clinical evidence asks ___.”

One possible answer: “which receptor identities were sampled; what they recognize and do under tested conditions; whether the intervention improves patient outcomes.”

## Takeaway

**Match every immune claim to the measurement that supports it, and leave the next untested step visible.**

**Next:** [Find the step an immune response can lose](/wiki/education/oncology-101/4-escape-mechanisms).

## Sources and scope

Source check: October 10, 2026. General immune-monitoring logic; no personal specimen calendar or assay procurement plan is prescribed. The study example is fictional. Expert and learner review remain pending.

- [Ruggiero et al., 2015: receptor repertoire analysis](https://www.nature.com/articles/ncomms9081).
- [Han et al., 2014: linking receptor sequence and cell phenotype](https://www.nature.com/articles/nbt.2938).
- [Salgado et al., 2015: tissue lymphocyte assessment](https://pubmed.ncbi.nlm.nih.gov/25214542/).
- [NCI: liquid biopsy and circulating tumor material](https://www.cancer.gov/news-events/cancer-currents-blog/2017/liquid-biopsy-detects-treats-cancer).
- [Windhager et al., 2023: multiplex image processing and analysis](https://www.nature.com/articles/s41596-023-00881-0). Primary protocol for checking images, segmentation and spatial summaries.
- [Rabinovich et al., 2019: flow-based cytotoxicity assay](https://pubmed.ncbi.nlm.nih.gov/31525367/). Primary controlled cell-function method; its model-specific result is not a clinical-benefit endpoint.
