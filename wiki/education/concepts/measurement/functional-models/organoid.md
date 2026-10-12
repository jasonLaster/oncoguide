---
title: "Organoid: a small culture with selected tissue features"
type: "concept"
domain: "measurement/functional-models"
summary: "An organoid is a three-dimensional cell culture that self-organizes to reproduce selected structural or functional features of a tissue."
glossary_anchor: "organoid"
aliases: ["organoid", "organoids", "patient-derived organoid", "PDO"]
level: "foundation"
prerequisites: ["[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]"]
used_by: ["[[wiki/education/guides/predicting-response-before-treating/index]]","[[wiki/education/modeling-tumor-response/index]]","[[wiki/education/molecular-profiling/05-functional-drug-response]]"]
sensitive: false
tags: ["education", "functional-models"]
updated: "2026-10-10"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Organoid: a small culture with selected tissue features

## In one sentence

An organoid is a three-dimensional cell culture that self-organizes to reproduce selected structural or functional features of a tissue.

## The intuition

Think of a small workshop that preserves some of a factory's layout. You can test what its workers do, but it lacks the factory's delivery network and surrounding town. An organoid similarly keeps useful tissue features without becoming a miniature patient. “Three-dimensional” describes the culture's arrangement, not how completely it represents the body.

## How it works

Cells are grown under conditions that support organization, often within a gel-like matrix. The medium supplies nutrients and signals. Researchers may begin with normal adult tissue, tumor tissue or stem cells. A patient-derived tumor organoid is one member of this broader family.

The starting material and growth conditions select which cells survive. Some cancer populations expand well; others disappear. Normal epithelial cells can also grow. Comparing identity and relevant molecular features with the source specimen helps establish what the culture contains.

Many conventional epithelial organoids lack the original immune and supporting-cell populations. Specialized methods can retain selected neighbors or add them in a [co-culture](/wiki/education/concepts/measurement/functional-models/co-culture), a culture containing more than one cell population. That capability must be demonstrated for the actual experiment. The word organoid alone does not establish immune competence.

A culture's matrix, size, oxygen supply and treatment duration can affect its response. Expansion and repeated transfer into fresh cultures, called **passaging**, can change its composition. Record those conditions alongside the result.

## Why it matters in cancer

Organoids can provide material for repeated, controlled experiments on tumor biology and drug response. They can help test a proposed mechanism. They do not reproduce human drug absorption, organ toxicity or every site of disease.

## Worked example

A fictional tumor organoid contains verified malignant epithelial cells but no detectable T cells. It can support a direct tumor-cell drug experiment. It cannot answer whether a checkpoint-blocking antibody releases a useful T-cell response. Adding matched immune cells would create a new experiment whose composition and controls need checking.

## Common confusions

- A rounded **spheroid**, an aggregate of cells, is not automatically an organoid with tissue-like organization. Terminology varies; inspect the method.
- A patient's cells do not make every culture component patient-matched.
- A successful culture need not contain every original cancer population.
- A viability change is not automatically tumor-cell killing or clinical benefit.

## How it is measured

| Assay-card field | What to retain |
|---|---|
| Measures | The selected structure, molecular feature or response in a characterized culture; the organoid is a model, rather than one universal assay |
| How | Establish culture under a stated matrix and medium; check identity and composition; apply the defined intervention and measure its endpoint |
| Input and tissue cost | Viable starting material under the method's protocol; derivation and experiments consume material |
| Identity and composition | Evidence of malignancy, retained populations, matrix, medium and passage |
| Output and units | The chosen readout, such as cell counts, a death-marker fraction or a molecular signal; preserve its units and normalization |
| Controls and thresholds | Defined separately for the experiment, population and intended use; no universal organoid-response cutoff |
| Failure modes | Failed establishment, normal-cell overgrowth, lost populations, altered composition or an inadequate exposure/readout |
| What it cannot tell you | Whether every source-tumor population was retained, a whole-body drug response or patient benefit from the result alone |
| Validation tier | Model characterization and intended-use evidence; the culture label establishes no regulatory status or clinical authorization |

## Try it

A fictional tumor organoid grows well and shows a lower metabolic signal after treatment. Its immune cells disappeared during culture. Can the team call this demonstrated immune-mediated tumor killing?

**Answer:** No. Check the current cells and what supplied the signal. A metabolic decrease does not establish death, and the missing immune cells leave the proposed interaction untested. A suitable co-culture would be a different experiment needing its own controls.

## Explain it back

“This organoid retains ___. The experiment measured ___. It leaves ___ outside its scope.”

One answer: “selected verified tumor cells; a metabolic response at the tested exposure; the missing immune interaction and clinical benefit.”

## Takeaway

**Describe the organoid's current contents and measured endpoint before assigning it a biological or clinical claim.**

## Related concepts

- [Tumor heterogeneity](/wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity)
- [Ex vivo drug screening](/wiki/education/concepts/measurement/functional-models/ex-vivo-drug-screen)
- [Controlled perturbation](/wiki/education/concepts/evidence-and-statistics/study-design/perturbation-and-controls)

## Sources and scope

Source check: October 9, 2026. General model teaching; expert and learner review remain pending.

Assay-card and practice completion checked October 10, 2026. The methods below concern their stated preparations; immune retention is method-specific.

- [Sachs et al., 2018: primary breast-cancer organoid biobank](https://doi.org/10.1016/j.cell.2017.11.010).
- [Neal et al., 2018: selected organoid systems retaining tumor immune components](https://pubmed.ncbi.nlm.nih.gov/30550791/).
- [Dijkstra et al., 2018: matched organoid–lymphocyte experiments in colorectal and lung cancers](https://pubmed.ncbi.nlm.nih.gov/30100188/) — laboratory tumor recognition does not establish clinical utility in another setting.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Understand what a tumor model can predict](/wiki/education/guides/predicting-response-before-treating/index)
- [Choose a tumor model for the question](/wiki/education/modeling-tumor-response/index)
- [Test a mechanism in a living model](/wiki/education/molecular-profiling/05-functional-drug-response)
<!-- END GENERATED USED IN -->
