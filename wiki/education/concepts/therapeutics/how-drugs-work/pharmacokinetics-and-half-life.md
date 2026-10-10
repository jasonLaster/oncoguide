---
title: "Pharmacokinetics and half-life"
type: "concept"
domain: "therapeutics/how-drugs-work"
summary: "Pharmacokinetics describes a product's concentration over time as the body handles it, while half-life describes a specified concentration decline under stated conditions."
glossary_anchor: "pharmacokinetics-and-half-life"
aliases: ["pharmacokinetics","PK","half-life","clearance","Cmax","concentration–time AUC","drug exposure"]
level: "intermediate"
prerequisites: []
used_by: ["[[wiki/education/guides/accessing-experimental-therapy/03-build-the-readiness-picture]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/02-read-the-validation]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/03-connect-evidence-to-a-decision]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/index]]","[[wiki/education/targeted-therapy-modalities/02-timing]]"]
sensitive: false
tags: ["education", "therapeutics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Pharmacokinetics and half-life

## In one sentence

Pharmacokinetics describes a product's concentration over time as the body handles it, while half-life describes a specified concentration decline under stated conditions.

## The intuition

A dose is what enters a system; exposure is what remains in a particular place over time. Imagine pouring dye into flowing water. Mixing, transport and removal determine what a sample contains later.

The body is more complicated than one stream. Drugs can bind proteins, enter tissues, generate active breakdown products or follow several clearance routes. One blood sample cannot describe all those compartments.

## How it works

**Pharmacokinetics (PK)** studies absorption, distribution, metabolism and excretion. **Dose** is the amount administered. **Exposure** is the concentration–time history of a named substance in a named place. The same dose can produce different exposure because of route, organ function, interactions or product properties.

**Half-life** is the time associated with a halving of concentration in a specified phase or model. Many medicines have an initial distribution phase and a different terminal decline. The reported terminal half-life may not be the best summary of accumulation or relevant activity.

**Clearance** describes removal of a substance relative to its concentration, commonly in volume per time. A simple exponential decline can be a useful model, but nonlinear handling or changing physiology can invalidate a constant half-life assumption.

**Pharmacodynamics** concerns biological effects. Exposure can fall while a downstream effect or injury persists. Conversely, detectable material does not guarantee productive [target engagement](/wiki/education/concepts/therapeutics/how-drugs-work/chemical-probe-vs-drug-and-target-engagement). These are reasons to measure exposure and effects separately, rather than choosing treatment timing from one number.

## How it is measured

Serial samples and validated chemical or biological assays generate a concentration–time curve. Specify the analyte: parent drug, active metabolite, unconjugated payload or another product component. Also specify whether concentration is total or unbound when that distinction matters.

| Quantity | Typical units | What it describes |
|---|---|---|
| Concentration | ng/mL or micromolar | Amount of a named substance per volume at a time |
| Maximum concentration, Cmax | Same concentration units | Peak exposure in the measured profile |
| Area under the concentration–time curve, AUC | ng·hour/mL, for example | Integrated exposure over a specified interval |
| Half-life | Hours or days | Concentration decline in a specified phase/model |
| Clearance | mL/minute or L/hour | Removal relative to concentration |

A concentration–time AUC must name its interval and carries concentration × time units. It is different from the dimensionless [ROC area used to assess prediction ranking](/wiki/education/concepts/evidence-and-statistics/tests-and-prediction/auc-and-c-index). A plasma measurement is not automatically an intracellular tumor concentration. For [antibody-drug conjugates](/wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate), conjugated antibody, total antibody and free payload can have different profiles. One component's persistence cannot stand in for the others.

## Why it matters in cancer

Development teams use exposure alongside benefit and harm to study appropriate dosing. A culture experiment's concentration and duration should not be converted directly into a person's dose. Delivery, protein binding, metabolism and normal-tissue exposure differ.

Living cell therapies can expand or persist, and radiopharmaceuticals add radioactive decay to biological clearance. A freely circulating drug's half-life does not supply a universal clock for these modalities.

## Worked example

In a fictional, single-compartment model, concentration starts at 100 ng/mL after input has stopped. Assume a constant four-hour half-life: it is 50 ng/mL after four hours and 25 ng/mL after eight.

This arithmetic describes the model. It does not show when effects end, when a drug is safe to combine, or what a protocol's washout period should be.

## Common confusions

- Half-life does not mean “completely gone” after one interval.
- A longer half-life is not automatically better tumor delivery.
- Dose and exposure are different quantities.
- Drug elimination and physical radioactive decay are different clocks.

## Try it

Under that fictional model, what remains after 12 hours? Can the answer determine a clinical washout?

**Answer:** 12.5 ng/mL, after three halvings. No clinical washout follows from this toy model. The actual product, metabolites, effects, safety evidence and protocol rules determine that question.

## Related concepts

[Chemical probes and target engagement](/wiki/education/concepts/therapeutics/how-drugs-work/chemical-probe-vs-drug-and-target-engagement) distinguishes exposure from mechanism. [Radioligand therapy](/wiki/treatment/therapeutics/radioligand-therapy) distinguishes biological delivery from radiation effects.

## Sources and scope

Source check: October 9, 2026. Numbers are fictional arithmetic under an explicit simplified model, not dosing instructions. Expert and learner review pending.

- [FDA, December 2016: clinical pharmacology labeling guidance](https://www.fda.gov/media/74346/download) — exposure measures, clearance and effective versus terminal half-life.
- [FDA, 2024: clinical pharmacology of antibody-drug conjugates](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-pharmacology-considerations-antibody-drug-conjugates-guidance-industry) — product components and exposure–response; scope is oncology conjugates with cytotoxic small-molecule payloads.
- [FDA: therapeutic radiopharmaceutical development](https://www.fda.gov/media/129547/download) — biodistribution and radiation-dose assessment.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Build the readiness picture](/wiki/education/guides/accessing-experimental-therapy/03-build-the-readiness-picture)
- [Read the validation behind the claim](/wiki/education/guides/judging-a-test-or-vendor-claim/02-read-the-validation)
- [Connect evidence to a decision](/wiki/education/guides/judging-a-test-or-vendor-claim/03-connect-evidence-to-a-decision)
- [Judge a test or company claim](/wiki/education/guides/judging-a-test-or-vendor-claim/index)
- [Follow delivery, exposure, and the treatment clock](/wiki/education/targeted-therapy-modalities/02-timing)
<!-- END GENERATED USED IN -->
