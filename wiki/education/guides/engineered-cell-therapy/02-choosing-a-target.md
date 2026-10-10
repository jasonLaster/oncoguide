---
title: "Choose a target with a usable safety window"
type: "guide-lesson"
sensitive: false
tags: ["education", "lesson"]
updated: 2026-10-10
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

Choose the recognition requirement before tuning the receptor or delivery. A perfect delivery system cannot turn an unsafe antigen into a safe target.

## The intuition: look beyond a positive label

“Target-positive” compresses a distribution into a label. Ask which cells carry the target, how much is accessible, and where else it occurs. Expression can differ within one lesion, between lesions and after treatment.

The [epitope](/wiki/education/concepts/immunology/antigen-presentation/antigen-and-epitope) must be accessible to the recognition element. Receptor geometry and epitope accessibility can matter even when the underlying protein is present. RNA abundance does not directly measure accessible surface density.

## A target worksheet

| Question | Useful evidence | Tempting overread |
|---|---|---|
| Which cancer cells display it? | Appropriate protein and spatial measurements across relevant samples | One positive region represents every lesion |
| How much is accessible? | Product-relevant binding and functional assays | Any staining exceeds the CAR’s activation threshold |
| Where does healthy tissue express it? | Relevant normal-tissue distribution and functional testing | “Tumor-associated” means tumor-exclusive |
| Can coverage change? | Serial samples and resistant-population analysis | The baseline sample stays representative forever |
| Does recognition create a usable window? | Dose, function and safety evidence for the complete product | Strong binding alone proves a better therapy |

Targets studied in solid tumors include many normal human proteins. A named target is a research category, not evidence of eligibility or a recommendation. Dated programs and target menus belong in [the therapeutic landscape](/wiki/treatment/therapeutics/car-t).

## Worked example: coverage and harm

Invented numbers for learning: a tumor has 100 cells; 70 strongly display target X and 30 do not. A model CAR-X kills the 70 positive cells. The mass shrinks, but the negative cells remain.

Now add a healthy tissue with low X expression. Increasing sensitivity might improve recognition of some target-low cancer cells while also increasing healthy-tissue injury. The comparison needs both benefit and harm measurements. “More sensitive” is not a complete design goal.

## On-target and off-target are different

[[wiki/education/concepts/therapeutics/toxicities-and-supportive-care/on-target-off-tumor-toxicity|On-target, off-tumor injury]] involves the intended antigen on healthy cells; **off-target recognition** involves an unintended molecular target. A normal-tissue problem can exist even with a highly specific binder. Use the concept page for the mechanism and a product-specific clinical example.

[Logic gates](/wiki/education/concepts/therapeutics/cell-therapies/logic-gated-cars) may broaden coverage or restrict activation, depending on the input rule. An OR-like system accepts either target; an AND-like system aims to require a combination. Coverage and selectivity are different objectives. A new recognition rule also needs testing of expression, timing and failure behavior.

## Specify the target at the level the receptor reads

For [engineered T-cell receptor therapy (TCR-T)](/wiki/education/concepts/therapeutics/cell-therapies/tcr-t), the recognition target is a peptide–HLA complex. Source-protein abundance, compatible HLA type and actual presentation are separate measurements. The [TCR concept](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) explains the paired recognition surface and cross-reactivity: one receptor can recognize multiple peptide–HLA targets. A sequence match or strong intended-target binding cannot replace testing of unintended targets and healthy-tissue interactions. An intracellular protein can supply a peptide target without becoming an accessible surface protein for a conventional CAR.

For a CAR, identify the binding region's epitope and its accessibility on intact cells. A [single-chain variable fragment (scFv) or single-domain binder](/wiki/education/concepts/engineering-and-manufacturing/binders/scfv-and-vhh-nanobodies) supplies one recognition module. Its format does not establish safe expression of the antigen. A more sensitive receptor can notice target-low cancer cells and target-low healthy cells alike.

## Read two real recognition designs

**TECELRA (afamitresgene autoleucel): a peptide target.** The June 2026 FDA label describes a patient's own T cells engineered with a receptor for a melanoma-associated antigen A4 (MAGE-A4) peptide on particular HLA-A*02 molecules. MAGE-A4 is intracellular. Its name on a protein report does not establish the receptor's complete target. The label concerns a defined synovial-sarcoma population; it does not establish a breast-cancer indication. See the [label's recognition and manufacturing descriptions](https://www.fda.gov/media/180565/download?attachment=).

**B7-H3/TROP2 synthetic Notch design: a conditional surface target.** A 2025 primary study tested a B7-H3 sensor that induced a CAR against trophoblast cell-surface antigen 2 (TROP2). Human-cell experiments assessed tumor activity. Separate mouse-cell versions tested injury in mice engineered to express human TROP2. The ungated design damaged lungs; the gated version avoided the measured injury in that model. This is [preclinical evidence](/wiki/education/concepts/evidence-and-statistics/study-design/preclinical-evidence), not demonstrated patient safety. B7-H3 detection, induction delay and persistence of the induced receptor remain distinct questions. [Primary study](https://jitc.bmj.com/content/13/9/e012442).

| Recognition specification | What must be present? | Measurement still needed |
|---|---|---|
| TROP2-directed surface CAR | Accessible TROP2 epitope | Tumor coverage and normal-tissue recognition by that CAR |
| B7-H3-induced TROP2 CAR | Priming signal plus the induced receptor's target | Joint distribution, induction, persistence and function |
| MAGE-A4-directed TCR | The correct peptide–HLA complex | HLA compatibility, natural presentation and receptor-specific function |

Treat this as a design-reading exercise. Neither a shared target name nor success with another drug format transfers a product's safety window.

## What can go wrong at this step

Sampling misses negative populations. Assays measure intracellular rather than accessible protein. A target changes after therapy. Healthy tissue under inflammation may differ from the baseline comparison. These uncertainties belong beside the target-positive result.

## Try it

A CAR kills every target-positive cell in a dish. What remains unresolved before calling the target suitable?

**Answer:** Coverage across relevant tumor cells, healthy-tissue recognition, access, product behavior and clinical safety. The assay establishes activity under its tested conditions.

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
