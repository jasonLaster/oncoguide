---
title: "Multi-omics foundations"
tags: [education, multi-omics, epithelial, single-nucleus, terminology]
type: navigation
sensitive: false
reviewed: pending
reviewed_by: ""
---

# Multi-omics foundations

Start with **epithelial**: a cell family that forms linings and glands. In the breast, epithelial cells line ducts and milk-producing structures. Both normal breast cells and breast-cancer cells can be epithelial. That distinction unlocks much of the vocabulary in a multi-omics report.

This supporting course builds the vocabulary needed to discuss tumor reports. The goal path is [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. Each lesson pairs a cartoon with plain-language definitions, a sentence to practice, and a question to check your understanding. The examples teach how to interpret a finding. Diana's current results remain in the molecular profile and source reports.

## Start with the cells, then follow the measurements

| Lesson | You will be able to explain | Vocabulary |
|---|---|---|
| [1. Epithelial cells and breast tissue](/wiki/education/multi-omics-foundations/01-epithelial-and-breast-tissue) | Why epithelial does not mean cancerous | Epithelium, lumen, duct, lobule, luminal, myoepithelial, basement membrane, stroma, fibroblast, endothelium |
| [2. Cell identity, state, and subtype](/wiki/education/multi-omics-foundations/02-cell-identity-and-state) | How TNBC and a luminal-progenitor-like state can coexist | Malignant, lineage, progenitor, differentiation, basal, PAM50, EMT, keratin, marker, cluster |
| [3. Reading RNA counts](/wiki/education/multi-omics-foundations/03-reading-rna-counts) | What single-nucleus RNA measures and where misleading signals arise | Bulk, scRNA-seq, snRNA-seq, barcode, droplet, UMI, ambient RNA, doublet, pseudobulk, CPM, TPM, detection fraction, module score |
| [4. Copies, alleles, and clones](/wiki/education/multi-omics-foundations/04-copies-alleles-and-clones) | Why a variant percentage is different from the percentage of cancer cells carrying it | Somatic, germline, allele, haplotype, phasing, LOH, biallelic, copy number, amplicon, purity, ploidy, whole-genome doubling, VAF, CCF, clone |
| [5. Splicing and DNA repair](/wiki/education/multi-omics-foundations/05-splicing-and-dna-repair) | How a DNA splice variant can affect RNA, and what an HRD scar records | Exon, intron, pre-mRNA, splice donor/acceptor, cryptic site, exon skipping, frameshift, premature stop, NMD, HRD, LST, TAI, SBS3, microhomology, POLQ, ATR |
| [6. Immune presence and tumor recognition](/wiki/education/multi-omics-foundations/06-immune-presence-and-recognition) | Why an immune-rich sample does not prove tumor cells are being recognized | Antigen, neoantigen, HLA-I, B2M, antigen-processing machinery, interferon, sTIL, plasma cell, IgA, IgG, chemokine, CXCL12 |
| [7. Comparisons and the evidence ladder](/wiki/education/multi-omics-foundations/07-comparisons-and-evidence) | What must be checked before calling a gene a selective target or a dependency | Comparator, fold change, log2FC, percentile, batch effect, capture chemistry, enrichment, selectivity, localization, isoform, biomarker, dependency, validation |

## Translate a report sentence

“The malignant epithelial pseudobulk shows a luminal-progenitor-like program” contains four separate ideas:

1. **Epithelial:** the family of cells being studied.
2. **Malignant:** evidence identifies these as cancer cells.
3. **Pseudobulk:** their RNA counts were pooled computationally.
4. **Luminal-progenitor-like:** a group of expressed genes resembles a reference cell state.

A comfortable translation is: **“They grouped the cancer cells' RNA together and found a pattern resembling an immature breast lining-cell program.”** The word *resembling* matters: this does not prove the exact cell the cancer began in or change the clinical receptor diagnosis.

## A discussion card

Before interpreting any new term, ask:

- Which cells or tissue piece supplied the signal?
- Is this a DNA change, an RNA pattern, a protein measurement, or a functional test?
- Compared with what, using which preparation and units?
- Is the conclusion observed, inferred, predicted, or clinically validated?
- What additional measurement would establish the next claim?

Then return to [[wiki/education/reading-a-tumor/index|Reading a tumor report]] or [[wiki/education/molecular-profiling/index|the molecular-profiling course]] for the broader assay tour.

## Sources and scope

Each lesson links to scientific definitions, methods or primary studies supporting the biological explanation. These are vocabulary lessons, not a case-result summary. Expert and learner review remain pending.
