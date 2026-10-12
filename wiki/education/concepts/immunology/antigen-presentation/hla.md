---
title: "HLA (human leukocyte antigen)"
type: concept
domain: immunology/antigen-presentation
summary: "HLA molecules display protein fragments for T-cell recognition."
glossary_anchor: hla
aliases: ["hla"]
prerequisites: []
reviewed: pending
reviewed_by: ""
level: foundation
sensitive: false
tags: [education, immunology]
used_by: ["[[wiki/education/cellular-therapies/02-car-tcr-til-comparison]]","[[wiki/education/cellular-therapies/05-engineered-t-cell-building-blocks]]","[[wiki/education/cellular-therapies/08-solid-tumor-barriers]]","[[wiki/education/cellular-therapies/09-reading-cell-therapy-evidence]]","[[wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation]]","[[wiki/education/designing-a-vaccine/03-immunopeptidomics]]","[[wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board]]","[[wiki/education/designing-a-vaccine/05-how-vaccines-are-manufactured]]","[[wiki/education/designing-a-vaccine/index]]","[[wiki/education/guides/aiming-a-drug-at-a-surface-target/index]]","[[wiki/education/guides/engineered-cell-therapy/02-choosing-a-target]]","[[wiki/education/guides/engineered-cell-therapy/index]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]","[[wiki/education/guides/local-therapy-and-the-immune-system/index]]","[[wiki/education/guides/personalized-cancer-vaccine/02-reading-tumor-and-normal-data]]","[[wiki/education/guides/personalized-cancer-vaccine/06-writing-the-message]]","[[wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response]]","[[wiki/education/guides/personalized-cancer-vaccine/index]]","[[wiki/education/guides/start-here/02-follow-immune-recognition]]","[[wiki/education/guides/start-here/index]]","[[wiki/education/local-treatment-modalities/01-mechanism]]","[[wiki/education/local-treatment-modalities/06-comparisons]]","[[wiki/education/molecular-profiling/08-profile-residual-tumor]]","[[wiki/education/molecular-profiling/tcr-and-tcr-sequencing]]","[[wiki/education/multi-omics-foundations/06-immune-presence-and-recognition]]","[[wiki/education/oncology-101/2-dendritic-cells]]","[[wiki/education/oncology-101/3-t-cell-states]]","[[wiki/education/oncology-101/4-escape-mechanisms]]","[[wiki/education/reading-a-tumor/measuring-t-cell-engagement]]","[[wiki/education/targeted-therapy-modalities/01-mechanism]]","[[wiki/education/targeted-therapy-modalities/03-overlap-and-sequencing]]","[[wiki/education/targeted-therapy-modalities/04-decision-questions]]","[[wiki/education/targeted-therapy-modalities/06-comparisons]]","[[wiki/education/targeted-therapy-modalities/index]]"]
updated: 2026-10-10
source_checked: 2026-10-10
review_status: "Source-checked; expert and learner review pending"
---

# HLA (human leukocyte antigen)

## In one sentence

HLA molecules display protein fragments for T-cell recognition.

## The intuition

A display case is a useful analogy: the cell exposes a small sample of its proteins. The case and the fragment both matter. A [T-cell receptor](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) recognizes a peptide together with a particular HLA molecule, rather than simply recognizing any version of the original protein.

## How it works

**Human leukocyte antigen (HLA)** is the human **major histocompatibility complex (MHC)** system. Its peptide-display molecules have two main classes. [CD4 and CD8](/wiki/education/concepts/immunology/t-cells/cd4-vs-cd8) name coreceptors and usual recognition partners, rather than two guarantees about what a cell will do.

| Feature | Classical class I | Class II |
|---|---|---|
| Common examples | HLA-A, HLA-B, HLA-C | HLA-DR, HLA-DP, HLA-DQ |
| Structure | A heavy chain, [beta-2 microglobulin (B2M)](/wiki/education/concepts/immunology/antigen-presentation/b2m) and a bound peptide | Alpha and beta chains with a bound peptide |
| Common location | Most nucleated cells | Mainly professional antigen-presenting cells; expression can be induced elsewhere |
| Usual peptide supply | Proteins made inside the presenting cell | Proteins processed in intracellular vesicles, often acquired from outside |
| Conventional T-cell partner | CD8 | CD4 |

These are common routes, not exclusive lists. [Cross-presentation](/wiki/education/concepts/immunology/antigen-presentation/cross-presentation) puts externally acquired antigen onto class I. It changes the antigen's origin; it does not turn that complex into class II. Likewise, a CD4 response is not proof of matching class-I tumor display.

HLA alleles are shared across people. A person inherits a combination; it is not necessarily unique. [HLA typing](/wiki/education/concepts/immunology/antigen-presentation/hla-typing-and-nomenclature) identifies that combination. [Binding predictors](/wiki/education/concepts/measurement/computational-analysis/binding-prediction) estimate whether a candidate peptide can fit a specified allele’s groove. Processing, transport, loading and cell-surface expression still determine whether it is actually displayed.

Most conventional class I complexes require B2M. Tumors can lose a presenting allele, alter processing or reduce expression. Allele-specific loss is different from complete loss of conventional class I display. Targets using retained alleles may remain possible.

HLA-C has lower surface expression than HLA-A/B in many contexts. Its smaller observed peptide share is not evidence that it is universally more permissive. Dataset representation and allele-specific prediction quality also matter. A measured peptide in a mixed tissue preparation does not establish its source cell or a safe tumor-specific T-cell response.


### Shared visual reference

<img src="./images/hla-class-i-contacts-v2-light.svg" alt="Schematic conventional class-I contact: a membrane-anchored heavy chain holds a peptide beside B2M; the T-cell receptor meets peptide plus HLA, while a separately anchored CD8 contacts a lower HLA region." data-theme-pair width="600" height="700">

*Common class-I schematic: the T-cell receptor inspects peptide plus human leukocyte antigen (HLA); CD8 contacts a separate HLA region. B2M has no separate membrane anchor. Shapes and spacing are illustrative, not atomic coordinates or proof of signaling or killing.*

<img src="./images/hla-class-ii-contacts-v2-light.svg" alt="Schematic conventional class-II contact: membrane-anchored alpha and beta chains hold a peptide; the T-cell receptor meets peptide plus HLA, and separately anchored CD4 meets a lower HLA region." data-theme-pair width="600" height="700">

*Common class-II schematic: the T-cell receptor inspects peptide plus HLA; CD4 has a separate contact. Both HLA chains cross the presenting-cell membrane. The drawing does not assign a helper or killer job, reproduce a measured docking angle, or predict function.*

The drawings separate the T-cell receptor contact from the co-receptor contact. They show common conventional structures, not exclusive cell-location lists. Typing, protein expression, recovered peptide, recognition and killing remain different observations. The structural references include [Garboczi](https://pubmed.ncbi.nlm.nih.gov/8906788/), [Hennecke](https://pubmed.ncbi.nlm.nih.gov/11060013/), [Gao](https://pubmed.ncbi.nlm.nih.gov/9177355/) and [Yin](https://pubmed.ncbi.nlm.nih.gov/22431638/); their particular constructs do not define universal shapes, angles or functions.

## Why it matters in cancer

It connects antigen display to receptor recognition and explains why loss of a presenting allele can affect a treatment route.

## Worked example

A mutation produces a plausible peptide for HLA-A*02:01. If the tumor loses the allele used by the intended receptor, binding predictions from inherited typing alone may no longer describe tumor presentation. Retained-allele assessment answers a different question from typing.

## Common confusions

- The HLA groove holds the peptide; the [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) contacts the peptide–HLA complex.
- Binding prediction is not measured presentation or T-cell recognition.
- A conventional surface-target engager can avoid peptide–HLA recognition; a peptide–HLA-directed engager retains that dependency.

## What each measurement adds

Typing describes inherited sequence. Tissue staining or [flow cytometry](/wiki/education/concepts/measurement/immune-monitoring/flow-cytometry) can measure selected HLA proteins under a defined protocol. [Immunopeptidomics](/wiki/education/concepts/measurement/proteins-and-spatial/immunopeptidomics) identifies recovered peptides. None alone demonstrates that every cancer cell displays one exact peptide–HLA pair. Mixed tissue, allele specificity, location and timing matter.

## Try it

A fictional sample has class-II staining and a peptide-responsive CD4 population. Is a proposed class-I/CD8 tumor target now demonstrated?

**Answer:** No. The observations concern another presentation class and response. Test the proposed peptide, exact class-I allele and relevant tumor cells.

## Explain it back

“Typing identifies ___; display measures ___; recognition tests ___.”

## Takeaway

**Keep class, allele, cell and peptide attached to an HLA claim.**

## Related concepts

- [HLA loss of heterozygosity](/wiki/education/concepts/measurement/sequencing-basics/hla-loh)
- [Beta-2 microglobulin](/wiki/education/concepts/immunology/antigen-presentation/b2m)
- [TCR sequencing](/wiki/education/molecular-profiling/tcr-and-tcr-sequencing)

## Sources and scope

General teaching, source-checked October 10, 2026. The examples are hypothetical unless a study is explicitly named. Expert and learner review remain pending.

- [NCBI Bookshelf: T cells and MHC proteins](https://www.ncbi.nlm.nih.gov/books/NBK26926/), for the common class-I/class-II structures and recognition routes.
- [Official HLA nomenclature](https://hla.alleles.org/pages/nomenclature/naming_alleles/), for shared named alleles.
- [Kaur et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28649982/), functional and structural study of allele-dependent HLA-C expression.
- [Sarkizova et al., HLAthena](https://doi.org/10.1038/s41587-019-0322-9), allele-specific recovered peptide data and prediction, rather than proof of every cell's display.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Compare immune-cell recognition systems](/wiki/education/cellular-therapies/02-car-tcr-til-comparison)
- [Building an engineered T cell](/wiki/education/cellular-therapies/05-engineered-t-cell-building-blocks)
- [The journey through a solid tumor](/wiki/education/cellular-therapies/08-solid-tumor-barriers)
- [Reading cell-therapy evidence](/wiki/education/cellular-therapies/09-reading-cell-therapy-evidence)
- [HLA and antigen presentation in vaccine design](/wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation)
- [Measure presentation, binding and response](/wiki/education/designing-a-vaccine/03-immunopeptidomics)
- [Read a neoantigen design board](/wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board)
- [How a personalized vaccine is manufactured](/wiki/education/designing-a-vaccine/05-how-vaccines-are-manufactured)
- [Why a personalized cancer vaccine can help](/wiki/education/designing-a-vaccine/index)
- [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index)
- [Choose a target with a usable safety window](/wiki/education/guides/engineered-cell-therapy/02-choosing-a-target)
- [How engineered immune cells can attack a solid tumor](/wiki/education/guides/engineered-cell-therapy/index)
- [Understand how the immune system recognizes cancer](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
- [Understand local therapy and the immune system](/wiki/education/guides/local-therapy-and-the-immune-system/index)
- [Read tumor and normal data before choosing targets](/wiki/education/guides/personalized-cancer-vaccine/02-reading-tumor-and-normal-data)
- [Turn selected targets into an mRNA message](/wiki/education/guides/personalized-cancer-vaccine/06-writing-the-message)
- [Dose a vaccine and measure its response](/wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response)
- [How a personalized cancer vaccine is designed](/wiki/education/guides/personalized-cancer-vaccine/index)
- [Follow the route to immune recognition](/wiki/education/guides/start-here/02-follow-immune-recognition)
- [Start here: read the biology, then the evidence](/wiki/education/guides/start-here/index)
- [Separate local injury from immune learning](/wiki/education/local-treatment-modalities/01-mechanism)
- [Compare delivery and recognition separately](/wiki/education/local-treatment-modalities/06-comparisons)
- [Read single-cell data after treatment](/wiki/education/molecular-profiling/08-profile-residual-tumor)
- [T-cell receptors and TCR sequencing](/wiki/education/molecular-profiling/tcr-and-tcr-sequencing)
- [Separate immune presence from tumor recognition](/wiki/education/multi-omics-foundations/06-immune-presence-and-recognition)
- [How dendritic cells help start a T-cell response](/wiki/education/oncology-101/2-dendritic-cells)
- [Why a T-cell count does not tell the whole story](/wiki/education/oncology-101/3-t-cell-states)
- [Find the step an immune response can lose](/wiki/education/oncology-101/4-escape-mechanisms)
- [Measure each part of a T-cell response](/wiki/education/reading-a-tumor/measuring-t-cell-engagement)
- [Separate the address from the killing mechanism](/wiki/education/targeted-therapy-modalities/01-mechanism)
- [Overlap and sequencing](/wiki/education/targeted-therapy-modalities/03-overlap-and-sequencing)
- [Questions for a targeted-therapy proposal](/wiki/education/targeted-therapy-modalities/04-decision-questions)
- [Compare formats with evidence and normal-tissue risk](/wiki/education/targeted-therapy-modalities/06-comparisons)
- [Targeted therapy mechanisms and comparisons](/wiki/education/targeted-therapy-modalities/index)
<!-- END GENERATED USED IN -->
