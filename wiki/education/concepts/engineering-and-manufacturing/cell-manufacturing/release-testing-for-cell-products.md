---
title: "Release testing for cell products: separate quality questions"
type: "concept"
domain: "engineering-and-manufacturing/cell-manufacturing"
summary: "Release testing for cell products assesses specified attributes of a particular cell-product lot before its quality disposition."
glossary_anchor: "release-testing-for-cell-products"
aliases: ["cell-product release testing", "cell therapy release testing", "release testing for cell products"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/batch-release]]", "[[wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/potency-assays]]"]
used_by: ["[[wiki/education/guides/engineered-cell-therapy/04-in-vivo-delivery]]","[[wiki/education/guides/engineered-cell-therapy/index]]"]
sensitive: false
tags: ["education", "engineering-and-manufacturing"]
updated: "2026-11-07"
source_checked: "2026-11-07"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Release testing for cell products: separate quality questions

## In one sentence

Release testing for cell products assesses specified attributes of a particular cell-product lot before its quality disposition.

## The intuition

A team can have the correct jerseys, enough people and an apparently healthy roster without demonstrating the skill needed for its task. Those checks are useful, but they ask different questions.

For a cell product, the analogy separates identity, quantity, viability and function. It does not imply that cells behave like a coordinated team in a patient. Laboratory quality and clinical performance have different evidence.

## How it works

Begin with the specified product and lot. [Chain of identity and custody](/wiki/education/concepts/engineering-and-manufacturing/cell-manufacturing/chain-of-identity-and-custody) connects source, processing, recipient and handoffs. A biological identity test alone cannot establish that a container belongs to the intended person.

**Identity** asks whether the intended cells or construct are present. **Purity** concerns unwanted cells or materials. **Viability** concerns the live fraction under a defined method. These measurements can overlap in an assay, but they are not interchangeable.

[Potency](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/potency-assays) assesses biological activity relevant to the intended action. Receptor expression can contribute evidence; its relation to function needs support. The United States Food and Drug Administration (FDA) potency guidance does not supply universal acceptance criteria for all cell products.

Microbiological safety checks address relevant contamination risks, such as bacteria, mycoplasma or endotoxin. These are different targets, not alternative names for sterility. Living final products require suitable manufacturing controls; terminal sterilization that destroys the cells cannot be treated as an ordinary solution. The applicable test set depends on product, process and development stage.

**Some release results arrive after infusion.** The compendial sterility test is a culture that runs for about 14 days. For cells given fresh or soon after manufacture, FDA guidance recommends releasing on a negative Gram stain of the final product plus a no-growth result from an in-process sterility sample taken 48 to 72 hours before harvest. The final-product culture keeps running after the patient is treated; a positive result is reported to the investigator and FDA and guides that patient's care ([FDA gene-therapy CMC guidance, sterility under controls of critical steps (3.2.P.3.4)](https://www.fda.gov/media/113760/download)). A cryopreserved product can be held until its culture is complete, so read which results existed at release.

For cells engineered with an integrating vector, two genetic attributes join the package. **Vector copy number (VCN)** is the average number of vector integrations per cell, and FDA asks that it be reported per receptor-positive cell — per [chimeric antigen receptor (CAR)](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy)-positive cell for a CAR product — on each lot's certificate of analysis, because dividing by all cells hides risk in the modified ones. **Replication-competent virus testing** checks that no vector has regained the ability to copy itself, as described on the [lentiviral vector](/wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/lentiviral-vector) page ([FDA CAR T-cell guidance, vector copy number and vector testing sections](https://www.fda.gov/media/156896/download)).

Handling is part of the evidence. Cryopreservation, thawing and the interval before administration may change relevant attributes. Results should be interpreted at their actual sampling point, with supporting stability and handling data. A pre-freeze result is not automatically a post-thaw result.

```mermaid
%%{init: {"htmlLabels":false,"flowchart":{"htmlLabels":false,"padding":8,"nodeSpacing":25}}}%%
flowchart TB
  A["Identity and purity<br/>Viability and amount<br/>Activity, safety, handling"] --> B["Lot review"]
  B --> C["Quality disposition"]
```

*Complementary checks support the lot review. No individual test establishes the whole release package or clinical benefit.*

## Why it matters in cancer

An engineered immune-cell product may contain live cells that express a receptor but lack adequate relevant activity. Conversely, a strong activity result cannot erase a contamination or identity problem. Cell [release](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/batch-release) requires the applicable package, rather than selecting the most reassuring result.

## How it is measured

| Attribute | Illustrative output | Important boundary |
|---|---|---|
| Cellular identity or composition | Defined populations by flow cytometry | State the gating and denominator |
| Viability and amount | Live fraction and a specified cell count | Live cells are not necessarily functional cells |
| Activity | Product-relevant assay or justified assay matrix | Assay conditions do not reproduce a whole patient |
| Safety | Results for named contaminants | One target does not cover every hazard; a final sterility culture may still be running at infusion |
| Genetic modification | VCN per CAR-positive cell; replication-competent virus result | Applies to integrating vectors; an average copy number does not show where insertions landed |
| Stability | Attributes after specified storage or handling | Conditions and time point limit the inference |

These examples are not a product's acceptance specification. [A COA](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/certificate-of-analysis) reports selected lot results; it is not every supporting study.

## Worked example and practice

In a fictional laboratory teaching sample, 100 counted cells include 80 live cells. Of those 80 live cells, 60 express the intended receptor. The live fraction is 80%; receptor positivity among live cells is 75%. The 60 live receptor-positive cells are 60% of all counted cells. These are different denominators, not three conflicting results.

<img src="./images/nested-live-and-receptor-positive-denominators-v1-light.svg" alt="A fictional 100-cell sample contains 80 live cells, including 60 live receptor-positive cells and 20 other live cells; 20 cells are nonlive. The three percentages are 60 over 80 equals 75 percent receptor positivity among live cells, 80 over 100 equals 80 percent viability, and 60 over 100 equals 60 percent live receptor-positive cells among all counted cells." data-theme-pair />

*All three percentages are correct because they count different sets.*

Each dot is one counted cell in an invented sample. The teal block contains 60 live receptor-positive cells; amber contains 20 other live cells; gray contains 20 nonlive cells. The live bracket contains the first two blocks. Receptor status of the nonlive cells is not specified. These counts describe expression and viability under stated gates; they provide neither a potency result nor authorization to release the lot.

**Try it:** Does this establish potency or a complete release decision?

<details><summary>One possible answer</summary>

No. The fictional counts describe viability and receptor expression under stated gates. They supply no functional, contamination, handling or final-disposition evidence. None of the percentages is a clinical release cutoff.

</details>

## Common confusions

- Viability, purity and potency are different attributes.
- A sample's count is not automatically the administered dose.
- A valid test result is not the complete quality disposition.
- "Released" does not always mean every result is final: a fresh product's 14-day sterility culture can finish after infusion.
- Quality release, patient eligibility and treatment benefit remain separate gates.

## Explain it back

“Identity, viability and potency answer ___; the denominator tells me ___.” One answer: “different questions; which population a reported percentage counts.”

## Takeaway

**Read each cell-product result in its own assay and lot context.**

## Related concepts

- [Flow cytometry](/wiki/education/concepts/measurement/immune-monitoring/flow-cytometry)
- [Autologous versus allogeneic cell therapy](/wiki/education/concepts/engineering-and-manufacturing/cell-manufacturing/autologous-vs-allogeneic-cell-therapy)
- [Manufacturing failure and out-of-specification product](/wiki/education/concepts/engineering-and-manufacturing/cell-manufacturing/manufacturing-failure-and-out-of-specification-product)

## Sources and scope

Source check: November 7, 2026 (sterility timing, VCN and replication-competent virus); October 10, 2026 (rest). General cell-product quality education, with chimeric antigen receptor (CAR) T-cell examples; not a release specification. Actual expert and learner review remains pending.

- [FDA: CAR T-cell product-development guidance, January 2024](https://www.fda.gov/media/156896/download), analytical testing, microbiological controls and in-use stability sections.
- [FDA: potency tests for cellular and gene therapy products, January 2011](https://www.fda.gov/media/79856/download), product-specific potency testing and acceptance-criteria limits.
- [FDA: gene-therapy CMC information for investigational applications, January 2020](https://www.fda.gov/media/113760/download), product control and stability sections; its sterility recommendations under controls of critical steps (3.2.P.3.4) cover in-process sterility 48 to 72 hours before harvest, Gram stain release and the 14-day final culture (checked November 7, 2026).


Visual relationship check: October 13, 2026. The new illustration was checked against the relevant FDA CAR T-cell guidance sections; invented arithmetic is teaching data. Existing paper citations retain their stated scope. Expert and learner review remain pending.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [How to engineer T cells inside the body](/wiki/education/guides/engineered-cell-therapy/04-in-vivo-delivery)
- [How engineered immune cells can attack a solid tumor](/wiki/education/guides/engineered-cell-therapy/index)
<!-- END GENERATED USED IN -->
