---
title: "Build an integrated claim without skipping the clinical question"
type: "guide-lesson"
guide: "what-multi-omics-tells-us"
step: 15
minutes: 12
objectives: ["Construct a specimen-attributed evidence chain across molecular layers.", "Identify independent evidence, conflicting findings and clinical gaps."]
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/biomarkers/actionability]]", "[[wiki/education/concepts/biology-basics/genetics/germline-vs-somatic]]", "[[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive]]", "[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]"]
sensitive: false
tags: ["education", "multi-omics"]
updated: 2026-10-10
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Build an integrated claim without skipping the clinical question

**[Multi-omic integration](/wiki/education/concepts/measurement/computational-analysis/multi-omic-integration) is a careful argument: name the claim, connect compatible observations and state the gap before the clinical conclusion.**

**Before you start:** [[wiki/education/concepts/evidence-and-statistics/biomarkers/actionability|Actionability]] distinguishes a plausible target from an evidence-supported option. [[wiki/education/concepts/biology-basics/genetics/germline-vs-somatic|Germline versus somatic]] preserves origin. [[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive|Prognostic versus predictive evidence]] distinguishes association and selection. [[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity|Heterogeneity]] preserves sampled scope.

## Where this step sits

This is step 15 of [[wiki/education/reading-a-tumor/omics-and-multi-omics|Understand multi-omics]]. After several reports, it is tempting to count how many agree. A stronger approach asks exactly what each one confirms. Five tests answering the same narrow question do not answer a sixth question they never measured.

## Follow one fictional repair finding

Here is the complete teaching case. Every value and observation is invented. The samples are attributed to the same pretreatment tissue region, except where the table names a derived model.

| Evidence | Observation | Claim strengthened | Gap that remains |
|---|---|---|---|
| DNA | A repair-gene R splice-site variant, with suitable sequence support | A candidate acquired sequence change | Its [predicted or measured transcript consequence](/wiki/education/concepts/measurement/computational-analysis/variant-effect-prediction) |
| Copy model | Other parental side lost; retained-side assignment supported | A potential two-copy-disruption mechanism | Copy/phase uncertainty and actual function |
| RNA | Reproducible abnormal junction in malignant-cell-enriched material | A changed message product | Intact protein and cellular location |
| Protein | Reduced R staining in malignant cells, with suitable staining controls | A cell-specific protein-signal difference | Whether intact R remains; current repair capacity |
| Function | A suitable model shows impaired repair with positive controls | Repair defect under those conditions | Fidelity to all original cells and timepoints |
| Drug perturbation | Replicated model response at relevant exposure ranges | A drug-sensitivity hypothesis in the model | Safe exposure and patient benefit |

This is more informative than “multi-omics found a repair problem.” It lets another reader inspect each step and see exactly where confidence changed.

## The clinical gate has a different job

Even when the biological chain is persuasive, treatment evidence still needs the disease, setting, comparator, outcome and eligibility. Standard clinical care does not require measuring every molecular layer for every validated biomarker. Follow the evidence pathway that applies to the actual decision.

For example, a somatic repair-gene finding and a genomic scar are not automatically substitutes for an eligibility rule requiring a qualifying germline variant. A model response also does not turn a metastatic study into adjuvant evidence. Check the current clinical reference when applying a drug-specific rule.

The distinction is constructive: the result can support a research hypothesis, a confirmatory test or a trial question even when it does not support the stronger prescription claim.

## Ask whether the observations are independent

DNA, RNA and protein can strengthen a consequence chain because they inspect different objects. They remain linked biologically. They can also share specimen contamination, wrong cell assignments or the same assumed variant list.

If three reports merely repeat one variant call, they are not three raw confirmations. If an RNA junction was independently measured, that adds a new observation. Write which kind of agreement occurred rather than counting report titles.

For a computed integration, add the model version, missing inputs and evaluation design. Keep measured values separate from values filled in by the model. A shared pattern can reflect preparation differences as well as biology.

## Treat disagreement as a clue

Suppose a high RNA result and low protein result came from different tissue blocks after different treatment exposures. That is not yet a same-sample contradiction. Preserve the specimen map and dates before invoking unusual biology.

If compatible samples still disagree, consider transcript forms, protein degradation, assay coverage and regional heterogeneity. A well-attributed unresolved conflict is more useful than forced agreement. State what next measurement could distinguish the explanations.

## What can go wrong at this step

- Linking a predicted variant to a pathway story before establishing the variant.
- Treating activity as dependence or a drug list as clinical benefit.
- Combining specimens without preserving their site, time and preparation.
- Counting correlated observations as independent votes.
- Declaring the whole tumor represented by one biopsy or culture.

## Try it

A report shows high RNA for pathway P and names a drug that inhibits it. Which steps are still missing?

**Answer:** Depending on the mechanism, protein activation, relevant cell attribution, dependence, suitable exposure and clinical evidence may remain. The RNA observation suggests a question rather than answering them all.

## Explain it back

“Our integrated claim is ______. Its strongest direct evidence is ______. The untested bridge is ______.”

One answer: “a current repair-defect hypothesis; compatible transcript, protein and controlled functional observations; clinical benefit in the intended setting.”

## Takeaway

**A useful integration names both the claim it supports and the bridge it has not crossed.**

**Next:** [[wiki/education/reading-a-tumor/index|Use the report-reading checklist]].

## Sources and scope

Source check: October 9, 2026. The examples are fictional and teach interpretation rather than a treatment choice. Expert and learner review remain pending.

- [NCI biomarker testing: assay and treatment context](https://www.cancer.gov/about-cancer/treatment/types/biomarker-testing-cancer-treatment).
- [European Society for Medical Oncology (ESMO) 2022 circulating tumor DNA (ctDNA) recommendations](https://pubmed.ncbi.nlm.nih.gov/35809752/).
- [[wiki/education/concepts/evidence-and-statistics/biomarkers/actionability|Actionability and clinical evidence]].
