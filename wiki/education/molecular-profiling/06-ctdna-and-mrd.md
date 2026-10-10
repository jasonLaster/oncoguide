---
title: "Read blood measurements as a time series"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 14
minutes: 10
objectives: ["Distinguish blood-based mutation discovery from residual-disease monitoring.", "Interpret detection, units and serial changes within assay limits."]
prerequisites: ["[[wiki/education/concepts/measurement/liquid-biopsy/ctdna-units]]", "[[wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction]]", "[[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: 2026-10-10
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Read blood measurements as a time series

**A blood result is an assay-specific snapshot in a time series. Detection, location and useful intervention remain different questions.**

**Before you start:** [[about/Terminology#ctdna|Circulating tumor DNA (ctDNA)]] and [[wiki/education/concepts/measurement/liquid-biopsy/ctdna-units|its units]] distinguishes fractions and concentrations. [[wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction|Variant allele fraction (VAF)]] names a different denominator. [[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive|Prognostic versus predictive biomarkers]] separates forecasting from treatment selection.

## Where this step sits

This is step 14 of [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. [[wiki/education/concepts/measurement/liquid-biopsy/cfdna-vs-ctdna|Cell-free DNA (cfDNA) versus ctDNA]] explains the mixed-origin material in a blood sample.

[Molecular residual disease (MRD)](/wiki/education/concepts/measurement/liquid-biopsy/mrd) owns the stable definition. In this multi-omics workflow, keep the molecular signal separate from disease location and the evidence for an effective intervention.

## Begin with the assay's job

| Design | Main question | What it does not promise |
|---|---|---|
| [Tumor-informed monitoring](/wiki/education/concepts/measurement/liquid-biopsy/tumor-informed-mrd-assay) | Are selected known tumor features detectable in blood? | Discovery of every new resistance change |
| Tumor-naive monitoring | Is a qualifying cancer signal present without prior tumor sequencing? | A complete mutation profile |
| Plasma genomic profiling | Which profiled alterations are detectable? | Identical low-signal sensitivity to a monitoring assay |

Actual platforms can combine features. Read the assay specification rather than inferring its job from “liquid biopsy.” An assay that tracks a fixed list may miss a newly evolved alteration outside that list.

[Fragmentomics and methylation](/wiki/education/concepts/measurement/liquid-biopsy/fragmentomics-and-methylation) use DNA fragment or modified-base patterns. Their output depends on the particular assay and model; it need not be a mutation list. [Circulating tumor cells (CTCs)](/wiki/education/concepts/measurement/liquid-biopsy/circulating-tumor-cells) are cells captured from blood, a different object from released DNA fragments.

## Keep units and calls together

Some reports estimate tumor fraction in **parts per million (PPM)**. Others use a concentration quantity such as tumor molecules per milliliter. VAF uses variant-supporting observations at a location. These quantities cannot be universally converted into one another.

Record assay version, collection time, input, units, detection call and quantitation qualification together. [Blank, detection and quantitation limits](/wiki/education/concepts/evidence-and-statistics/biomarkers/limits-of-detection-and-quantitation) explains those qualifications. Below a reliable quantification boundary, the report may support detection more strongly than a precise trend. A smaller number is not automatically a precisely measured biological reduction.

## A worked negative result

Imagine a fictional tumor that sheds little DNA into blood. Its sample returns “not detected.” That means no qualifying signal was found under the assay's conditions. It does not mean no cancer cells exist anywhere.

An **analytical detection limit** asks how reliably a specified signal can be found under test conditions. **Clinical sensitivity** asks how often disease is detected in a defined population at a defined time. Excellent laboratory performance cannot retrieve tumor DNA that did not enter the tube. [Finite molecule sampling](/wiki/education/concepts/measurement/liquid-biopsy/limit-of-detection-and-sampling) explains that boundary.

Now imagine a detectable signal on a later draw. Check sample quality, timing, assay consistency and tumor origin before interpreting the change. The test does not locate a lesion. Imaging, tissue and clinical assessment answer complementary questions.

## False attribution and genuine evolution differ

[Clonal hematopoiesis and clonal hematopoiesis of indeterminate potential (CHIP)](/wiki/education/concepts/measurement/liquid-biopsy/chip) concern blood-cell clones; the terms have different scopes. A blood-cell signal must not quietly become a tumor signal. White-blood-cell comparison helps under the assay's method and limits.

A confirmed new tumor alteration is a different issue. It can be genuine evolution rather than false-positive noise. Repeated monitoring of old positions may not detect it. Disagreement between assays should prompt examination of scope, input, timing and denominators.

For [ctDNA–imaging discordance](/wiki/education/concepts/measurement/liquid-biopsy/ctdna-imaging-discordance), align dates and the questions each method asks. A negative tube does not erase a scan finding, and a positive tube does not supply a disease location.

## What can go wrong at this step

- Reading “not detected” as proof of zero disease.
- Treating an analytical limit as clinical sensitivity.
- Converting concentration into PPM without a specified model.
- Turning a prognostic association into proven benefit from intervention.
- Calling a blood signal a disease location.

Clinical utility depends on the disease setting, assay and proposed action. Current evidence and trial status belong in the clinical reference; this lesson teaches how to ask the question.

## Try it

Two monitoring methods disagree near their detection limits. Does that prove the more sensitive method is false?

**Answer:** No. Compare input, target scope, units, thresholds and timing. Confirmation and tumor attribution matter; the disagreement alone does not settle origin.

## Explain it back

“This result means ______ in ______, under ______. It does not by itself tell us ______.”

One answer: “a qualifying signal was or was not detected; this dated sample; this assay's conditions; location or a beneficial treatment.”

## Takeaway

**Read a blood result with its date, assay, denominator and limit attached.**

**Next:** [[wiki/education/molecular-profiling/07-from-data-to-care-plan|Build an integrated claim without skipping the clinical question]].

## Sources and scope

Source check: October 9, 2026. The examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [ESMO 2022 ctDNA recommendations: validity versus utility](https://pubmed.ncbi.nlm.nih.gov/35809752/).
- [[wiki/education/concepts/measurement/liquid-biopsy/ctdna-units|Units, examples and assay-specific sources]].
- [NCI biomarker testing](https://www.cancer.gov/about-cancer/treatment/types/biomarker-testing-cancer-treatment).
