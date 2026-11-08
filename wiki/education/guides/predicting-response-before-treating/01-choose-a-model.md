---
title: "Choose a tumor model for the question"
type: "guide-lesson"
guide: "predicting-response-before-treating"
step: 1
minutes: 12
objectives: ["Match a biological question to a model and an observable response.", "Explain what changes when patient tissue is cultured, implanted or represented computationally.", "Say which models can return a result within a decision window, and what tissue each needs."]
prerequisites: ["[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]", "[[wiki/education/concepts/measurement/functional-models/experimental-settings]]", "[[wiki/education/concepts/measurement/functional-models/organoid]]", "[[wiki/education/concepts/measurement/computational-analysis/virtual-cell-model]]"]
sensitive: false
tags: ["education", "functional-models"]
updated: "2026-11-08"
source_checked: "2026-11-08"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Choose a tumor model for the question

**A model is useful when it contains the biology your question needs and produces a readout you can interpret.**

**Before you start:** [Tumor heterogeneity](/wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity) explains why one sample can miss populations. [Experimental settings](/wiki/education/concepts/measurement/functional-models/experimental-settings) define in vitro, ex vivo, in vivo and in silico. An [organoid](/wiki/education/concepts/measurement/functional-models/organoid) is a three-dimensional culture that self-organizes to reproduce selected tissue features. A [virtual cell model](/wiki/education/concepts/measurement/computational-analysis/virtual-cell-model) computes selected properties or responses.

## Where this step sits

This lesson is step 1 of [Understand what a tumor model can predict](/wiki/education/guides/predicting-response-before-treating/index). First choose a question and model. The next lessons check the experiment, ask what validates it, and look at what real studies found.

## Begin with the sentence you want to test

A model is a deliberately incomplete representation. Think of trying out a bicycle brake on a workbench. The bench can test the brake, but not the rider's journey through traffic. Tumor models similarly answer selected questions. Adding more parts helps only if they matter to the claim.

Write the question with a biological action and an endpoint: “Does drug A reduce the number of living malignant cells at these exposures?” That is clearer than “Which drug works?” The second question hides delivery, immune interactions, toxicity, timing and clinical outcomes inside one word.

A [molecular profile](/wiki/education/guides/what-multi-omics-tells-us/index) can suggest an intervention. Detecting a sequence change or high [ribonucleic acid (RNA) expression](/wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq) is different from exposing living cells to a drug. A computed response is also a prediction, even when the input came from measured patient tissue.

## Choose what must be present

Each model is also an [experimental setting](/wiki/education/concepts/measurement/functional-models/experimental-settings): in vitro (cells grown in a dish), ex vivo (freshly removed tissue), in vivo (a living animal) or in silico (a computer). The setting tells you what is missing and roughly how long the answer takes.

| Model | A question it can help test | Tissue it needs | What must still be checked | Time to a patient-specific result |
|---|---|---|---|---|
| [Cell line](/wiki/education/concepts/measurement/functional-models/cell-lines) (in vitro) | What happens after a controlled intervention in a maintained cell population? | None from the patient; lines come from other people | Identity, selection, passage and relevance to the intended cancer | Not a patient-specific route |
| [Ex vivo drug screen](/wiki/education/concepts/measurement/functional-models/ex-vivo-drug-screen) on [tumor slices or fragments](/wiki/education/concepts/measurement/functional-models/ex-vivo-tumor-fragments) | What response follows a defined exposure outside the body? | Fresh, living tumor; in one breast study, 14-gauge biopsy cores cut into 0.3 mm slices | Viability, tumor-cell attribution, retained neighbors and exposure | **Days**: a 3-day drug exposure, with results 7–14 days after the biopsy ([Ladan 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10542784/)) |
| Patient-derived [organoid](/wiki/education/concepts/measurement/functional-models/organoid) (in vitro) | What do selected cultured populations do under repeated experiments? | Fresh, living tumor broken into cells and grown in a gel | Malignant identity, culture selection, matrix and missing cell types | **Weeks**: median 6 weeks (range 4–10) from biopsy to a drug panel in colorectal cancer ([Cartry 2023](https://doi.org/10.1186/s13046-023-02853-4)); a median 34 days just to establish organoids from breast biopsies, per a review ([Wensink 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8042051/)) |
| [Patient-derived xenograft (PDX)](/wiki/education/concepts/measurement/functional-models/patient-derived-xenograft) (in vivo) | What happens to tumor growth after dosing an animal host? | Fresh, living tumor pieces implanted into mice | Host immunity, species-specific compartments, engraftment and passage | **Months**: normally 4–8 months to a study-ready model ([Hidalgo 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4167608/)); 16 weeks on average from engraftment to drug testing in one large series ([Izumchenko 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5834154/)) |
| Immune [co-culture](/wiki/education/concepts/measurement/functional-models/co-culture) or a method retaining immune cells | Do specified immune and tumor populations interact after an intervention? | Living tumor plus compatible immune cells, from blood or the tumor | Compatibility, cell persistence, recognition controls and readout | Adds immune-cell preparation to the organoid timeline |
| [Virtual cell model](/wiki/education/concepts/measurement/computational-analysis/virtual-cell-model) (in silico) | Which measured cellular response might follow an intervention? | Measured data, such as RNA sequencing, rather than living cells | Task, version, training context, independent tests and uncertainty | Fast once measured input data exist; the prediction itself is untested |

Every living route can also fail to produce a result: 61.5% of colorectal core biopsies yielded an organoid in the study above, 23 of 30 breast biopsies gave a usable slice result, and 578 of 1,163 implanted tumors grew as a PDX. The [comparison page](/wiki/education/concepts/measurement/functional-models/pdx-vs-organoid-vs-tumor-fragment) sets the three living models side by side, and [lesson 4](/wiki/education/guides/predicting-response-before-treating/04-what-concordance-studies-show) shows how often they have agreed with patients.

These categories overlap. An organoid can supply an ex vivo screen. A model can retain selected immune cells without retaining an entire immune system. The name tells you where to begin checking; it does not complete the check.

## The surroundings can change the question

Conventional organoids commonly lack the original immune cells; specialized cultures can retain or add some. Conventional PDX hosts have impaired immunity, and human supporting tissue gives way to mouse stroma and vessels. Humanized mice add selected human components whose source and compatibility still matter.

[Bioprinting](/wiki/education/concepts/measurement/functional-models/bioprinting) places cells and materials in a designed arrangement, and a [tumor-on-chip](/wiki/education/concepts/measurement/functional-models/tumor-on-chip) can add controlled flow. Neither guarantees immune cells, a working blood vessel or human drug metabolism. A [foundation model](/wiki/education/concepts/measurement/computational-analysis/foundation-models) describes how a computational representation is trained; it is not automatically a virtual cell validated for drug response.

## Work through a fictional choice

A team has fresh tissue from a fictional person's triple-negative breast tumor. Every result below is invented, but the drugs are real. The team has three questions and a decision due in three weeks. An **endpoint** is the quantity measured at a stated time.

1. Does olaparib, a [poly(ADP-ribose) polymerase (PARP) inhibitor](/wiki/education/concepts/therapeutics/targeted-small-molecules/parp-inhibitors-and-trapping), directly slow these cancer cells?
2. Does pembrolizumab, a [checkpoint antibody](/wiki/education/concepts/therapeutics/immunotherapy/immune-checkpoint-inhibitor) against programmed cell death protein 1 (PD-1), reactivate the tumor's own T cells?
3. Which RNA changes would follow loss of *BRCA1* in these cells?

| Candidate | What it contains | Question and endpoint | Decision |
|---|---|---|---|
| Tumor-only organoid | Selected human cancer cells; no immune cells | 1: living cancer-cell count after 5 days | Right biology for question 1, but establishment often takes longer than three weeks; measure division and death separately |
| Fresh tumor fragments | The tumor's own cancer, immune and supporting cells, without blood flow | 2: T-cell activation markers after 2 days | Suitable for question 2; it keeps resident T cells and answers in days |
| Conventional PDX | Human tumor in an immunodeficient mouse; supporting tissue becomes mouse | Tumor growth after mouse dosing | Reject: too slow for the decision and lacks a human immune system for question 2 |
| Virtual cell model | Computation from measured RNA data | 3: predicted RNA change | Use only to prioritize a measured experiment; no cells were exposed |

The organoid fits question 1 but not question 2: pembrolizumab works through T cells, and a tumor-only culture has none. Even for question 1, a median of about 6 weeks to a drug panel would likely miss a three-week decision, so the result would inform the next question rather than this one. The PDX could show whole-body growth under olaparib, but only after months. No choice covers human metabolism, healthy-organ toxicity or every population in the original tumor. The concentrations used in any dish are experiment conditions, not doses shown safe in people. [Lesson 2](/wiki/education/guides/predicting-response-before-treating/02-check-the-experiment) checks the experiment each choice would need.

Finally, carry failures forward. If 30 specimens are offered a test and only 20 yield reports, the other ten stay in the offered group. A failed preparation is not a drug-resistant cancer. [Lesson 3](/wiki/education/guides/predicting-response-before-treating/03-verification-and-feedback-loops) keeps coverage separate from agreement in a real study.

## What can go wrong at this step

- A model omits the cells required by the medicine's mechanism.
- Culture or engraftment favors only part of the original tumor.
- A mouse-derived compartment is mistaken for patient tissue.
- A computed prediction is described as a performed intervention.
- Model establishment takes too long for the intended decision window.

A failed culture or graft means that model did not yield an interpretable experiment. It is not a direct statement about whether the patient's cancer would resist the drug.

## Try it

The team uses the tumor-only organoid for the pembrolizumab question because it grew reliably. Write a question, model, endpoint, controls and missing-component statement. Then repair the choice.

**Answer:** “Does pembrolizumab reactivate the tumor's own T cells? Use fresh tumor fragments or a characterized tumor–immune co-culture, measure T-cell activation and identified tumor-cell death over the stated interval, and include untreated, matched-antibody and recognition controls.” The tumor-only organoid omits the required immune cells. Conventional PDX growth does not restore an intact human immune system. A more suitable model still requires controls and clinical validation.

## Explain it back

“Our question is ______. The model contains ______, but leaves out ______. Its readout can establish ______.”

One answer: “a direct drug effect on living malignant cells; selected tumor populations; the full body and immunity; a response under the tested conditions.”

## Takeaway

**Choose the model by the missing biological question, and keep its omissions beside the result.**

**Next:** [Check what the experiment actually tests](/wiki/education/guides/predicting-response-before-treating/02-check-the-experiment).

## Sources and scope

Source check: November 8, 2026. Model-selection education, not a testing recommendation or universal accuracy ranking. Expert and learner review remain pending.

- [Neal et al., 2018: selected immune-containing organoid systems](https://pubmed.ncbi.nlm.nih.gov/30550791/).
- [DeRose et al., 2011: breast-tumor graft features and species-specific stroma](https://pmc.ncbi.nlm.nih.gov/articles/PMC3553601/).
- [Lotfollahi et al., 2019: a specified computational perturbation-response model](https://www.nature.com/articles/s41592-019-0494-8).
- [Hidalgo et al., 2014: PDX review](https://pmc.ncbi.nlm.nih.gov/articles/PMC4167608/) — 4–8 months to a study-ready model (PMID 25185190).
- [Cartry et al., 2023: organoid drug testing in colorectal cancer](https://doi.org/10.1186/s13046-023-02853-4) — 6-week median turnaround, 61.5% take from core biopsies (PMID 37880806).
- [Ladan et al., 2023: breast biopsy slice assay](https://pmc.ncbi.nlm.nih.gov/articles/PMC10542784/) — 14-gauge cores cut into 300 µm slices; 3-day exposure; results 7–14 days after biopsy; 23 of 30 usable (PMID 37777518).
- [Izumchenko et al., 2017: PDX and patient response](https://pmc.ncbi.nlm.nih.gov/articles/PMC5834154/) — 578 of 1,163 tumors engrafted; 16 weeks from engraftment to drug exposure (PMID 28945830).
- [Wensink et al., 2021: organoids as a predictive biomarker, systematic review](https://pmc.ncbi.nlm.nih.gov/articles/PMC8042051/) — median 34 days to establish organoids from breast biopsies, as reported in the review (PMID 33846504).

The worked choice is fictional; the drugs are real but no result is implied. Neal and DeRose support the immune and stromal distinctions, not a universal engraftment rate; Lotfollahi concerns one expression-prediction task. Times to result come from the named studies and vary by laboratory and tumor type.
