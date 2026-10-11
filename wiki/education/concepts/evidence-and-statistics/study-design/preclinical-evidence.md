---
title: "Preclinical evidence"
type: concept
domain: evidence-and-statistics/study-design
summary: "Preclinical evidence tests biological effects, mechanisms or safety in experimental systems before or alongside studies of an intervention in people."
glossary_anchor: preclinical-evidence
aliases: [preclinical evidence, preclinical study, animal study, in vitro, in vivo]
level: foundation
prerequisites: ["[[wiki/education/concepts/evidence-and-statistics/study-design/perturbation-and-controls]]"]
used_by: ["[[wiki/education/guides/engineered-cell-therapy/02-choosing-a-target]]","[[wiki/education/guides/judging-a-test-or-vendor-claim/02-read-the-validation]]","[[wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty]]","[[wiki/education/local-treatment-modalities/03-overlap-and-sequencing]]"]
sensitive: false
tags: [education, evidence, experimental-models]
updated: 2026-10-10
source_checked: 2026-10-10
reviewed: pending
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Preclinical evidence

## In one sentence

Preclinical evidence tests biological effects, mechanisms or safety in experimental systems before or alongside studies of an intervention in people.

## The intuition

A flight simulator can show whether a design behaves sensibly under specified conditions. It cannot make every possible flight safe. Biological models have a similar job: make a question testable while leaving some parts of the real situation out.

The useful question is, “What did this model let the researchers test?” That is more informative than calling all laboratory work weak or treating a successful experiment as proof of patient benefit.

## How it works

**In vitro** means outside a living organism, such as cells in a dish. **In vivo** means in a living organism; in a preclinical study, this may be a mouse. “In vivo” by itself does not mean “tested in patients.” Human tissue studied outside the body can also support a preclinical intervention claim.

Model choice determines which mechanisms can be examined. A defined [cell line](/wiki/education/concepts/measurement/functional-models/cell-lines) can test a direct cellular effect. A living immune-intact mouse model can ask some questions about interactions among tumor, immune cells and other tissues. Neither recreates a person's full cancer, immune history and treatment context.

Specify what changed, the [controls](/wiki/education/concepts/evidence-and-statistics/study-design/perturbation-and-controls), the measured outcome and the independent experimental unit. [Random allocation and blinded assessment](/wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization) can strengthen an animal experiment. Reporting timing, doses, exclusions and all outcomes helps others evaluate and repeat it.

### Count the units that answer the question

A **biological unit** is what you want to draw conclusions about, such as donors. An **experimental unit** receives an independently assigned intervention; an **observational unit** is what gets measured. These can differ: if treatment is assigned to a cage, its animals may be subsamples; many cells measured in a treated mouse do not create many independent mice.

“Biological replicate” usually means independently obtained biological material; “technical replicate” usually means repeated processing or measurement of the same material. The labels are inconsistent across papers, so inspect the actual hierarchy. Wells may be experimental units for a within-culture question, while donors determine breadth across human samples. Independent runs test reproducibility under repeated conditions without adding new donor identities. Treating correlated subsamples as independent is **pseudoreplication**. [Lazic and colleagues, 2018](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.2005282).

**Fictional design.** Wells are randomised within donor, treated separately and assumed not to affect one another. The balanced allocation below illustrates this design; it is not a sample-size recommendation.

<img src="./images/preclinical-donor-well-cells-v1-light.svg" alt="Two stacked donor panels contain twelve distinct wells: donor A has A1–A6 and donor B has B1–B6. In each panel, wells 1–3 are controls and 4–6 are treated. Each well contains only its own measured-cell group; cell counts are not supplied. Under within-donor random allocation, separate treatment and no mutual influence, wells receive the assignment while analysis retains donor nesting. Twelve wells remain two donor sources; no effect quantities are shown." width="600" height="1740" data-theme-pair>

*Two fictional donor sources supply twelve wells, with three control and three treated wells per donor. Cells stay nested in their own wells; arrows show sampling, not effects. Under the stated allocation assumptions, wells support this within-culture comparison. They do not add donor breadth, and cell counts are unspecified.*

If treatment were assigned to each donor preparation before splitting, the wells would be subsamples. Extra measured cells would not add independently assigned wells.

```mermaid
flowchart TD
  A["Model and question"] --> B["Perturbation<br/>and controls"]
  B --> C["Measurement<br/>and replication"]
  C --> D["Human exposure<br/>and safety questions"]
  D --> E["Clinical benefits<br/>and harms"]
```

*Each step asks additional questions; a model's successful result does not establish a successful clinical treatment.*

## A worked fictional example

Researchers treat one tumor in each mouse and observe slower growth of another untreated tumor. If the comparison and controls are appropriate, the experiment can support a distant effect in that model.

They then remove a particular immune-cell population, and the distant effect diminishes. That adds evidence that those cells contribute under the tested conditions. It does not establish that people with a particular cancer will benefit from the same combination.

Translation adds further questions: can a relevant exposure be achieved safely, does the human target behave similarly, and do comparative clinical outcomes support the intervention? A mechanism can be real while its clinical implementation fails.

## Why it matters in cancer

Preclinical work can explain resistance, motivate combinations and identify hazards. A graph of tumor size in mice is not a patient survival curve. Nor is a large laboratory effect a reliable estimate of clinical benefit.

## The experiment record

Keep model and specimen identities, treatment and control conditions, independently assigned units and subsamples, exclusions, timing, readout and uncertainty. Output might be a cell count, tumor volume in cubic millimeters or a named assay signal; these units are not interchangeable. No model-effect threshold universally establishes patient benefit.

## Common confusions

- “Human-derived” describes the material's origin, not validation of a treatment in people.
- An immune effect cannot be inferred from a model that lacks the relevant immune components.
- A reproducible biological signal can still depend on an exposure that is impractical or harmful clinically.
- Transparent reporting enables appraisal; completing a checklist does not prove the conclusion.
- Regulatory safety studies and exploratory academic experiments have different purposes and requirements.

## Try it

A fictional laboratory makes six wells from each of two donors and measures thousands of cells. Has it studied twelve independent donors?

**Answer:** No: two donor identities remain. Report donors, independently treated units and measured cells separately. Wells can help test a within-preparation effect, with the design and analysis accounting for nesting; they cannot supply donor diversity.

## Explain it back

“More measurements improve ___, but do not automatically add ___.” One answer: “description of the sampled material; independent biological units.”

## Takeaway

**Name the model, comparison and independent unit before translating the result.**

## Related concepts

- [Patient-derived xenografts](/wiki/education/concepts/measurement/functional-models/patient-derived-xenograft)
- [Organoids](/wiki/education/concepts/measurement/functional-models/organoid)
- [Evaluating virtual-cell models](/wiki/education/concepts/measurement/computational-analysis/virtual-cell-model)
- [Trial phases and randomization](/wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization)

## Sources and scope

Source check: October 10, 2026. The mouse experiment is fictional. No laboratory protocol or clinical benefit estimate is implied. Expert and learner review remain pending.

- [FDA: preclinical research](https://www.fda.gov/patients/drug-development-process/step-2-preclinical-research) — safety evaluation in drug development.
- [ARRIVE 2.0 reporting guidelines](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3000410) — animal study design, sample size, randomization, blinding and reporting.
- [ARRIVE explanation and elaboration](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3000411) — experimental units and interpretation.

- [Lazic, Clarke-Williams and Munafò, 2018: what exactly is N?](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.2005282) — biological, experimental and observational units, including culture experiments.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Choose a target with a usable safety window](/wiki/education/guides/engineered-cell-therapy/02-choosing-a-target)
- [Read the validation behind the claim](/wiki/education/guides/judging-a-test-or-vendor-claim/02-read-the-validation)
- [Check applicability and uncertainty](/wiki/education/guides/reading-cancer-evidence/03-check-applicability-and-uncertainty)
- [Ask what a combination trial actually proved](/wiki/education/local-treatment-modalities/03-overlap-and-sequencing)
<!-- END GENERATED USED IN -->
