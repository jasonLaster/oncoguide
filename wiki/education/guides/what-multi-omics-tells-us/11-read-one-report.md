---
title: "Read one report with the six-question card"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 11
role: optional-extension
minutes: 10
objectives:
  - "Apply six questions to one tumor report, from specimen to decision."
  - "Map each line of a typical report to the layer and lesson that explain it."
  - "Translate a dense report sentence into the separate claims it makes."
prerequisites:
  - "[[wiki/education/concepts/measurement/computational-analysis/multi-omic-integration]]"
  - "[[wiki/education/concepts/evidence-and-statistics/reasoning-tools/evidence-chain-variant-to-benefit]]"
  - "[[wiki/education/concepts/evidence-and-statistics/biomarkers/actionability]]"
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-11-08"
source_checked: "2026-11-08"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Read one report with the six-question card

**Start with the specimen and the question. Then say exactly what the result supports.** You do not have to decode every term at once; six questions keep a complicated report grounded.

**Before you start:** [Multi-omic integration](/wiki/education/concepts/measurement/computational-analysis/multi-omic-integration) keeps measured and inferred values apart. [The evidence chain from variant to benefit](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/evidence-chain-variant-to-benefit) names the bridges. [Actionability](/wiki/education/concepts/evidence-and-statistics/biomarkers/actionability) asks whether evidence supports a decision.

## Where this step sits

This is optional step 11 of [What does multi-omics tell us about a tumor?](/wiki/education/guides/what-multi-omics-tells-us/index) Each earlier lesson taught one layer. This one applies all of them to the report in front of you.

## Read the report in this order

1. **What was sampled?** Tissue site, collection date, treatment context and which cells or material were analyzed. A [core biopsy](/wiki/education/concepts/measurement/specimens/core-needle-biopsy) and a [resection specimen](/wiki/education/concepts/measurement/specimens/surgical-resection-specimen) sample different amounts of tissue.
2. **What was measured?** DNA, RNA, protein, location, function or blood over time. Keep units, assay version and threshold beside the value.
3. **What is its evidence status?** A signed clinical finding, a preliminary result, a research observation, a model prediction or an interpreted claim.
4. **Compared with what?** Controls, reference population, normalization or an earlier timepoint, with compatible preparation.
5. **What remains unmeasured?** Coverage, detection and sampling limits, and the next layer the proposed conclusion needs.
6. **What decision could it change?** The evidence and eligibility needed for that actual question, and who owns it clinically.

A report may answer only part of the card. A missing field tells you what to ask for rather than what to assume.

## An annotated sample report

Here is a fictional, generic report for a triple-negative tumor. Each line belongs to one layer. Its abbreviations are estrogen receptor (ER), progesterone receptor (PR), human epidermal growth factor receptor 2 (HER2), immunohistochemistry (IHC), tumor-infiltrating lymphocytes (TILs), programmed death-ligand 1 (PD-L1) and variant allele fraction (VAF).

| Report line | Layer and lesson | What it supports | What it does not say |
|---|---|---|---|
| Invasive carcinoma of no special type (ductal), grade 3; core biopsy | Sample: [lesson 2](/wiki/education/guides/what-multi-omics-tells-us/02-what-is-inside-a-tissue-sample) | Pathologist's diagnosis on one sampled region | That every region is the same |
| ER <1%, PR <1%, HER2 IHC 1+ | Protein: [lesson 6](/wiki/education/guides/what-multi-omics-tells-us/06-read-protein) | Triple-negative by receptor rules; HER2-low staining range | That a HER2-directed drug helps in early disease |
| Ki-67 60% | Protein: [Ki-67](/wiki/education/concepts/breast-cancer/grade-and-stage/ki-67) | Share of cancer cells in a division program | A treatment-selection rule for this cancer |
| Stromal TILs 30% | Location: [lesson 7](/wiki/education/guides/what-multi-omics-tells-us/07-map-cells-and-immune-context) | Prognostic immune context | That immune cells recognize the tumor |
| PD-L1 22C3 combined positive score 15 | Protein: [PD-L1 scoring](/wiki/education/concepts/measurement/pathology-readouts/pd-l1-scoring) | A defined staining score | Benefit outside the setting where the cutoff was validated |
| TP53 missense variant, VAF 38%; tumor-only panel | DNA: [lesson 3](/wiki/education/guides/what-multi-omics-tells-us/03-read-dna) | A supported sequence change | Inherited status, cell fraction or consequence |

Two lines deserve a real-world note. PD-L1 matters in the metastatic setting: in KEYNOTE-355, among people with metastatic TNBC and a combined positive score of 10 or more, adding pembrolizumab to chemotherapy lengthened median progression-free survival from 5.6 to 9.7 months (hazard ratio 0.65) ([Cortes et al., 2020](https://pubmed.ncbi.nlm.nih.gov/33278935/)). The early-stage KEYNOTE-522 trial enrolled patients regardless of PD-L1 status ([Schmid et al., 2020](https://pubmed.ncbi.nlm.nih.gov/32101663/)). And a tumor-only panel cannot say whether a variant was inherited; that needs a germline test.

## Work through a fictional result

A pretreatment breast specimen has high RNA for surface-target gene R, in normalized units against a stated reference. It is a research result. That supports a captured-expression claim. The cell mixture is unresolved, and no assay shows protein on malignant-cell membranes.

| Step | What you write on the card |
|---|---|
| 1. What was sampled? | One pretreatment biopsy region with malignant cells and normal neighbors |
| 2. What was measured? | Bulk RNA for R, a mixed-tissue message measurement |
| 3. What is its evidence status? | A research observation; “surface target” is the report's interpretation, not a measured membrane protein |
| 4. Compared with what? | The stated reference and normalization; “high” belongs to that comparison |
| 5. What remains unmeasured? | Which cells supply R RNA, membrane protein, normal-tissue selectivity and dependence |
| 6. What decision could it change? | It can focus research on cell identity and target location; treatment selection still needs a validated biomarker-to-treatment link |

Write a one-line translation: “In this sampled tissue, the assay found high captured R RNA relative to its stated reference; cell origin and accessible protein remain open.”

## Translate a report sentence

“The malignant epithelial pseudobulk resembles a luminal-progenitor program” holds four claims. **Epithelial:** a cell family that includes normal lining cells. **Malignant:** further evidence identifies cancer cells. **Pseudobulk:** counts from a selected group were pooled. **Resembles:** an RNA pattern matched a reference program. Plainly: “They pooled the cancer-cell messages and found a pattern like a less mature breast lining cell.” That does not name the cell of origin or change a receptor diagnosis.

## Keep the measured object separate from resolution

[DNA, RNA and protein](/wiki/education/concepts/biology-basics/genetics/central-dogma) name biological objects. **Resolution** asks how finely the method separates cells or places. These are two axes, not one ladder.

| Axis | Question | Examples |
|---|---|---|
| Molecular layer | What object did the assay inspect? | DNA sequence, RNA messages, protein signal |
| Cell or spatial resolution | Which cells or places can it distinguish? | A tissue mixture, individual cells or nuclei, regions in a section |

RNA can be measured in a pooled mixture or assigned to single cells. A spatial method adds location; it does not automatically add a protein or functional measurement. For slide-based results, separate [direct morphology](/wiki/education/concepts/measurement/pathology-readouts/h-and-e-morphology) from a [digital measurement or model prediction](/wiki/education/concepts/measurement/pathology-readouts/digital-pathology).

## Try it

A spatial RNA panel maps 500 genes across one tissue section. Compared with bulk RNA from the same block, which axis did it add, and which did it leave unchanged?

**Answer:** It added spatial resolution: where in the section each message was captured. The molecular layer is still RNA, so membrane protein, activity and function remain unmeasured.

## Explain it back

“The report measured ______ in ______. It supports ______, but does not establish ______.”

One answer: “RNA; this tissue mixture; captured expression; surface protein or treatment benefit.”

## Takeaway

**Specimen → measurement → evidence status → comparison → limit → decision.**

**Next:** Optional: [Read single-cell data after treatment](/wiki/education/guides/what-multi-omics-tells-us/12-profile-residual-tumor), or return to [the guide](/wiki/education/guides/what-multi-omics-tells-us/index).

## Sources and scope

Source check: November 8, 2026. The sample report and gene R are fictional; KEYNOTE-355 is a real anchor. A general reading aid; expert and learner review remain pending.

- [Cortes et al., 2020 (KEYNOTE-355)](https://pubmed.ncbi.nlm.nih.gov/33278935/): phase 3; previously untreated metastatic TNBC; progression-free survival by PD-L1 combined positive score.
- [Schmid et al., 2020 (KEYNOTE-522)](https://pubmed.ncbi.nlm.nih.gov/32101663/): phase 3; previously untreated stage II or III TNBC.
- [NCI: biomarker testing for cancer treatment](https://www.cancer.gov/about-cancer/treatment/types/biomarker-testing-cancer-treatment).
- [NHGRI: transcriptome fact sheet](https://www.genome.gov/about-genomics/fact-sheets/Transcriptome-Fact-Sheet).
- [Zheng et al., 2017: single-cell transcriptional profiling](https://www.nature.com/articles/ncomms14049): a research method, not clinical validation.
