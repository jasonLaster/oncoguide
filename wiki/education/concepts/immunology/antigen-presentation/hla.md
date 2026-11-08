---
title: "HLA (human leukocyte antigen)"
type: concept
domain: immunology/antigen-presentation
summary: "HLA molecules display protein fragments for T-cell recognition, and class I HLA also signals normal self to natural killer cells."
glossary_anchor: hla
aliases: ["hla", "human leukocyte antigen", "MHC", "major histocompatibility complex"]
prerequisites: ["[[wiki/education/concepts/immunology/antigen-presentation/antigen-and-epitope]]", "[[wiki/education/concepts/immunology/t-cells/t-cell-receptor]]"]
reviewed: pending
reviewed_by: ""
level: foundation
sensitive: false
tags: [education, immunology]
used_by: ["[[wiki/education/guides/accessing-experimental-therapy/05-sequence-the-work]]","[[wiki/education/guides/aiming-a-drug-at-a-surface-target/01-mechanism]]","[[wiki/education/guides/aiming-a-drug-at-a-surface-target/03-comparisons]]","[[wiki/education/guides/aiming-a-drug-at-a-surface-target/index]]","[[wiki/education/guides/engineered-cell-therapy/02-choosing-a-target]]","[[wiki/education/guides/engineered-cell-therapy/03-engineered-t-cell-building-blocks]]","[[wiki/education/guides/engineered-cell-therapy/06-solid-tumor-barriers]]","[[wiki/education/guides/engineered-cell-therapy/08-reading-cell-therapy-evidence]]","[[wiki/education/guides/engineered-cell-therapy/09-car-tcr-til-comparison]]","[[wiki/education/guides/engineered-cell-therapy/10-read-a-research-product-study]]","[[wiki/education/guides/engineered-cell-therapy/index]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/01-how-a-t-cell-sees-a-cancer-cell]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/02-start-a-response]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/03-reach-the-tumor]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/05-t-cell-states]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/06-find-the-failed-step]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/08-measure-a-response]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/09-read-a-tcr-sequencing-report]]","[[wiki/education/guides/how-the-immune-system-fights-cancer/index]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/04-ask-product-specific-questions]]","[[wiki/education/guides/local-therapy-and-the-immune-system/01-mechanism]]","[[wiki/education/guides/local-therapy-and-the-immune-system/06-comparisons]]","[[wiki/education/guides/local-therapy-and-the-immune-system/index]]","[[wiki/education/guides/personalized-cancer-vaccine/01-why-vaccination-can-help]]","[[wiki/education/guides/personalized-cancer-vaccine/02-reading-tumor-and-normal-data]]","[[wiki/education/guides/personalized-cancer-vaccine/03-hla-and-presentation]]","[[wiki/education/guides/personalized-cancer-vaccine/04-reading-a-design-board]]","[[wiki/education/guides/personalized-cancer-vaccine/05-measuring-presentation-and-response]]","[[wiki/education/guides/personalized-cancer-vaccine/06-writing-the-message]]","[[wiki/education/guides/personalized-cancer-vaccine/07-making-the-product]]","[[wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response]]","[[wiki/education/guides/personalized-cancer-vaccine/index]]","[[wiki/education/guides/start-here/02-follow-immune-recognition]]","[[wiki/education/guides/start-here/index]]","[[wiki/education/guides/what-multi-omics-tells-us/07-map-cells-and-immune-context]]","[[wiki/education/guides/what-multi-omics-tells-us/12-profile-residual-tumor]]"]
updated: 2026-11-07
source_checked: 2026-11-07
review_status: "Source-checked; expert and learner review pending"
---

# HLA (human leukocyte antigen)

## In one sentence

HLA molecules display protein fragments for T-cell recognition, and class I HLA also signals normal self to natural killer cells.

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

- **Key facts.** Each person inherits two copies each of HLA-A, HLA-B and HLA-C, so a cell can display up to six classical class I variants at once (they are expressed codominantly). The reference database lists 46,146 named HLA alleles, 31,311 of them class I ([IPD-IMGT/HLA statistics, release 3.66](https://www.ebi.ac.uk/ipd/imgt/hla/about/statistics/)).
- **Two audiences.** Class I HLA shows peptides to CD8 T cells and is also the main ligand for inhibitory receptors on [natural killer (NK) cells](/wiki/education/concepts/immunology/innate-and-unconventional-cells/nk-cell-and-missing-self). Losing it can hide a tumor from T cells while removing a brake on NK cells.
- **Nonclassical HLA.** HLA-E and HLA-G vary little between people. HLA-E presents leader peptides from other class I molecules and is the ligand for the NK inhibitory receptor CD94/NKG2A ([Braud et al., 1998](https://pubmed.ncbi.nlm.nih.gov/9486650/)).
- **Escape.** Loss of a presenting allele ([HLA loss of heterozygosity](/wiki/education/concepts/measurement/sequencing-basics/hla-loh)) or of [B2M](/wiki/education/concepts/immunology/antigen-presentation/b2m) can remove a T-cell treatment route.

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
- [TCR sequencing](/wiki/education/guides/how-the-immune-system-fights-cancer/09-read-a-tcr-sequencing-report)

## Sources and scope

General teaching, source-checked October 10, 2026. The examples are hypothetical unless a study is explicitly named. Expert and learner review remain pending.

- [NCBI Bookshelf: T cells and MHC proteins](https://www.ncbi.nlm.nih.gov/books/NBK26926/), for the common class-I/class-II structures and recognition routes.
- [IPD-IMGT/HLA database statistics](https://www.ebi.ac.uk/ipd/imgt/hla/about/statistics/), allele counts (release 3.66, read November 7, 2026).
- [Braud et al., 1998: HLA-E binds CD94/NKG2A](https://pubmed.ncbi.nlm.nih.gov/9486650/).
- [Official HLA nomenclature](https://hla.alleles.org/pages/nomenclature/naming_alleles/), for shared named alleles.
- [Kaur et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28649982/), functional and structural study of allele-dependent HLA-C expression.
- [Sarkizova et al., HLAthena](https://doi.org/10.1038/s41587-019-0322-9), allele-specific recovered peptide data and prediction, rather than proof of every cell's display.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Sequence the work and respect what cannot be undone](/wiki/education/guides/accessing-experimental-therapy/05-sequence-the-work)
- [Separate the address from the killing mechanism](/wiki/education/guides/aiming-a-drug-at-a-surface-target/01-mechanism)
- [Compare formats with evidence and normal-tissue risk](/wiki/education/guides/aiming-a-drug-at-a-surface-target/03-comparisons)
- [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index)
- [Choose a target with a usable safety window](/wiki/education/guides/engineered-cell-therapy/02-choosing-a-target)
- [Building an engineered T cell](/wiki/education/guides/engineered-cell-therapy/03-engineered-t-cell-building-blocks)
- [The journey through a solid tumor](/wiki/education/guides/engineered-cell-therapy/06-solid-tumor-barriers)
- [Reading cell-therapy evidence](/wiki/education/guides/engineered-cell-therapy/08-reading-cell-therapy-evidence)
- [Compare immune-cell recognition systems](/wiki/education/guides/engineered-cell-therapy/09-car-tcr-til-comparison)
- [Read a research-product study without losing the denominator](/wiki/education/guides/engineered-cell-therapy/10-read-a-research-product-study)
- [How engineered immune cells can attack a solid tumor](/wiki/education/guides/engineered-cell-therapy/index)
- [How a T cell sees a cancer cell](/wiki/education/guides/how-the-immune-system-fights-cancer/01-how-a-t-cell-sees-a-cancer-cell)
- [How dendritic cells help start a T-cell response](/wiki/education/guides/how-the-immune-system-fights-cancer/02-start-a-response)
- [How T cells reach a tumor, and what keeps them out](/wiki/education/guides/how-the-immune-system-fights-cancer/03-reach-the-tumor)
- [Why a T-cell count does not tell the whole story](/wiki/education/guides/how-the-immune-system-fights-cancer/05-t-cell-states)
- [Find the step an immune response can lose](/wiki/education/guides/how-the-immune-system-fights-cancer/06-find-the-failed-step)
- [What checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/07-what-checkpoint-inhibitors-change)
- [Measure each part of a T-cell response](/wiki/education/guides/how-the-immune-system-fights-cancer/08-measure-a-response)
- [Read a T-cell receptor sequencing report](/wiki/education/guides/how-the-immune-system-fights-cancer/09-read-a-tcr-sequencing-report)
- [Why the immune system doesn't just kill a tumor, and what checkpoint inhibitors change](/wiki/education/guides/how-the-immune-system-fights-cancer/index)
- [Ask the questions a therapy format demands](/wiki/education/guides/judging-a-test-or-vendor-claim/04-ask-product-specific-questions)
- [Separate local injury from immune learning](/wiki/education/guides/local-therapy-and-the-immune-system/01-mechanism)
- [Compare delivery and recognition separately](/wiki/education/guides/local-therapy-and-the-immune-system/06-comparisons)
- [Understand local therapy and the immune system](/wiki/education/guides/local-therapy-and-the-immune-system/index)
- [Why a personalized cancer vaccine can help](/wiki/education/guides/personalized-cancer-vaccine/01-why-vaccination-can-help)
- [Read tumor and normal data before choosing targets](/wiki/education/guides/personalized-cancer-vaccine/02-reading-tumor-and-normal-data)
- [HLA and antigen presentation in vaccine design](/wiki/education/guides/personalized-cancer-vaccine/03-hla-and-presentation)
- [Read a neoantigen design board](/wiki/education/guides/personalized-cancer-vaccine/04-reading-a-design-board)
- [Measure presentation, binding and response](/wiki/education/guides/personalized-cancer-vaccine/05-measuring-presentation-and-response)
- [Turn selected targets into an mRNA message](/wiki/education/guides/personalized-cancer-vaccine/06-writing-the-message)
- [How a personalized vaccine is manufactured](/wiki/education/guides/personalized-cancer-vaccine/07-making-the-product)
- [Dose a vaccine and measure its response](/wiki/education/guides/personalized-cancer-vaccine/08-dosing-and-measuring-response)
- [How a personalized cancer vaccine is designed](/wiki/education/guides/personalized-cancer-vaccine/index)
- [Follow the route to immune recognition](/wiki/education/guides/start-here/02-follow-immune-recognition)
- [Start here: triple-negative breast cancer in 30 minutes](/wiki/education/guides/start-here/index)
- [Add geography and immune context](/wiki/education/guides/what-multi-omics-tells-us/07-map-cells-and-immune-context)
- [Read single-cell data after treatment](/wiki/education/guides/what-multi-omics-tells-us/12-profile-residual-tumor)
<!-- END GENERATED USED IN -->
