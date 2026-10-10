---
title: "Antigen and epitope"
type: concept
domain: immunology/antigen-presentation
summary: "An antigen is a molecule recognized by an immune receptor; an epitope is the particular part or molecular surface that receptor recognizes."
glossary_anchor: antigen-and-epitope
aliases: [antigen, epitope, antigenic determinant]
level: foundation
prerequisites: []
used_by: ["[[wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation]]","[[wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board]]","[[wiki/education/guides/engineered-cell-therapy/02-choosing-a-target]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]","[[wiki/education/targeted-therapy-modalities/01-mechanism]]"]
reviewed: pending
reviewed_by: ""
sensitive: false
tags: [education, immunology]
updated: 2026-10-10
source_checked: 2026-10-10
review_status: "Source-checked; expert and learner review pending"
---

# Antigen and epitope

## In one sentence

An antigen is a molecule recognized by an immune receptor; an epitope is the particular part or molecular surface that receptor recognizes.

## The intuition

Think of a book and the passage a reader notices. Two readers can notice different passages in the same book. Similarly, two immune receptors can recognize different epitopes associated with one antigen. Naming the protein alone leaves the exact recognition target unspecified.

The analogy has a limit: receptors recognize molecular shapes and chemical interactions, rather than reading words. A folded surface can bring together pieces that are far apart in the protein's linear sequence.

## How it works

An [antibody or B-cell receptor](/wiki/education/concepts/immunology/antibodies-and-b-cells/antibody-structure) can recognize an accessible part of a molecule directly. Its epitope may be a continuous stretch of sequence or a surface formed by folding. Accessibility matters: binding an isolated protein does not establish that the same site is reachable on an intact cell.

A conventional peptide-directed T-cell receptor ([TCR](/wiki/education/concepts/immunology/t-cells/t-cell-receptor)) recognizes a peptide together with a human leukocyte antigen ([HLA](/wiki/education/concepts/immunology/antigen-presentation/hla)) molecule. The source protein must be processed, and a suitable fragment displayed. For this kind of T-cell target, record the peptide **and** the restricting HLA molecule. The same peptide on another HLA molecule is a different recognition surface.

An antigen need not be foreign. Self molecules can be recognized, although [tolerance](/wiki/education/concepts/immunology/antigen-presentation/self-similarity-and-tolerance) normally restrains harmful responses. Recognition also differs from **immunogenicity**, the ability to elicit an immune response in a particular setting. Binding alone does not establish useful activation, tumor killing or safety.

## Why it matters in cancer

A proposed treatment may target a surface protein, a peptide derived from an intracellular protein, or several fragments encoded by a vaccine. The recognition route determines which measurements are relevant. A surface-expression assay cannot by itself establish peptide–HLA display, and a peptide-binding prediction cannot establish an accessible surface-antibody target.

## Worked example

In a fictional experiment, antibody A binds an exposed region of protein X. T cell B recognizes a fragment of X displayed by HLA-A*02:01. Both involve the same source protein, but they do not inspect the same surface. Removing X's exposed region could affect antibody A while leaving T cell B's peptide source intact. Losing HLA-A*02:01 could affect T cell B without removing antibody A's target.

Ask: “What exactly recognizes what, and where is that target displayed?” That question is more informative than “Is protein X an antigen?”

## Common confusions

- A protein name does not specify a single epitope.
- An antigen is not necessarily tumor-specific, foreign or immunogenic.
- Several epitopes from one protein may share the same failure mode if the tumor stops expressing that protein.
- Antibody binding and peptide-directed T-cell recognition require different evidence.

## Read the experiment

An epitope-mapping experiment asks which molecular features a particular receptor needs. Tests of purified protein, synthetic fragments and intact cells can give different answers because folding, processing and accessibility differ. Record the receptor, target form, presenting allele when relevant, and controls. A negative fragment-binding test does not necessarily exclude a folded surface epitope.

## Try it

Return to fictional protein X. An antibody binds purified X but not intact X-producing cells. Has the experiment disproved that X contains its epitope?

**Answer:** No. The isolated molecule supported binding. The epitope may be hidden, altered or insufficiently exposed on the tested cells; sample and reagent controls also matter.

## Explain it back

Explain why “same source protein” does not mean “same recognition surface.”

## Takeaway

**Name the receptor and exact molecular target before combining two antigen results.**

## Related concepts

- [Neoantigen](/wiki/education/concepts/immunology/antigen-presentation/neoantigen)
- [Tumor-associated antigen](/wiki/education/concepts/immunology/antigen-presentation/tumor-associated-antigen)
- [Antigen-processing machinery](/wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery)

## Sources and scope

Source-checked October 10, 2026. The example is fictional. This page focuses on antibodies and conventional peptide-directed T cells; other immune receptors can recognize other molecular structures. Expert and learner review remain pending.

- [NCI: antigen](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/antigen), an introductory definition; recognition and induced response are distinguished here.
- [NCI: epitope](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/epitope), which describes the antibody-recognized part of an antigen.
- [Janeway: antibody–antigen interactions](https://www.ncbi.nlm.nih.gov/books/NBK27160/), for linear and conformational epitopes.
- [Janeway: antigen recognition by B-cell and T-cell receptors](https://www.ncbi.nlm.nih.gov/books/NBK10770/), for the distinction between direct antigen recognition and peptide–major histocompatibility complex recognition by conventional T cells.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [HLA and antigen presentation in vaccine design](/wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation)
- [Read a neoantigen design board](/wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board)
- [Choose a target with a usable safety window](/wiki/education/guides/engineered-cell-therapy/02-choosing-a-target)
- [Understand how the immune system recognizes cancer](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
- [Separate the address from the killing mechanism](/wiki/education/targeted-therapy-modalities/01-mechanism)
<!-- END GENERATED USED IN -->
