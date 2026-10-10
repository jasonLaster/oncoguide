---
title: "Lead-time bias"
type: concept
domain: evidence-and-statistics/reasoning-tools
summary: "Lead-time bias occurs when earlier detection lengthens measured survival from diagnosis without changing when the outcome occurs."
glossary_anchor: lead-time-bias
aliases: ["lead-time bias"]
prerequisites: ["[[wiki/education/concepts/measurement/liquid-biopsy/lead-time]]"]
reviewed: "pending"
reviewed_by: ""
level: foundation
sensitive: false
tags: [education, evidence-and-statistics]
used_by: ["[[wiki/education/guides/judging-a-test-or-vendor-claim/01-write-the-exact-claim]]","[[wiki/education/guides/monitoring-residual-disease/03-ask-what-a-result-should-change]]","[[wiki/education/guides/monitoring-residual-disease/index]]","[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]","[[wiki/education/guides/reading-cancer-evidence/index]]","[[wiki/education/local-treatment-modalities/02-timing]]"]
updated: "2026-10-10"
source_checked: "2026-10-10"
review_status: "Source-checked; expert and learner review pending"
---

# Lead-time bias

## In one sentence

Lead-time bias occurs when earlier detection lengthens measured survival from diagnosis without changing when the outcome occurs.

## The intuition

Starting a stopwatch earlier can produce a longer recorded interval without changing the finish. A cancer test that identifies a signal sooner can similarly increase survival measured from detection, even when the person's life is unchanged.

This analogy does not say earlier detection is useless. It shows why the clock alone cannot prove benefit; an earlier effective intervention might help, but that requires separate evidence.

## How it works

[Measured lead time](/wiki/education/concepts/measurement/liquid-biopsy/lead-time) is an interval between defined earlier and later detection events. Lead-time bias arises when that timing difference is mistaken for an outcome improvement.

In a fictional course, conventional detection occurs in year 4 and death in year 6. Survival from detection is two years. A new test detects the same disease in year 3, while death still occurs in year 6. Survival from detection becomes three years. The extra recorded year came from moving the start, not the outcome.

A post-treatment molecular result creates a related problem. People can be labeled recurrent at a blood signal before a clinical recurrence is confirmed. Comparing their survival from that earlier label with survival from later imaging-based recurrence can add time mechanically. The [clinical endpoint](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints), event definition and origin of the clock must be aligned.

Two other screening biases are different. **Length bias** favors detecting conditions with longer detectable preclinical periods. **Overdiagnosis** means detecting disease that would not have caused clinical harm in the person's lifetime. Neither is merely another name for lead-time bias. Do not assume their magnitude in a post-treatment molecular-monitoring cohort from screening examples alone.

## Why it matters in cancer

A long detection lead time may be valuable for research planning. It does not identify the right treatment or show that treatment at that time improves health. Finding more signals, changing plans or lengthening survival measured from those signals is insufficient by itself to establish benefit.

To assess a monitoring strategy, define the test schedule, positive rule and resulting action, then compare that strategy with a meaningful alternative. A randomized design can use a common time origin such as randomization and assess clinical outcomes, including harms. Counting all assigned participants also avoids selecting only people whose earlier signals were detectable. Appropriate designs and endpoints depend on the intended claim; survival from the newly assigned diagnosis date alone remains inadequate evidence of lives saved.

## How evidence is assessed

Ask when each clock starts, who enters the analysis and how follow-up ends. Were the new and comparison groups selected at different times? Did a positive result trigger extra imaging? Were people without prior detection omitted? Distinguish an observed interval from [clinical utility](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility).

For example, c-TRAK TN tested a specific blood-surveillance and intervention design. Its detection and feasibility findings inform future trials; they do not prove that every earlier signal creates a beneficial intervention window.

## Common confusions

- A ten-month lead time is not ten added months of life.
- A survival difference from detection does not isolate the benefit of a screening or monitoring strategy.
- Correcting the clock does not automatically solve selection, confounding or missing follow-up.

## Try it

A fictional study reports median survival of 24 months after blood detection and 18 months after imaging detection. The groups have different detection dates and no common-origin comparison. Can the six-month difference show that blood testing saves lives?

**Answer:** No. Some or all of the difference could come from starting the clock earlier, with other group differences also possible. The study needs a design and outcome analysis that tests the actual strategy rather than comparing differently started clocks.

## Explain it back

Which date moved in the example, and which date would need to change to demonstrate longer life?

## Takeaway

Earlier knowledge and better outcomes are separate achievements.

## Related concepts

- [lead time](/wiki/education/concepts/measurement/liquid-biopsy/lead-time)
- [survival endpoints](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints)

## Sources and scope

Source check: October 10, 2026. Fictional timelines; expert and learner review remain pending.

- [NCI explanation of screening statistics](https://www.cancer.gov/about-cancer/screening/research/what-screening-statistics-mean) — lead-time bias, length bias and overdiagnosis.
- [FDA 2024 circulating tumor DNA (ctDNA) drug-development guidance](https://www.fda.gov/media/183874/download) — prospective strategy trials and clinical-outcome validation.
- [Turner et al. 2023 c-TRAK TN](https://doi.org/10.1016/j.annonc.2022.11.005) — specific surveillance/intervention feasibility, not universal benefit from earlier detection.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Write the exact claim before judging it](/wiki/education/guides/judging-a-test-or-vendor-claim/01-write-the-exact-claim)
- [Ask what a result should change](/wiki/education/guides/monitoring-residual-disease/03-ask-what-a-result-should-change)
- [Understand blood tests and imaging after treatment](/wiki/education/guides/monitoring-residual-disease/index)
- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
- [Read trial claims and survival statistics](/wiki/education/guides/reading-cancer-evidence/index)
- [Put the disease setting before the clock](/wiki/education/local-treatment-modalities/02-timing)
<!-- END GENERATED USED IN -->
