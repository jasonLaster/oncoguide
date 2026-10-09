---
title: "Read a neoantigen design board"
type: "guide-lesson"
sensitive: false
tags: ["education", "lesson"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
minutes: 15
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

## Worked example: a ten-row candidate board

These rows are invented. Use them to practise asking questions, not to compute a clinical ranking. “Supported” and “uncertain” summarize evidence categories; they are not validated scoring weights.

| Row | Source event | Display route | Strongest support | Open question |
|---|---|---|---|---|
| A | Event 1 | HLA allele X | Credible alteration and mutant RNA | Display only predicted |
| B | Event 1 | HLA allele X | Alternate peptide window predicted | Does it add independent coverage beyond A? |
| C | Event 2 | HLA allele X | HLA-associated peptide identified | Cancer-cell origin and recognition |
| D | Event 3 | HLA allele Y | Peptide-stimulated response | Natural tumor recognition |
| E | Event 4 | HLA allele Y | Broad tumor-cell fraction supported | RNA support is weak |
| F | Event 5 | HLA allele Z | RNA and display prediction agree | Alteration may cover a small subclone |
| G | Event 6 | Class-II route | Peptide-responsive helper population | Which cells present it and in what context? |
| H | Event 7 | HLA allele Y | Credible tumor-specific sequence | Similar healthy sequence needs specificity testing |
| I | Event 8 | HLA allele Z | Strong computational rank | Predictor validation for this allele is limited |
| J | Event 9 | HLA allele X | Controlled tumor-cell recognition | Healthy-tissue specificity and durability |

Start by grouping shared dependencies. A and B come from one event and use one allele. C and J use that allele too. If allele X is lost, adding B does not rescue that branch. Y and Z diversify allele dependence, but class-I routes can still share B2M and processing requirements.

Next ask which uncertainty the next assay should reduce. D suggests a natural tumor-recognition experiment. C needs cell-of-origin and recognition evidence. H needs specificity work. E and F raise expression and tumor-coverage questions before any automatic rank can be trusted.

Now imagine only one experiment can run this week. Choose a candidate, state the uncertainty, and explain what a positive **and** negative result would mean. Several choices can be reasonable because resource allocation depends on the actual goal. There is no universal A-to-J order hidden in this table.

One defensible answer is to test D against naturally presenting tumor cells, with relevant controls. A positive result would connect peptide responsiveness to those tested tumor cells. A negative result would prompt examination of processing, display, cell state and assay adequacy. Neither result alone estimates patient benefit.

A broad tumor-cell fraction is also an estimate, not a direct photograph of every cell. [Variant allele fraction and cancer-cell fraction](/wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction) depend on tumor purity, copy number and the altered copy count. Do not label a target truncal merely because it has a high raw read fraction.

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

Source check: October 9, 2026; expert and learner review pending. The ten-row candidate example is fictional. Company-specific ranking remains in its owner bundle.

- [Primary HLA presentation dataset](https://www.nature.com/articles/s41587-019-0322-9).
- [Wells et al., primary neoantigen-prediction benchmark](https://pubmed.ncbi.nlm.nih.gov/33038342/) — measured binding/recognition support has task-specific scope.
- [TNBC-MERIT clinical example](https://www.nature.com/articles/s41586-025-10004-2).
