---
title: "Check applicability and uncertainty"
type: guide-lesson
guide: reading-cancer-evidence
step: 3
minutes: 12
objectives:
  - "Separate statistical precision, bias, and relevance to a proposed action."
  - "Explain why an outcome association or response result may leave clinical benefit untested."
  - "Read subgroup results without treating different significance labels as proof of different effects."
  - "Write a conclusion that names the remaining evidence gap."
  - "Check calculator inputs and measurement timing before interpreting a prognosis estimate."
prerequisites:
  - "[[wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval]]"
  - "[[wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive]]"
  - "[[wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility]]"
  - "[[wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization]]"
sensitive: false
reviewed: pending
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
source_checked: 2026-10-09
updated: 2026-10-09
tags: [education, guide-lesson, evidence-and-statistics]
---

# Check applicability and uncertainty

**A useful conclusion says what the study supports, which proposed action it actually tested, and what remains uncertain.**

**Before you start:** [Confidence intervals](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval) describe precision under an analysis. [Prognostic versus predictive biomarkers](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive) distinguish outcome associations from treatment-effect differences. [Analytical validity, clinical validity, and clinical utility](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility) separate a sound measurement from evidence that using it improves care. [Trial phases and randomization](/wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization) explain the strength of a comparison.

## Where this step sits

You have [read the curve and effect](/wiki/education/guides/reading-cancer-evidence/02-read-the-curve-and-effect). Now ask whether that result answers the question in front of you.

```mermaid
flowchart TD
  A[Name the comparison and endpoint] --> B[Read the curve and effect]
  B --> C[You are here: check applicability and uncertainty]
```

## Three checks belong side by side

Think of a sharp photograph taken from the wrong angle. Precision and relevance both matter; neither alone accounts for bias.

| Check | What to ask | What a reassuring answer cannot fix |
|---|---|---|
| Precision | How wide is the interval? How many relevant events informed the result? | A narrow interval cannot remove systematic error |
| Bias | Did assignment, assessment, missing data, or selective reporting distort the comparison? | Randomization cannot answer an endpoint the trial never measured |
| Applicability | Do the population, treatment sequence, comparator, and endpoint match the proposed action? | A similar patient description cannot create a missing comparison |

Read the planned outcomes and analysis beside the published result. Find how many people were assigned, followed, and analyzed, and why some were missing. Check whether important outcomes or harms were omitted. Reporting standards help readers find these details; compliance with a checklist is not itself proof that a study is sound. [CONSORT 2025](https://www.bmj.com/content/389/bmj-2024-081123).

In an [observational study](/wiki/education/concepts/evidence-and-statistics/study-design/observational-studies-and-confounding), treatment choice can share causes with outcome. Check how that confounding was addressed. A [case report](/wiki/education/concepts/evidence-and-statistics/study-design/case-reports-and-n-of-1) offers a timeline and a hypothesis, with much less ability to isolate a treatment effect.

Also check the [publication version](/wiki/education/concepts/evidence-and-statistics/study-design/abstract-vs-peer-reviewed). An abstract, full report and later follow-up from the same participants add information, not independent replications. Link reports by trial identifier, centers and recruitment dates; differently named analyses may share or partly overlap participants. Count independent cohorts, not papers. [Cochrane: linking study reports](https://training.cochrane.org/handbook/current/chapter-05). [Preclinical evidence](/wiki/education/concepts/evidence-and-statistics/study-design/preclinical-evidence) answers questions in the studied model before clinical applicability is tested.

## A worked comparison: two different questions

Consider two fictional evidence cards. Neither supplies an individual prognosis.

| Feature | Card A | Card B |
|---|---|---|
| Population | Adults with metastatic cancer after several treatments | Adults with operable cancer starting a defined treatment sequence |
| Design | One treated group | Random assignment to two strategies |
| Reported result | Some measurable tumors shrank | Fewer recurrences or deaths by a stated time with one strategy |
| Question left open | How does the treatment compare with an alternative, and how durable is the response? | Does starting only the last component after surgery provide the same benefit? |

Card A can establish observed activity under its response definition. Tumor shrinkage matters, but it does not by itself establish longer survival, better quality of life, or prevention of recurrence after surgery.

Card B can support a comparative conclusion about its assigned sequence and measured endpoint, subject to the trial's methods and uncertainty. It still cannot isolate an unrandomized component of the sequence. Strong evidence for one question can leave another question unanswered. [FDA: defining the treatment-effect question](https://www.fda.gov/media/148473/download).

## A subgroup result needs another question

A **subgroup** is a smaller category within a study, such as participants with a baseline marker. Suppose a fictional subgroup has a [hazard ratio (HR)](/wiki/education/concepts/evidence-and-statistics/effect-measures/hazard-ratio) of 0.70, with a 95% confidence interval from 0.35 to 1.40, for recurrence or death from randomization. The estimate favors the new strategy, but the interval includes substantially lower hazard, equal hazard, and higher hazard. It is imprecise evidence, not proof of no effect.

Now suppose an article labels the effect “statistically significant” in marker-positive participants and “not significant” in marker-negative participants. Those labels alone do not demonstrate different treatment effects. That requires a direct comparison of effects, often called an **interaction test**. Ask whether the subgroup was defined before treatment, the question was planned, and many subgroup comparisons were examined. A surprising result is more credible when supported by a coherent prior hypothesis and further evidence. [Sun and colleagues: evaluating subgroup claims](https://www.bmj.com/content/340/bmj.c117.long).

Groups defined by response after treatment raise another problem. Treatment and underlying biology both affect who enters those groups. Better outcomes among responders do not isolate the benefit of an additional treatment given later.

## A test result is not yet a treatment strategy

A marker may reliably measure something and identify people with different outcomes. That establishes different evidence from testing whether changing care based on the marker helps. Even a negative result associated with favorable outcomes does not, by itself, establish that another treatment can safely be omitted.

For earlier detection, ask whether the study measured a benefit from the earlier action. [Lead-time bias](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/lead-time-bias) can increase measured survival from detection without changing the time of death. The starting point matters again.

## Check a calculator before its number

A calculator can make uncertain inputs look settled. Keep this record beside its output:

- **Identity:** exact model, software version and any recalibration; a familiar name is insufficient.
- **Inputs:** required values, units, definitions, specimen dates and the model's documented handling of missing values. Unknown is not automatically negative.
- **Setting:** treatment era, received treatments and intended population. Older treatment context needs an applicability check.
- **Question:** [endpoint](/wiki/education/concepts/evidence-and-statistics/endpoints/survival-endpoints), time origin and prediction horizon.
- **Validation:** development and separate evaluation populations, including relevant treatment context. **Calibration** asks whether predicted probabilities agree with observed outcomes; ranking people well is a different property.

[TRIPOD+AI](https://doi.org/10.1136/bmj-2023-078378) describes the reporting needed to inspect prediction models. It covers regression and machine-learning methods. A checklist or published calculator is not proof of usefulness for every setting. Do not adjust its output by multiplying unrelated prognostic hazard ratios or adding benefits from other trials.

## Keep the sample on the right clock

A pretreatment biopsy, an on-treatment sample and a surgical specimen represent different moments. Preserve the actual tissue, assay and treatment timing; one cannot automatically assign a stratum defined using another.

A **landmark analysis** defines a later time and follows eligible people from there. For a recurrence-free landmark, people with an earlier recurrence are excluded. The result concerns those who reached that point, not everyone enrolled initially. A “last available sample during year one” also differs from a uniform early postoperative draw. [Anderson, Cain and Gelber: time-dependent response comparisons](https://doi.org/10.1200/JCO.1983.1.11.710).

## Bring harms into the same comparison

Compare absolute harm frequencies, severity and observation periods. Check symptoms, discontinuation and quality of life. An omitted harm is not proven absent; longer follow-up may reveal later effects. [CONSORT 2025](https://www.bmj.com/content/389/bmj-2024-081123).

Results from different populations cannot simply be added to create a combined benefit estimate.

## What can go wrong at this step

- **“The interval includes no effect, so the treatments are equivalent.”** Equivalence needs its own design and limits. An imprecise result leaves several effects unresolved.
- **“The estimate is precise, so it is true.”** Precision does not account for every bias or untested assumption.
- **“This marker predicts outcome, so it selects the helpful treatment.”** A prognostic association does not establish a treatment-effect difference or clinical utility.
- **“This population resembles mine, so this action was tested.”** Similarity matters, but the intervention and comparator must match too.

## Try it

A fictional cohort finds favorable five-year outcomes after a negative blood test. Everyone received standard treatment, and the study did not assign care based on the result. A headline says the test proves treatment can be stopped. What is missing?

**Answer:** A comparison of the proposed treatment strategy after that result. The cohort can describe an association in treated people. It does not test the safety or benefit of stopping treatment. You also need test timing, event definition, precision, missing follow-up, and the population to interpret the association.

**Calculator card:** A fictional model requires a residual-tissue marker after surgery. Only a pretreatment biopsy result is available. Can the reader substitute it?

**Answer:** Check the specified input and missing-value rules. An earlier specimen does not establish the required postoperative value; an improvised hazard-ratio adjustment cannot fix that mismatch.

## Explain it back

Finish: “The study supports ___ in ___. It does not directly test ___. The main uncertainty is ___.”

**One answer:** “The cohort supports an association between a negative test and favorable outcomes among people receiving standard treatment. It does not directly test stopping treatment. The effect of that change remains unknown.”

## Takeaway

**Match the conclusion to the tested comparison, and name the gap before proposing an action.**

**Next:** [Practice on cell-therapy evidence](/wiki/education/cellular-therapies/09-reading-cell-therapy-evidence), or apply the framework to [a test or vendor claim](/wiki/education/guides/judging-a-test-or-vendor-claim/index).

## Sources and scope

Source check: 2026-10-09. General evidence appraisal; expert and learner review pending. All evidence cards, studies, and numerical results are fictional. This lesson does not calculate a personal prognosis or choose treatment.

- [CONSORT 2025: reporting randomized trials, outcomes and harms](https://www.bmj.com/content/389/bmj-2024-081123).
- [FDA 2021, ICH E9(R1): treatment-effect questions and sensitivity analysis](https://www.fda.gov/media/148473/download).
- [Sun and colleagues 2010: credibility of subgroup analyses](https://www.bmj.com/content/340/bmj.c117.long).
- [Collins and colleagues 2024, TRIPOD+AI: reporting prediction-model inputs, outcomes and evaluation](https://doi.org/10.1136/bmj-2023-078378).
- [Cochrane Handbook, chapter 5: studies rather than reports as the unit of evidence](https://training.cochrane.org/handbook/current/chapter-05).
- [Anderson, Cain and Gelber 1983: survival comparisons using response observed during follow-up](https://doi.org/10.1200/JCO.1983.1.11.710).
