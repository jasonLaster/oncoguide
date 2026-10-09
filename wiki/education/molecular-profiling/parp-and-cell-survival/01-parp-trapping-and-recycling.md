---
title: "PARP trapping and recycling"
tags: [education, PARP, HRD, autophagy, resistance]
---

# PARP trapping and recycling

**A PARP inhibitor can turn a DNA-damage responder into an obstacle on DNA.** A cell with impaired homologous recombination may struggle to survive the resulting damage. But whether the obstacle persists—and what other rescue mechanisms remain—also matters.

[[wiki/education/molecular-profiling/parp-and-cell-survival/index|Guide]] · Next: [[wiki/education/molecular-profiling/parp-and-cell-survival/02-autophagy-flux-and-dependence|Autophagy: traffic, flow, and dependence]]

## The obstacle and the escape route

<div class="dark:hidden">
<img src="https://4pdxqyvytfd88yy1.public.blob.vercel-storage.com/sites/diana/files/wiki/education/molecular-profiling/parp-and-cell-survival/images/parp-obstacle-and-clearance-light.png" alt="parp trapping and selective recycling cartoon">
</div>
<div class="hidden dark:block">
<img src="https://4pdxqyvytfd88yy1.public.blob.vercel-storage.com/sites/diana/files/wiki/education/molecular-profiling/parp-and-cell-survival/images/parp-obstacle-and-clearance-dark.png" alt="parp trapping and selective recycling cartoon">
</div>

Follow the cartoon as a sequence:

1. **Damage draws a response.** PARP1 binds at DNA damage and helps organize the response by adding molecular signals called PAR chains.
2. **The drug changes that response.** PARP inhibitors suppress catalytic activity and can stabilize PARP–DNA binding. Trapped complexes can obstruct a replication fork—the machinery copying DNA—and contribute to replication stress and dangerous lesions.
3. **Repair capacity changes the consequences.** BRCA1, BRCA2, PALB2, and RAD51 participate in homologous recombination. When a sister DNA copy is available during the cell cycle, this pathway can help repair damage accurately. HR-deficient cells may be especially vulnerable to PARP inhibition.
4. **Clearance can change the exposure to damage.** Experiments have identified a selective recycling route involving TEX264, p97, and autophagy machinery that helps remove trapped PARP1. Interfering with that route increased PARP trapping and drug sensitivity in the studied models. [Hoslett 2026](https://www.nature.com/articles/s41556-026-01961-5).

The fourth step is a **preclinical mechanism**, not proof that a high autophagy RNA score identifies a resistant tumor. It concerns particular cargo and machinery; bulk recycling measurements may not capture it. PARP trapping is also only part of PARP-inhibitor biology.

## Why the combination idea makes sense

The hypothesis is to create a damaging obstacle and prevent a rescue response. This is related to **synthetic lethality**: two impairments can be much harder for a cell to tolerate together than either alone. Selectivity is incomplete, however. Normal tissues can also be injured by PARP inhibitors and by drugs that disrupt lysosomes.

Blocking recycling does not necessarily reproduce a selective TEX264 experiment. Chloroquine and hydroxychloroquine affect lysosomal functions more broadly; a combination killing cells does not by itself reveal *which* function mattered. See [[wiki/education/molecular-profiling/parp-and-cell-survival/04-reading-a-functional-experiment|how to test a mechanism alongside a drug response]].

## A scar is a history, not a live repair test

Imagine two hypothetical tumors with similarly high genomic-scar scores:

| Tumor | What happened earlier | What is happening now | Interpretation |
|---|---|---|---|
| A | HR failed and chromosome damage accumulated | HR remains impaired | The PARP-sensitivity hypothesis remains coherent, subject to other resistance routes. |
| B | HR failed and chromosome damage accumulated | A resistant population restored some repair | Old scars can remain even though the current response to PARP inhibition has changed. |

A BRCA **reversion** is a later alteration that can restore a working reading frame or protein function. Other adaptations can also restore repair or protect stressed replication forks. A selected metastatic breast-cancer study documented repair restoration after resistance; it was not a measurement of how often this happens in all patients. [Waks 2020](https://pubmed.ncbi.nlm.nih.gov/32245699/).

**RAD51 foci** are small assemblies of repair protein that can help assess present HR function. They need interpretable tumor cells, evidence of DNA damage, and enough cells in the relevant cell-cycle phase. Few foci in a poorly proliferating or inadequately damaged sample can be uninformative. Some formats use fixed tissue; a functional repair readout does not always require a living drug culture. [Cruz 2018](https://pubmed.ncbi.nlm.nih.gov/29635390/), [Castroviejo-Bermejo 2018](https://pubmed.ncbi.nlm.nih.gov/30377213/).

## Check your understanding

**“A high HRD score means PARP inhibition must work.” What is missing?** The score records accumulated damage, while response depends on present repair, other survival routes, drug exposure, and clinical context.

**“HCQ helped, so the cells must have been degrading trapped PARP1.” Is that established?** No. That explanation needs measurements of PARP trapping and the proposed clearance pathway, plus experiments that distinguish it from other lysosomal effects.

For the underlying repair cartoon and somatic/germline distinction, return to [[wiki/education/molecular-profiling/hrd-parp-and-dianas-biology|the HRD/PARP primer]]. For evidence by disease setting, see [[wiki/research/parp-autophagy-pi3k-evidence|the research review]].
