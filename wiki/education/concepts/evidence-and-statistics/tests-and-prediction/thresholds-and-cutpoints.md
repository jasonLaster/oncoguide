---
title: "Thresholds and cutpoints"
type: "concept"
domain: "evidence-and-statistics/tests-and-prediction"
summary: "A threshold or cutpoint turns a continuous measurement or score into categories, so its meaning depends on the measurement, intended action and validation context."
glossary_anchor: "thresholds-and-cutpoints"
aliases: ["cutpoint", "cutpoints", "decision threshold"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/tests-and-prediction/ppv-and-base-rates]]"]
used_by: ["[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]"]
sensitive: false
tags: ["education", "evidence-and-statistics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Thresholds and cutpoints

## In one sentence

A threshold or cutpoint turns a continuous measurement or score into categories, so its meaning depends on the measurement, intended action and validation context.

## The intuition

A thermostat has a setting that changes what the heating system does. Moving the setting changes how often it acts; it does not change what temperature was measured. A test threshold similarly changes who is called positive. The analogy ends at consequences: a clinical action can have much greater and more varied costs.

## How it works

A threshold can serve different jobs. An analytical threshold describes reliable detection. A diagnostic threshold classifies a condition. A treatment-selection threshold identifies a group studied with a particular intervention. A decision threshold may reflect the balance of benefit, harms and preferences. These are not interchangeable.

For a continuous score, lowering the positive threshold commonly increases sensitivity while reducing specificity when higher values indicate the condition. Keep the direction and the [reference standard](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility) explicit. Report performance for the intended population and locked threshold. [FDA: diagnostic test reporting](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/statistical-guidance-reporting-results-studies-evaluating-diagnostic-tests-guidance-industry-and-fda).

An **outcome-optimized cutpoint** is selected because it makes groups look most different in the available outcome data. Trying many cutpoints and reporting the winner creates a [multiple-testing](/wiki/education/concepts/evidence-and-statistics/effect-measures/p-values-and-multiple-testing) problem and optimistic performance. A locked rule needs suitable independent evaluation. [Altman and colleagues: choosing cutpoints](https://doi.org/10.1093/jnci/86.11.829).

## Why it matters in cancer

Assay scores and expression percentages often sit beside a proposed drug. Ask who chose the cutoff, for which specimen and disease setting, and whether the rule predicted a treatment difference. A detectable target and a treatment-validated cutoff answer different questions.

## Worked example

Ten fictional samples include four with the defined condition and six without it. A threshold of 0.7 calls two affected and one unaffected sample positive. Sensitivity is `2/4 = 50%`; specificity is `5/6 = 83.3%`.

Lowering the threshold to 0.4 calls three affected and three unaffected samples positive. Sensitivity rises to `3/4 = 75%`; specificity falls to `3/6 = 50%`. You gained one true positive and added two false positives. Whether that tradeoff helps depends on what happens next. These counts are invented, with complete classification and no missing samples.

The [positive predictive value](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/ppv-and-base-rates) also changes: from `2/3` to `3/6` in this sample. Neither rule is established for a clinical use by ten examples.

## Common confusions

- Crossing a cutoff does not turn uncertainty off.
- A threshold validated with one antibody, assay or specimen may not transfer to another.
- The best-looking cutoff in training data is not automatically the best clinical rule.
- An analytical limit of detection is not a threshold proving benefit from treatment.
- Keeping a continuous result can preserve information lost by dividing it into two groups.

## Try it

A company picks the cutoff after seeing which participants responded, then reports excellent accuracy on those same participants. What would strengthen the claim?

**Answer:** Report the selection process, lock the method and cutoff, then test the intended use in suitably independent data. If the claim is improved care, that action needs its own evidence too.

## Related concepts

- [ROC area and concordance](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/auc-and-c-index)
- [Prognostic versus predictive biomarkers](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive)
- [Prespecified and exploratory analysis](/wiki/education/concepts/evidence-and-statistics/study-design/exploratory-vs-prespecified-analysis)

## Sources and scope

Source check: October 9, 2026. Fictional sample counts; expert and learner review remain pending.

- [FDA, 2007: reporting diagnostic test performance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/statistical-guidance-reporting-results-studies-evaluating-diagnostic-tests-guidance-industry-and-fda).
- [Altman et al., 1994: dangers of optimal cutpoints](https://doi.org/10.1093/jnci/86.11.829).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
<!-- END GENERATED USED IN -->
