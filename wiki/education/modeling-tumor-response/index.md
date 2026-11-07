---
title: "Choose a tumor model for the question"
type: "guide-lesson"
guide: "predicting-response-before-treating"
step: 1
minutes: 12
objectives: ["Match a biological question to a model and an observable response.", "Explain what changes when patient tissue is cultured, implanted or represented computationally."]
prerequisites: ["[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]", "[[wiki/education/concepts/measurement/functional-models/organoid]]", "[[wiki/education/concepts/measurement/computational-analysis/virtual-cell-model]]"]
sensitive: false
tags: ["education", "functional-models"]
updated: "2026-11-07"
source_checked: "2026-11-07"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Choose a tumor model for the question

**A model is useful when it contains the biology your question needs and produces a readout you can interpret.**

**Before you start:** [Tumor heterogeneity](/wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity) explains why one sample can miss populations. An [organoid](/wiki/education/concepts/measurement/functional-models/organoid) is a three-dimensional culture that self-organizes to reproduce selected tissue features. A [virtual cell model](/wiki/education/concepts/measurement/computational-analysis/virtual-cell-model) computes selected properties or responses.

## Where this step sits

This lesson is step 1 of [Predict response before treating](/wiki/education/guides/predicting-response-before-treating/index). First choose a question and model. The next lessons check the experiment, then ask how far its result can travel toward patient care.

## Begin with the sentence you want to test

A model is a deliberately incomplete representation. Think of trying out a bicycle brake on a workbench. The bench can test the brake, but not the rider's journey through traffic. Tumor models similarly answer selected questions. Adding more parts helps only if they matter to the claim.

Write the question with a biological action and an endpoint: “Does drug A reduce the number of living malignant cells at these exposures?” That is clearer than “Which drug works?” The second question hides delivery, immune interactions, toxicity, timing and clinical outcomes inside one word.

A [molecular profile](/wiki/education/reading-a-tumor/omics-and-multi-omics) can suggest an intervention. Detecting a sequence change or high [ribonucleic acid (RNA) expression](/wiki/education/concepts/measurement/transcriptomics/bulk-rna-seq) is different from exposing living cells to a drug. A computed response is also a prediction, even when the input came from measured patient tissue.

## Choose what must be present

| Model | A question it can help test | What must still be checked | Time to a patient-specific result |
|---|---|---|---|
| [Cell line](/wiki/education/concepts/measurement/functional-models/cell-lines) | What happens after a controlled intervention in a maintained cell population? | Identity, selection, passage and relevance to the intended cancer | Not a patient-specific route: existing lines come from other people |
| [Ex vivo drug screen](/wiki/education/concepts/measurement/functional-models/ex-vivo-drug-screen) using cells or [tumor fragments](/wiki/education/concepts/measurement/functional-models/ex-vivo-tumor-fragments) | What response follows a defined exposure outside the original body? | Viability, tumor-cell attribution, retained neighbors and exposure | **Days**: breast biopsy slices were read after a 3-day drug exposure ([Ladan 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10542784/)) |
| Patient-derived organoid | What do selected cultured populations do under repeated experiments? | Malignant identity, culture selection, matrix and missing cell types | **Weeks**: median 6 weeks (range 4–10) from biopsy to a drug panel in colorectal cancer ([Cartry 2023](https://doi.org/10.1186/s13046-023-02853-4)) |
| [Patient-derived xenograft (PDX)](/wiki/education/concepts/measurement/functional-models/patient-derived-xenograft) | What happens to tumor growth after dosing an animal host? | Host immunity, species-specific compartments, engraftment and passage | **Months**: normally 4–8 months to a study-ready model ([Hidalgo 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4167608/)) |
| Immune [co-culture](/wiki/education/concepts/measurement/functional-models/co-culture) or a method retaining immune cells | Do specified immune and tumor populations interact after an intervention? | Compatibility, cell persistence, recognition controls and readout | Adds immune-cell preparation to the organoid timeline |
| Virtual cell model | Which measured cellular response might follow an intervention? | Task, version, training context, independent tests and uncertainty | Fast to compute once measured input data exist; the prediction itself is untested |

Every route also needs fresh, living tissue, and each can fail to produce a result: 61.5% of colorectal core biopsies yielded an organoid in the study above, and 23 of 30 breast biopsies gave a usable slice result. The [comparison page](/wiki/education/concepts/measurement/functional-models/pdx-vs-organoid-vs-tumor-fragment) sets the three living models side by side with their published agreement figures.

These categories overlap. An organoid can supply an ex vivo screen. A model can retain selected immune cells without retaining an entire immune system. The name tells you where to begin checking; it does not complete the check.

Four Latin labels name where an experiment happens:

| Label | Literal meaning | Example |
|---|---|---|
| **In vivo** | "in the living" | Dosing a mouse that carries a PDX |
| **Ex vivo** | "out of the living" | Treating a fresh tumor slice that was just removed, before it is grown or expanded |
| **In vitro** | "in glass" | Treating cells grown and expanded in a dish, such as a cell line or organoid |
| **In silico** | "in silicon" | Running a computer model |

The line between ex vivo and in vitro is blurry; organoid studies often call their drug tests either. These labels describe the setting, not a ranking of fidelity.

## The surroundings can change the question

Conventional epithelial organoids commonly lack the original immune populations. Specialized cultures can retain or add selected components. Primary organoid studies demonstrate that immune experiments are possible; they do not establish that every culture has that ability.

Conventional PDX hosts commonly have impaired immunity. Human supporting tissue can also give way to mouse-derived stroma and vessels. A drug needing a human immune or stromal interaction may therefore need another design. Humanized models add selected human components whose source and compatibility still matter.

[Bioprinting](/wiki/education/concepts/measurement/functional-models/bioprinting) places cells and materials in a designed arrangement. A [tumor-on-chip](/wiki/education/concepts/measurement/functional-models/tumor-on-chip) controls selected tissue conditions, sometimes including flow. The two can be combined. Neither name guarantees the required immune cells, a working blood vessel or human drug metabolism.

A [foundation model](/wiki/education/concepts/measurement/computational-analysis/foundation-models) describes how a computational representation is trained and reused. It is not automatically a virtual cell with a validated intervention task. A prediction of RNA after gene disruption does not establish safe drug dosing or whole-body response.

## Work through a fictional choice

Welcome to **MODEL-PRACTICE-01**. Every drug, donor and observation in this project is invented. Development donor D0 supplies one verified malignant-cell preparation. The team has three questions: direct repair perturbation by drug A; immune-mediated action by antibody B; and an RNA prediction after gene C disruption.

Fill the selection board before ordering an experiment. An **endpoint** is the quantity assessed at a specified time.

| Candidate | Biology and species | Question and endpoint | Decision for D0 |
|---|---|---|---|
| Tumor-only organoid | Selected human malignant cells; no detectable immune cells | A: viable tumor-cell count after 48 hours | Choose for the direct-effect worksheet; also measure division and death separately |
| Defined immune co-culture | Human tumor plus compatible human immune populations | B: attributed tumor-cell killing and immune activation over a stipulated seven-day experiment | Candidate only after compatibility, persistence and recognition controls pass |
| Conventional PDX | Human tumor in an immunocompromised mouse; supporting compartments can become murine | Tumor growth after stated mouse dosing and measured exposure | Reject for the proposed human immune interaction; mouse growth does not supply it |
| Virtual RNA predictor | Computation using compatible measured expression data | C: predicted normalized RNA expression at its specified time | Prioritize a measured perturbation experiment; no living cells were exposed by the computation |

Complete the conditions record too. Missing fields stay visible; they are not invented animal or clinical data.

| Candidate | Exposure, time and controls | Missing for the claim |
|---|---|---|
| A organoid | Invented 0.1, 0.3 and 1 micromoles per liter for 48 hours; vehicle, positive and mechanism controls; three wells per condition | Original tumor diversity, immunity, human metabolism and healthy-organ toxicity |
| B co-culture | Stipulated seven-day window; antibody concentration/schedule not supplied. Include tumor-only, immune-only, matched-antibody/carrier and recognition controls | Verified exposure, lasting compatible cells, peripheral immunity and whole-body effects |
| Conventional PDX | Mouse exposure, schedule, assessment day and matched vehicle/control records **not supplied** | No completed dosing comparison; impaired host immunity and murine supporting compartments cannot answer the proposed human immune question |
| Virtual C | Fictional **virtual-C-v1**, predicting normalized RNA expression 48 hours after stipulated gene C disruption; no physical drug exposure. Compare unperturbed/no-change baselines with measured responses in reserved new donors and the withheld C intervention | Drug delivery, protein effects, immune interactions and patient benefit; an untested computed response remains a prediction |

A's concentrations are exercise conditions, not doses shown safe or achievable in people. Carry D0's preparation into the [experiment worksheet](/wiki/education/molecular-profiling/05-functional-drug-response). B and the PDX remain incomplete experiment proposals. Specialized immune-containing methods do not make every organoid immune competent.

Bioprinting could arrange the chosen cells; a chip could add controlled flow. Neither supplies absent biology automatically. No choice covers human metabolism, healthy-organ toxicity or every original tumor population.

Finally, carry failures forward: if 30 new fictional specimens are offered the locked assay and only 20 yield reports, the other ten stay in the offered group. A failed preparation is not a drug-resistant cancer. The [evaluation packet](/wiki/education/modeling-tumor-response/verification-and-feedback-loops) will keep coverage separate from agreement.

## What can go wrong at this step

- A model omits the cells required by the medicine's mechanism.
- Culture or engraftment favors only part of the original tumor.
- A mouse-derived compartment is mistaken for patient tissue.
- A computed prediction is described as a performed intervention.
- Model establishment takes too long for the intended decision window.

A failed culture or graft means that model did not yield an interpretable experiment. It is not a direct statement about whether the patient's cancer would resist the drug.

## Try it

The team chooses D0's tumor-only organoid for antibody B because it grew reliably. Submit a question, model, endpoint, controls and missing-component statement. Then repair the choice.

**Answer:** “Does B support immune-mediated killing? Use a characterized tumor–immune co-culture, measure identified tumor-cell death and immune activity over the stated interval, and include tumor-only, immune-only and recognition controls.” D0's tumor-only preparation omits the required immune interaction. Conventional PDX growth does not restore an intact human immune system. A more suitable model still requires controls and clinical validation.

## Explain it back

“Our question is ______. The model contains ______, but leaves out ______. Its readout can establish ______.”

One answer: “a direct drug effect on living malignant cells; selected tumor populations; the full body and immunity; a response under the tested conditions.”

## Takeaway

**Choose the model by the missing biological question, and keep its omissions beside the result.**

**Next:** [Check what the experiment actually tests](/wiki/education/guides/predicting-response-before-treating/02-check-the-experiment).

## Sources and scope

Source check: November 7, 2026. Model-selection education, not a testing recommendation or universal accuracy ranking. Expert and learner review remain pending.

- [Neal et al., 2018: selected immune-containing organoid systems](https://pubmed.ncbi.nlm.nih.gov/30550791/).
- [DeRose et al., 2011: breast-tumor graft features and species-specific stroma](https://pmc.ncbi.nlm.nih.gov/articles/PMC3553601/).
- [Lotfollahi et al., 2019: a specified computational perturbation-response model](https://www.nature.com/articles/s41592-019-0494-8).
- [Hidalgo et al., 2014: PDX review](https://pmc.ncbi.nlm.nih.gov/articles/PMC4167608/) — 4–8 months to a study-ready model (PMID 25185190).
- [Cartry et al., 2023: organoid drug testing in colorectal cancer](https://doi.org/10.1186/s13046-023-02853-4) — 6-week median turnaround, 61.5% take from core biopsies (PMID 37880806).
- [Ladan et al., 2023: breast biopsy slice assay](https://pmc.ncbi.nlm.nih.gov/articles/PMC10542784/) — 3-day exposure; 23 of 30 usable.

The linked project is fictional. Neal and DeRose support the immune and stromal distinctions, not a universal engraftment rate; Lotfollahi concerns one expression-prediction task. Times to result come from the named studies and vary by laboratory and tumor type.
