---
title: "Separate immune presence from tumor recognition"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 7
minutes: 10
objectives: ["Distinguish immune abundance, peptide presentation and specific recognition.", "Identify what stromal TIL scores and immune RNA leave unmeasured."]
prerequisites: ["[[wiki/education/concepts/immunology/the-immune-system/immune-cell-roster]]", "[[wiki/education/concepts/immunology/antigen-presentation/hla]]", "[[wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery]]", "[[wiki/education/concepts/measurement/pathology-readouts/stil-scoring]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Separate immune presence from tumor recognition

**Immune cells being nearby is useful information. Recognizing and killing malignant cells requires additional evidence.**

**Before you start:** [[wiki/education/concepts/immunology/the-immune-system/immune-cell-roster|The immune-cell roster]] identifies the neighbors. [[wiki/education/concepts/immunology/antigen-presentation/hla|Human leukocyte antigen (HLA)]] explains peptide display. [[wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery|Antigen-processing machinery]] explains the steps before display. [[wiki/education/concepts/measurement/pathology-readouts/stil-scoring|Stromal TIL scoring]] keeps the tissue denominator clear.

## Where this step sits

This is step 7 of [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. Imagine a security team standing outside a building. Their presence does not tell us which rooms they can enter or whether they recognize the person inside. The analogy helps separate location and recognition. Immune biology includes more cell types and feedback than a security story.

## Ask one question at a time

| Question | Useful observation | What remains open |
|---|---|---|
| Are immune cells present? | Tissue review or cell-specific markers | Which cells and what specificity? |
| Where are they? | Spatial staining or other localized measurement | Do they reach relevant malignant cells? |
| Is a peptide presented? | Appropriate presentation assay | Does a useful T-cell receptor recognize it? |
| Do cells respond to the target? | Controlled immune-response assay | Do they recognize and kill actual tumor cells? |
| Does treatment help? | Clinical study in the intended setting | Whether its result applies to this decision |

**T cells** inspect targets through their receptors. For many CD8 T-cell responses, the relevant target is a peptide, a short protein fragment, displayed on HLA class I. A [[wiki/education/concepts/immunology/antigen-presentation/neoantigen|neoantigen]] arises from a tumor-specific change. Its source gene being expressed is only one step toward recognition.

## Presentation is an assembled process

The tumor must make a suitable source product, generate a peptide, load it and display the relevant HLA complex. [[wiki/education/concepts/immunology/antigen-presentation/b2m|Beta-2-microglobulin (B2M)]] supports class I assembly. Losing one gene copy does not automatically abolish the protein or all presentation. Allele-specific HLA loss can change which peptide displays are available, rather than switching off every display.

[[wiki/education/concepts/measurement/proteins-and-spatial/immunopeptidomics|Immunopeptidomics]] recovers HLA-bound peptides for measurement. A detected peptide supports presentation in the sampled material. It does not alone establish a useful T-cell response or clinical benefit.

**Interferons** are signaling proteins that can change immune and presentation programs. A low baseline RNA score does not prove cells cannot respond to stimulation. RNA induction, assembled surface complexes and useful recognition remain different observations.

## What an immune-rich sample can mean

**Stromal tumor-infiltrating lymphocytes (sTILs)** are scored using the relevant stromal-area denominator. The score is not the fraction of all cells that are CD8 T cells. **Plasma cells** make antibodies. Antibody-class RNA identifies a kind of message, not what the antibodies recognize.

Likewise, a **chemokine** signal can suggest a recruitment or positioning process. Measuring its RNA does not show where responding cells moved. Cell abundance, spatial access and function need the corresponding observations.

## A worked example: an apparent disagreement

A fictional biopsy has high immune RNA. Spatial staining finds most T cells around malignant nests. Presentation testing finds a candidate peptide on some tumor cells. A peptide-stimulation assay shows an immune response.

These findings support several parts of the story, but they do not prove that responding cells reach every malignant nest and recognize naturally presented peptide at useful levels. An actual tumor-recognition experiment answers a closer question than stimulation with excess peptide. Its controls and model relevance still matter.

## What can go wrong at this step

- Replacing presentation evidence with a binding prediction.
- Replacing tumor recognition with immune-cell abundance.
- Calling a high stromal score “immune cells inside every cancer nest.”
- Calling one-copy B2M loss complete presentation failure.
- Treating a stimulated response as guaranteed tumor killing.

## Try it

A tissue contains many T cells and an expressed tumor mutation. Has the report established an immunogenic neoantigen?

**Answer:** No. Processing, presentation and a specific immune response still need evidence. Presence and expression make useful starting points.

## Explain it back

“Presence tells us ______. Presentation tells us ______. Recognition tells us ______.”

One answer: “immune cells were measured; a peptide display was measured; a receptor or immune response engaged the target under defined conditions.”

## Takeaway

**Keep immune presence, access, presentation, recognition and benefit on separate evidence rungs.**

**Next:** [[wiki/education/multi-omics-foundations/07-comparisons-and-evidence|Choose the comparison before interpreting the signal]].

## Sources and scope

Source check: October 9, 2026. The examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [McGranahan et al., primary allele-specific HLA-loss study in lung cancer](https://pmc.ncbi.nlm.nih.gov/articles/PMC5720478/).
- [Salgado et al., stromal TIL-scoring recommendations](https://pubmed.ncbi.nlm.nih.gov/25214542/).
- [[wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery|Antigen-processing mechanism and sources]].
