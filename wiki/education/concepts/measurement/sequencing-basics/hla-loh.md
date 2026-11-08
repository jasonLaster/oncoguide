---
title: "HLA loss of heterozygosity"
type: "concept"
domain: "measurement/sequencing-basics"
aliases: ["HLA-LOH", "HLA loss of heterozygosity", "allele-specific HLA loss"]
summary: "HLA loss of heterozygosity is the loss, in tumor cells, of one parent's copy of the human leukocyte antigen region, often removing HLA-A, -B and -C alleles together and narrowing the peptides those cells can present."
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/immunology/antigen-presentation/hla]]", "[[wiki/education/concepts/biology-basics/genetics/allele-and-zygosity]]", "[[wiki/education/concepts/measurement/sequencing-basics/tumor-normal-vs-tumor-only-sequencing]]"]
used_by: ["[[wiki/education/guides/how-the-immune-system-fights-cancer/01-how-a-t-cell-sees-a-cancer-cell]]","[[wiki/education/guides/personalized-cancer-vaccine/03-hla-and-presentation]]","[[wiki/education/guides/personalized-cancer-vaccine/04-reading-a-design-board]]","[[wiki/education/guides/what-multi-omics-tells-us/03-read-dna]]"]
glossary_anchor: "hla-loh"
sensitive: false
tags: ["education", "measurement"]
updated: "2026-11-07"
source_checked: "2026-11-07"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# HLA loss of heterozygosity

## In one sentence

HLA loss of heterozygosity is the loss, in tumor cells, of one parent's copy of the human leukocyte antigen region, often removing HLA-A, -B and -C alleles together and narrowing the peptides those cells can present.

## The intuition

Imagine a cell using several different display cases. Losing one kind can remove some displays while leaving others usable. The analogy has a boundary: [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) molecules bind particular peptides, short protein fragments. Their function depends on actual sequence, processing and surface expression, rather than a shelf count alone.

## How it works

An [allele](/wiki/education/concepts/biology-basics/genetics/allele-and-zygosity) is an inherited sequence version. The three class-I genes, HLA-A, HLA-B and HLA-C, sit next to each other on chromosome 6 (at 6p21), so each parent passes down one linked set, a **haplotype**, of one allele of each. A person can therefore carry up to six different class-I alleles. **Loss of heterozygosity (LOH)** means that the tumor cells no longer retain both versions. Because the genes are linked, one deletion or copy-loss event commonly removes the whole maternal or paternal haplotype: three alleles at once, not one. Total DNA copy count alone cannot establish which haplotype remains.

In 90 non-small-cell lung cancers, the LOHHLA method found HLA LOH in 36 (40%); in the tumors examined region by region, a region typically had either all three loci lost or none ([McGranahan 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5720478/)). Breast-cancer frequencies need their own studies.

Allele-aware analysis compares tumor sequence evidence with a suitable [matched normal](/wiki/education/concepts/measurement/sequencing-basics/tumor-normal-vs-tumor-only-sequencing). HLA regions are highly variable, so a generic reference alignment can obscure the distinction. The original LOHHLA method used patient-specific HLA sequences together with estimated tumor purity, the malignant-cell proportion, and ploidy, the chromosome-copy context. Its primary study was in lung cancer, not a prevalence estimate for every breast cancer. [McGranahan 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5720478/).

A loss may occur in only one tumor population. Normal cells and other malignant populations can retain the allele and contribute reads. Thus a weak or indeterminate call is not proof of retention. Likewise, a call from one sampled region does not map every lesion.

DNA loss, reduced allele-specific RNA and reduced surface protein are separate findings. MHC (major histocompatibility complex) Hammer analyzes several such mechanisms separately. **[Beta-2 microglobulin (B2M)](/wiki/education/concepts/immunology/antigen-presentation/b2m)** supports classical class-I assembly; its functional loss can affect many alleles at once. That differs from losing one HLA allele. [Puttick 2024](https://www.nature.com/articles/s41588-024-01883-8), [Sade-Feldman 2017](https://www.nature.com/articles/s41467-017-01062-w).

## Why it matters in cancer

A [neoantigen](/wiki/education/concepts/immunology/antigen-presentation/neoantigen) design may depend on a particular presenting allele. A credible loss call therefore raises a specific question: which proposed targets depend on that allele, and what evidence supports presentation through retained alleles? It does not establish that all vaccine targets fail, or automatically identify a successful alternative therapy.

## Assay card

| Field | What to retain |
|---|---|
| Measures and method | Allele-specific DNA retention or loss using HLA typing, informative tumor/normal reads and copy-state inference |
| Input and tissue cost | Tumor and suitable normal DNA; extraction consumes an aliquot. Reanalysis of adequate existing files uses no new tissue |
| Output and units | Named allele, estimated allelic copy number, loss call and confidence; possible regional or subclonal scope |
| Thresholds | Caller-specific coverage, purity, copy-state and statistical criteria; no universal percentage establishes vaccine failure |
| Failure modes | Ambiguous mapping, incorrect typing, low tumor content, inadequate coverage and mixed populations |
| Validation limits | Retain specimen types and caller/version validation. DNA loss does not directly measure current peptide display or clinical benefit |

## Common confusions

<div class="cartoon-frame">
<img src="./images/hla-dna-expression-and-b2m-contrast-b11-v1-light.svg" width="600" height="1330" alt="Three fictional mechanism panels pair HLA-A DNA tiles with schematic surface display: loss of placeholder allele A1 while A2 remains; retained A1 and A2 with reduced expression; and retained HLA-A tiles with impaired B2M support. Dashed links mark display effects as requiring separate measurement; other class-I alleles may remain after one allele is lost." data-theme-pair>
<p class="cartoon-caption">An allele-specific DNA loss, reduced expression and impaired B2M support are different mechanisms. Measure current display separately.</p>
</div>

The [copy-number example](/wiki/education/concepts/measurement/sequencing-basics/copy-number-and-loh) explains why total copies and retained sequence versions are different questions.

**Read the comparison:** If HLA-A DNA is retained but class-I display is reduced, has allele-specific loss been shown?

**Answer:** No. Retention, expression and B2M support are different evidence questions. Current surface display and function need separate measurements.

- **LOH versus low expression:** losing DNA and making less RNA or protein are different mechanisms.
- **One allele versus one haplotype versus the entire system:** a single event often removes one parent's whole set of class-I alleles; the other parent's set may remain; B2M disruption affects all class-I display.
- **Negative versus uninformative:** insufficient usable tumor evidence cannot exclude loss.

## Try it

A fictional person's maternal haplotype carries HLA-A\*X, -B\*Y and -C\*Z. A vaccine design includes peptides predicted to bind A\*X and others predicted to bind B\*Y. Tumor analysis supports loss of the maternal haplotype. Which peptides are challenged?

**Answer:** Both groups, because B\*Y travelled on the same lost haplotype as A\*X. Peptides predicted to bind the retained paternal alleles are not challenged by this finding, but retention alone does not prove they are displayed; that needs presentation evidence.

## Explain it back

“HLA typing tells me ______; tumor HLA-LOH analysis asks ______.”

One answer: “which inherited versions exist; which of those versions remain in the sampled tumor population.”

## Takeaway

**Keep inherited type, tumor DNA retention and current presentation as separate questions.**

## Related concepts

- [Tumor purity and ploidy](/wiki/education/concepts/measurement/sequencing-basics/tumor-purity-and-ploidy): how normal-cell admixture and genome doubling change every tumor DNA number.
- [HLA typing and nomenclature](/wiki/education/concepts/immunology/antigen-presentation/hla-typing-and-nomenclature).
- [Antigen-processing machinery](/wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery).

## Sources and scope

Source check: November 7, 2026. Mechanism and assay interpretation; the exercise is fictional. Expert and learner review remain pending. No population prevalence or treatment recommendation is proposed.

- [McGranahan and colleagues 2017: allele-specific HLA loss and LOHHLA in lung cancer](https://pmc.ncbi.nlm.nih.gov/articles/PMC5720478/).
- [Puttick and colleagues 2024: distinct genomic and transcriptional HLA escape mechanisms](https://www.nature.com/articles/s41588-024-01883-8).
- [Sade-Feldman and colleagues 2017: B2M alterations and presentation loss in melanoma](https://www.nature.com/articles/s41467-017-01062-w).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [How a T cell sees a cancer cell](/wiki/education/guides/how-the-immune-system-fights-cancer/01-how-a-t-cell-sees-a-cancer-cell)
- [HLA and antigen presentation in vaccine design](/wiki/education/guides/personalized-cancer-vaccine/03-hla-and-presentation)
- [Read a neoantigen design board](/wiki/education/guides/personalized-cancer-vaccine/04-reading-a-design-board)
- [Read DNA: coverage, calls, copies and cell fractions](/wiki/education/guides/what-multi-omics-tells-us/03-read-dna)
<!-- END GENERATED USED IN -->
