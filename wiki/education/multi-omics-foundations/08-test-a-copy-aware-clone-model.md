---
title: "Test a copy-aware clone model"
type: guide-lesson
guide: what-multi-omics-tells-us
step: 16
role: optional-advanced-extension
minutes: 12
objectives:
  - "Count local DNA copies before interpreting a variant fraction."
  - "Explain why one read fraction can support different cancer-cell fractions."
  - "Recognize an inconsistent model without choosing a clinical explanation."
prerequisites:
  - "[[wiki/education/multi-omics-foundations/04-copies-alleles-and-clones]]"
  - "[[wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction]]"
  - "[[wiki/education/concepts/measurement/sequencing-basics/copy-number-and-loh]]"
sensitive: false
tags: [education, multi-omics, worked-exercise]
updated: 2026-10-12
source_checked: 2026-10-12
reviewed: pending
reviewed_by: ""
review_status: "Private source-checked teaching draft; independent, expert and learner review pending"
---

# Test a copy-aware clone model

**A sequence fraction becomes a cell-fraction estimate only after you specify who contributed the DNA and how many copies they contributed.** Let's count those contributions before trusting a model's answer.

**Before you start:** [Copies, alleles and clones](/wiki/education/multi-omics-foundations/04-copies-alleles-and-clones) separates copy number from gene function. [Variant allele fraction (VAF) and cancer cell fraction (CCF)](/wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction) explains their different denominators. [Copy number and loss of heterozygosity](/wiki/education/concepts/measurement/sequencing-basics/copy-number-and-loh) explains why two remaining copies need not come from both inherited versions.

## Where this step sits

This optional extension follows the copies-and-clones lesson. It adds a model-checking exercise to the [multi-omics path](/wiki/education/reading-a-tumor/omics-and-multi-omics). You need no software, patient report or treatment question to do it.

## The intuition: copies go into the tube, cells do not go into the fraction

Imagine that each cell places its copies of one DNA region into a shared tube. Here, [DNA means deoxyribonucleic acid](/wiki/education/concepts/biology-basics/molecules/dna). Some copies carry a sequence change. Others do not.

The fraction of changed copies depends on two things: which cells carry the change and how many local copies each cell contributes. Our tube omits extraction loss, damaged molecules, alignment problems and uneven sequencing. It is a counting model, rather than a drawing of an assay.

**Cell purity** is the cancer-cell fraction among all sampled cells. **Local copy number** counts the selected region per cell. **Mutant multiplicity** counts variant-bearing copies per carrier cancer cell. CCF asks what fraction of the cancer cells are carriers. These quantities do different jobs in [the canonical mixture model](/wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction).

## Worked example: the same 30% fraction, different carrier fractions

Every number in this exercise is invented. Each sample contains 60 cancer cells and 40 normal cells. Every normal cell has two local copies and none carries the variant. Recovery and sequencing are assumed to represent copies without bias.

First count model A:

- Each cancer cell has two local copies, with the variant on one copy.
- Cancer cells contribute `60 × 2 = 120` copies; normal cells contribute `40 × 2 = 80`.
- Variant copies total `60 × 1 = 60` out of `200` copies.
- Expected VAF is `60/200 = 30%`. All 60 cancer cells carry the variant, so CCF is `60/60 = 100%`.

Now count model B:

- Every cancer cell has four local copies. Of the 60 cancer cells, 48 carry the variant on two copies each; the other 12 carry none.
- Cancer cells contribute `60 × 4 = 240` copies; normal cells still contribute `80`.
- Variant copies total `48 × 2 = 96` out of `320` copies.
- Expected VAF is `96/320 = 30%`. CCF is `48/60 = 80%`.

| Quantity | Model A | Model B |
|---|---|---|
| Cancer cells among all cells | 60/100 | 60/100 |
| Local copies per cancer cell | 2 | 4 |
| Variant copies per carrier cancer cell | 1 | 2 |
| Expected VAF | 30% | 30% |
| Carrier cancer cells / all cancer cells | 100% | 80% |

These models agree on one fraction. They differ in copy number and carrier fraction. They have **not** been shown to fit the same complete sequencing dataset. Independent copy-number evidence could distinguish them. The lesson is that VAF alone cannot choose between them.

Actual methods estimate quantities that this exercise supplies. The ABSOLUTE method links copy-number observations to purity, ploidy and mutation multiplicity. [Carter et al., 2012](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383288/). Its name does not make uncertain inputs certain.

## Check the assumptions before solving backwards

For the simple uniform-copy model, use the formula from the prerequisite concept:

`expected VAF = p × f × m / [p × C + (1 − p) × 2]`

Here `p` is cell purity, `f` is CCF, `m` is mutant multiplicity, and `C` is local cancer-cell copy number. Normal cells are diploid and lack the variant. All cancer cells share the stated local copy number, and carrier cancer cells share the stated multiplicity. Subclonal copy changes require a richer model.

Solving for `f` does not independently verify these assumptions. Write them beside the answer. Also distinguish an expected fraction from a noisy observed read count. More reads can improve precision while leaving the wrong model wrong.

## What can go wrong at this step

An inferred CCF above 100% cannot be a literal carrier fraction. It flags a mismatch among the observation, assumptions or estimates. Possible questions include variant origin, purity, local copy number, multiplicity and assay bias. The mismatch alone does not identify which input is wrong.

A similar CCF for two mutations also does not prove that they occur in the same cells. In a fictional population of 100 cancer cells, a change found in 40 cells and another found in 40 cells might occupy the same 40 cells or separate groups. The individual fractions do not tell us their overlap. Joint evidence addresses co-occurrence.

PyClone groups mutations using a statistical model that accounts for copy-number imbalance and normal-cell admixture. Its inferred groups are hypotheses about populations, rather than a direct photograph of every cell or a guaranteed family tree. [Roth et al., 2014](https://pubmed.ncbi.nlm.nih.gov/24633410/).

Finally, a variant present in all sampled cancer cells can still lack functional importance. [Mutation evidence and functional consequence](/wiki/education/concepts/biology-basics/genetics/mutation-types) remain different questions. One specimen also cannot establish that every lesion has the same population structure.

## Try it

A fictional model assumes 50 cancer cells and 50 normal cells, two local copies per cell, and one variant copy in each carrier cancer cell. Normal cells lack the variant.

1. What CCF gives an expected VAF of 20%?
2. Under those assumptions, can an expected VAF of 40% describe any valid carrier fraction?
3. What should you do with the second result?

<details>
<summary>Show the answers</summary>

1. There are 200 local copies. A 20% fraction requires 40 variant copies, hence 40 carrier cancer cells out of 50: **CCF 80%**.
2. A 40% fraction requires 80 variant copies. With one per carrier cell, that would require 80 carriers among only 50 cancer cells: **CCF 160%**, which is impossible as a fraction of those cells.
3. Mark the simple model inconsistent. Revisit its inputs and assumptions; do not cap the result at 100% and call the model solved. This exercise does not select which assumption to replace or recommend another assay.

</details>

## Explain it back

“VAF counts ______. My CCF estimate also assumes ______. A value above 100% tells me ______.”

One answer: “variant-supporting observations; a specified mixture and local copy model; the inputs and model do not fit together.”

## Takeaway

**Count the denominator, state the model, and preserve an inconsistent result as a question rather than turning it into certainty.**

**Next:** [Follow a splice change toward repair function](/wiki/education/multi-omics-foundations/05-splicing-and-dna-repair), or return to [the report-reading checklist](/wiki/education/reading-a-tumor/index).

## Sources and scope

Source check: 2026-10-12. All counts and model outputs above are fictional teaching arithmetic. This draft adds no patient interpretation, clinical efficacy claim, software benchmark or treatment recommendation. Independent, expert and learner review remain pending.

- [Carter et al., 2012: Absolute quantification of somatic DNA alterations in human cancer](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383288/) — primary paper retrieved through NCBI's BioC service; selected passages about purity, ploidy and mutation multiplicity were read. The complete supplement, software and clinical applications were not reviewed.
- [Roth et al., 2014: PyClone](https://pubmed.ncbi.nlm.nih.gov/24633410/) — primary PubMed abstract read; it describes inferred cellular prevalence, copy-number imbalance and normal-cell contamination. Full-paper methods and software were not reviewed for this draft.
