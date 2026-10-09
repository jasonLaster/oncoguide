---
tags: [education, WGS, EVEE, pathways, RNA-seq, ssGSEA, TCGA-BRCA, literature-review, research-only]
---

# The EVEE pathway hypotheses — course index

**Start with the decision-oriented overview:** [[wiki/omics/evee-report-overview]]

**Source report:** [[sources/diagnostics/08-11-wgs-evee-variant-interpretation-report/08-11-wgs-evee-variant-interpretation-report|August 11 EVEE variant interpretation report]]

**Method and reproducibility guide:** [[sources/diagnostics/08-11-wgs-evee-variant-interpretation-report/08-11-wgs-evee-variant-interpretation-report-guide|How to read and reproduce the EVEE report]]

**RNA pathway comparison:** [[sources/research/syntheses/08-20-all-10-hypotheses-rank-based-ssgsea-vs-tcga-brca|All 10 hypotheses versus TCGA-BRCA Basal/TNBC]]

## What this course teaches

This is a historical pathway course prompted by the August 11 EVEE report. It explains autophagy, cholesterol, mTOR, Notch/Wnt, CUL3/NRF2, ferroptosis, FGFR4, and BET biology. The original hypotheses and RNA ranks belong to their dated source analyses.

**October 4 correction:** the deep-exome audit did not reproduce the nine headline variants, and capture chemistry plus tissue composition undermine the earlier bulk-RNA ranks. Those figures cannot currently prioritize Diana's dependencies. General pathway studies remain useful teaching material, but neither the EVEE variants nor the old RNA percentiles establish these mechanisms in her cancer. [[sources/research/syntheses/10-04-diana-multiomic-review/analysis|Current findings and qualifications]]

Read the individual lessons as explanations of mechanisms and experimental questions. Use [[wiki/education/multi-omics-foundations/07-comparisons-and-evidence|the evidence ladder]] to distinguish an authentic variant, pathway activity, dependency, and treatment benefit.

## Choose a lesson

| Lesson | Core analogy | Report ideas covered | Main correction |
|---|---|---|---|
| **[1. Autophagy and proteostasis](/wiki/education/molecular-profiling/evee-pathways/01-autophagy-and-proteostasis)** | Bulk recycler plus precision shredder | `ATG4B`, `ATG13`, `RB1CC1`; bortezomib, chloroquine, ER stress | Several variants do not prove autophagy collapse; measure flux and rescue |
| **[2. Lipid metabolism and mTOR](/wiki/education/molecular-profiling/evee-pathways/02-lipid-and-mtor)** | Cholesterol thermostat plus growth dial | `SCAP`, `RXRA`, `PPARD`, `MTOR`, `PIKFYVE`; pitavastatin, everolimus | A damaged pathway gene does not tell whether activity is high or low |
| **[3. Notch, Wnt, and FGFR4](/wiki/education/molecular-profiling/evee-pathways/03-notch-wnt-and-fgfr)** | Contact signal, broadcast signal, and receptor antenna | `DLL4`, Wnt genes, `FGFR4`; demcizumab, nirogacestat, WNT974, futibatinib | Related gene names do not establish one active dependency; pemigatinib is an FGFR4 mismatch |
| **[4. CUL3, NRF2, ferroptosis, and BET](/wiki/education/molecular-profiling/evee-pathways/04-cul3-nrf2-ferroptosis-and-bet)** | Oxidative shield plus chromatin readers | `CUL3`, ubiquitin genes, `BRD3`; brusatol, RSL3, erastin, JQ1, birabresib | NRF2 often protects from ferroptosis; laboratory tools are not clinical options; target damage is not target dependence |
| **[5. Oxidative metabolism and stress](/wiki/education/molecular-profiling/evee-pathways/05-oxidative-metabolism-and-stress)** | Engine, sparks, and fire control | H10 oxidative phosphorylation and ROS detox; contrast with H5 NRF2/ferroptosis | A high RNA rank is not mitochondrial dependence or ferroptosis sensitivity |

## Fast visual tour

### Nutrient economy

<img src="/api/file?path=wiki%2Feducation%2Fmolecular-profiling%2Fimages%2Fnutrient-economy-light.png" alt="cartoon explaining the SCAP SREBP cholesterol thermostat and mTOR growth dial" data-theme-pair>

SCAP–SREBP adjusts cholesterol synthesis and uptake. mTOR integrates nutrient and growth signals. Both hypotheses contain the same trap: a variant in the pathway does not reveal whether the pathway is overactive, underactive, or unchanged.

### Developmental signals

<img src="/api/file?path=wiki%2Feducation%2Fmolecular-profiling%2Fimages%2Fnotch-wnt-signals-light.png" alt="cartoon explaining Notch contact signaling and Wnt secreted signaling" data-theme-pair>

Notch usually requires cell contact; Wnt is secreted. A list spanning ligands, receptors, and an RNA-binding regulator does not establish one coherent active state.

### Oxidative defense and ferroptosis

<img src="/api/file?path=wiki%2Feducation%2Fmolecular-profiling%2Fimages%2Fcul3-nrf2-ferroptosis-light.png" alt="cartoon explaining CUL3 KEAP1 NRF2 and ferroptosis" data-theme-pair>

KEAP1–CUL3 normally turns NRF2 over. Persistent NRF2 can create an antioxidant shield that resists lipid oxidation. A dependency on that shield is possible, but it must be measured rather than assumed.

The historical H10 RNA comparison asked a different question: it combines oxidative phosphorylation with ROS detoxification. [[wiki/education/molecular-profiling/evee-pathways/05-oxidative-metabolism-and-stress|The oxidative-metabolism lesson]] separates the mitochondrial engine, its ROS “sparks,” antioxidant defenses, and ferroptosis.

## How to choose a lesson

Start with the mechanism you want to understand: recycling and flux, growth signaling, oxidative defense, or cell-to-cell signaling. The earlier DNA/RNA rankings are historical comparisons; they do not currently prioritize Diana’s dependencies.

The separate [[wiki/education/molecular-profiling/hrd-parp-and-dianas-biology|BRCA1/HRD lesson]] uses the newer DNA/RNA evidence and retains the distinction between research mechanism, current function, and clinical interpretation.

## Five questions to ask whenever a report names a drug

1. Is the exact variant technically confirmed?
2. Does it increase, decrease, or leave protein function unchanged?
3. Is the pathway state measured in malignant cells?
4. Does the drug actually hit the named target in the proposed direction?
5. Is benefit supported in this cancer, stage, treatment setting, and biomarker—or only in a different model?

## Conversation-ready summary

**“These pathways are real biology. The report’s highlighted variants did not reproduce, and its older RNA ranks were confounded. I can learn the mechanisms without treating those findings as evidence of a dependency in Diana.”**

## Further reading

- [[wiki/omics/evee-report-overview]] — master evidence table, drug validation, Diana-specific ranking, and Elicit review links.
- [[wiki/education/molecular-profiling/hrd-parp-and-dianas-biology]] — BRCA1, HRD, PARP, and evidence boundaries.
- [[wiki/education/molecular-profiling/03-protein-expression-and-activation]] — why DNA and RNA do not prove pathway activation.
- [[wiki/education/molecular-profiling/05-functional-drug-response]] — how organoids and other functional models test dependence.
- [[wiki/omics/analysis-workflows]] — operational raw-data and validation work.
- [[sources/research/syntheses/08-20-all-10-hypotheses-rank-based-ssgsea-vs-tcga-brca]] — preserved RNA-ranking report and caveat-first method audit.
