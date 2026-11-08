---
title: "Separate the address from the killing mechanism"
type: "guide-lesson"
guide: "aiming-a-drug-at-a-surface-target"
step: 1
minutes: 14
objectives: ["Distinguish an accessible surface target from a peptide–HLA target.", "Name how each format — antibody, conjugate, engager, radioligand and engineered cell — actually kills a tumor cell, with a real drug for each.", "Identify which part of a therapeutic claim a binding assay actually tests."]
prerequisites: ["[[wiki/education/concepts/immunology/antibodies-and-b-cells/antibody-structure]]", "[[wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate]]", "[[wiki/education/concepts/therapeutics/antibody-based/t-cell-engager]]", "[[wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry]]"]
sensitive: false
tags: ["education", "therapeutics"]
updated: "2026-11-07"
source_checked: "2026-11-07"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Separate the address from the killing mechanism

**Recognizing a tumor-associated target is the first part of a mechanism. The [therapeutic format](/wiki/education/concepts/therapeutics/antibody-based/target-vs-chassis) determines what can happen after recognition.**

A promising surface protein can feel like an answer: “We found something to aim at.” That is a useful beginning. Now ask what reaches it, what binds it, and what the product does next. These questions let you inspect a claim without guessing which treatment should win.

**Before you start:** [Antibody structure](/wiki/education/concepts/immunology/antibodies-and-b-cells/antibody-structure) separates recognition from other antibody functions. [Antibody-drug conjugates (ADCs)](/wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate) connect an antibody to chemical cargo. [T-cell engagers](/wiki/education/concepts/therapeutics/antibody-based/t-cell-engager) connect target recognition to T-cell activation. [Immunohistochemistry](/wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry) explains what a tissue stain measures.

## Where this step sits

This is step 1 of [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index): **recognition and action** → delivery and exposure → safety and clinical evidence → payload choice → new strategies → choosing the target itself.

## The address and the action

Four products can recognize the same surface protein and still do different things: block a signal, carry a chemical payload, recruit a T cell, or carry a radionuclide — a radioactive atom. Trastuzumab blocks signaling by [human epidermal growth factor receptor 2 (HER2)](/wiki/education/concepts/breast-cancer/receptors-and-subtypes/her2); trastuzumab deruxtecan carries a topoisomerase I payload on that same antibody; tarlatamab recruits T cells to delta-like ligand 3 (DLL3); lutetium-177-PSMA-617 carries a radionuclide to prostate-specific membrane antigen (PSMA).

**Binding is where the question starts, not where it ends.** Three reading questions carry you through any diagram: *what binds what?*, *what changes as a result?*, and *which experiment measured that change?* A picture of two molecules touching answers only the first. The same lesson applies to a target's biology: a surface protein can be a useful address without the tumor depending on it, and a growth receptor can be present without the tumor needing it. Presence, dependence and drug effect are three separate claims.

## How each format actually kills

Each format converts recognition into a different kind of damage, and each needs a different thing to go right. The sources are the mechanism sections of the products' US prescribing information.

| Format | Real agent | What kills the cell | What must also be true |
|---|---|---|---|
| **Naked antibody** | Trastuzumab (HER2) | Blocked receptor signaling, plus immune killing recruited by the antibody's tail; see [ADCC, ADCP and CDC](/wiki/education/concepts/immunology/antibodies-and-b-cells/adcc-adcp-cdc) | The tumor depends on that signal, or immune effector cells are present and working |
| **[Antibody-drug conjugate (ADC)](/wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate)** | Sacituzumab govitecan carries SN-38 to TROP-2; trastuzumab deruxtecan and datopotamab deruxtecan carry DXd; trastuzumab emtansine carries DM1; enfortumab vedotin carries MMAE | The freed payload. SN-38 and DXd are [topoisomerase I inhibitors](/wiki/education/concepts/therapeutics/chemotherapy/topoisomerase-i-inhibitors) that trap the enzyme on DNA so breaks form during copying; DM1 and MMAE break up the division spindle instead [1, 2] | The cell takes the conjugate in and releases active payload inside; see [ADC payload classes](/wiki/education/concepts/therapeutics/antibody-based/adc-payload-classes) |
| **[T-cell engager](/wiki/education/concepts/therapeutics/antibody-based/t-cell-engager)** | Tarlatamab (DLL3 and CD3) | The patient's own T cell. Holding the two cells together activates the T cell, which releases cytokines and lyses the target cell [3] | Functional T cells can reach the tumor; the same activation causes [cytokine release syndrome](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/cytokine-release-syndrome) |
| **[Radioligand](/wiki/education/concepts/therapeutics/antibody-based/radioligand-therapy)** | Lutetium-177-PSMA-617 (PSMA); actinium-225 agents in trials | Radiation from decay, which damages DNA without the drug entering the cell. Lutetium-177's beta particles travel roughly 0.6 mm in tissue and so also hit neighbors (*crossfire*); alpha emitters such as actinium-225 travel about 0.05–0.08 mm [4] | Enough absorbed dose reaches tumor, and not vulnerable organs; this is dosimetry, not binding |
| **[Engineered cell](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy)** | Chimeric antigen receptor (CAR) T cells, approved in blood cancers | A living cell that can divide, persist and kill repeatedly | The cells survive, traffic and keep working inside a solid tumor |

Two patterns fall out. First, only the ADC and the radioligand carry their own weapon; the engager borrows the immune system's, and the naked antibody partly does, so immune function becomes part of the mechanism. Second, of the two that carry a weapon, only the ADC must be taken inside the cell; the radioligand acts from wherever it binds, which is why it can work on a target that never internalizes.

Attaching cargo can itself change a binder's behavior. Many payloads repel water, so loading several can make the antibody clump and clear from blood faster: in one mouse study an eight-payload conjugate cleared three times faster than a four-payload version of the same antibody [5]. A tested binder is therefore not a tested product; see [ADC conjugation chemistry](/wiki/education/concepts/therapeutics/antibody-based/adc-conjugation-chemistry). Nor does a protein's name in a report establish that its [epitope](/wiki/education/concepts/immunology/antigen-presentation/antigen-and-epitope) — the feature a [binder](/wiki/education/concepts/engineering-and-manufacturing/binders/binder-as-a-targeting-module) grips — is exposed on living tumor cells.

The [target-versus-format comparison](/wiki/education/concepts/therapeutics/antibody-based/target-vs-chassis) owns the side-by-side map of recognition and action. The [monoclonal-antibody](/wiki/education/concepts/therapeutics/antibody-based/monoclonal-antibodies) and [radioligand-therapy](/wiki/education/concepts/therapeutics/antibody-based/radioligand-therapy) pages go deeper on those two formats. [Theranostics](/wiki/education/concepts/therapeutics/local-therapies/theranostics) connects a target-based scan with a matching treatment; a positive scan still needs product-specific interpretation.

## Two kinds of target at the surface

An antibody can recognize an exposed part of an intact surface protein, with no need for the protein to be broken into a peptide and presented by [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla). A different route recognizes a short protein fragment displayed in a peptide–HLA complex: the source protein can be intracellular, but the displayed complex must be accessible at the surface, and a [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) recognizes the pair rather than the source protein alone.

The distinction cuts across formats. [TCR mimics and TCR engagers](/wiki/education/concepts/therapeutics/antibody-based/tcr-mimics-and-tcr-engagers) separates an antibody-derived peptide–HLA binder from an engineered soluble TCR, and shows how either can be joined to a T-cell-recruiting arm; an antibody-like mimic is not automatically an engager, while [TCR-engineered T cells](/wiki/education/concepts/therapeutics/cell-therapies/tcr-t) carry the receptor on living cells. Tebentafusp is the dosed version: its target arm recognizes a specific peptide–HLA-A*02:01 complex and its [cluster of differentiation 3 (CD3)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) arm recruits T cells [6]. A [chimeric antigen receptor (CAR)](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy) usually recognizes an intact surface target instead and carries its own signaling design. Changing format does not remove a recognition requirement, and none of these routes removes the need for working immune cells.

## Worked example: one binder, four proposals

Suppose a tissue stain finds a protein in a tumor, and an antibody against it binds living target-positive cells more strongly than matched target-negative cells. Those are two observations: a protein signal in tissue, and target-associated binding in a live-cell model. Four products could be built on that antibody, and each needs a different next experiment:

- **A blocking antibody:** does it change the relevant signal, and does that change affect survival?
- **An ADC:** is active payload produced inside the cell, and do the cells respond? The [payload class](/wiki/education/concepts/therapeutics/antibody-based/adc-payload-classes) decides which response to look for.
- **A T-cell engager:** is killing T-cell-dependent, with target-negative and no-T-cell controls?
- **A radiolabeled product:** what is the distribution over time and the absorbed dose in tumor and vulnerable tissue? Binding supplies neither.

With only binding measured, all four remain proposals. [Binder discovery](/wiki/education/concepts/engineering-and-manufacturing/binders/binder-discovery) has found a candidate; [format-specific constraints](/wiki/education/concepts/engineering-and-manufacturing/binders/format-constraints-on-binders) determine the next tests.

**Transfer check:** the ADC still binds, but processing produces little active payload, and a report proposes moving the same binder into a T-cell engager. Does changing the action solve the problem?

**Answer:** The result locates a problem in the chemical-action route, and an engager uses a different action, so that particular failure need not apply. But the engager has not yet earned binding geometry, productive T-cell contact, healthy-tissue safety or clinical benefit. A plausible change of mechanism is a new proposal, not a demonstrated rescue.

## What can go wrong at this step

**Expression can be mistaken for access.** A stain neither recreates living tissue nor establishes delivery throughout a tumor; start with the assay's [measurement scope](/wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry).

**Recognition can be mistaken for dependence.** A delivery address need not drive cancer growth, while a blocking strategy needs its own functional rationale.

**HLA independence can be stretched into immune independence.** Avoiding one recognition requirement does not remove [T-cell functional constraints](/wiki/education/concepts/immunology/t-cells/t-cell-states).

**A shared target can be mistaken for shared safety.** Action, distribution and exposure change the consequences of recognizing healthy tissue; see [on-target, off-tumor toxicity](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/on-target-off-tumor-toxicity).

**A diagram can draw the wrong partner.** HER2 has no known ligand of its own; it signals by pairing with other family receptors, as a structure of the HER2–HER3 complex shows [9]. A figure showing a growth factor landing on HER2 teaches an interaction that does not happen; see [ligands and receptors](/wiki/education/concepts/biology-basics/signaling/ligand-and-receptor).

## Try it

A tumor model loses [beta-2 microglobulin (B2M)](/wiki/education/concepts/immunology/antigen-presentation/b2m), and an assay confirms loss of the class-I peptide–HLA complex a proposed engager recognizes. An intact surface target on the same cells remains accessible. What survives from the proposal?

**Possible answer:** the peptide–HLA route has lost its measured target, while a product recognizing the intact protein could still bind. That says nothing yet about payload delivery, effective T-cell recruitment, healthy-tissue safety or clinical outcome.

## Explain it back

Complete: “The binder tells me ______. The format tells me ______. A binding assay alone cannot show ______.”

**One possible answer:** the binder tells me which molecular feature can be recognized. The format tells me which action and additional requirements follow. A binding assay alone cannot show useful killing, a safety window, or benefit in people.

## Takeaway

**Keep recognition, biological action, and clinical benefit as separate claims, each supported by an appropriate measurement.**

**Next:** [Follow delivery, exposure, and the treatment clock](/wiki/education/guides/aiming-a-drug-at-a-surface-target/02-timing).

## Sources and scope

Source check: November 8, 2026 for the kill-mechanism table and the reading questions; real-product examples and cargo effects added November 7, 2026; earlier content checked October 9–13, 2026. General mechanisms with one fictional exercise; expert and learner review remain pending. This lesson does not establish treatment selection or access.

1. [Sacituzumab govitecan prescribing information, section 12.1](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=57a597d2-03f0-472e-b148-016d7169169d) — TROP-2 binding, internalization, SN-38 release and topoisomerase I inhibition.
2. [Trastuzumab deruxtecan prescribing information, section 12.1](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7e67e73e-ddf4-4e4d-8b50-09d7514910b6) — internalization, lysosomal linker cleavage and membrane-permeable DXd.
3. [Tarlatamab prescribing information, section 12.1](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1e7b6163-5d83-42ea-82c9-cf7620cdc782) — DLL3 and CD3 binding, T-cell activation, cytokine release and lysis of DLL3-expressing cells.
4. [Sgouros et al., 2020](https://pubmed.ncbi.nlm.nih.gov/32728208/) — radiopharmaceutical therapy review, including approximate emission ranges in tissue by radionuclide; with [Sartor et al., 2021: VISION](https://pubmed.ncbi.nlm.nih.gov/34161051/) for lutetium-177-PSMA-617 in prostate cancer.
5. [Hamblett et al., 2004](https://pubmed.ncbi.nlm.nih.gov/15501986/) and [Lyon et al., 2015](https://pubmed.ncbi.nlm.nih.gov/26076429/) — drug loading, hydrophobicity, faster clearance and the therapeutic index of conjugates.
6. [Tebentafusp prescribing information, mechanism section](https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=24a49f57-d2fc-4ffe-9eb1-fe0460c6b067) — a soluble TCR/CD3 engager with a specific peptide–HLA target.
7. [NCI: monoclonal antibodies](https://www.cancer.gov/about-cancer/treatment/types/immunotherapy/monoclonal-antibodies) and [NCI: CAR T cells](https://www.cancer.gov/about-cancer/treatment/research/car-t-cells) — antibody effector mechanisms and living-cell behavior.
8. [FDA, 2024: ADC clinical pharmacology](https://www.fda.gov/media/155997/download) and [FDA, 2019: therapeutic radiopharmaceutical development](https://www.fda.gov/media/129547/download) — product components, exposure measurement and dosimetry questions.
9. [Diwanji et al., 2021](https://pubmed.ncbi.nlm.nih.gov/34759323/) — the HER2-HER3 structure: HER2 signals through partnership rather than its own ligand.
