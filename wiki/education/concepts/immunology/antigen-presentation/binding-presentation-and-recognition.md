---
title: "Binding, presentation and recognition"
type: comparison
domain: immunology/antigen-presentation
aliases: []
summary: "Peptide binding, peptide presentation and T-cell recognition answer different questions about the same proposed target, and each requires its own evidence."
level: intermediate
sensitive: false
tags: [education, comparison]
prerequisites:
  - "[[wiki/education/concepts/immunology/antigen-presentation/hla]]"
  - "[[wiki/education/concepts/measurement/computational-analysis/binding-prediction]]"
used_by: []
reviewed: pending
reviewed_by: ""
expert_review: pending
learner_review: pending
---

# Binding, presentation and recognition

Peptide binding, peptide presentation and T-cell recognition answer different questions about the same proposed target, and each requires its own evidence.

## What the questions share

A **peptide** is a short protein fragment. [Human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) can display peptides for inspection by a [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor). Keep the exact peptide, HLA allele and tested cell context on every evidence card. An allele is a particular gene version; “HLA-positive” is not enough detail.

## The axis is the claim being tested

The word “binding” hides two different contacts. **Peptide-to-HLA binding** concerns a fragment fitting the display molecule. **TCR-to-peptide–HLA binding** concerns a receptor contacting that assembled display. Neither contact, by itself, proves a functional response to naturally presenting cancer cells.

```text
SAME PROPOSED TARGET

PEPTIDE + HLA
Is binding predicted
or measured?

HLA PREPARATION
Which associated peptides
were recovered?

TCR + PEPTIDE–HLA
Does this receptor bind
the defined reagent?

NATURAL TARGET
Do tested cells provoke
recognition or function?
```

*These cards compare claims; they are not automatic steps toward success.*

## Match evidence to the contact and preparation

| Evidence | Question and context | Supported claim | Missing claim |
|---|---|---|---|
| [Binding prediction](/wiki/education/concepts/measurement/computational-analysis/binding-prediction) | Exact peptide–allele pair, model and output task | A model estimate for that pair | Measured binding or natural display |
| Measured peptide-to-HLA binding | Defined molecules and assay conditions | Binding under that assay | Processing, cancer-cell display or T-cell function |
| [Immunopeptidomics](/wiki/education/designing-a-vaccine/03-immunopeptidomics) | Peptides recovered from an HLA preparation | Association with the recovered preparation, subject to identification controls | Guaranteed cancer-cell origin, surface location or complete recovery |
| [Peptide–HLA multimer staining](/wiki/education/concepts/measurement/immune-monitoring/peptide-hla-multimer-staining) | T cells binding a defined peptide–HLA reagent | Reagent-binding cells under the staining conditions | A peptide-affinity measurement or demonstrated killing |
| Controlled response to naturally presenting target cells | Specified target cells and appropriate antigen/HLA controls | Recognition or the particular function actually measured | Recognition at every site, safety or patient benefit |

Mixed-tissue recovery cannot assign a peptide to cancer cells automatically. A whole-cell HLA preparation can include intracellular complexes. Supplied-peptide stimulation can bypass processing steps; a positive response there is different from testing natural tumor display. For preparation and detection limits, read [the existing immunopeptidomics lesson](/wiki/education/designing-a-vaccine/03-immunopeptidomics).

## Which evidence fits the question?

For a model estimate, use the prediction record. For recovered HLA-associated material, use the preparation and identification record. For natural tumor recognition, use suitable target-cell experiments. None is a universal winner: the question determines the needed evidence, sample and controls. A response assay also needs its actual output named; secretion and target-cell death are different outputs.

## Common confusions

A favorable score is not a measured affinity. A recovered peptide is not guaranteed cancer-surface display. Multimer positivity is not a killing result. Recognition, killing, safety and clinical benefit remain distinct even when several findings agree.

## Try it: reuse the evidence notebook

Read [the fictional notebook and its worked interpretation](/wiki/education/designing-a-vaccine/03-immunopeptidomics#worked-example-an-evidence-notebook), then [the supplied-peptide exercise and answer](/wiki/education/designing-a-vaccine/03-immunopeptidomics#try-it). Carry a favorable exact-allele prediction alongside those cards if one is provided; it adds a model estimate, not a natural-target test.

**Explain the missing bridge:** mixed-tissue peptide recovery and a supplied-peptide response do not establish which cancer cells display the peptide naturally or whether those cells provoke the measured response. The linked answer explains why nondetection also needs assay limits. [The allele-mismatch example](/wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation#worked-example-the-missing-bridge) supplies another context check.

## Explain it back

“This binding result concerns ____ contacting ____. It establishes ____, while ____ remains untested.”

For multimer staining: “a T-cell receptor; a peptide–HLA reagent; reagent binding under the assay; natural tumor recognition and killing.”

## Takeaway

**Keep the contact, preparation and earned claim attached to each result.**

## Related concepts

Use [the design-board lesson](/wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board) to carry these separate evidence fields into a candidate record, and [immune-function measurements](/wiki/education/reading-a-tumor/measuring-t-cell-engagement) to distinguish assay outputs.

## Sources and scope

Source check: October 12, 2026. Primary abstracts and the linked public lessons informed this claim map. The detailed isolation protocol could not be accessed in this run; its abstract establishes HLA-complex capture and peptide identification, not a complete Methods review. No new performance rates or clinical examples are added. Independent peer, expert and learner review pending.

- [Reynisson et al., 2020](https://pubmed.ncbi.nlm.nih.gov/32406916/): prediction methods using binding and eluted-ligand data; example methods, not a current software ranking.
- [Purcell et al., 2019](https://pubmed.ncbi.nlm.nih.gov/31092913/): immunoaffinity capture of HLA-associated peptides from cells and tissues; abstract only here.
- [Altman et al., 1996](https://pubmed.ncbi.nlm.nih.gov/8810254/): defined peptide–HLA multimers binding antigen-specific T cells.
- [Wells et al., 2020](https://pubmed.ncbi.nlm.nih.gov/33038342/): predicted candidates compared with patient-matched T-cell binding tests; no natural-tumor or benefit claim follows from this benchmark alone.
