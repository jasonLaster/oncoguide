---
title: "Immunopeptidomics: measuring peptide display"
type: "guide-lesson"
goal: "Interpret a detected or undetected HLA-associated peptide without equating presentation with immunogenicity."
sensitive: false
tags: [education, immunology]
updated: "2026-10-08"
review_status: "Source-checked; expert and learner review pending"
guide: "personalized-cancer-vaccine"
step: 5
objectives: ["Interpret measured presentation and non-detection."]
prerequisites: ["[[wiki/education/concepts/immunology/antigen-presentation/hla]]", "[[wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery]]"]
reviewed: "pending"
reviewed_by: ""
minutes: 8
source_checked: "2026-10-08"
---

# Immunopeptidomics: measuring peptide display

**Before you start:** [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla), [antigen processing](/wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery).

**You will be able to:** Interpret a detected or undetected HLA (human leukocyte antigen)-associated peptide without equating presentation with immunogenicity.

**Immunopeptidomics** analyzes peptides associated with HLA molecules in a sampled preparation. It can supply measured evidence of peptide display that complements computational prediction. It is an incomplete measurement, not an exhaustive list of what every tumor cell presents.

**Before starting:** [HLA and presentation](/wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation).

## From tissue to a peptide list

```mermaid
flowchart LR
  A[Suitable specimen] --> B[Recover HLA-peptide complexes]
  B --> C[Release peptides]
  C --> D[LC-MS/MS analysis]
  D --> E[Identify sequences with confidence criteria]
```

*Peptide identification is a measured presentation result with sampling and identification limits.*

The laboratory isolates HLA-associated material, releases the peptides and analyzes them with liquid chromatography and tandem mass spectrometry (**LC-MS/MS**). Fragment patterns support candidate amino-acid sequences. Identification depends on quality thresholds, databases and the handling of uncertain spectra.

Mutation-aware analyses can ask whether a peptide corresponds to a tumor alteration. Shared antigens can also be detected. In mixed tissue, detecting a peptide does not automatically prove which cell type presented it or that it occurs nowhere in healthy tissue.

## Positive evidence and non-detection

| Result | Supported interpretation | Further question |
|---|---|---|
| Peptide detected with adequate identification confidence | The preparation contained that HLA-associated peptide | Which cell population supplied it, and do useful T cells recognize it? |
| Candidate not detected | The assay did not identify it under these conditions | Was abundance, recovery, coverage or sampling sufficient to make absence informative? |
| Many predicted candidates not detected | Prediction and measurement differ | How much is biological absence versus the assay's detection limits? |

An undetected peptide is not automatically a failed prediction. A detected peptide is not automatically **immunogenic**, meaning capable of eliciting a useful immune response. Recognition, activation, killing, normal-tissue specificity and clinical benefit are separate steps.

## Specimen and method constraints

Conventional recovery of HLA-bound peptides often uses suitable fresh or frozen tissue. Fixation changes the chemistry and requires method-specific assessment; a [formalin-fixed, paraffin-embedded (FFPE)](/about/Terminology#ffpe) proteomics result is not automatically a valid conventional HLA-peptidome result.

Tissue input, tumor content, HLA recovery and analytical sensitivity affect yield. There is no universal mass requirement, two-week turnaround or product tier that determines suitability. Ask the receiving laboratory which preservation, input and quality conditions its validated method requires.

Detection can be biased toward more abundant peptides or better-recovered alleles. Sampling one piece also misses some spatial and [clonal heterogeneity](/about/Terminology#clonal-heterogeneity). These limitations belong beside the positive findings, not only in a methods appendix.

## How it informs a design

Measured presentation can strengthen a candidate's evidence, identify candidates absent from a prediction shortlist or help investigate an uncertain allele. It does not dictate a universal ranking rule: an abundant shared normal-tissue peptide may be less suitable than a lower-abundance tumor-specific candidate.

The test's value depends on the unresolved question, available material and alternatives. TNBC is not uniformly high [tumor mutational burden (TMB)](/about/Terminology#tmb) or immune-hot, so those labels cannot decide its marginal value for every case.

## Try it

One of 100 predicted peptides is detected. Were the other 99 false predictions?

**Explain it back:** That cannot be determined from this fraction alone. We need detection sensitivity, tissue composition, HLA recovery and appropriate validation of the prediction task.

## Explain it back

Use immunopeptidomics as evidence about sampled presentation, then test recognition and function separately.

## Takeaway

**Use immunopeptidomics as evidence about sampled presentation, then test recognition and function separately.**

**Next:** [Write the message](/wiki/education/guides/personalized-cancer-vaccine/06-writing-the-message).

## Sources

Checked October 8, 2026.

- [Sarkizova et al., HLA-associated peptide dataset](https://www.nature.com/articles/s41587-019-0322-9).
- [TNBC-MERIT primary paper](https://www.nature.com/articles/s41586-025-10004-2) — one clinical vaccine study; not a universal assay-selection rule.
- [Verification and feedback loops](/wiki/education/modeling-tumor-response/verification-and-feedback-loops) — linked primary functional evidence.
