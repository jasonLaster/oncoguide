---
title: "Single-cell mass assays: weighing growth in fluid"
type: "concept"
domain: "measurement/functional-models"
summary: "Single-cell mass assays measure individual cells’ mass-related properties, sometimes repeatedly over time, to study growth or responses under defined experimental conditions."
glossary_anchor: "single-cell-mass-assays"
aliases:
  - "single-cell mass assay"
  - "single-cell mass assays"
  - "suspended microchannel resonator"
  - "SMR"
  - "mass accumulation rate"
level: "intermediate"
prerequisites:
  - "[[wiki/education/concepts/biology-basics/cells/cell-cycle]]"
  - "[[wiki/education/concepts/evidence-and-statistics/study-design/perturbation-and-controls]]"
used_by: ["[[wiki/education/guides/from-variant-to-drug/07-reading-a-functional-experiment]]","[[wiki/education/guides/predicting-response-before-treating/02-check-the-experiment]]","[[wiki/education/guides/predicting-response-before-treating/index]]","[[wiki/education/molecular-profiling/05-functional-drug-response]]"]
sensitive: false
tags:
  - "education"
  - "measurement"
  - "functional-models"
updated: "2026-10-10"
source_checked: "2026-10-10"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Single-cell mass assays: weighing growth in fluid

## In one sentence

Single-cell mass assays measure individual cells’ mass-related properties, sometimes repeatedly over time, to study growth or responses under defined experimental conditions.

## The intuition

Something weighed in water appears lighter because it displaces water. A **buoyant-mass** assay likewise measures a cell relative to the fluid it displaces. This helps us understand the measurement, but cells are changing mixtures of water and other material. Buoyant mass is not simply cell diameter, dry material or a count of divisions.

## How it works

One approach uses a **suspended microchannel resonator (SMR)**: a tiny fluid-filled channel inside a vibrating beam. As a cell passes through, its buoyant mass changes the beam's vibration frequency. Calibration converts the shift into mass units. Conceptually, buoyant mass equals the cell's total mass minus the mass of displaced fluid; it depends on cell volume and the densities of cell and fluid. [Godin et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC2862099/).

Repeated measurements of the same cell can estimate **mass accumulation rate (MAR)**, the slope of its mass over time. Some instruments recirculate a cell; others use successive sensors along a channel. The time interval, fluid conditions and tracking method determine what growth was observed. Cermak and colleagues developed a serial-sensor approach to increase throughput. [Primary method](https://pmc.ncbi.nlm.nih.gov/articles/PMC5064867/).

After a defined drug exposure, researchers can compare mass or MAR with appropriate controls. Stevens and colleagues studied short-term changes in selected cancer models and leukemia samples. Their experiments support investigation of a functional readout; they do not establish universal patient prediction. A cell may accumulate mass more slowly while remaining alive. An independent [cell-death or killing measurement](/wiki/education/concepts/measurement/immune-monitoring/functional-cytotoxicity-assays) answers a different question. [Primary experiments](https://pmc.ncbi.nlm.nih.gov/articles/PMC5142231/).

## Why it matters in cancer

A rapid physical readout can reveal responses before a large change in cell number is visible. Single-cell measurements also show variation concealed by a culture average. Interpretation still depends on which cells were measured. A mixed sample needs a validated way to attribute results to tumor or other populations. The mass sensor itself supplies neither immune cells nor tumor-specific immune recognition; an immune [co-culture](./co-culture) is a separate model design.

## Assay card

| Field | What to retain |
|---|---|
| Measures / how | Calibrated mass-related signal; repeated tracked reads estimate a rate |
| Input and consumption | Viable cells compatible with channel handling; preparation and drug exposure use finite material. Recovery for later assays is method-specific |
| Output and units | Buoyant mass, often picograms; MAR, often picograms/hour; normalized rates may have units of inverse time |
| Thresholds | Instrument calibration, tracking and control criteria; no universal MAR cutoff means patient sensitivity |
| Failure modes | Clumps, incorrect identity, loss during preparation, poor tracking, fluid-density or temperature changes |
| Cannot tell alone | Dry mass without additional measurement/assumptions, a death mechanism, immune specificity or clinical benefit |
| Validation context | Distinguish physical measurement performance, reproducible drug-response association and validated clinical use for a defined population |

## Common confusions

- **Mass versus size:** cells of similar volume can have different mass and density.
- **Buoyant versus dry mass:** fluid displacement matters; these quantities are not interchangeable.
- **Slower accumulation versus death:** a smaller positive MAR still describes accumulation during the measured interval.
- **Short response versus durable response:** recovery, later killing or resistance require longer or complementary observations.
- **Many cells versus many patients:** measuring hundreds of cells from one specimen does not create hundreds of independent patient observations.

## Try it

In a fictional assay, comparable viable tumor cells accumulate buoyant mass at 2 picograms/hour in control conditions and 0.5 picograms/hour after treatment. Someone reports “75% of tumor cells were killed.” Is that supported?

**Answer:** No. The measured average rate is 75% lower: `(2 − 0.5)/2`. That is a rate comparison, not a killed-cell fraction. Direct survival/death measurements, tracked populations and an appropriate observation window are needed.

## Explain it back

“Mass asks ___; mass accumulation asks ___; killing asks ___.”

One answer: “a physical quantity at a moment; its change per unit time; whether identified cells died.”

## Takeaway

**Name the mass quantity, time interval and cell population before interpreting a response.**

## Related concepts

- [Cell lines](./cell-lines).
- [Ex vivo drug screen](./ex-vivo-drug-screen).
- [Analytical validity, clinical validity and utility](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility).

## Sources and scope

Source check: October 10, 2026. Primary physical methods and bounded preclinical/sample experiments, rather than a current commercial-capability assessment. Values in the exercise are invented. Expert and learner review remain pending.

- [Godin et al., 2010: Using buoyant mass to measure the growth of single cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC2862099/).
- [Cermak et al., 2016: High-throughput measurement of single-cell growth rates using serial microfluidic mass sensor arrays](https://pmc.ncbi.nlm.nih.gov/articles/PMC5064867/).
- [Stevens et al., 2016: Drug sensitivity of single cancer cells is predicted by changes in mass accumulation rate](https://pmc.ncbi.nlm.nih.gov/articles/PMC5142231/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Reading a functional experiment](/wiki/education/guides/from-variant-to-drug/07-reading-a-functional-experiment)
- [Check what the experiment actually tests](/wiki/education/guides/predicting-response-before-treating/02-check-the-experiment)
- [Understand what a tumor model can predict](/wiki/education/guides/predicting-response-before-treating/index)
- [Test a mechanism in a living model](/wiki/education/molecular-profiling/05-functional-drug-response)
<!-- END GENERATED USED IN -->
