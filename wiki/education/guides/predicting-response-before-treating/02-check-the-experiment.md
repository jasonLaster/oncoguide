---
title: "Check what the experiment actually tests"
type: "guide-lesson"
guide: "predicting-response-before-treating"
step: 2
minutes: 12
objectives: ["Check model identity, composition, exposure and controls before interpreting a response.", "Separate growth, viability, killing and computed predictions."]
prerequisites: ["[[wiki/education/concepts/measurement/functional-models/ex-vivo-drug-screen]]", "[[wiki/education/concepts/evidence-and-statistics/study-design/perturbation-and-controls]]", "[[wiki/education/concepts/measurement/computational-analysis/virtual-cell-model]]"]
sensitive: false
tags: ["education", "functional-models"]
updated: 2026-10-10
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Check what the experiment actually tests

**A believable response needs the right cells, a meaningful exposure, suitable controls and an endpoint that supports the words used to describe it.**

**Before you start:** An [ex vivo drug screen](/wiki/education/concepts/measurement/functional-models/ex-vivo-drug-screen) measures response outside the original body. [Controlled perturbation](/wiki/education/concepts/evidence-and-statistics/study-design/perturbation-and-controls) gives a response its comparison. A [virtual cell model](/wiki/education/concepts/measurement/computational-analysis/virtual-cell-model) needs its own independent evaluation.

## Where this step sits

This is step 2 of [Predict response before treating](/wiki/education/guides/predicting-response-before-treating/index). You have chosen a model. Now check whether the experiment tests the intended claim before carrying it toward clinical interpretation.

## Put a small card beside the result

Imagine tasting two soups without knowing which pot received salt. A difference may be real, but its explanation is uncertain. Experimental attribution plays the same role. We need to know what changed and what supplied the signal.

| Field | A concrete question |
|---|---|
| Identity and source | Which cancer, specimen site, collection time and treatment state supplied the material? |
| Composition | Which malignant, normal, immune and supporting populations are present now? |
| Model history | What culture, matrix, host and passage changed the starting material? |
| Exposure | Which drug, concentration, duration and schedule reached the model? |
| Endpoint | Did the assay measure cell number, metabolism, growth, death or another process? |
| Controls and replication | What comparison and variability make the result interpretable? |
| Version and scope | Which assay or computational version was used, and what use was it validated for? |

This card is a way to read an experiment, not a universal protocol. A particular assay may require additional fields or different controls.

## Verify who produced the response

Normal cells can contribute a mixed-culture signal. A culture labeled “tumor-derived” can contain normal epithelial cells, or lose less easily grown cancer populations. Identity should have evidence suited to the preparation, rather than one marker or the original container label.

Composition can also change during the experiment. In an immune [co-culture](/wiki/education/concepts/measurement/functional-models/co-culture), relevant cells must remain viable and capable of the proposed interaction. Immune cells from a different person can attack because of donor mismatch. That is a different explanation from recognizing a specific tumor target after treatment.

For an animal graft, distinguish human malignant cells from host-derived vessels and stroma. For a computer model, distinguish the directly measured inputs from predicted cell assignments or molecular values. A polished map does not settle either attribution.

## Check exposure before comparing effects

A drug concentration in a dish is not the patient's administered dose. Protein binding, transport, metabolites and time at exposure can differ. In an animal, exposure and toxicity also need interpretation within that host. A strong effect at an unattainable human exposure cannot support the same clinical claim as an effect at a relevant one.

Timing matters too. A short experiment can miss a delayed effect or recovery. Repeated transfer and treatment can select survivors. A result belongs to its stated model, exposure and observation window.

## A control is part of the explanation

A vehicle comparison checks the surrounding carrier conditions. A positive control checks whether a relevant response can be detected. Mechanism controls ask whether the proposed target effect explains the response. The [controlled-perturbation concept](/wiki/education/concepts/evidence-and-statistics/study-design/perturbation-and-controls) gives those distinctions a stable home.

For combinations, compare both single drugs and the combination under a defined design. A larger effect than either single drug does not automatically demonstrate synergy. The [functional-experiment lesson](/wiki/education/guides/from-variant-to-drug/07-reading-a-functional-experiment) explains why a stated interaction reference matters.

Repeated wells estimate variability within a preparation. Independently obtained specimens address biological variation. Ten wells from one tumor are not ten independent patients.

A [genetic dependency experiment](/wiki/education/concepts/measurement/functional-models/dependency-mapping-crispr) can ask whether disrupting a gene affects survival in that model. A medicine may inhibit only part of its function, reach a different exposure or affect other targets. Agreement between the two strengthens a specified mechanism claim; a genetic result alone cannot supply the missing drug experiment.

## Work through a fictional count

At the experiment's start, a culture has 100 verified living malignant cells. Vehicle-treated wells reach 200. Drug-treated wells remain at 100. These invented values illustrate an endpoint comparison, not clinical efficacy.

The drug condition has half as many cells as vehicle at the end. That supports a growth difference. It does not establish that half the original cells died. Death and replacement could also occur within either population, so endpoint counts alone do not fully reconstruct the history.

Now imagine the assay measured only a metabolic signal. A lower value could reflect fewer cells or changed metabolism per cell. A suitable cell-death measurement and tumor-cell attribution would answer a closer killing question. Regrowth after drug removal asks yet another question: whether survivors can recover under those conditions.

A [single-cell mass assay](/wiki/education/concepts/measurement/functional-models/single-cell-mass-assays) introduces another measured object. A cell accumulating less mass after exposure is not the same observation as a cell dying. Check the instrument's mass definition, time window and cell attribution before translating its response into a killing claim.

## Give a computer model an equally demanding test

Use [model-validation basics](/wiki/education/concepts/measurement/computational-analysis/model-validation-basics) to ask what was kept out of training and model selection. Additional cells from a familiar intervention are different from a **held-out perturbation**, an intervention whose response the model did not see while learning. A new patient, cell type or laboratory asks a different portability question again.

Compare with meaningful simple baselines, such as an average response. Evaluate the response change that matters, not only agreement dominated by genes that barely changed. A predicted [ribonucleic acid (RNA) pattern](/wiki/education/concepts/biology-basics/genetics/central-dogma) should be compared with appropriate measured RNA; that evaluation does not turn it into a demonstrated killing result.

## What can go wrong at this step

- The signal comes mainly from normal cells or a disappearing cell population.
- A concentration or schedule changes along with the named intervention.
- Endpoint viability is called irreversible killing.
- A combination lacks its single-drug comparisons.
- Related patients or batches leak between computational training and testing.
- Uninterpretable specimens disappear from the reported success record.

## Try it

A virtual model predicts less RNA for growth genes after an unseen drug. A laboratory well also shows less metabolic signal. Has this established tumor-cell killing?

**Answer:** No. One result predicts an RNA change; the other measures a metabolic response. Check cell identity, composition, exposure and controls, then use an appropriate death readout for a killing claim. Agreement is useful only after each measured object is named.

## Explain it back

“The experiment changed ______ in ______. Compared with ______, it measured ______. It still leaves ______ open.”

One answer: “drug exposure; a characterized culture; vehicle; slower net growth; direct killing and clinical relevance.”

## Takeaway

**Keep the cells, exposure, controls and actual endpoint attached to every response claim.**

**Next:** [Test clinical relevance and learn from feedback](/wiki/education/modeling-tumor-response/verification-and-feedback-loops).

## Sources and scope

Source check: October 9, 2026. Experiment-reading education; all numerical examples are fictional. Expert and learner review remain pending.

- [Hafner et al., 2016: primary growth-rate confounding experiments](https://pmc.ncbi.nlm.nih.gov/articles/PMC4887336/).
- [Dijkstra et al., 2018: matched tumor-organoid and lymphocyte experiments](https://pubmed.ncbi.nlm.nih.gov/30100188/).
- [Ahlmann-Eltze et al., 2025: perturbation-prediction benchmarking with simple baselines](https://pmc.ncbi.nlm.nih.gov/articles/PMC12328236/).
- [Cell viability assays, NIH Assay Guidance Manual](https://www.ncbi.nlm.nih.gov/books/NBK144065/).
