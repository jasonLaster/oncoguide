---
title: "Surrogate endpoints: patient-level and trial-level evidence"
type: concept
domain: evidence-and-statistics/endpoints
summary: "A surrogate endpoint is a measured outcome used in place of a direct clinical benefit outcome, with evidence needed to support that substitution in a specified setting."
glossary_anchor: surrogate-endpoints
aliases: [surrogate endpoint, surrogate endpoints, pCR paradox, surrogate endpoints and the pCR paradox]
level: foundation
prerequisites:
  - "[[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive]]"
  - "[[wiki/education/concepts/breast-cancer/surgery-and-pathology-results/pcr]]"
used_by: ["[[wiki/education/guides/monitoring-residual-disease/03-ask-what-a-result-should-change]]","[[wiki/education/guides/monitoring-residual-disease/index]]","[[wiki/education/guides/predicting-response-before-treating/03-verification-and-feedback-loops]]","[[wiki/education/guides/reading-cancer-evidence/01-name-the-comparison-and-endpoint]]","[[wiki/education/guides/reading-cancer-evidence/05-read-a-real-trial]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
sensitive: false
tags: [education, evidence-and-statistics]
updated: 2026-11-07
source_checked: 2026-11-07
reviewed: pending
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Surrogate endpoints: patient-level and trial-level evidence

## In one sentence

A surrogate endpoint is a measured outcome used in place of a direct clinical benefit outcome, with evidence needed to support that substitution in a specified setting.

## The intuition

A journey's checkpoint may tell us something useful before the destination is reached. But moving a checkpoint does not necessarily shorten the journey. The analogy helps separate an early signal from the outcome we ultimately care about; it does not make cancer outcomes a predictable route.

An endpoint describes what a study measures. A surrogate substitutes for a different outcome, such as living longer or feeling better. Earlier measurement can make research more practical. The important question is whether a treatment's effect on that measure reliably predicts its effect on the intended clinical outcome.

## How it works

Two relationships need separate tests:

| Question | Evidence being examined |
|---|---|
| Do people with a favorable marker tend to have better outcomes? | Association between marker and outcome within patient groups |
| Do treatments that improve the marker also improve the clinical outcome? | Agreement between treatment effects across relevant randomized comparisons |

The first can be useful [prognostic evidence](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive) without establishing the second. A treatment may affect the marker and also affect another pathway, toxicity or later disease. Validation therefore belongs to a particular disease, treatment context and intended outcome. The primary statistical framework distinguishes individual-level from trial-level relationships. [Buyse et al., 2000](https://pubmed.ncbi.nlm.nih.gov/12933525/).

<img src="./images/people-and-randomized-treatment-effects-v1-light.svg" alt="Twenty fictional people grouped by pCR status have different event counts, while six fictional randomized trials have separate pCR and EFS rate differences" data-theme-pair width="600" height="1000">

*Association among people and agreement between treatment effects are separate questions.*

Start with the unit: a person above, a randomized A–B comparison below. Pathologic complete response (pCR) is the early tissue result; event-free survival (EFS) describes remaining free of the defined clinical events. The upper counts assume complete follow-up to a common three-year horizon. They group people by achieved pCR, rather than treatment assignment. Below, each point compares randomized arms: the difference in pCR rates and the difference in three-year EFS rates, both in percentage points. All numbers are invented; these are not CTNeoBC observations or its statistical model. [Primary two-level framework](https://pubmed.ncbi.nlm.nih.gov/12933525/), [CTNeoBC methods and interpretation](https://pubmed.ncbi.nlm.nih.gov/24529560/).

**Read the picture:** Does the upper association establish that a treatment improving pCR will improve EFS? **Answer:** No. That needs the separate treatment-effect relationship in the relevant setting.

## Why it matters in cancer

[Pathologic complete response (pCR)](/wiki/education/concepts/breast-cancer/surgery-and-pathology-results/pcr) is assessed in the surgical specimen after preoperative (neoadjuvant) treatment, not on a biopsy or scan before surgery. Breast cancer shows both levels of evidence clearly:

| Level | Study | Result |
|---|---|---|
| Patient level | CTNeoBC (Collaborative Trials in Neoadjuvant Breast Cancer), 11,955 patients from 12 trials [1] | Reaching pCR (ypT0/Tis ypN0) was linked to better [event-free survival (EFS)](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints): hazard ratio 0.48 overall and 0.24 in triple-negative disease; for overall survival, 0.36 overall and 0.16 in triple-negative disease |
| Trial level | Same analysis [1] | Bigger pCR gains between arms barely tracked EFS gains (R² 0.03, 95% CI 0.00–0.25) or overall-survival gains (R² 0.24, 0.00–0.70) |
| Trial level | Conforti and colleagues, 54 randomized trials, 32,611 patients [2] | Weak agreement again: R² 0.14 for disease-free survival and 0.08 for overall survival |

R² is the share of variation in survival effects explained by pCR effects; 1 would be perfect. So pCR is a strong **prognostic** marker for a person, but a weak **substitute** for comparing treatments. This is sometimes called the pCR paradox. It does not mean pCR gains never bring survival gains: in KEYNOTE-522, a 13.6-point pCR gain came with event-free and overall-survival gains [3]. Each new regimen still needs its own survival evidence, and a group association is not an individual forecast.

## Read the endpoint card

Record the population, intervention, comparator, definition, assessment time and intended clinical outcome. For pCR, retain the definition (usually ypT0/Tis ypN0: no invasive cancer in breast or nodes) and how missing surgery or specimens were handled. Report rates with their denominators and uncertainty. Survival has its own event definition, starting clock and follow-up.

The U.S. Food and Drug Administration (FDA) distinguishes context-specific surrogate uses. A measure accepted for one development program should not be transferred automatically to another; “validated” and “reasonably likely” are different evidence claims. [FDA surrogate-endpoint table and limitations](https://www.fda.gov/drugs/development-resources/table-surrogate-endpoints-were-basis-drug-approval-or-licensure). [Approval types](/wiki/education/concepts/access-and-regulation/approval/fda-approval-types) explains the regulatory distinction.

## Common confusions

- **Earlier versus surrogate:** an early outcome is not automatically a validated substitute for a later one.
- **Association versus treatment effect:** comparing responders with nonresponders does not preserve a randomized treatment comparison.
- **One trial versus broad validation:** a study can show both endpoints improve without validating the substitute across other treatments.
- **Response versus benefit:** a pathology or imaging response does not capture every benefit or harm.

## Try it

A fictional randomized trial increases pCR from 40 of 100 to 55 of 100 participants. Survival follow-up is immature. May its report claim a proven survival improvement?

**Answer:** No. It supports a 15-percentage-point pCR difference under the trial's definition, with uncertainty still needed. Survival benefit requires its own relevant evidence; an earlier endpoint cannot supply the missing result automatically.

## Explain it back

“A marker can predict ___ without proving that changing it changes ___.” One answer: “outcome differences between patient groups; the clinical outcome through a particular treatment.”

## Takeaway

**Ask whether the marker describes prognosis, measures treatment activity, or has been validated to substitute for the specific clinical outcome.**

## Related concepts

[Prognostic versus predictive biomarkers](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive) distinguishes association from treatment selection. [Survival endpoints](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints) keeps the intended clinical events and clocks explicit.

## Sources and scope

Source check: November 7, 2026 (CTNeoBC and Conforti figures from the primary abstracts). General endpoint teaching; the practice trial is fictional. CTNeoBC is a versioned pooled analysis, not a personal prognosis model. Expert and learner review pending.

1. [Cortazar et al., Lancet 2014: CTNeoBC pooled analysis](https://pubmed.ncbi.nlm.nih.gov/24529560/) — primary breast-cancer analysis; selected methods and discussion also checked in the [author-hosted original paper](https://unclineberger.org/peroulab/wp-content/uploads/sites/1008/2015/04/pCR-endpoint-FDA-Cortazar-LANCET-2014.pdf).
2. [Conforti et al., BMJ 2021](https://pubmed.ncbi.nlm.nih.gov/34933868/) — trial-level meta-analysis of 54 neoadjuvant randomized trials.
3. [Schmid et al., NEJM 2020](https://pubmed.ncbi.nlm.nih.gov/32101663/) and [2024](https://pubmed.ncbi.nlm.nih.gov/39282906/) — KEYNOTE-522 pCR and overall survival.
- [Buyse et al., 2000: individual-level and trial-level surrogate validation](https://pubmed.ncbi.nlm.nih.gov/12933525/) — primary statistical framework.
- [FDA: surrogate-endpoint table, context and limitations](https://www.fda.gov/drugs/development-resources/table-surrogate-endpoints-were-basis-drug-approval-or-licensure) — official explanation, not a treatment recommendation.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Ask what a result should change](/wiki/education/guides/monitoring-residual-disease/03-ask-what-a-result-should-change)
- [Understand blood tests and imaging after treatment](/wiki/education/guides/monitoring-residual-disease/index)
- [Test clinical relevance and learn from feedback](/wiki/education/guides/predicting-response-before-treating/03-verification-and-feedback-loops)
- [Name the comparison and endpoint](/wiki/education/guides/reading-cancer-evidence/01-name-the-comparison-and-endpoint)
- [Read a real trial: KEYNOTE-522](/wiki/education/guides/reading-cancer-evidence/05-read-a-real-trial)
- [Read trial claims, survival statistics and single success stories](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
