---
title: "Ask whether protein is present, placed and active"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 11
minutes: 10
objectives: ["Choose a protein assay for abundance, location or modification.", "Explain why protein presence is different from drug-accessible target or dependence."]
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/central-dogma]]", "[[wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry]]", "[[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Ask whether protein is present, placed and active

**Protein presence, cellular location, activation and dependence are separate questions. Choose the assay that fits the proposed mechanism.**

**Before you start:** [[wiki/education/concepts/biology-basics/genetics/central-dogma|DNA, RNA and protein]] supplies the layers. [[wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry|Immunohistochemistry (IHC)]] explains localized staining. [[wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq|Bulk RNA]] explains why a message cannot replace a protein measurement.

## Where this step sits

This is step 11 of [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. A workshop may contain a tool without using it, and the tool may be stored where a visitor cannot reach it. A protein can similarly be present but inactive or inaccessible. The comparison is useful until we need a molecular mechanism: proteins have specific structures, modifications and interactions.

## Four different questions

| Question | A useful approach | What it leaves open |
|---|---|---|
| Is protein present? | Validated staining or [mass spectrometry proteomics](/wiki/education/concepts/measurement/proteins-and-spatial/mass-spectrometry-proteomics) | Cell origin and useful location in a mixed sample |
| Where is it? | Tissue staining with morphology and localization | Accessibility to the proposed medicine |
| Is a component activated? | Suitable modification-specific measurement | Whole-pathway dependence |
| Does the model need it? | Controlled perturbation | Benefit and toxicity in patients |

[Phosphorylation](/wiki/education/concepts/biology-basics/signaling/phosphorylation) can change a protein's behavior; the consequence depends on the site and context. [Phosphoproteomics](/wiki/education/concepts/measurement/proteins-and-spatial/phosphoproteomics) measures phosphorylated molecules and supported sites. Its interpretation needs the source protein's amount, the exact site and specimen-handling context. A phospho-signal is not a universal on/off switch for an entire pathway.

**Reverse-phase protein array (RPPA)** uses antibodies on sample lysates to measure selected proteins or modifications. The tissue has been mixed, so this method does not preserve original cell coordinates. Common bottom-up mass spectrometry workflows digest [proteins into peptides](/wiki/education/concepts/biology-basics/molecules/protein-and-peptide). Their peptide evidence does not automatically establish an intact protein form; a targeted panel also measures selected analytes rather than every protein.

## Read a unit without changing its denominator

An abundance per mass of assayed protein is not molecules per malignant cell or surface receptors per cell. A **limit of quantification (LOQ)** defines where reliable quantification is supported under the method. **Not detected** must be read with the analyte list and threshold; the marker may be absent, below detection or not assayed.

For staining, retain which cells were scored, intensity, proportion and location. A membrane stain can answer a different question from nuclear or cytoplasmic staining. Clinical receptor categories use marker-specific rules; research RNA cannot quietly replace them.

## A worked repair finding

The fictional repair-gene R has an abnormal RNA product. Protein staining then shows reduced R signal in malignant cells, while normal neighbors retain a signal. That supports a cell-specific staining difference better than a bulk total alone. It does not establish the amount of intact R. An antibody may recognize a fragment or one of several forms; that question needs an assay validated to distinguish the relevant products.

It still does not measure repair. A suitable functional assay with damage, cell-state and positive controls addresses whether the system works now. Protein is a bridge in the chain, rather than the final answer.

## A second example: a delivery address

A surface receptor is abundant on cancer cells. A medicine may use it as an address to deliver a payload. The receptor need not be the growth driver for that delivery strategy to work. Conversely, a signaling inhibitor seeks a useful change in pathway behavior; surface abundance is not the same selection rule.

The target's particular **isoform**, a molecular version, can also matter. A gene-level signal does not identify every protein form. Normal-tissue expression, target access and heterogeneous distribution remain part of the proposed [drug mechanism](/wiki/education/concepts/therapeutics/how-drugs-work/drug-target-and-mechanism).

[[wiki/education/concepts/measurement/proteins-and-spatial/immunopeptidomics|Immunopeptidomics]] asks a different protein-related question: which peptides were recovered from human leukocyte antigen complexes? Presentation is closer to an immune-target question than total gene expression, but does not establish recognition by itself.

## What can go wrong at this step

- Treating a bulk protein quantity as a surface density.
- Treating one modification as a whole-pathway dependency.
- Treating unassayed or below-limit as biological absence.
- Assigning a vessel-cell signal to cancer cells without localization.

## Try it

A bulk panel detects receptor R, but no assay identifies its cells or membrane location. Has it shown an antibody can bind cancer cells?

**Answer:** No. Protein presence in the mixture is established under that assay. Cell-specific location and access need further evidence.

## Explain it back

“The protein assay measured ______. For this mechanism, the unanswered question is ______.”

One answer: “total abundance; whether the relevant product lies at an accessible cancer-cell surface.”

## Takeaway

**The useful protein assay measures the part of the mechanism that RNA left open.**

**Next:** [[wiki/education/molecular-profiling/04-spatial-biology|Add the geography of cells and signals]].

## Sources and scope

Source check: October 9, 2026. The examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [NCI immunohistochemistry](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/immunohistochemistry).
- [NCI breast biomarker testing](https://www.cancer.gov/types/breast/diagnosis/breast-cancer-biomarker-tests).
- [[wiki/education/concepts/measurement/proteins-and-spatial/immunopeptidomics|Presentation measurement and sources]].
- [Carr et al., targeted peptide assays and fit-for-purpose validation (2014)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3945918/).
- [Beausoleil et al., phosphorylation-site localization (2006)](https://doi.org/10.1038/nbt1240).
- [Mertins et al., specimen ischemia and phosphoprotein interpretation (2014)](https://pubmed.ncbi.nlm.nih.gov/24719451/).
