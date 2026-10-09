---
title: "Read a neoantigen design board"
type: "guide-lesson"
sensitive: false
tags: ["education", "lesson"]
updated: "2026-10-08"
source_checked: "2026-10-08"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
minutes: 12
guide: "personalized-cancer-vaccine"
step: 4
objectives: ["Distinguish candidate count from independent coverage.", "Read the evidence and uncertainty behind each rank."]
prerequisites: ["[[wiki/education/concepts/immunology/antigen-presentation/neoantigen]]", "[[wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery]]", "[[wiki/education/concepts/immunology/antigen-presentation/hla]]", "[[wiki/education/concepts/immunology/t-cells/t-cell-receptor]]"]
---

# Read a neoantigen design board

**A design board records evidence for each candidate and the reasons for selecting a set.** A numerical score cannot turn a missing measurement into a demonstrated mechanism. This is step four of the [vaccine guide](/wiki/education/guides/personalized-cancer-vaccine/index).

**Before you start:** [Neoantigens](/wiki/education/concepts/immunology/antigen-presentation/neoantigen) are candidate targets from altered sequence. [Antigen-processing machinery](/wiki/education/concepts/immunology/antigen-presentation/antigen-processing-machinery) generates displayable fragments. [Human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) and [T-cell receptors (TCRs)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) have different jobs.

## Where this step sits

Tumor/normal comparison and HLA assessment provide inputs. The board now compares targets before the final construct is written. It should preserve uncertainty rather than hide it inside a single rank.

## The intuition: read a ledger, not a leaderboard

One candidate may have stronger expression evidence; another may cover more tumor cells. A third may depend on an uncertain prediction for a poorly represented allele. Combining these into a score requires justified weights and validation for the task.

## Keep the biological objects separate

A tumor event supplies altered sequence. A longer **source window** encodes surrounding amino acids. Processing may produce a shorter **epitope**, the particular fragment recognized. The true target for a conventional TCR is a peptide–HLA pair.

One event can produce several windows or peptide–HLA pairs. Ten windows from one event are therefore different from ten independent tumor alterations. Similarly, several alleles may still share a [beta-2 microglobulin (B2M)](/wiki/education/concepts/immunology/antigen-presentation/b2m) dependency.

## The evidence ladder

| Rung | What it supports | What it leaves open |
|---|---|---|
| Tumor/normal sequence comparison | A credible tumor-specific event | Expression and display |
| Mutant RNA support | The altered transcript was sampled | Protein and processing |
| Processing or binding prediction | A model-based candidate | Actual surface presentation |
| Measured HLA-associated peptide | Presentation in the sampled preparation | Cell origin, recognition and safety |
| Controlled T-cell response | Activity under those test conditions | Natural tumor recognition and clinical benefit |
| Controlled tumor-cell recognition or killing | Function against tested targets | Distribution, durability and benefit in patients |
| Clinical outcome with a suitable comparison | Benefit estimate in that population | Transfer to another product or setting |

Non-detection requires assay coverage and sensitivity context. Artificial peptide loading can bypass natural processing. The board should name exactly what was tested, with method and version.

## Worked example: choose what to investigate next

These candidates are invented. The table is a reasoning exercise, not a clinical ranking algorithm.

| Candidate | Strength | Open issue | Follow-up question |
|---|---|---|---|
| A | Credible alteration and mutant RNA | Display only predicted | Is a naturally presented peptide detectable? |
| B | Measured peptide in mixed tissue | Cell of origin and recognition unresolved | Which cells display it, and which receptors respond? |
| C | Peptide-reactive T cells in vitro | Tumor-recognition test missing | Does the actual tumor present enough target? |
| D | Distinct allele and source event | Healthy-sequence similarity | What specificity and cross-reactivity tests address the concern? |

A stronger-looking column does not settle every other column. Candidate C is not automatically better than B if the recognition assay used high artificial peptide concentrations. Candidate D adds diversity only if its failure dependencies differ meaningfully from the rest.

## What can go wrong at this step

A board can double-count correlated windows, conceal normal-tissue similarity or overinterpret a rare-allele predictor. A weighted ensemble needs appropriate held-out evaluation; agreement among models is not itself validation.

Selecting class-I and class-II candidates can support different response components. It does not guarantee useful recognition or overcome complete shared presentation failure. Record selection reasons, exclusions, model versions, manual overrides and the approved construct version.

## Try it

A board adds ten peptide windows, all from one alteration and all restricted to one lost HLA allele. Has coverage improved?

**Answer:** The candidate count increased, but the added targets still share the missing display route. Count and independent biological coverage differ.

## Explain it back

“A candidate’s evidence establishes ___ while leaving ___ unresolved.” One answer: “a named measurement or prediction; the later steps not tested.”

## Takeaway

**Choose and audit targets by their evidence and failure dependencies, not just their count or score.**

**Next:** [Measure displayed peptides](/wiki/education/designing-a-vaccine/03-immunopeptidomics).

## Sources and scope

Source check: October 8, 2026; expert and learner review pending. The candidate example is fictional. Company-specific ranking remains in its owner bundle.

- [Primary HLA presentation dataset](https://www.nature.com/articles/s41587-019-0322-9).
- [Wells et al., primary neoantigen-prediction benchmark](https://pubmed.ncbi.nlm.nih.gov/33038342/) — measured binding/recognition support has task-specific scope.
- [TNBC-MERIT clinical example](https://www.nature.com/articles/s41586-025-10004-2).
