---
title: "Test a supply dependence with a rescue experiment"
type: "guide-lesson"
guide: from-variant-to-drug
step: 8
minutes: 11
objectives: ["Trace the mevalonate pathway from HMG-CoA reductase to its sterol and non-sterol products.", "Explain why adding back mevalonate cannot identify which product a cell needed.", "Design branch-specific inhibitor and add-back conditions that narrow the answer."]
prerequisites: ["[[wiki/education/concepts/cancer-biology/metabolism-and-stress/cholesterol-and-srebp]]", "[[wiki/education/concepts/therapeutics/how-drugs-work/chemical-probe-vs-drug-and-target-engagement]]"]
sensitive: false
tags: ["education", "pathway-biology", "functional-testing"]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Test a supply dependence with a rescue experiment

**Adding something back after a drug takes it away is one of the strongest tests of cause. It only identifies what the cell needed if the added molecule is specific.**

**Before you start:** [Cholesterol homeostasis through SCAP–SREBP](/wiki/education/concepts/cancer-biology/metabolism-and-stress/cholesterol-and-srebp) explains how cells sense sterols and adjust lipid production. [Target engagement](/wiki/education/concepts/therapeutics/how-drugs-work/chemical-probe-vs-drug-and-target-engagement) asks whether a compound actually reached its intended target.

## Where this step sits

This is optional casebook lesson 8 of [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index). It follows [reading a functional experiment](/wiki/education/guides/from-variant-to-drug/07-reading-a-functional-experiment) and adds one tool: the rescue.

## A rescue asks what was missing

Suppose a cake fails when you leave out the boxed mix. Adding the mix back proves the mix mattered. It does not tell you whether the flour, the sugar or the baking powder inside it was the missing piece. A **rescue** experiment works the same way: it supplies or restores something a drug or gene change removed, and checks whether the effect goes away. The answer is only as specific as the thing added back.

## The mevalonate pathway branches

**Statins** block HMG-CoA reductase, the enzyme that makes **mevalonate**. Mevalonate is not only a step toward cholesterol. It feeds several products:

| Branch | Product | What cells use it for |
|---|---|---|
| Sterol | Squalene, then cholesterol | Membranes and steroid-type signals |
| Non-sterol | Farnesyl pyrophosphate (FPP), the branch point that also feeds squalene and GGPP | A lipid tag that anchors RAS-family proteins to membranes |
| Non-sterol | Geranylgeranyl pyrophosphate (GGPP) | A lipid tag that anchors RHO-family proteins, which shape the cell's skeleton and movement |

[SCAP–SREBP](/wiki/education/concepts/cancer-biology/metabolism-and-stress/cholesterol-and-srebp#how-it-works) senses sterol supply and turns the whole pathway up or down. So "cholesterol is low" and "the mevalonate pathway is blocked" are different claims.

## A real experiment: mutant p53 and breast-cancer architecture

Freed-Pastor and colleagues grew breast cells in three-dimensional gel culture, where normal cells form hollow, organized spheres and cancer cells form disorganized, invading masses [1]. The triple-negative lines MDA-MB-231 and MDA-MB-468 carry mutant TP53. The experiment ran in steps, each narrowing the claim:

| Step | Result | What it supports | What it leaves open |
|---|---|---|---|
| Deplete mutant p53 | Masses reverted toward organized spheres; mevalonate-pathway genes fell | Mutant p53 drives the disorganized growth and the pathway | Which product matters |
| Add a statin | Reproduced the reversion | Pathway flux matters | Statins could act off-target |
| Statin plus mevalonate | Blocked many of the statin's effects | The effect runs through mevalonate | Mevalonate feeds every branch |
| Block one branch at a time | Blocking the cholesterol branch (squalene synthase) had a mild effect; blocking geranylgeranylation had a profound one | The non-sterol GGPP branch carries most of the effect | Other metabolites could contribute |
| Add back GGPP | Restored invasive growth in part of the cell population | Geranylgeranylation is a key part | Partial rescue leaves room for more |

The authors concluded that the cells relied on geranylgeranylation, while stating that other metabolites might also be involved [1]. Notice what the experiment did: it replaced one broad rescue with branch-specific blocks and a specific add-back. The mevalonate rescue alone could never have pointed to GGPP rather than cholesterol.

## Supply in the dish changes the answer

Culture medium decides how much lipid a cell can import. A fictional example shows why the medium belongs in the result:

| Question | Lipid-poor medium | Lipid-rich medium |
|---|---|---|
| Does a synthesis inhibitor lower new lipid synthesis? | Yes | Yes |
| Does growth slow? | Yes | Little change |
| Likely reason | Nothing to import | Uptake compensates |

The inhibitor engaged its target in both. Only the supply differed. A tumor's supply of lipids from blood and neighboring cells is different again, so a dependence found in one medium is a hypothesis about the tumor, not a measurement of it.

## What can go wrong at this step

- **A broad rescue read as a specific one.** Mevalonate restores every branch, so it cannot name cholesterol.
- **A partial rescue read as complete.** If adding a product back restores only part of the effect, another factor is likely involved.
- **One readout standing in for another.** Freed-Pastor's outcome was tissue architecture in gel culture, not cancer-cell survival or tumor response in people.
- **Off-target drug effects.** Pair a drug with a genetic perturbation of the same enzyme when possible.

## Try it

A compound lowers lipid synthesis and slows growth. Adding mevalonate restores growth. A colleague concludes that the cells died for lack of cholesterol. What two conditions would you add?

<details>
<summary>Show the answer</summary>

Add a cholesterol-branch block (for example a squalene synthase inhibitor) and a non-sterol-branch block (for example a geranylgeranyl transferase inhibitor), then add back cholesterol or GGPP specifically. If only the cholesterol block slows growth and only cholesterol rescues it, the colleague's conclusion gains support. Until then, the result supports a mevalonate-pathway contribution only.

</details>

## Explain it back

"A rescue with ___ shows the pathway matters; a rescue with ___ shows which branch matters."

One possible answer: "the pathway's early product, mevalonate; a single downstream product such as cholesterol or GGPP."

## Takeaway

**A rescue identifies the missing piece only when what you add back is as specific as the claim you are making.**

**Next:** [Locate the active signaling step](/wiki/education/guides/from-variant-to-drug/09-locate-the-active-signaling-step).

## Sources and scope

Source check: November 8, 2026. General education; the supply table is fictional and the named experiment is preclinical. Expert and learner review pending.

1. [Freed-Pastor and colleagues, *Cell* 2012](https://pubmed.ncbi.nlm.nih.gov/22265415/): mutant p53, the mevalonate pathway and breast-cancer tissue architecture; the full text describes the branch inhibitors and GGPP add-back.
2. [Radhakrishnan and colleagues 2008: sterol control of SREBP-2 transport](https://pmc.ncbi.nlm.nih.gov/articles/PMC2652870/).
