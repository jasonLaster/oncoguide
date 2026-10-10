---
title: "Synthetic lethality"
type: concept
domain: therapeutics/how-drugs-work
aliases: [synthetic lethal, synthetic-lethal interaction]
summary: "Synthetic lethality occurs when two impairments together kill a cell even though either impairment alone can be tolerated."
glossary_anchor: synthetic-lethality
level: intermediate
prerequisites:
  - "[[wiki/education/concepts/biology-basics/genetics/central-dogma]]"
  - "[[wiki/education/concepts/cancer-biology/what-cancer-is/oncogene-and-tumor-suppressor]]"
used_by: ["[[wiki/education/guides/from-variant-to-drug/02-connect-repair-biology-to-parp-sensitivity]]","[[wiki/education/guides/from-variant-to-drug/04-parp-trapping-and-recycling]]","[[wiki/education/guides/from-variant-to-drug/06-pi3k-akt-mtor-and-repair]]","[[wiki/education/guides/from-variant-to-drug/07-reading-a-functional-experiment]]","[[wiki/education/guides/from-variant-to-drug/index]]"]
sensitive: false
reviewed: pending
reviewed_by: ""
review_status: "Expert and learner review pending"
source_checked: 2026-10-09
tags: [education, synthetic-lethality, PARP, targeted-therapy]
---

# Synthetic lethality

## In one sentence

Synthetic lethality occurs when two impairments together kill a cell even though either impairment alone can be tolerated.

## The intuition

Picture a town with two routes for an essential delivery. Closing either route still leaves a way through. Closing both stops the delivery. A cell can likewise tolerate losing one function while depending on another. **Synthetic lethality** names the damaging interaction between the two losses. Real cells have more than two routes, and a drug rarely closes one route perfectly.

## How it works

One impairment may already exist in a tumor. A drug can then create the second. The treatment aims to exploit a vulnerability created by the first loss, rather than simply attack the altered gene itself.

A classic example involves [homologous recombination (HR)](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/homologous-recombination-and-hrd), a DNA repair process, and **poly(ADP-ribose) polymerase (PARP)** inhibitors. ADP-ribose is a small chemical unit that PARP enzymes use to build signals at DNA damage. In experimental models, loss of BRCA1 or BRCA2 repair function made cells much more vulnerable to PARP inhibition. [Farmer 2005](https://www.nature.com/articles/nature03445), [Bryant 2005](https://pubmed.ncbi.nlm.nih.gov/15829966/).

Homologous recombination deficiency (HRD) means this repair process is impaired. This is a useful starting model, rather than a full account of drug action. PARP inhibitors both suppress enzyme activity and can trap PARP on DNA. Cells also vary in how they protect DNA copying, restore repair, or handle the resulting stress. A repair defect therefore creates a hypothesis about vulnerability, not certainty that a specific drug will work.

To demonstrate a proposed interaction, researchers compare each impairment alone with both together. They check that the intended functions changed and that the combined loss caused cell death. Independent ways of disrupting the function help rule out an unrelated drug effect. Restoring the impaired function, called a **rescue experiment**, can further strengthen the causal explanation.

## Why it matters in cancer

Synthetic lethality offers a way to target the *consequence* of losing a protective function. Some [tumor suppressors](/wiki/education/concepts/cancer-biology/what-cancer-is/oncogene-and-tumor-suppressor) are missing or inactive; it may be easier to inhibit a remaining dependency than to replace the lost protein.

The first impairment can be genetic, while the second is pharmacological. Thus a “two-loss” mechanism does not necessarily require two drugs. A tumor with impaired BRCA repair may already have the first loss before a PARP inhibitor is given.

Selectivity is also incomplete. Normal tissues can be harmed by the drug. The approved clinical setting, exposure, and safety evidence remain essential; the synthetic-lethal explanation does not replace them.

## Common confusions

**Synthetic lethality versus oncogene addiction.** Oncogene addiction means a cancer depends strongly on an active cancer-driving gene or pathway. Inhibiting that driver can stop growth or cause death. Synthetic lethality instead describes the interaction between two impairments. The concepts can coexist in a tumor, but they ask different questions: “what active signal does this cell need?” versus “what remaining function becomes essential because another is lost?” Oncogene dependence has been studied directly in experimental kinase-driven cancer models. [Sharma 2006](https://pmc.ncbi.nlm.nih.gov/articles/PMC2673136/), with its [2009 figure correction](https://doi.org/10.1016/j.ccr.2009.10.010).

**Synthetic lethality versus combination synergy.** Synergy means a drug combination exceeds a stated expectation derived from its single-drug effects. A screen can show that interaction without establishing which paired biological losses caused it. Conversely, an existing tumor defect plus one drug can be synthetic lethal without a two-drug combination.

**High expression versus dependence.** Lots of a protein, or many instructions for making it, do not establish that its loss would kill the cell. Dependence requires an appropriate perturbation and outcome measurement.

## Related concepts

- [Homologous recombination and HRD](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/homologous-recombination-and-hrd) describe the repair weakness in the classic example.
- [Germline versus somatic variants](/wiki/education/concepts/biology-basics/genetics/germline-vs-somatic) describe where a genetic change belongs.
- [Reading a functional experiment](/wiki/education/guides/from-variant-to-drug/07-reading-a-functional-experiment) distinguishes response, interaction, and mechanism.

## Sources

Source check: 2026-10-09. General mechanism education; expert and learner review pending. The route analogy is illustrative, not a model of every repair pathway.

- [Farmer 2005: BRCA-related repair defects and PARP inhibition](https://www.nature.com/articles/nature03445).
- [Bryant 2005: PARP inhibition in BRCA2-deficient experimental tumors](https://pubmed.ncbi.nlm.nih.gov/15829966/).
- [Sharma 2006: dependence on oncogenic signaling in experimental models](https://pmc.ncbi.nlm.nih.gov/articles/PMC2673136/); [2009 correction to Figure 3A](https://doi.org/10.1016/j.ccr.2009.10.010).
- [Yadav 2015: drug-interaction reference models](https://pmc.ncbi.nlm.nih.gov/articles/PMC4759128/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Connect repair biology to PARP sensitivity](/wiki/education/guides/from-variant-to-drug/02-connect-repair-biology-to-parp-sensitivity)
- [PARP trapping and recycling](/wiki/education/guides/from-variant-to-drug/04-parp-trapping-and-recycling)
- [PI3K, AKT, and mTOR: competing effects on repair and recycling](/wiki/education/guides/from-variant-to-drug/06-pi3k-akt-mtor-and-repair)
- [Reading a functional experiment](/wiki/education/guides/from-variant-to-drug/07-reading-a-functional-experiment)
- [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index)
<!-- END GENERATED USED IN -->
