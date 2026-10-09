---
title: "PI3K, AKT, and mTOR: competing effects on repair and recycling"
tags: [education, PI3K, AKT, mTOR, PARP, autophagy]
---

# PI3K, AKT, and mTOR: competing effects on repair and recycling

**A second drug can make DNA repair weaker while changing the cell's ability to cope with the damage.** The important quantity is the combined effect on survival. A pathway diagram alone cannot tell us which effect will dominate.

[[wiki/education/molecular-profiling/parp-and-cell-survival/index|Guide]] · Previous: [[wiki/education/molecular-profiling/parp-and-cell-survival/02-autophagy-flux-and-dependence|Autophagy]] · Next: [[wiki/education/molecular-profiling/parp-and-cell-survival/04-reading-a-functional-experiment|Reading an experiment]]

## A growth signal with two consequences

<div class="dark:hidden">
<img src="https://4pdxqyvytfd88yy1.public.blob.vercel-storage.com/sites/diana/files/wiki/education/molecular-profiling/parp-and-cell-survival/images/pi3k-repair-recycling-tradeoff-light.png" alt="pi3k mtor repair and recycling tradeoff cartoon">
</div>
<div class="hidden dark:block">
<img src="https://4pdxqyvytfd88yy1.public.blob.vercel-storage.com/sites/diana/files/wiki/education/molecular-profiling/parp-and-cell-survival/images/pi3k-repair-recycling-tradeoff-dark.png" alt="pi3k mtor repair and recycling tradeoff cartoon">
</div>

**PI3K → AKT → mTORC1** is a simplified route by which growth signals can influence a cell's use of nutrients and production of proteins and lipids. It contains feedback, branches, and other inputs; the arrows do not mean the three proteins always rise and fall together.

mTORC1 also restrains **autophagy initiation**. When this restraint falls, autophagy can begin more readily. Starting more cargo packages does not guarantee successful lysosomal clearance, and slowing mTOR can have other effects on growth and survival. “More autophagy” is therefore not a complete prediction of drug response. [Kim 2011](https://www.nature.com/articles/ncb2152).

Two observations illustrate the competing possibilities:

- **Repair sensitization:** PI3K blockade lowered BRCA1/2 expression and increased PARP-inhibitor sensitivity in some BRCA-proficient TNBC models. There may be less repair left to suppress in a tumor that already lacks functional BRCA1. [Ibrahim 2012](https://pubmed.ncbi.nlm.nih.gov/22915752/).
- **A survival adaptation:** PI3K inhibition induced protective autophagy in ER-positive breast models. Separately, an mTOR-inhibitor experiment induced talazoparib resistance in HeLa cells, partly reversed by ATG7 depletion. These are different drugs and systems, not a demonstrated effect of every PI3K/mTOR drug in TNBC. [Yang 2018](https://pubmed.ncbi.nlm.nih.gov/29127189/), [Hoslett 2026](https://www.nature.com/articles/s41556-026-01961-5).

## Why the drug names matter

| Intervention | Where it acts | Why it cannot stand in for the others |
|---|---|---|
| **Alpelisib** | PI3Kα | Upstream PI3K inhibition affects several downstream processes, with feedback. |
| **Capivasertib** | AKT | An AKT inhibitor has a different target and pharmacology from a PI3K inhibitor. |
| **Everolimus** | mTORC1 signaling through a rapalog mechanism | Its effects are not identical to broader catalytic mTOR inhibition. |
| **Hydroxychloroquine** | Lysosomal functions, including late autophagic clearance | It is neither a PI3K/mTOR inhibitor nor a selective blocker of trapped-PARP1 removal. |

The kinase targets are described in the [FDA capivasertib approval summary](https://pmc.ncbi.nlm.nih.gov/articles/PMC11588547/) and the [CAPItello-291 report](https://pmc.ncbi.nlm.nih.gov/articles/PMC11335038/).

This is a mechanism map, not a menu of interchangeable treatment choices. The net effect can depend on the compound, concentration, schedule, tumor state, and model. Actual DNA alterations and validated pathway readouts also answer different questions from RNA ranks.

## What a real clinical study can—and cannot—resolve

Patrick linked a [2019 alpelisib–olaparib phase 1b report](https://pubmed.ncbi.nlm.nih.gov/30880072/). Its efficacy results were dominated by ovarian cancer; the four treated breast-cancer participants did not establish breast efficacy. A [2022 TNBC report from the same parent trial](https://pubmed.ncbi.nlm.nih.gov/35149538/) included 17 patients, with three objective responses. Its four dose-escalation patients overlap the earlier breast group, so these are not two independent breast cohorts to add together.

That later result shows **clinical activity in a small metastatic TNBC cohort**. Without a randomized comparison against the relevant single-agent treatment, it cannot establish how much the combination added. It also does not show that giving the combination after surgery prevents recurrence.

For updated results, adverse events, and the larger comparisons, use [[wiki/research/parp-autophagy-pi3k-evidence|the evidence review]]. A drug's activity in a trial and its approved indication are separate matters; a pathway percentile does not establish label eligibility.

## Check your understanding

**“mTOR is the autophagy brake, so any mTOR inhibitor must worsen PARP treatment.”** Too strong. Releasing that brake is one effect among several. The actual combination must be measured.

**“PI3K inhibition can suppress BRCA, so it must help a BRCA1-deficient tumor.”** Also too strong. The additional benefit depends on how much relevant repair remains and what adaptations occur.

For the apparent disagreement between Diana's upstream and downstream RNA gene sets, see [[wiki/education/molecular-profiling/evee-pathways/02-lipid-and-mtor|the mTOR expression explainer]].
