---
title: "Read a tumor report without skipping its limits"
type: "navigation"
document_role: "educational-entry"
sensitive: false
tags: ["education", "multi-omics"]
updated: 2026-10-12
source_checked: "2026-10-12"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Read a tumor report without skipping its limits

**Start with the specimen and the question. Then say exactly what the result supports.** You do not have to solve every technical term at once. A six-question card can keep a complicated report grounded.

For the full learning path, use [[wiki/education/reading-a-tumor/omics-and-multi-omics|What does multi-omics tell us about a tumor?]]. This page is the practical companion for one report in front of you.

## Read the report in this order

1. **What was sampled?** Record tissue site, collection time, treatment context and which cells or material were analyzed. A [core biopsy](/wiki/education/concepts/measurement/specimens/core-needle-biopsy) and a [resection specimen](/wiki/education/concepts/measurement/specimens/surgical-resection-specimen) sample different amounts and arrangements of tissue.
2. **What was measured?** Name DNA, RNA, protein, location, function or a blood time series. Keep units, assay version and threshold beside the value.
3. **What is its evidence status?** Distinguish a signed clinical finding, preliminary result, research observation, model prediction and interpreted claim.
4. **Compared with what?** Identify controls, reference population, normalization or earlier timepoint. Check whether preparations and sample attribution fit the comparison.
5. **What remains unmeasured?** State coverage, detection and sampling limits. Name the next layer required by the proposed conclusion.
6. **What decision could it change?** Identify the evidence and eligibility needed for that actual question, with the relevant clinical owner.

A report may answer only part of the card. That is useful too: an explicit missing field tells you what to request rather than what to assume.

If the report contains a [variant-effect prediction](/wiki/education/concepts/measurement/computational-analysis/variant-effect-prediction), keep its task and model distinct from an observed sequence. If it combines layers, use the [multi-omic integration card](/wiki/education/concepts/measurement/computational-analysis/multi-omic-integration#how-it-is-measured) to preserve which values were measured and which were inferred.

## Follow the measurement

| Report layer | Continue to |
|---|---|
| Cells and tissue context | [What is inside a sample?](/wiki/education/multi-omics-foundations/01-epithelial-and-breast-tissue) |
| DNA sequence and copies | [Coverage and confidence](/wiki/education/molecular-profiling/01-dna-the-blueprint) |
| RNA and transcript forms | [The message and its source](/wiki/education/molecular-profiling/02-rna-the-activity-layer) |
| Protein and localization | [Presence, place and activity](/wiki/education/molecular-profiling/03-protein-expression-and-activation) |
| Tissue geography | [Spatial context](/wiki/education/molecular-profiling/04-spatial-biology) |
| Perturbation in a model | [Functional experiments](/wiki/education/molecular-profiling/05-functional-drug-response) |
| Repeated blood measurements | [Blood as a time series](/wiki/education/molecular-profiling/06-ctdna-and-mrd) |
| Combined interpretation | [The integrated claim ledger](/wiki/education/molecular-profiling/07-from-data-to-care-plan) |

[Fixed, fresh-frozen and viable preparations](/wiki/education/concepts/measurement/specimens/ffpe-vs-fresh-frozen-vs-viable) support method-specific questions. Record accepted input and [tissue consumption](/wiki/education/concepts/measurement/specimens/tissue-is-non-renewable) on the assay card before allocating material. For a slide or image-derived result, distinguish [direct morphology](/wiki/education/concepts/measurement/pathology-readouts/h-and-e-morphology) from a [digital measurement or model prediction](/wiki/education/concepts/measurement/pathology-readouts/digital-pathology).

## Keep the measured object separate from resolution

[Deoxyribonucleic acid (DNA), ribonucleic acid (RNA) and protein](/wiki/education/concepts/biology-basics/genetics/central-dogma) name biological objects. **Resolution** asks how finely the method separates cells or places. These are two axes, rather than stages on one ladder.

| Axis | Question | Examples |
|---|---|---|
| Molecular layer | What object did the assay inspect? | DNA sequence, RNA messages, protein signal |
| Cell or spatial resolution | Which cells or places can the result distinguish? | A tissue mixture, individual recovered cells or nuclei, defined regions in a section |

RNA can be measured in a pooled tissue mixture or assigned to recovered cells using a compatible single-cell method. Those are different resolutions of the RNA layer. A spatial method adds location at its stated resolution. It does not automatically add a protein or functional measurement. Resolution, coverage and detection sensitivity are separate limits; the most detailed-looking map is not a complete inventory. [The RNA lesson](/wiki/education/molecular-profiling/02-rna-the-activity-layer) and [spatial lesson](/wiki/education/molecular-profiling/04-spatial-biology) explain the method-specific boundaries.

## Work through a fictional result

A pretreatment breast specimen has high RNA for surface-target gene R. The report uses a compatible reference and reports its units. Its research status is clear. Those observations support a captured-expression claim.

The cell mixture is unresolved. No assay identifies protein on malignant-cell membranes. The result therefore does not yet establish accessible surface target, normal-tissue selectivity or drug dependence. Repeating another broad RNA report may add less than a measurement of the missing location claim.

Here is the same result taken through all six questions. The sample, gene label and report details are invented for teaching.

| Step | What you write on the card |
|---|---|
| 1. What was sampled? | One pretreatment breast-biopsy region, containing malignant cells and normal neighbors. No other disease site was sampled. |
| 2. What was measured? | Bulk RNA for R, reported in the assay's normalized units. This is a mixed-tissue message measurement. |
| 3. What is its evidence status? | A research observation. The report's interpretation suggests a surface target; that interpretation is not a measured membrane-protein result. |
| 4. Compared with what? | The report's stated compatible reference, using its stated normalization. “High” belongs to that comparison. |
| 5. What remains unmeasured? | The cells supplying R RNA, malignant-cell membrane protein, normal-tissue selectivity and dependence on R. |
| 6. What decision could it change? | It can focus a research follow-up on cell identity and target location. Treatment selection still needs a validated biomarker-to-treatment link, the clinical setting and eligibility. |

The same discussion card works for unfamiliar words: which cells supplied the signal, which object was measured, and what comparison supports the adjective? Label the conclusion as observed, inferred, predicted or clinically validated before choosing the missing question.

Write a one-line translation: “In this sampled tissue, the assay found high captured R RNA relative to its stated reference; cell origin and accessible protein remain open.” That is both understandable and faithful to the evidence.

## Try it

A model predicts a gene signal from a tissue image. What should the report call it?

**Answer:** A model prediction, with its validation and uncertainty. It should not be relabeled as directly measured RNA.

## Explain it back

“The report measured ______ in ______. It supports ______, but does not establish ______.”

One answer: “RNA; this tissue mixture; captured expression; surface protein or treatment benefit.”

## Takeaway

**Specimen → measurement → evidence status → comparison → limit → decision.**

## Applied to Diana

[[wiki/care/results|Results]] owns actual findings, and [[wiki/care/molecular-profile|the molecular profile]] owns integrated interpretation. [[about/overview/test-tracker|The test tracker]] owns pending material. [[wiki/questions/index|The decision pages]] own clinical implications and [[project-management/index|project management]] owns follow-up actions.

## Sources and scope

Source check for the worked card and layer/resolution distinction: October 12, 2026. A general reading aid; expert and learner review remain pending.

- [NCI biomarker testing: samples, methods and interpretation](https://www.cancer.gov/about-cancer/treatment/types/biomarker-testing-cancer-treatment).
- [NHGRI transcriptome fact sheet](https://www.genome.gov/about-genomics/fact-sheets/Transcriptome-Fact-Sheet) — RNA messages and method-dependent transcript measurements.
- [Zheng et al., 2017: single-cell transcriptional profiling](https://www.nature.com/articles/ncomms14049) — individual-cell RNA measurements contrasted with population averages; this is a research method, not a clinical-validation claim.
- [[wiki/education/reading-a-tumor/omics-and-multi-omics|The linked lessons' method-specific sources]].
