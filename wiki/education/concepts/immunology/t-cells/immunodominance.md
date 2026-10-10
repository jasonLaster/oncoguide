---
title: "Immunodominance"
type: concept
domain: immunology/t-cells
summary: "Immunodominance is the unequal distribution of an immune response across the targets available in a particular biological setting."
glossary_anchor: immunodominance
aliases: [immunodominance, immunodominant epitope]
level: intermediate
prerequisites: ["[[wiki/education/concepts/immunology/antigen-presentation/antigen-and-epitope]]", "[[wiki/education/concepts/immunology/t-cells/t-cell-priming-three-signals]]"]
used_by: ["[[wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board]]"]
reviewed: pending
reviewed_by: ""
sensitive: false
tags: [education, immunology]
updated: 2026-10-09
source_checked: 2026-10-09
review_status: "Source-checked; expert and learner review pending"
---

# Immunodominance

## In one sentence

Immunodominance is the unequal distribution of an immune response across the targets available in a particular biological setting.

## The intuition

Offering ten topics does not mean a classroom spends equal time on each one. Some attract much more attention. A vaccine can similarly encode several candidate epitopes while the measured response is concentrated on a few.

The amount included in the product and the amount recognized by T cells are different quantities.

## How it works

For conventional peptide-directed T cells, a target first needs processing and display by human leukocyte antigen ([HLA](/wiki/education/concepts/immunology/antigen-presentation/hla)). The response also depends on the available receptor repertoire, the number and state of responsive cells, priming conditions and interactions among responses. A favorable binding prediction addresses only part of that chain.

**Naive precursor frequency** means the starting number of naive T cells with a relevant specificity. A target with more available responsive cells can develop a larger response, although the relationship depends on context. Experiments in viral systems show that starting cell frequencies and peptide binding can contribute to response hierarchies; they do not establish fixed weights for every cancer vaccine.

An immunodominant target is dominant in the measured setting. The hierarchy can change with the presenting alleles, antigen delivery, sampling time or immune history. A blood assay also may not capture the same distribution as tissue. Specify which cell population, assay and time point support the label.

Immunodominance differs from [epitope spreading](/wiki/education/concepts/immunology/t-cells/epitope-spreading). Dominance describes an uneven response across targets; spreading describes detected recognition of additional epitopes beyond the initially targeted set.

## Why it matters in cancer

Counting vaccine slots can overstate functional breadth. A design with many encoded peptides may still rely heavily on one response or one shared tumor pathway. Evaluate responses per target and whether those targets cover different tumor populations and failure modes.

## Worked example

A fictional vaccine encodes A, B and C. Using the same controlled assay, background-adjusted response measurements are 40 units for A, 6 for B and undetectable for C. A dominates this measured response.

It would be premature to conclude that C is absent from the tumor or useless in every person. Processing, display, the sampled repertoire and assay sensitivity are possible explanations. It would also be premature to call the product three equally effective immune defenses merely because it contains three sequences.

## Common confusions

- The strongest predicted binder need not elicit the largest functional response.
- More encoded epitopes do not guarantee balanced immunity.
- An undetectable response is not proof that a target is never displayed.
- A dominant response in one assay or person is not a universal target ranking.

## Related concepts

- [Binding prediction](/wiki/education/concepts/measurement/computational-analysis/binding-prediction)
- [T-cell priming](/wiki/education/concepts/immunology/t-cells/t-cell-priming-three-signals)
- [Epitope spreading](/wiki/education/concepts/immunology/t-cells/epitope-spreading)

## Sources and scope

Source-checked October 9, 2026. The vaccine and response values are fictional. The cited viral studies support mechanisms of response hierarchy, rather than a validated ranking formula for personalized cancer vaccines. Expert and learner review remain pending.

- [Kotturi and colleagues: precursor frequencies, peptide binding and immunodominance](https://pubmed.ncbi.nlm.nih.gov/18641351/), a primary mouse lymphocytic choriomeningitis virus study.
- [Schmidt and colleagues: HLA-A2-restricted hepatitis C responses and precursor frequency](https://pubmed.ncbi.nlm.nih.gov/21367907/), a primary human T-cell study.
- [Wells and colleagues: neoantigen immunogenicity benchmarks](https://pubmed.ncbi.nlm.nih.gov/33038342/), for experimentally testing candidate recognition beyond prediction.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read a neoantigen design board](/wiki/education/designing-a-vaccine/04-how-to-read-a-neoantigen-design-board)
<!-- END GENERATED USED IN -->
