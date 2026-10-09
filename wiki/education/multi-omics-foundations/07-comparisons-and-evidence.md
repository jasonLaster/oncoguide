---
title: Comparisons and the evidence ladder
tags: [education, multi-omics, comparator, target-validation]
---

# Comparisons and the evidence ladder

“High expression” is incomplete until we know **compared with what, in which cells, and measured how**. The October 4 reports repeatedly show why those questions change the conclusion.

## Read the comparison

| Term | Meaning |
|---|---|
| **Comparator / reference** | The group or baseline against which a result is interpreted |
| **Fold change (FC)** | Ratio of expression in one group to another under the analysis's normalization |
| **log2FC** | Base-2 logarithm of that ratio: +1 is twice as high, +2 is four times as high, −1 is half as high |
| **Percentile** | Position within a defined reference distribution; the 90th percentile is not 90% target-positive cells |
| **Batch effect** | Systematic differences associated with preparation, run, site, or another technical factor |
| **Capture chemistry** | How molecules are selected for sequencing; targeted hybrid capture and poly-A selection sample RNA differently |
| **Normalization / correction** | A method to make measurements more comparable; it cannot remove every source of bias |

Fold changes depend on count normalization and low-count handling. A ratio with a nearly zero denominator can look dramatic while resting on very little signal. [edgeR methods guide](https://bioconductor.org/packages/devel/bioc/vignettes/edgeR/inst/doc/edgeRUsersGuide.pdf)

The reports compare Personalis ACE4 hybrid-capture bulk RNA with poly-A-based public data and nuclei with whole-cell data. A global scaling correction cannot guarantee that every gene becomes comparable. Treatment exposure, biopsy site, and different tissue pieces add biological differences too. A before/after claim requires a reliable **specimen identity and collection date**, not only a matching genotype. [October 4 problems report](https://github.com/jasonLaster/oncoomics/blob/6c4e5438ca135835f0d5196df6f1fea42c243036/results/diana_multiomic_review_20261004/step16-problems-report/problems_report.md)

## Statistical and technical confidence

**Differential expression** is a modeled difference between groups. A **p-value** quantifies incompatibility with a specified null model under its assumptions; it is not the probability a target is useful. **FDR**, false discovery rate, addresses multiple testing. Small or contaminated comparison groups and unmodeled preparation differences can still undermine biological interpretation even when a statistical threshold passes. [Bioconductor comparison methods](https://www.bioconductor.org/books/3.15/OSCA.multisample/multi-sample-comparisons.html)

**QC**, quality control, checks whether the material and measurements are fit for the question. A **positive control** checks that expected signals can be recovered; a **negative control** helps assess background or false signals. Controls support the assay’s interpretation, rather than automatically validating every result.

## Enrichment, selectivity, and dependence

**Tumor-enriched** means higher in the chosen tumor comparison. **Tumor-selective** is a stronger claim about discrimination from relevant normal tissue. **Off-tumor effects** occur when a treatment acts on normal tissue; RNA comparisons alone cannot quantify that risk.

**Hypothetical example:** A marker is high in malignant epithelial cells, low in fibroblasts, and similarly high in normal luminal cells. It is epithelial-enriched in that comparison; it has not demonstrated tumor selectivity. If the normal group is small or contaminated, even that conclusion needs qualification.

A **target** is something a drug or immune therapy acts on. A **dependency** is something the cancer needs for survival or growth, demonstrated through suitable perturbation experiments. A **biomarker** is a measured characteristic; whether it predicts response depends on validation for the assay, treatment, and setting. A protein can be an accessible delivery address for an ADC without being the tumor's essential growth driver.

## Keep each measurement at its own step

<img src="/api/file?path=wiki%2Feducation%2Fmulti-omics-foundations%2Fimages%2Frna-protein-location-and-function-light.png" alt="RNA protein surface location and functional testing cartoon" data-theme-pair>

<!-- Cartoon source: [generation prompt](/api/file?path=wiki%2Feducation%2Fimages%2Fprompts%2Frna-protein-location-and-function.txt) -->

<!-- Theme asset: [dark variant](/api/file?path=wiki%2Feducation%2Fmulti-omics-foundations%2Fimages%2Frna-protein-location-and-function-dark.png) -->

*For a potential cell-surface target, expression, protein production, localization, and functional dependence need separate measurements.*

| Evidence | What it supports | Next question |
|---|---|---|
| DNA variant or gain | A sequence/copy change in the tested material | Is the call authentic and in the relevant cancer cells? |
| RNA abundance | Captured transcripts | Are intact protein and the relevant **isoform**—a particular molecular version—produced? |
| Total protein | Protein present in the assayed mixture | Which cells contain it, and where is it located? |
| **Membrane localization** | Protein on the cell surface under the localization assay | Can the treatment bind/access it, and what normal tissues share it? |
| **Activation / phosphorylation** | A signaling-associated protein modification | Is the cancer dependent on that activity? |
| Functional response | An effect under specified experimental conditions | Does it reproduce and translate to the clinical setting? |
| Clinical validation | Evidence in the intended assay, disease, and treatment context | Does it apply to the current decision? |

“Concordant DNA, RNA, and protein” means agreement across layers. Shared specimens, assumptions, or technical biases can make those layers partly dependent. Agreement is useful evidence; it is not automatic proof of treatment benefit.

## When the question is whether a variant is real

A **variant caller** is software proposing sequence changes. **PASS** means its filters passed, not clinical confirmation. **Consensus** means agreement under a stated rule. **Read support** counts supporting observations; **fragment support** avoids counting two paired-end reads of one DNA fragment as independent evidence. An **alignment artifact** is a misleading match to the reference. **Positive controls** are expected real signals used to check that a test can recover them.

The October 4 audit recovered positive-control variants while failing to reproduce the EVEE headline variants. A pathway story built on those specific calls therefore loses its patient-specific premise; general pathway biology still has its own evidence. [Problems report](https://github.com/jasonLaster/oncoomics/blob/6c4e5438ca135835f0d5196df6f1fea42c243036/results/diana_multiomic_review_20261004/step16-problems-report/problems_report.md)

## Say it in your own words

**“The RNA result nominates a question. I want the right normal comparator, protein location, and evidence of function before calling it a selective target or a dependency.”**

**Check yourself:** Does a nine-copy gain prove its named gene drives the tumor? **No.** Several genes can share a gain; expression and functional evidence help identify what matters. Return to [[wiki/education/multi-omics-foundations/index|the course and discussion card]].
