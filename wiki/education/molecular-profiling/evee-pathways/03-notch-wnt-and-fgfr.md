---
tags: [education, EVEE, Notch, Wnt, DLL4, FGFR4, research-only]
---

# Notch, Wnt, and FGFR4 — messages are not dependencies

**October 4 evidence correction:** the EVEE headline variants did not reproduce, and earlier bulk-RNA ranks are confounded by capture chemistry and cell composition. This lesson teaches general pathway biology and preserves the historical hypotheses; it does not establish a current dependency in Diana. [[wiki/education/molecular-profiling/evee-proposed-pathways|Course context and current qualifications]].

**Report hub:** [[wiki/omics/evee-report-overview]]

**Course index:** [[wiki/education/molecular-profiling/evee-proposed-pathways]]

<img src="/api/file?path=wiki%2Feducation%2Fmolecular-profiling%2Fimages%2Fnotch-wnt-signals-light.png" alt="cartoon explaining Notch contact signaling and Wnt secreted signaling" data-theme-pair>

## Notch and Wnt are developmental traffic signals

Both pathways help cells decide what to become and how to organize. Cancer can reuse them, but their effects depend on cell type, ligand source, receptor state, and tissue context.

- **Notch is usually a contact signal.** A ligand such as DLL4 on one cell touches a Notch receptor on another. Gamma-secretase cleavage releases the Notch intracellular domain, which enters the nucleus.
- **Wnt is usually a secreted signal.** PORCN modifies Wnt ligands so they can be secreted. A Wnt ligand binds a Frizzled receptor; in canonical signaling, β-catenin accumulates and changes transcription.

The report groups `DLL4 p.Arg516Cys`, `WNT2B p.Leu39Pro`, `WNT6 p.Ser88Pro`, `FZD10 p.Ala19Val`, and `LIN28A p.Ala24Val`, calls this a differentiation block, and proposes DLL4/Notch or Wnt inhibition.

## Why five related names do not make one active pathway

Each alteration could increase, decrease, or leave signaling unchanged. The genes may not be expressed, may occur in different subclones, or may belong to malignant, stromal, or endothelial cells. `LIN28A` is a developmental RNA-binding regulator, not a Wnt ligand or receptor.

DLL4 is especially context-sensitive. In tumor vessels, DLL4 blockade can produce excessive but poorly functioning branches. A DLL4 missense variant in a sequencing report does not recreate an anti-DLL4 antibody, and the relevant DLL4 may be vascular rather than tumor-cell derived.

## Drug-by-drug translation

### Demcizumab

Demcizumab is an anti-DLL4 antibody. Preclinical TNBC xenografts showed pathway-level activity, but the review found no TNBC objective-response rate and no `DLL4 R516C`-selected study. Clinical studies in other tumors identified hypertension, pulmonary hypertension, and congestive-heart-failure concerns with longer exposure. The antibody's mechanism cannot be inferred from the missense variant.

### Nirogacestat / PF-03084014

Nirogacestat inhibits gamma-secretase, so it blocks cleavage of Notch receptors; it does not bind DLL4. The earlier compound PF-03084014 plus docetaxel produced **4 confirmed partial responses among 25 evaluable advanced-TNBC patients (16%)** and median PFS of 4.1 months. That is direct TNBC pathway experience, but it was a small combination trial and not a validation of `DLL4 R516C`. A later trial examining TNBC with or without Notch alterations was terminated.

Nirogacestat's FDA approval is for adults with progressing desmoid tumors. That approval does not make a DLL4 variant in TNBC actionable.

### WNT974 / LGK974

WNT974 inhibits PORCN, preventing secretion of PORCN-dependent Wnt ligands. It does not directly inhibit WNT2B, WNT6, FZD10, or LIN28A. The drug is most coherent when a tumor has active, ligand-dependent Wnt signaling.

In a phase I study of 94 advanced-solid-tumor patients, WNT974 suppressed AXIN2 in paired tissue—clear target engagement—but produced **no objective responses**; 16% had stable disease. This is a perfect example of the gap between “we hit the pathway” and “the tumor shrank.”

## FGFR4: a receptor is a target only if it drives the cell

FGFR4 is a receptor tyrosine kinase. Ligand binding causes receptor pairing and phosphorylation, then sends signals through pathways such as RAS–MAPK and PI3K–AKT.

The report lists extracellular `FGFR4 p.Ser106Phe` and proposes futibatinib or pemigatinib. Known activating FGFR4 mutations in rhabdomyosarcoma cluster in the kinase region, including changes near N535 and V550. They increase receptor phosphorylation and can create inhibitor sensitivity. `S106F` is not one of those established hotspots, and Elicit found no exact-variant functional, cohort, or drug-response evidence.

### Futibatinib

Futibatinib inhibits FGFR1–4, so it can hit FGFR4 biochemically. Its FDA indication, however, is previously treated FGFR2-fusion/rearranged intrahepatic cholangiocarcinoma. Even in FGFR4-mutant rhabdomyosarcoma models, sensitivity varied by the exact kinase mutation. That reinforces—not removes—the need to characterize `S106F`.

### Pemigatinib

Pemigatinib is mainly an FGFR1–3 inhibitor. Its labeled molecular contexts involve FGFR2-rearranged cholangiocarcinoma and FGFR1-rearranged myeloid/lymphoid neoplasms. It is not a sound drug match for an isolated FGFR4 hypothesis.

## Decisive tests

### Notch/Wnt

- Confirm RNA expression and cell localization.
- Establish whether the variants are in the same malignant clone.
- Measure HES/HEY targets for Notch and AXIN2/β-catenin state for Wnt.
- Perturb gamma-secretase, DLL4, or PORCN only after the corresponding active state is shown.
- Require reversal of that state and selective loss of tumor viability.

### FGFR4

- Confirm `S106F`, FGFR4 RNA/protein, and malignant-cell localization.
- Measure p-FGFR4, p-ERK, and p-AKT.
- Compare wild-type and `S106F` receptors in an isogenic system.
- Test futibatinib with target engagement and a rescue/control that establishes FGFR4 dependence.

## Relevance for Diana

The October 4 audit withdraws the variant-specific premise and qualifies the earlier bulk-RNA comparisons. This general pathway biology does not establish a current dependency or priority for Diana. Any renewed hypothesis needs tumor-cell evidence, appropriate comparators, and functional testing tied to a concrete clinical question. [[sources/research/syntheses/10-04-diana-multiomic-review/analysis|Current findings and qualifications]].

## Teach it back

1. What is the simplest difference between Notch and Wnt signaling?
2. Why does a DLL4 variant not imitate an anti-DLL4 antibody?
3. What did WNT974 prove even though it produced no objective responses?
4. Why is pemigatinib a target mismatch for FGFR4?
5. What extra evidence turns “an FGFR4 variant exists” into “the tumor depends on FGFR4”?

**One-sentence answer:** Developmental-signal variants name interesting circuits, but only an active, directionally coherent, tumor-cell dependency can justify inhibiting the pathway.

## Sources

- [PF-03084014 plus docetaxel in TNBC](https://pubmed.ncbi.nlm.nih.gov/27906684/)
- [FDA nirogacestat approval for desmoid tumors](https://www.fda.gov/drugs/drug-trials-snapshots/drug-trials-snapshots-ogsiveo)
- [WNT974 phase I study](https://pubmed.ncbi.nlm.nih.gov/33941878/)
- [FGFR4-activating mutations in rhabdomyosarcoma](https://pubmed.ncbi.nlm.nih.gov/19809159/)
- [Futibatinib in FGFR4-mutant rhabdomyosarcoma models](https://pubmed.ncbi.nlm.nih.gov/37627061/)
- [FDA futibatinib indication](https://www.fda.gov/drugs/drug-approvals-and-databases/drug-trials-snapshot-lytgobi)
- [FDA pemigatinib label](https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/213736s002lbl.pdf)
- [Elicit Notch/Wnt, FGFR4, and BET review](https://elicit.com/agent/a4de7f47-2056-4bc8-8c16-3c3988aeffd9)

## Continue

Previous: [[wiki/education/molecular-profiling/evee-pathways/02-lipid-and-mtor|Lipid metabolism and mTOR]]

Next: [[wiki/education/molecular-profiling/evee-pathways/04-cul3-nrf2-ferroptosis-and-bet|CUL3, NRF2, ferroptosis, and BET — defenses and transcription]]
