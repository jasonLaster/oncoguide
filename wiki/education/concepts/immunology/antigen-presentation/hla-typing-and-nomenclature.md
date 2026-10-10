---
title: "HLA typing and nomenclature"
type: concept
domain: immunology/antigen-presentation
summary: "Human leukocyte antigen typing identifies inherited alleles, whose standardized names describe progressively more detailed sequence differences."
glossary_anchor: hla-typing
aliases: [HLA typing, HLA nomenclature, HLA allele]
level: intermediate
prerequisites: ["[[wiki/education/concepts/immunology/antigen-presentation/hla]]"]
used_by: ["[[wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation]]"]
reviewed: pending
reviewed_by: ""
sensitive: false
tags: [education, immunology]
updated: 2026-10-09
source_checked: 2026-10-09
review_status: "Source-checked; expert and learner review pending"
---

# HLA typing and nomenclature

## In one sentence

Human leukocyte antigen typing identifies inherited alleles, whose standardized names describe progressively more detailed sequence differences.

## The intuition

A [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) name is a precise part number. “HLA-A” identifies a family of peptide-display molecules. “HLA-A*02:01” specifies more of the sequence. A predictor or engineered receptor tested with one part number cannot automatically be transferred to another.

Typing tells us which parts a person can inherit. It does not tell us whether a particular tumor still makes those parts, displays the proposed peptide, or is recognized by a T cell.

## How it works

In an allele name such as `HLA-A*02:01:01:01`, the fields have distinct meanings:

| Part of the name | Meaning |
| --- | --- |
| `HLA-A` | The HLA gene |
| `02` | An allele group, often related to a serological antigen grouping |
| `01` after the first colon | Distinguishes protein sequences within that group |
| The third field | Distinguishes synonymous coding-sequence differences |
| The fourth field | Distinguishes differences in noncoding sequence |

An optional suffix carries additional information: for example, `N` indicates a null allele and `L` indicates low expression. A name without a suffix is not a measurement of how much HLA a particular cancer cell expresses. Read the laboratory's resolution, ambiguity notes and methods as well as the printed name. A two-field result does not necessarily settle every sequence or expression question.

People generally inherit one copy of each HLA gene from each parent. A report can therefore list two alleles at a locus; identical inherited alleles can appear as the same name. Class I and class II typing describe different display molecules and do not substitute for one another.

For a tumor-targeting project, keep four separate observations: inherited typing, retention and expression in the tumor, peptide display, and receptor recognition. Tumor loss of an allele or changes in [antigen-processing machinery](/wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery) can interrupt that chain after an accurate typing result.

## Why it matters in cancer

Peptide prediction and many T-cell receptor approaches depend on a particular HLA context. An “HLA-matched” label is therefore a starting condition, rather than a complete demonstration of targetability. Trial eligibility may also specify a particular allele and an accepted testing method; a similar-looking name is insufficient.

## Worked example

A fictional report lists `HLA-A*02:01` and `HLA-A*24:02`. A candidate is predicted to bind A*02:01. A second laboratory tests a receptor against the same peptide on A*24:02.

Those results concern different peptide–HLA pairs. Before combining them, ask whether the receptor was tested on A*02:01 and whether the tumor displays that pair. The report does not make the two HLA molecules interchangeable.

## Common confusions

- A shared first field, such as `02`, does not establish identical proteins.
- Typing is not a tumor-expression or peptide-display assay.
- A negative display assay does not by itself prove the inherited typing was wrong.
- A typing result cannot establish clinical benefit from an HLA-restricted therapy.

## Related concepts

- [Antigen and epitope](/wiki/education/concepts/immunology/antigen-presentation/antigen-and-epitope)
- [Binding prediction](/wiki/education/concepts/measurement/computational-analysis/binding-prediction)
- [HLA](/wiki/education/concepts/immunology/antigen-presentation/hla)

## Sources and scope

Source-checked October 9, 2026. The report is fictional. This page teaches how to read a name, rather than how to interpret an individual laboratory result or establish trial eligibility. Expert and learner review remain pending.

- [Official HLA nomenclature: naming alleles](https://hla.alleles.org/pages/nomenclature/naming_alleles/), for allele fields and expression suffixes.
- [IPD-IMGT/HLA database](https://www.ebi.ac.uk/ipd/imgt/hla/), the curated sequence and nomenclature resource.
- [Sarkizova and colleagues: primary peptide–HLA presentation study](https://www.nature.com/articles/s41587-019-0322-9), for allele-specific presentation modeling.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [HLA and antigen presentation in vaccine design](/wiki/education/designing-a-vaccine/02-hla-and-antigen-presentation)
<!-- END GENERATED USED IN -->
