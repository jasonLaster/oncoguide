---
title: "Locate the active signaling step"
type: "guide-lesson"
guide: from-variant-to-drug
step: 9
minutes: 12
objectives: ["Place an alteration upstream or downstream of the step a drug blocks.", "Explain why the same pathway drug works on one alteration and not another, using Notch and Wnt examples.", "Separate target engagement from tumor response."]
prerequisites: ["[[wiki/education/concepts/biology-basics/signaling/ligand-and-receptor]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/notch-signaling]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/wnt-beta-catenin]]", "[[wiki/education/concepts/cancer-biology/signaling-pathways/receptor-tyrosine-kinases]]"]
sensitive: false
tags: ["education", "pathway-biology"]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Locate the active signaling step

**A pathway drug blocks one step. It can only work if the cancer's signal still has to pass through that step, so find where the alteration sits before judging the drug.**

**Before you start:** [Ligands and receptors](/wiki/education/concepts/biology-basics/signaling/ligand-and-receptor) separates binding from signaling. [Notch](/wiki/education/concepts/cancer-biology/signaling-pathways/notch-signaling) passes a message between touching cells by cutting the receptor. [Canonical Wnt](/wiki/education/concepts/cancer-biology/signaling-pathways/wnt-beta-catenin) controls how long β-catenin survives. [Receptor tyrosine kinases](/wiki/education/concepts/cancer-biology/signaling-pathways/receptor-tyrosine-kinases) turn a surface signal into protein phosphorylation.

## Where this step sits

This is optional casebook lesson 9 of [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index). It applies the "measured consequence" step to signaling pathways.

## Upstream or downstream of the block?

Think of water pipes. Closing a valve stops the flow only if the leak is downstream of the valve. If the leak is past the valve, closing it does nothing. A signaling drug is a valve: it blocks one step. An alteration that switches the pathway on **downstream** of that step bypasses the drug. The analogy has a limit: real pathways branch and feed back, so "downstream" must be tested, not just read from a diagram.

| Pathway | The step a drug blocks | Alteration that still needs it | Alteration that bypasses it |
|---|---|---|---|
| Notch | Gamma-secretase cuts the receptor to release its active fragment | A receptor that still must be cut | A gene that makes the active fragment directly |
| Wnt | Porcupine (PORCN) prepares Wnt ligands for secretion | Loss of RNF43, which makes cells over-respond to ligand | APC or β-catenin mutations that stabilize β-catenin inside the cell |
| Receptor tyrosine kinase | A kinase inhibitor blocks the receptor's enzyme | A fusion or amplification that drives the kinase | A change downstream, such as in RAS |

## Case 1: NOTCH1 and NOTCH2 rearrangements in triple-negative breast cancer

Stoeck and colleagues found NOTCH1 or NOTCH2 rearrangements in 6 of 66 triple-negative breast cancers [1]. Both kinds switched Notch on constantly. They behaved differently with a gamma-secretase inhibitor (GSI), a drug that blocks the cut that releases the Notch intracellular domain (NICD):

- The NOTCH1 rearrangements deleted the receptor's outer regulatory region but kept the site gamma-secretase cuts. The shortened receptor was always on yet still had to be cut, so NOTCH1-rearranged lines with high active NOTCH1 were **sensitive** to the GSI, alone and with paclitaxel, in culture and in mice.
- A NOTCH2 fusion started its protein inside the cut site, making an active fragment that did not need cutting, so that line was **resistant**.

Both tumors had "activated Notch". Only the location of the alteration relative to the blocked step predicted the drug effect. Staining for active NOTCH1 fragment tracked response in these models [1].

## Case 2: Wnt ligand dependence

In 39 pancreatic cancer lines, every line that stopped growing on the PORCN inhibitor LGK974 carried an inactivating RNF43 mutation [2]. RNF43 normally removes Wnt receptors from the cell surface, so its loss makes cells depend on secreted ligand: an upstream block works. By contrast, most colorectal cancers carry APC mutations, or activating β-catenin mutations, that keep β-catenin active inside the cell without any ligand [3]. Blocking ligand secretion is not expected to switch that signal off.

The first human trial of this drug class, now called WNT974, shows a second distinction: **target engagement versus response**. In 94 people with advanced solid tumors, a Wnt target gene (AXIN2) fell in 94% of paired skin biopsies and 74% of paired tumor biopsies, so the drug reached its pathway. No tumor shrank enough to count as a response [4].

## Case 3: a receptor kinase

FGFR2 fusions join the receptor's kinase to a partner that forces it on. In a phase 2 study of pemigatinib, an FGFR inhibitor, 38 of 107 people (35.5%) with cholangiocarcinoma carrying such fusions had tumor shrinkage [5]. The fusion drives the very kinase the drug blocks.

A receptor variant of unknown function is a different situation. A useful test compares the variant with the normal receptor at the same expression level. If total protein is similar but the variant shows no extra phosphorylation, the test does not support activation under that condition. It also does not prove the variant harmless in every setting.

## Choose the next experiment by the open question

| Open question | Useful evidence | Still separate |
|---|---|---|
| Which cell sends and which receives? | Staining in tissue sections, or separated cell populations | A bulk tissue signal cannot assign the receiving cell |
| Is the pathway active? | The proximal active form (NICD, nuclear β-catenin, phosphorylated receptor) and an expected downstream change | Protein amount alone |
| Does the signal pass the drug's step? | Where the alteration sits; does the drug lower the active form? | Whether lowering it matters |
| Do the cells need it? | Growth or death after a specific perturbation, with restoration controls | Exposure, safety and patient benefit |

## What can go wrong at this step

- Treating "pathway activated" as one state, when the alteration may sit on either side of the drug's step.
- Reading a fall in a target gene as tumor response, as the WNT974 trial shows.
- Assigning a sending cell's ligand to a tumor cell's signal. A blood-vessel cell rich in a Notch ligand shows a sender, not a receiver.
- Forgetting normal tissue: Notch and Wnt also run gut, skin and bone, so on-target side effects can limit dose.

## Try it

A triple-negative tumor has high nuclear β-catenin and a β-catenin mutation at its phosphorylation sites. A colleague proposes a PORCN inhibitor. What do you expect, and why?

<details>
<summary>Show the answer</summary>

Little effect. The mutation protects β-catenin from the destruction machinery inside the cell, downstream of ligand secretion. Blocking ligand secretion upstream cannot remove a signal that no longer needs the ligand. A ligand-dependent alteration such as RNF43 loss would be the setting in which this drug class makes sense.

</details>

## Explain it back

"A pathway drug can only work if the cancer's signal still passes through ___; an alteration ___ of the blocked step bypasses it."

One possible answer: "the step the drug blocks; downstream."

## Takeaway

**Place the alteration relative to the drug's step, confirm the drug engages its target, and then test whether the cells need that signal.**

**Next:** [Test the direction of a stress defense](/wiki/education/guides/from-variant-to-drug/10-test-the-direction-of-a-stress-defense).

## Sources and scope

Source check: November 8, 2026. General education; the variant-test paragraph is fictional and cases 1 and 2 are preclinical. Expert and learner review pending.

1. [Stoeck and colleagues, *Cancer Discovery* 2014](https://pubmed.ncbi.nlm.nih.gov/25104330/): NOTCH1 and NOTCH2 rearrangements in triple-negative breast cancer and gamma-secretase inhibitor response.
2. [Jiang and colleagues, *PNAS* 2013](https://pubmed.ncbi.nlm.nih.gov/23847203/): RNF43 loss confers Wnt dependency in pancreatic cancer.
3. [Morin and colleagues, *Science* 1997](https://pubmed.ncbi.nlm.nih.gov/9065402/): APC or β-catenin mutations activate the pathway in colon cancer.
4. [Rodon and colleagues, *British Journal of Cancer* 2021](https://pubmed.ncbi.nlm.nih.gov/33941878/): phase 1 study of WNT974.
5. [Abou-Alfa and colleagues, *Lancet Oncology* 2020](https://pubmed.ncbi.nlm.nih.gov/32203698/): FIGHT-202, pemigatinib in FGFR2-rearranged cholangiocarcinoma.
