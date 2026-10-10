---
title: "T-cell receptors and TCR sequencing"
type: guide-lesson
sensitive: false
tags: [education]
updated: 2026-10-09
source_checked: 2026-10-09
minutes: 10
review_status: source-checked; expert and learner review pending
guide: molecular-profiling
step: 8
objectives: ["Explain t-cell receptors and TCR sequencing and distinguish a biological claim from clinical evidence."]
prerequisites: ["[[wiki/education/concepts/immunology/t-cells/t-cell-receptor]]", "[[wiki/education/concepts/measurement/immune-monitoring/tcr-sequencing]]"]
reviewed: pending
reviewed_by: ""
---

# T-cell receptors and TCR sequencing

**A T-cell receptor recognizes a peptide together with the [human leukocyte antigen (HLA) molecule](/wiki/education/concepts/immunology/antigen-presentation/hla) displaying it; sequencing identifies receptor sequences, rather than proving what they recognize.**

**Before you start:** [Human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) displays fragments. [T-cell receptors (TCRs)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) inspect them. [The repertoire](/wiki/education/concepts/immunology/t-cells/t-cell-repertoire) describes the sampled set; [TCR sequencing](/wiki/education/concepts/measurement/immune-monitoring/tcr-sequencing) measures receptor sequences. This lesson connects those ideas to an assay report.

## Recognition is a three-part contact

Most conventional T cells use a receptor made from an alpha and a beta chain. The receptor contacts both the peptide and its human leukocyte antigen (HLA) molecule. The **peptide sits in the HLA binding groove**; the TCR does not hold it in a separate peptide pocket. The receptor works with CD3 signaling proteins and, often, a CD4 or CD8 co-receptor.

A receptor can cross-recognize multiple peptide–HLA complexes. A clone means cells descended from the same T cell, usually carrying the same receptor sequence. Neither a sequence match nor binding alone proves safe tumor killing. Receptor affinity, peptide density, cell state and signaling all matter.

```mermaid
flowchart TD
  P[Protein fragment] --> H[Peptide displayed<br/>by HLA]
  H --> R[TCR contacts<br/>peptide and HLA]
  R --> S[Signaling and<br/>cell-state gates]
  S --> F[Possible T-cell<br/>response]
```

*Display, recognition and response are separate steps.*

## Repertoire change needs a comparison

The [repertoire concept](/wiki/education/concepts/immunology/t-cells/t-cell-repertoire) explains receptor diversity, continued adult thymic output and clone maintenance. Here, the practical question is which changes a sampled report can show. Vaccination, infection, treatment and sampling can all change clone frequencies. A baseline draw gives a comparison point, not a complete archive of every receptor in the body.

## What each assay measures

| Assay | Output | Main limit |
|---|---|---|
| Bulk TCR sequencing | Receptor sequences and relative abundance in the sample | Read counts depend on method; they are not always exact cell counts |
| Paired single-cell TCR sequencing | Alpha/beta pairs assigned to individual sampled cells | Requires a compatible preparation and adequate sampling |
| Paired TCR and gene-expression profiling | Receptor identity alongside cell-state features | State markers do not independently prove antigen specificity |
| Peptide stimulation, multimers or killing assays | A response or binding under defined conditions | Controls, HLA restriction, specificity and safety still need testing |

Blood and tumor are different compartments. A clone abundant in blood might respond to a virus. A clone in tumor might be a bystander. Detecting the same clone in both establishes overlap, rather than its target.

## A worked example

Invented numbers for learning: a clone rises from 0.1% to 2% of sampled blood receptors after vaccination. That is relative enrichment in those samples. It does not alone prove absolute expansion: other clones could have declined. Compatible cell counts, sampling and assay denominators are needed for the absolute-number claim. [Clonality metrics](/wiki/education/concepts/measurement/immune-monitoring/tcr-clonality-metrics) describe the distribution. A paired functional assay against the intended peptide can strengthen a specificity claim. Tumor-cell killing and clinical benefit require further evidence.

Extracting and expanding native antigen-reactive T cells is **adoptive transfer of selected cells**. Engineering cells to express a selected receptor is **engineered TCR-T**. They can share discovery assays, but differ in manufacturing, safety checks and regulatory requirements. Banking is neither a universal prerequisite nor a guarantee that a future product can be made.

## What can go wrong

A dominant blood clone can be a viral response. A shared blood/tumor clone can still be a bystander. Culture can select particular clones, and read counts depend on the assay. Link [enzyme-linked immunospot (ELISpot)](/wiki/education/concepts/measurement/immune-monitoring/elispot) or [multimer staining](/wiki/education/concepts/measurement/immune-monitoring/peptide-hla-multimer-staining) to the exact sequence and specimen when connecting functional evidence.

## Try it

A clone expands after dosing but fails the intended-peptide stimulation test. Can its sequence be called a tumor-specific therapeutic receptor?

**Answer:** No. Expansion identifies a candidate; failed or inconclusive specificity testing leaves its target unresolved.

## Explain it back

“Sequencing tells me ___; a functional experiment is needed to establish ___.” One answer: “which receptors were sampled; what they recognize and do.”

## Takeaway

**Receptor identity, expansion, antigen recognition and clinical effect are four different claims.**

**Next:** [[wiki/education/cellular-therapies/02-car-tcr-til-comparison|Compare immune-cell recognition systems]].

## Sources and scope

Source check: October 9, 2026; this is a general assay lesson. Expert and learner review remain pending.

- [Adult thymic output measured with receptor-excision circles](https://pubmed.ncbi.nlm.nih.gov/9872319/).
- [Primary study of TCR cross-reactivity](https://pubmed.ncbi.nlm.nih.gov/17559580/).
- [[wiki/education/cellular-therapies/09-reading-cell-therapy-evidence|Cell-therapy evidence ladder]].
