---
title: "Dose and dose intensity"
type: "concept"
domain: "therapeutics/how-drugs-work"
summary: "Dose is the amount of a drug administered, while dose intensity is the amount delivered per unit of time for a named drug and measurement method."
glossary_anchor: "dose-and-dose-intensity"
aliases: ["dose intensity","dose-intensity","relative dose intensity","RDI","cumulative dose"]
level: "foundation"
prerequisites: ["[[wiki/education/concepts/therapeutics/chemotherapy/chemotherapy]]"]
used_by: ["[[wiki/education/guides/treating-early-tnbc/01-read-the-jobs-in-the-plan]]"]
sensitive: false
tags: ["education", "therapeutics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Dose and dose intensity

## In one sentence

Dose is the amount of a drug administered, while dose intensity is the amount delivered per unit of time for a named drug and measurement method.

## The intuition

Two people can receive the same number of packages, but one receives them over a month and the other over two months. Counting packages answers one question; counting packages per week answers another.

Medicines are more complicated than packages. Equal administered amounts can produce different concentrations in the body. The analogy separates amount from rate, rather than predicting biological effects.

## How it works

**Dose** names an administered amount. Specify the drug, formulation and whether the amount is per administration or per day. Milligrams, milligrams per kilogram and milligrams per square meter of body surface area are different ways to express it.

**Cumulative dose** adds the amounts administered over a defined course. **Dose intensity** also includes time: how much of a named medicine is delivered per unit of time. In chemotherapy research it is commonly expressed as mg/m²/week.

**Relative dose intensity (RDI)** divides delivered intensity by the intensity of a specified reference regimen. State the reference and calculation method. The result is dimensionless and is often shown as a percentage. Combining several drugs into an average also requires a declared method; unlike milligrams of different substances, normalized ratios can be summarized under a defined convention.

[Dose-dense scheduling](/wiki/education/concepts/therapeutics/chemotherapy/dose-dense-scheduling) usually changes interval. Dose reduction changes amount. A delay can reduce delivered intensity even if the eventual cumulative amount is unchanged. Omission changes the cumulative amount as well.

[Pharmacokinetics](/wiki/education/concepts/therapeutics/how-drugs-work/pharmacokinetics-and-half-life) asks another question: what concentration reaches a compartment over time? Organ function, metabolism, route and interactions can make the same dose produce different exposure. Neither dose intensity nor exposure is itself a clinical outcome.

## Why it matters in cancer

These measures help readers compare protocol delivery with actual administration. They can clarify whether a study changed amount, timing, sequence or several features together.

A higher intensity is not automatically a better treatment. Benefit and harm depend on the regimen and population. Observational comparisons also face [confounding](/wiki/education/concepts/evidence-and-statistics/study-design/observational-studies-and-confounding): illness or toxicity can cause reductions and independently predict outcomes. A lower delivered intensity does not, by itself, establish why an outcome occurred.

## How it is measured

Use administration records, normalized doses and an explicit observation window. The window's start and end conventions matter, especially for the final cycle. Report the method before comparing percentages across papers.

| Quantity | Example units | Necessary context |
|---|---|---|
| Dose per administration | mg or mg/m² | Named medicine and formulation |
| Cumulative dose | mg or mg/m² | Which administrations were included |
| Dose intensity | mg/m²/week | Time window and denominator convention |
| Relative dose intensity | Fraction or % | Reference regimen and calculation method |

A body-size-normalized dose is not a laboratory concentration. Nor can it be converted to a person's order from a teaching example.

## Common confusions

- **Dose versus dosage:** dosage includes amount and schedule, not merely amount.
- **Intensity versus cumulative amount:** including time changes the question.
- **RDI versus benefit probability:** a delivery ratio does not report the fraction of people helped.
- **Different medicines versus interchangeable amounts:** equal milligrams do not mean equivalent activity.

## Try it

For a fictional reporting exercise, Study A defines reference intensity as 10 units/week. Its defined delivered intensity is 8 units/week. What can you report?

**Answer:** RDI is 0.8, or 80%, relative to that reference and measurement window. The arbitrary units are for arithmetic only. They supply no drug dose, safety conclusion or personal prognosis.

## Explain it back

“To interpret intensity, I need the named ___, the amount and the ___.”

**One possible answer:** “Medicine; time window.”

## Related concepts

- [Therapeutic index](/wiki/education/concepts/therapeutics/how-drugs-work/therapeutic-index)
- [Dose-dense scheduling](/wiki/education/concepts/therapeutics/chemotherapy/dose-dense-scheduling)

## Sources and scope

Source-checked October 9, 2026; expert and learner review pending. Reading and reporting quantities; no patient dose calculation.

- [FDA final oncology dosage-optimization guidance, August 2024](https://www.fda.gov/media/164555/download) — dose versus dosage and exposure/activity/tolerability considerations; not a universal rule for all treatment modalities.
- [Alberto, 1995: dose-intensity definitions](https://pubmed.ncbi.nlm.nih.gov/7626852/) — drug amount per time, relative intensity and limitations of overinterpreting the measure.
- [Kim and colleagues, 1993](https://pubmed.ncbi.nlm.nih.gov/8471554/) — primary cisplatin scheduling study distinguishes planned and delivered intensity.
- [NCI: chemotherapy](https://www.cancer.gov/about-cancer/treatment/types/chemotherapy) — treatment cycles and clinical reasons delivery may change.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the jobs in the treatment plan](/wiki/education/guides/treating-early-tnbc/01-read-the-jobs-in-the-plan)
<!-- END GENERATED USED IN -->
