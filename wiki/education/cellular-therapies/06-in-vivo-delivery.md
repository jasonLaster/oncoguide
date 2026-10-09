---
title: "How to engineer T cells inside the body"
tags: [education, CAR-T, in-vivo, lentivirus, mRNA, LNP]
type: "guide-lesson"
guide: "engineered-cell-therapy"
step: 4
minutes: 10
objectives: ["Distinguish engineering location and the administered product.", "Separate delivery targeting from cancer targeting."]
prerequisites: ["[[wiki/education/concepts/biology-basics/genetics/central-dogma]]", "[[wiki/education/concepts/therapeutics/cell-therapies/car-anatomy]]", "[[wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/lipid-nanoparticle]]"]
sensitive: false
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
updated: "2026-10-09"
---

# How to engineer T cells inside the body

**Before you start:** [DNA, RNA and protein](/wiki/education/concepts/biology-basics/genetics/central-dogma), [chimeric antigen receptor (CAR)](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy), [lipid nanoparticle (LNP)](/wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/lipid-nanoparticle).

**In vivo CAR-T describes where the T cells are engineered: inside the patient.** It does not describe which cancer they recognize or prove that they can control a solid tumor.

Before this lesson: [[wiki/education/cellular-therapies/05-engineered-t-cell-building-blocks|Building an engineered T cell]].

## Two manufacturing routes

<img src="./images/where-cells-are-engineered-light.png" alt="Two routes: cells engineered in a laboratory and infused, or instructions delivered to engineer cells inside the body" data-theme-pair>

*What is administered differs from the cells that ultimately perform the work.*

View full-size: [light illustration](./images/where-cells-are-engineered-light.png) · [dark illustration](./images/where-cells-are-engineered-dark.png).

| Route | What happens | What is administered |
|---|---|---|
| **[Ex vivo](/wiki/education/concepts/engineering-and-manufacturing/cell-manufacturing/ex-vivo-vs-in-vivo-engineering)**: outside the body | Collect cells, engineer them in a laboratory, grow and test them, then infuse them | A manufactured population of cells |
| **[In vivo](/wiki/education/concepts/engineering-and-manufacturing/cell-manufacturing/ex-vivo-vs-in-vivo-engineering)**: inside the body | Manufacture and test a genetic delivery product; administer it so it engineers selected cells within the patient | The delivery product carrying genetic instructions |

The [engineering-location comparison](/wiki/education/concepts/engineering-and-manufacturing/cell-manufacturing/ex-vivo-vs-in-vivo-engineering) defines these routes. In vivo engineering could remove patient-specific cell processing. It still requires [manufacturing and batch release](/wiki/education/concepts/engineering-and-manufacturing/cmc-and-quality/gmp-and-batch-release), quality control, and monitoring. The patient's starting T-cell number and state remain important. Whether lymphodepleting chemotherapy is needed is a property of a particular protocol, not something the words “in vivo” settle. [1,2]

**Autologous versus allogeneic answers a different question:** whose cells? Autologous cells come from the patient; allogeneic cells come from a donor. An off-the-shelf delivery vial may engineer the patient's own cells. “Off-the-shelf” does not necessarily mean donor cells.

## Two different targeting jobs

The word “targeted” can hide two separate tasks:

1. **Delivery targeting:** the carrier must enter the intended immune cells. A carrier that binds a T-cell marker is addressing the T cell.
2. **Cancer targeting:** the resulting CAR must recognize the chosen cancer-cell antigen. That antigen may be entirely different from the carrier's target.

**A package addressed to a T cell can contain instructions for recognizing a cancer cell.** Neither targeting job proves the other worked. Delivery to the wrong cells and recognition of healthy tissue are different failure modes.

## Carrier, payload, and expression

A **vector** or carrier transports genetic material. The **payload** is the material transported. **Expression** means the recipient cell uses those instructions to make a product. **Transduction** commonly describes gene delivery by a viral vector.

| Feature | Targeted mRNA lipid nanoparticles | Targeted integrating [lentiviral vectors](/wiki/education/concepts/engineering-and-manufacturing/delivery-vehicles/lentiviral-vector) |
|---|---|---|
| Carrier | Small particles made from lipids, with a targeting strategy | Engineered viral particles with a targeting strategy |
| Delivered instructions | mRNA | A vector RNA genome that is reverse-transcribed into DNA |
| Typical route to protein | mRNA reaches cytoplasm and is translated | Vector-derived DNA integrates; the cell transcribes RNA and translates protein |
| Persistence of expression | Usually transient; depends on RNA and protein lifetime | Can persist through cell division if the engineered cells survive and expression is maintained |
| Important questions | Which cells receive RNA, endosomal escape, duration, repeat dosing, inflammation | Which cells receive the vector, integration sites, copy number, durability, immune responses |

These are representative approaches, not rules for every nanoparticle or virus. Some viral designs do not integrate. Integration describes what happens to the genetic material; it does not guarantee indefinite cell survival or permanent tumor control. [1,2]

## Worked example: one vial, an uncertain cell population

Imagine a fictional delivery vial with a measured functional vector dose. For in vivo engineering, the administered amount of carrier is an input. The number and behavior of engineered cells are downstream outcomes.

The chain is: carrier distribution → contact with intended cells → successful entry → functional expression → cell expansion or loss → movement into tumor tissue.

A construct containing both a CAR and an added receptor also needs **co-expression**: the relevant cells must make both components at useful levels. Detecting one component somewhere in the body does not establish that.

## What can go wrong at this step

Delivery can miss the intended cells, reach unintended cells, or produce too little useful receptor. An integrating design also needs product-specific assessment of delayed genetic effects. A transient design needs evidence about how long protein and downstream immune activity last; RNA disappearance is not an instant off switch.

## Try it: resolve an ambiguous headline

**Headline:** “CAR-T cells eliminate tumors in vivo.”

**Question:** Does that mean the cells were engineered inside the animal?

**Answer:** No. It may mean laboratory-engineered cells were infused and then tested in a living animal. Read what was administered: cells, a vector, or nanoparticles. “Tested in vivo” and “generated in vivo” are distinct findings.

**Second question:** If mRNA expression fades, does the immune response stop instantly?

**Answer:** No. RNA decay, receptor-protein decay, cell survival, and downstream immune effects operate on different timelines.

## Explain it back

“Which claim was measured, and which next step remains untested?” Name one measurement from this lesson and the limit beside it.

## Takeaway and next step

**In vivo engineering changes the delivery and manufacturing route. Tumor recognition, useful cell behavior, and safety still need their own evidence.**

Next: [[wiki/education/cellular-therapies/07-cytokines-and-programmable-receptors|Cytokines and programmable receptors]].

## Sources and scope

Source check: October 9, 2026. Expert and learner review pending. Published examples validate particular constructs and experimental settings; they do not validate every in vivo CAR-T product or every solid-tumor indication.

1. [Hunter et al., Science, 2025: In vivo CAR T-cell generation to treat cancer and autoimmune disease](https://pubmed.ncbi.nlm.nih.gov/40536974/). Targeted mRNA nanoparticles; human-cell experiments, tumor control in humanized mice, and B-cell depletion in monkeys. This is not evidence of human solid-tumor efficacy.
2. [A targeting lentiviral vector for generation of CAR-T cells in vivo, Scientific Reports](https://www.nature.com/articles/s41598-025-17342-1). CD19-targeted activity in a lymphoma mouse model; possible solid-tumor adaptations are not the same as tested solid-tumor efficacy.
