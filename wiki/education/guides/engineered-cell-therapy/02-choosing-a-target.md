---
title: "Choose a target with a usable safety window"
type: "guide-lesson"
sensitive: false
tags: ["education", "lesson"]
updated: 2026-10-11
source_checked: 2026-10-10
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
minutes: 10
guide: "engineered-cell-therapy"
step: 2
objectives: ["Read target positivity as a distribution.", "Distinguish on-target off-tumor injury from unintended binding."]
prerequisites: ["[[wiki/education/concepts/therapeutics/cell-therapies/car-anatomy]]", "[[wiki/education/concepts/immunology/t-cells/t-cell-receptor]]"]
---

# Choose a target with a usable safety window

**A target must support enough tumor recognition while limiting harmful recognition of healthy tissue.** A disease name is not a target specification. This is step two of the [engineered-cell guide](/wiki/education/guides/engineered-cell-therapy/index).

**Before you start:** [A chimeric antigen receptor (CAR)](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy) usually recognizes an accessible surface feature. [A conventional T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) recognizes a peptide–[[wiki/education/concepts/immunology/antigen-presentation/hla|human leukocyte antigen (HLA)]] complex.

## Where this step sits

Choose the recognition requirement before tuning the receptor or delivery. Delivery cannot turn an unsafe antigen into a safe target.

## The intuition: look beyond a positive label

“Target-positive” compresses a distribution into a label. Ask which cells carry the target, how much is accessible, and where else it occurs. Expression can differ within one lesion, between lesions and after treatment.

The [epitope](/wiki/education/concepts/immunology/antigen-presentation/antigen-and-epitope) must be accessible to the recognition element. RNA abundance does not directly measure accessible surface density.

## TNBC recognition and measurement board

[Triple-negative breast cancer (TNBC)](/wiki/education/concepts/breast-cancer/receptors-and-subtypes/tnbc) names a subtype, not one receptor target. Compare these eight research categories by **recognition specifications and missing measurements**, rather than treatments or clinical maturity.

Read [immunohistochemistry](/wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry) for tissue location and distribution, and [flow cytometry](/wiki/education/concepts/measurement/immune-monitoring/flow-cytometry) for defined cell populations. A staining antibody, the proposed receptor's binder and a soluble-protein assay may recognize different features. Keep their identities visible.

| Research label<br>and molecular<br>identity | What the receptor must read | Tumor-coverage measurement | Healthy-tissue measurement | Source context and boundary |
|---|---|---|---|---|
| **TROP2**: trophoblast cell-surface antigen 2, encoded by TACSTD2 | The actual binder's accessible TROP2 epitope | Membrane distribution plus binder-matched intact-cell binding; include negative cells | Matched binding and functional tests in relevant epithelial tissues | [Sun 2025](https://jitc.bmj.com/content/13/9/e012442): human TNBC cells and separate human-TROP2 mouse systems. Their results are not patient safety. |
| **B7-H3**: CD276 | In the cited design, a B7-H3 sensor supplies a priming input; the induced CAR reads TROP2 | Measure both inputs, their joint distribution and receptor induction/persistence | Test priming and downstream recognition in healthy contexts, not each stain alone | [Sun 2025](https://jitc.bmj.com/content/13/9/e012442): conditional preclinical design. A static double-positive image cannot establish its timing. |
| **MSLN**: mesothelin | Accessible mesothelin recognized by the specified binder | Separate tissue staining from live-cell binding and function | Include relevant mesothelial cells with the same recognition module | [Tchou 2012](https://pmc.ncbi.nlm.nih.gov/articles/PMC4964602/): breast-tissue staining and a breast-cell-line killing assay. Those are different populations, not universal TNBC coverage. |
| **MUC1\***: membrane-retained MUC1 cleavage products | The remaining extracellular epitope, with the cleavage/form and binder stated | Cleavage-sensitive intact-cell/tissue binding; generic MUC1 RNA or repeat-region staining is insufficient | Use the same epitope assay on relevant noncancerous tissues; do not assume cleavage is tumor-exclusive | [Mahanta 2008](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0002054): antibody/cleavage study, including noncancerous tissue staining; not a CAR-T safety study. |
| **Nectin-4**: the Nectin4 surface protein | The specific anti-Nectin4 binding region | Membrane localization and product-relevant live-cell binding across samples | Matched binding/function on relevant normal tissues; establish species recognition before animal inference | [Li 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9720259/): tissue surveys and functional colorectal/lung mouse models. The source's added features and separate FAP product are not evidence for every Nectin-4 design. |
| **EGFR**: epidermal growth factor receptor | The specified epitope; the cited CAR uses an mAb806-derived binder | Compare receptor-relevant binding with total EGFR staining | Test that binder on relevant normal epithelia; broad EGFR positivity cannot define its safety window | [Subham 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC10987173/): TNBC brain-metastasis tissue, cell and mouse studies. No patient benefit is inferred. |
| **ROR1**: receptor tyrosine kinase-like orphan receptor 1 | The ROR1 epitope of the actual binder; the cited construct uses R12 | Product-relevant surface recognition plus functional response | Relevant healthy-cell binding/function with the same receptor | [Stüber 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7204619/): TNBC cell cultures and a three-dimensional tissue model under a defined perturbation. It does not establish a clinical combination. |
| **TF**, meaning **tissue factor/CD142** in this cited experiment | Tissue factor bound by a factor VII light-chain recognition module | Distinguish cancer-cell from vascular-cell binding and test function | Relevant tissue/vascular contexts and coagulation-related effects need separate assessment | [Hu 2020](https://www.nature.com/articles/s41598-020-59736-3): engineered natural killer (NK) NK92MI cells and TNBC xenograft models. CAR-NK findings do not validate a different CAR-T product. |

**Two identity checks:** MUC1\* is not a synonym for every MUC1 assay: the primary paper uses it for membrane-anchored cleavage products whose cut sites were not all resolved. **TF is ambiguous without its source.** This board's cited experiment means tissue factor; the [Thomsen–Friedenreich TF antigen](https://pubmed.ncbi.nlm.nih.gov/21949831/) is a carbohydrate structure, not that coagulation protein. A shorthand label alone cannot identify an epitope.

All healthy-tissue entries are **measurements needed**, not claims that the listed tissues are safe or that a negative panel proves safety everywhere. FDA's [recognition-domain guidance, section V.A](https://www.fda.gov/media/156896/download) separates antigen expression, binder specificity and functional healthy-cell testing.

## Try it: compare the measurements before the targets

**All inputs are fictional.** In a 100-cell tumor sample, a TROP2-binding assay finds 70 accessible positive cells and 30 negative cells. A second report says B7-H3 RNA is high, but supplies no surface-binding measurement. A normal-tissue screen uses a third antibody, not either proposed receptor's binder.

**Try it:** Can you select the safer recognition design from these reports?

**Answer:** No. The assays are not equivalent. Measure receptor-relevant B7-H3 accessibility, keep the TROP2-negative population visible, and test both actual recognition modules in appropriate healthy contexts. Greater sensitivity could recognize target-low cancer cells and healthy cells alike. The missing evidence changes the next measurement; it does not select a treatment.

## On-target and off-target are different

[[wiki/education/concepts/therapeutics/toxicities-and-supportive-care/on-target-off-tumor-toxicity|On-target, off-tumor injury]] involves the intended antigen on healthy cells; **off-target recognition** involves an unintended molecular target. A normal-tissue problem can exist even with a highly specific binder. Use the concept page for the mechanism and a product-specific clinical example.

[Logic gates](/wiki/education/concepts/therapeutics/cell-therapies/logic-gated-cars) may broaden coverage or restrict activation, depending on the input rule. An OR-like system accepts either target; an AND-like system aims to require a combination. Coverage and selectivity are different objectives. Test each recognition rule’s expression, timing and failure behavior.

## Specify the target at the level the receptor reads

For [engineered T-cell receptor therapy (TCR-T)](/wiki/education/concepts/therapeutics/cell-therapies/tcr-t), the recognition target is a peptide–HLA complex. Source-protein abundance, compatible HLA type and actual presentation are separate measurements. The [TCR concept](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) explains the paired recognition surface and cross-reactivity: one receptor can recognize multiple peptide–HLA targets. A sequence match or strong intended-target binding cannot replace testing of unintended targets and healthy-tissue interactions. An intracellular protein can supply a peptide target without becoming an accessible surface protein for a conventional CAR.

## Read two real recognition designs

**TECELRA (afamitresgene autoleucel): a peptide target.** The June 2026 FDA label describes a patient's own T cells engineered with a receptor for a melanoma-associated antigen A4 (MAGE-A4) peptide on particular HLA-A*02 molecules. MAGE-A4 is intracellular. Its name on a protein report does not establish the receptor's complete target. The label concerns a defined synovial-sarcoma population; it does not establish a breast-cancer indication. See the [label's recognition and manufacturing descriptions](https://www.fda.gov/media/180565/download?attachment=).

**B7-H3/TROP2 synthetic Notch design: a conditional surface target.** A 2025 primary study tested a B7-H3 sensor that induced a CAR against trophoblast cell-surface antigen 2 (TROP2). Human-cell experiments assessed tumor activity. Separate mouse-cell versions tested injury in mice engineered to express human TROP2. The ungated design damaged lungs; the gated version avoided the measured injury in that model. This is [preclinical evidence](/wiki/education/concepts/evidence-and-statistics/study-design/preclinical-evidence), not demonstrated patient safety. B7-H3 detection, induction delay and persistence of the induced receptor remain distinct questions. [Primary study](https://jitc.bmj.com/content/13/9/e012442).

| Recognition<br>specification | What must be present? | Measurement still needed |
|---|---|---|
| TROP2-directed surface CAR | Accessible TROP2 epitope | Tumor coverage and normal-tissue recognition by that CAR |
| B7-H3-induced TROP2 CAR | Priming signal plus the induced receptor's target | Joint distribution, induction, persistence and function |
| MAGE-A4-directed TCR | The correct peptide–HLA complex | HLA compatibility, natural presentation and receptor-specific function |

Treat this as a design-reading exercise. Neither a shared target name nor success with another drug format transfers a product's safety window.

## What can go wrong at this step

Sampling misses negative populations. Assays measure intracellular rather than accessible protein. A target changes after therapy. Healthy tissue under inflammation may differ from the baseline comparison. These uncertainties belong beside the target-positive result.

## Explain it back

“A usable target needs ___ across cancer cells and ___ in healthy tissue.” One answer: “sufficient accessible coverage; an acceptable safety window.”

## Takeaway

**Assess tumor coverage and healthy-tissue recognition together for the actual receptor product.**

**Next:** [Build the receptor](/wiki/education/cellular-therapies/05-engineered-t-cell-building-blocks).

## Sources and scope

Source check: October 10, 2026; expert and learner review pending. The example is fictional; no threshold or target is recommended.

- [FDA CAR T-cell product-development guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-development-chimeric-antigen-receptor-car-t-cell-products).
- [NCI solid-tumor barriers](https://www.cancer.gov/about-cancer/treatment/research/car-t-cells).
- [Morgan et al., 2010: serious event after ERBB2-directed cells](https://pubmed.ncbi.nlm.nih.gov/20179677/) — one product and dose; the authors proposed recognition of normal lung tissue as the mechanism. This is not a universal risk estimate.
- [TECELRA prescribing information, revised June 2026](https://www.fda.gov/media/180565/download?attachment=) — recognition architecture in a specified synovial-sarcoma setting.
- [TROP2 and B7-H3/TROP2 CAR experiments, 2025](https://jitc.bmj.com/content/13/9/e012442) — distinct human-cell and mouse-cell preclinical systems.

Board check: October 11, 2026. Selected primary identity, construct and measurement sections support the added entries, with their distinct model limits. FDA description/mechanism and Sun's human/mouse scopes were rechecked for the retained examples. Earlier mechanisms retain their scope; expert and learner review pending.
