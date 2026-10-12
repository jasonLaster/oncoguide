---
title: "Ex vivo versus in vivo cell engineering"
type: "concept"
domain: "engineering-and-manufacturing/cell-manufacturing"
summary: "Ex vivo and in vivo cell engineering differ in whether cells receive their new instructions outside or inside the body."
glossary_anchor: "ex-vivo-vs-in-vivo-engineering"
aliases: ["ex vivo engineering", "in vivo engineering"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/central-dogma]]", "[[wiki/education/concepts/therapeutics/cell-therapies/car-anatomy]]"]
used_by: ["[[wiki/education/cellular-therapies/01-cell-therapy-primer]]","[[wiki/education/cellular-therapies/06-in-vivo-delivery]]","[[wiki/education/guides/engineered-cell-therapy/10-read-a-research-product-study]]","[[wiki/education/guides/engineered-cell-therapy/index]]","[[wiki/education/tools/in-vivo-car-t-learning-lab]]"]
sensitive: false
tags: ["education", "engineering-and-manufacturing"]
updated: "2026-10-10"
source_checked: "2026-10-10"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Ex vivo versus in vivo cell engineering

## In one sentence

Ex vivo and in vivo cell engineering differ in whether cells receive their new instructions outside or inside the body.

## The intuition

Imagine modifying a tool in a workshop, then taking it to the job, versus bringing instructions to the tool where it already works. **Ex vivo** means outside a living body; **in vivo** means inside it. The analogy describes location. A living cell can divide, die or change state, and an injected carrier cannot be assumed to find every intended cell.

**Before you start:** [DNA → RNA → protein](/wiki/education/concepts/biology-basics/genetics/central-dogma) separates instructions from products; [CAR anatomy](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy) describes a chimeric antigen receptor.

## How it works

In an ex vivo workflow, collected cells receive instructions under controlled laboratory conditions. They can be grown, sampled and tested before administration. In an in vivo workflow, a manufactured delivery product introduces instructions into cells after administration. The resulting engineered-cell population must be measured downstream.

| Question | Ex vivo engineering | In vivo engineering |
| --- | --- | --- |
| What is administered? | A manufactured cell population | A carrier with a defined payload |
| What can be tested before administration? | Sampled properties of the cell lot | Sampled properties of the carrier lot and activity in a relevant test system |
| What remains to measure afterward? | Cell survival, expansion, location and function | Which cells are engineered, then their survival, location and function |

Both routes require manufacturing. Removing patient-specific cell culture changes the workflow; it does not remove product identity, purity, stability or [potency](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/potency-assays) questions. Pre-administration testing is also sampled evidence, not inspection of every cell or proof of clinical benefit.

Location does not determine genetic fate. Either route can use temporary receptor instructions or a design that makes lasting DNA changes. Nor does location determine whose cells are used: [autologous versus allogeneic](/wiki/education/concepts/engineering-and-manufacturing/cell-manufacturing/autologous-vs-allogeneic-cell-therapy) is a separate distinction. A ready-made carrier can engineer a patient's own cells.

## Why it matters in cancer

The carrier's intended recipient and the receptor's intended target are separate. Engineering a T cell successfully does not show that it enters a tumor, recognizes the required antigen or kills safely. [Delivery targeting versus cancer targeting](/wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/delivery-targeting-vs-cancer-targeting) follows that next step.

## How it is measured

**Measurement card — engineering, expression and function**

- **Input and consumption:** An aliquot of the manufactured cells or carrier; afterward, blood or tissue at stated times. Cell testing consumes samples; tissue sampling has practical and clinical limits.
- **How and output:** Cell counts and [flow cytometry](/wiki/education/concepts/measurement/immune-monitoring/flow-cytometry) can report viable cells and receptor-positive fractions within identified cell types. Nucleic-acid assays measure delivered sequences; controlled [cytotoxicity assays](/wiki/education/concepts/measurement/immune-monitoring/functional-cytotoxicity-assays) measure target-cell effects.
- **Thresholds and failures:** Acceptance criteria are product- and method-specific. A missing compartment, poor recovery or changing denominator can distort comparisons.
- **Limits and validation:** A carrier dose is not the final engineered-cell count. Blood expression is not tumor function. A laboratory or animal demonstration supports its tested system; clinical benefit needs clinical evidence.

## Worked example

A fictional team engineers cells in a laboratory, infuses them into mice and reports tumor shrinkage “in vivo.” The treatment was tested inside an animal, but the cells were engineered ex vivo. Read what was administered before classifying the route.

## Common confusions

- **Off the shelf means donor cells:** It can instead describe an available carrier.
- **In vivo means nonintegrating:** Location does not specify the vector's genetic behavior.
- **No culture means no testing:** Carrier quality and downstream cell measurements still matter.

## Try it

A fictional carrier produces receptor expression in 60 of 200 sampled T cells. Is its administered dose “60 engineered cells,” and has tumor killing been demonstrated?

**Answer:** No to both. The observation is 30% of the sampled T cells expressing the receptor at that time. It is not a whole-body count or a killing result. Report the sample, denominator and time, then test function separately.

## Explain it back

“Engineering location tells me ___; cell source tells me ___; expression tells me ___.” One answer: “where instructions enter cells; whose cells they are; that a product is being made in the measured cells.”

## Takeaway

**Name the administered product, the engineering location and the measured downstream cell behavior separately.**

## Related concepts

- [Cell source: autologous and allogeneic](/wiki/education/concepts/engineering-and-manufacturing/cell-manufacturing/autologous-vs-allogeneic-cell-therapy)
- [Delivery and cancer targeting](/wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/delivery-targeting-vs-cancer-targeting)

## Sources and scope

Source check: October 10, 2026; expert and learner review pending. These sources illustrate specified workflows and testing principles, without recommending a platform.

- [Rurik et al., 2022](https://pubmed.ncbi.nlm.nih.gov/34990237/) — targeted RNA engineering in a mouse cardiac-injury model.
- [Hunter et al., 2025](https://pubmed.ncbi.nlm.nih.gov/40536974/) — human-cell experiments, humanized mice and monkeys; not a human treatment cohort.
- [FDA, January 2024: CAR T-cell product development](https://www.fda.gov/media/156896/download) — ex vivo cell-product quality and functional testing; not an in vivo carrier-specific release specification.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Cell therapies as living drugs](/wiki/education/cellular-therapies/01-cell-therapy-primer)
- [How to engineer T cells inside the body](/wiki/education/cellular-therapies/06-in-vivo-delivery)
- [Read a research-product study without losing the denominator](/wiki/education/guides/engineered-cell-therapy/10-read-a-research-product-study)
- [How engineered immune cells can attack a solid tumor](/wiki/education/guides/engineered-cell-therapy/index)
- [CAR-T learning lab](/wiki/education/tools/in-vivo-car-t-learning-lab)
<!-- END GENERATED USED IN -->
