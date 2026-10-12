---
title: "Positive predictive value and base rates"
type: concept
domain: evidence-and-statistics/tests-and-prediction
summary: "Positive predictive value is the probability of the defined condition among people with a positive test result."
glossary_anchor: ppv
aliases: ["ppv", "NPV", "negative predictive value", "base rate"]
prerequisites: []
reviewed: pending
reviewed_by: ""
level: foundation
sensitive: false
tags: [education, evidence-and-statistics]
used_by: ["[[wiki/education/comparisons/index]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/01-write-the-exact-claim]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/index]]","[[wiki/education/guides/monitoring-residual-disease/index]]","[[wiki/education/modeling-tumor-response/verification-and-feedback-loops]]"]
updated: "2026-10-12"
source_checked: 2026-10-10
review_status: "Source-checked; expert and learner review pending"
---

# Positive predictive value and base rates

## In one sentence

Positive predictive value is the probability of the defined condition among people with a positive test result.

## The intuition

A positive result feels like a direct answer, but its meaning depends on how common the condition is in the tested population. When a condition is uncommon, even a modest false-positive fraction among people without it can produce many positive calls. The intuition concerns comparable groups; it does not assign a personal probability from a borrowed cohort.

## How it works

<div class="my-6">
  <img src="/api/file?path=wiki/education/concepts/evidence-and-statistics/tests-and-prediction/images/positive-calls-and-base-rates-v1-light.svg" width="576" height="1520" data-theme-pair alt="Two fictional groups each contain 1,000 people. With assumed 80% sensitivity and 90% specificity, 10% prevalence gives 80 true positives, 20 false negatives, 90 false positives and 810 true negatives; the positive-call pool is 170 and positive predictive value (PPV) is about 47.1%. At 50% prevalence, the four counts are 400, 100, 50 and 450; 450 positive calls give PPV about 88.9%. Shared-scale count bars separate people with the condition from the regrouped positive-call pool, showing different sensitivity and PPV denominators." />
  <p class="text-sm text-muted-foreground mt-2">Start with the question you are asking. Sensitivity counts positive results among people who have the condition: 80/100 and 400/500 are both 80%. Positive predictive value (PPV) counts people with the condition among positive calls: 80/170 ≈ 47.1% and 400/450 ≈ 88.9%. The bottom pool in each panel regroups the same positive people; it adds no new participants. Each fictional group has 1,000 people, with assumed sensitivity 80% and specificity 90%, complete reference assessment and no indeterminate results. Real populations can change test performance too; these are not personal probabilities.</p>
</div>

Use a defined **reference standard** to distinguish the condition from the test result:

- **Sensitivity:** positive test results among people with the condition.
- **Specificity:** negative results among people without the condition.
- **Positive predictive value (PPV):** people with the condition among positive test results.
- **Negative predictive value (NPV):** people without the condition among negative test results.

The denominator changes when you reverse the question. The **base rate**, or prevalence of the defined condition in the tested population, connects these quantities. [FDA diagnostic reporting guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/statistical-guidance-reporting-results-studies-evaluating-diagnostic-tests-guidance-industry-and-fda).


### Compare sensitivity with positive predictive value

| Part of the fraction | Sensitivity | Positive predictive value (PPV) |
|---|---|---|
| Question | Among people with the reference condition, who tests positive? | Among positive test results, who has the reference condition? |
| Numerator | True positives | The same true positives |
| Denominator | All people with the condition: true positives plus false negatives | All positive calls: true positives plus false positives |

## Worked example

In a fictional population of 1,000 people, 10% have the condition. Assume sensitivity 80%, specificity 90%, complete reference assessment and no indeterminate results.

| Test result | Condition present | Condition absent | Total |
|---|---:|---:|---:|
| Positive | 80 true positives | 90 false positives | 170 |
| Negative | 20 false negatives | 810 true negatives | 830 |
| Total | 100 | 900 | 1,000 |

Sensitivity is `80/100 = 80%`; specificity is `810/900 = 90%`. PPV is `80/170 ≈ 47.1%`, while NPV is `810/830 ≈ 97.6%`. Sensitivity 80% is therefore not an 80% chance that a positive call is correct.

Now suppose the base rate is 50%, keeping the **assumed** sensitivity and specificity unchanged: 400 true positives, 100 false negatives, 50 false positives and 450 true negatives. PPV becomes `400/450 ≈ 88.9%`, while NPV is `450/550 ≈ 81.8%`. Real populations can change sensitivity and specificity too; this example isolates the base-rate effect.

## What is measured

| Check | Information needed |
|---|---|
| Input | Test results and independent reference outcomes in the intended population. |
| Method | Locked threshold, condition definition, assay version and treatment of missing/indeterminate results. |
| Output | Four counts, performance estimates and confidence intervals. |
| Failure | Verifying mainly positive results, using an imperfect comparator or borrowing another population's base rate. |
| Cannot tell | Whether acting on the test improves outcomes. |

When a study compares two methods without establishing which reflects the condition, positive and negative **percent agreement** may be appropriate instead of sensitivity and specificity. Agreement is not proof that either method is correct.

## Why it matters in cancer

Radiologic complete response and [pathologic complete response](/wiki/education/concepts/breast-cancer/surgery-and-pathology-results/pcr) are separate assessments. If imaging is the test and surgical pathology the reference, performance depends on the exact population, regimen, response definition and timing. A subgroup's observed fraction does not establish an individual's outcome or the safety of omitting surgery.

## Common confusions

- Sensitivity asks about affected people; PPV asks about positive calls.
- Specificity asks about unaffected people; NPV asks about negative calls.
- A high NPV can occur when the condition is rare, even with missed cases.
- A positive result is not a treatment-benefit prediction.
- Changing the threshold changes test performance; prevalence alone does not describe every difference between populations.

## Try it

For 1,000 fictional people with 5% prevalence, assume the same 80% sensitivity and 90% specificity. Calculate PPV.

**Answer:** Of 50 affected people, 40 test positive. Of 950 unaffected people, 95 test positive. PPV is `40/(40 + 95) ≈ 29.6%`. Lower prevalence produces lower PPV under these held-constant assumptions.

## Explain it back

Explain why “among affected people” and “among positive results” need different denominators.

## Takeaway

Keep the reference condition, four counts, threshold and intended population beside every accuracy claim.

## Related concepts

[[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive|Prognostic versus predictive]] and [[wiki/diagnostics/early-response-monitoring|the response-test reference]].

## Sources and scope

General teaching, source-checked October 10, 2026. The examples are hypothetical unless a study is explicitly named. Expert and learner review remain pending.

- [FDA guidance on diagnostic test statistical reporting](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/statistical-guidance-reporting-results-studies-evaluating-diagnostic-tests-guidance-industry-and-fda).
- [NCI positive predictive value definition](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/positive-predictive-value).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Compare related ideas](/wiki/education/comparisons/index)
- [Write the exact claim before judging it](/wiki/education/guides/judging-a-test-or-vendor-claim/01-write-the-exact-claim)
- [Judge a test or company claim](/wiki/education/guides/judging-a-test-or-vendor-claim/index)
- [Understand blood tests and imaging after treatment](/wiki/education/guides/monitoring-residual-disease/index)
- [Test clinical relevance and learn from feedback](/wiki/education/modeling-tumor-response/verification-and-feedback-loops)
<!-- END GENERATED USED IN -->
