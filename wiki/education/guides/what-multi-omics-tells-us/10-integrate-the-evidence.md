---
title: "Integrate the evidence and meet the clinical gate"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 10
minutes: 14
objectives:
  - "Construct a specimen-attributed evidence ledger across molecular layers."
  - "Distinguish a genomic scar, which records repair history, from current repair function."
  - "Identify independent evidence, conflicting findings and the clinical gate a treatment claim must pass."
prerequisites:
  - "[[wiki/education/concepts/evidence-and-statistics/reasoning-tools/evidence-chain-variant-to-benefit]]"
  - "[[wiki/education/concepts/cancer-biology/genome-instability-and-repair/genomic-scars]]"
  - "[[wiki/education/concepts/evidence-and-statistics/biomarkers/actionability]]"
  - "[[wiki/education/concepts/biology-basics/genetics/germline-vs-somatic]]"
  - "[[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive]]"
sensitive: false
tags: ["education", "multi-omics"]
updated: "2026-11-08"
source_checked: "2026-11-08"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Integrate the evidence and meet the clinical gate

**[Multi-omic integration](/wiki/education/concepts/measurement/computational-analysis/multi-omic-integration) is a careful argument: name the claim, connect compatible observations, and state the gap before any clinical conclusion.**

**Before you start:** [The evidence chain from variant to benefit](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/evidence-chain-variant-to-benefit) lays out the bridges. [Genomic scars](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/genomic-scars) record past repair failure. [Actionability](/wiki/education/concepts/evidence-and-statistics/biomarkers/actionability) separates a plausible target from an evidence-supported option. [Germline versus somatic](/wiki/education/concepts/biology-basics/genetics/germline-vs-somatic) preserves origin. [Prognostic versus predictive](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive) separates forecasting from treatment selection.

## Where this step sits

This is step 10, the capstone of [What does multi-omics tell us about a tumor?](/wiki/education/guides/what-multi-omics-tells-us/index) After several reports it is tempting to count how many agree. A stronger approach asks what each one confirms. Five tests answering the same narrow question do not answer a sixth they never measured.

## Follow one fictional repair finding

Every value here is invented. The samples come from the same pretreatment tissue region, except the derived model.

| Evidence | Observation | Claim strengthened | Gap that remains |
|---|---|---|---|
| DNA | A splice-site variant in repair gene R, with good read support | A candidate acquired sequence change | Its [measured transcript consequence](/wiki/education/concepts/measurement/computational-analysis/variant-effect-prediction) |
| Copy model | Other parental copy lost; variant on the retained copy | A potential two-hit mechanism | Copy and phase uncertainty; actual function |
| RNA | Reproducible abnormal junction in malignant-cell-enriched material | A changed message | Intact protein and its location |
| Protein | Reduced R staining in malignant cells, with staining controls | A cell-specific protein difference | Whether intact R remains; current repair |
| Genomic scar | High scar score in the same DNA | Past repair deficiency | Whether repair is failing now |
| Function | A suitable model shows impaired repair, with positive controls | Repair defect under those conditions | Fidelity to all original cells and times |

This is more useful than “multi-omics found a repair problem.” Another reader can inspect each row and see where confidence changed.

## Repair history is not repair now

[Homologous recombination (HR)](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/homologous-recombination-and-hrd) repairs certain double-strand DNA breaks using a matching template; homologous recombination deficiency (HRD) means that repair is impaired. When it fails for a long time, the genome accumulates a characteristic pattern of damage, a **genomic scar**. Scar methods summarize different features: loss of heterozygosity (LOH), telomeric allelic imbalance (TAI) and large-scale state transitions (LST), and their cutoffs are method-specific. [Mutational signatures](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/mutational-signatures) are another kind of pattern.

A scar can persist after repair is restored, for example by a second change that reactivates the gene. A research **RAD51-foci assay** looks for a repair protein gathering at breaks in suitably damaged, dividing cells; a low result in a poorly cycling sample may not mean repair failure ([Cruz et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29635390/)). So a high scar adds history; it cannot replace a current functional test.

## The clinical gate has a different job

Even a persuasive biological chain needs treatment evidence in the disease, setting, comparator, outcome and eligibility that apply. A real example shows the gate. The OlympiA trial randomized 1,836 people with high-risk HER2-negative early breast cancer and a **germline** BRCA1 or BRCA2 variant to a year of olaparib or placebo after standard treatment. Three-year invasive disease-free survival was 85.9% versus 77.1% (hazard ratio 0.58) ([Tutt et al., 2021](https://pubmed.ncbi.nlm.nih.gov/34081848/)). The approved adjuvant use follows that population, with a validated germline test.

A somatic repair-gene finding and a genomic scar are therefore not substitutes for that eligibility rule. A model response is not clinical evidence, and a trial in metastatic disease is not evidence for adjuvant use. The result can still support a research hypothesis, a confirmatory test or a trial question. [Check clinical evidence and access](/wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access) works through that matching step.

### Which use is established, and which is research?

Start with the intended decision, not the technology's name. A [companion diagnostic](/wiki/education/concepts/access-and-regulation/approval/companion-diagnostics) supplies treatment-linked information for a specified use. [Research use only, laboratory-developed test, CLIA certification and FDA authorization](/wiki/education/concepts/access-and-regulation/approval/ruo-ldt-clia-and-fda-authorization) describe different things: a product's purpose, where a test was developed, laboratory standards under the Clinical Laboratory Improvement Amendments, and Food and Drug Administration review of a product for an intended use. None is a universal evidence score.

**A. Validated, marker-specific pathology use.** Establish estrogen receptor (ER) status in invasive breast cancer by validated [immunohistochemistry](/wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry) on properly fixed tissue with controls. The 2020 guideline from the American Society of Clinical Oncology and College of American Pathologists keeps an ER-low-positive category, and an uninterpretable result is not negative ([guideline](https://www.cap.org/cap-guidelines/estrogen-and-progesterone-receptor-testing-in-breast-cancer-guideline-update/)). This does not validate a new RNA score as a substitute.

**B. Hypothetical, label-matched companion use.** Fictional assay T detects alteration M in fixed tumor tissue under rule R, and fictional Drug A's label requires exactly that result in setting S. Within the exercise the match supplies the required information; a different specimen, result type or setting would need its own evidence.

**C. Fictional exploratory multi-omics use.** Research score Q combines RNA, spatial neighborhoods and a culture's response, and the report proposes Drug A. Reproducibility can make Q useful research evidence. It does not show that Q-guided care improves outcomes against a comparator, and laboratory certification would not fill that gap.

**Sort the cards:** A is an established clinical use, B depends on a stipulated label match, and C keeps treatment selection in research. None can be classified by modality or certification alone.

## Ask whether the observations are independent

DNA, RNA and protein inspect different objects, so together they can strengthen a chain. They can also share contamination, wrong cell assignments or the same assumed variant list, so count them as [lesson 8](/wiki/education/guides/what-multi-omics-tells-us/08-choose-the-comparison#count-independent-observations-not-reports) does: by independent measurement, not by report. For a computed integration, record the model version, missing inputs and which values were filled in by the model.

## Treat disagreement as a clue

Suppose high RNA and low protein came from different blocks after different treatment exposures. That is not yet a contradiction; check the specimen map and dates first. If compatible samples still disagree, consider transcript forms, protein turnover, assay coverage and regional heterogeneity. A well-attributed unresolved conflict beats forced agreement. Name the measurement that would distinguish the explanations.

## What can go wrong at this step

- Building a pathway story before the variant itself is established.
- Treating a scar as current function, or activity as dependence.
- Combining specimens without their site, time and preparation.
- Counting correlated observations as independent votes.
- Treating a somatic finding as meeting a germline eligibility rule.

## Try it

A report shows high RNA for pathway P and names a drug that inhibits it. Which steps are still missing?

**Answer:** Depending on the mechanism: protein activation, cell attribution, dependence, achievable exposure and clinical evidence in the intended setting. The RNA result suggests a question rather than answering them.

## Explain it back

“Our integrated claim is ______. Its strongest direct evidence is ______. The untested bridge is ______.”

One answer: “a current repair-defect hypothesis in the sampled tissue; compatible transcript, protein and controlled functional observations; clinical benefit in the intended setting.”

## Takeaway

**A useful integration names both the claim it supports and the bridge it has not crossed.**

**Next:** Optional: [Read one report with the six-question card](/wiki/education/guides/what-multi-omics-tells-us/11-read-one-report), or [Read single-cell data after treatment](/wiki/education/guides/what-multi-omics-tells-us/12-profile-residual-tumor). Return to [the guide](/wiki/education/guides/what-multi-omics-tells-us/index) for other routes.

## Sources and scope

Source check: November 8, 2026. The repair ledger and cards B and C are fictional; OlympiA and the ER guideline are real anchors. Expert and learner review remain pending.

- [Tutt et al., 2021 (OlympiA)](https://pubmed.ncbi.nlm.nih.gov/34081848/): phase 3; 1,836 patients with germline BRCA1/2-mutated, HER2-negative high-risk early breast cancer.
- [Cruz et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29635390/): RAD51 foci as a functional readout of homologous recombination in germline BRCA-mutated breast cancer.
- [ASCO/CAP ER and PR testing guideline, 2020 update](https://www.cap.org/cap-guidelines/estrogen-and-progesterone-receptor-testing-in-breast-cancer-guideline-update/).
- [FDA: companion diagnostics](https://www.fda.gov/medical-devices/in-vitro-diagnostics/companion-diagnostics); card B is hypothetical.
- [CMS: CLIA and laboratory-developed tests, 2013](https://www.cms.gov/regulations-and-guidance/legislation/clia/downloads/ldt-and-clia_faqs.pdf): laboratory oversight versus clinical validity.
- [NCI: biomarker testing for cancer treatment](https://www.cancer.gov/about-cancer/treatment/types/biomarker-testing-cancer-treatment).
