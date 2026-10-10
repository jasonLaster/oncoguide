---
title: "Separate the address from the killing mechanism"
type: "guide-lesson"
guide: "aiming-a-drug-at-a-surface-target"
step: 1
minutes: 14
objectives: ["Distinguish an accessible surface target from a peptide–HLA target.", "Explain how an antibody, conjugate, engager, or engineered receptor connects recognition to action.", "Identify which part of a therapeutic claim a binding assay actually tests."]
prerequisites: ["[[wiki/education/concepts/immunology/antibodies-and-b-cells/antibody-structure]]", "[[wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate]]", "[[wiki/education/concepts/therapeutics/antibody-based/t-cell-engager]]", "[[wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry]]"]
sensitive: false
tags: ["education", "therapeutics"]
updated: "2026-10-10"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Separate the address from the killing mechanism

**Recognizing a tumor-associated target is the first part of a mechanism. The therapeutic format determines what can happen after recognition.**

A promising surface protein can feel like an answer: “We found something to aim at.” That is a useful beginning. Now ask what reaches it, what binds it, and what the product does next. These questions let you inspect a claim without guessing which treatment should win.

**Before you start:** [Antibody structure](/wiki/education/concepts/immunology/antibodies-and-b-cells/antibody-structure) separates recognition from other antibody functions. [Antibody-drug conjugates (ADCs)](/wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate) connect an antibody to chemical cargo. [T-cell engagers](/wiki/education/concepts/therapeutics/antibody-based/t-cell-engager) connect target recognition to T-cell activation. [Immunohistochemistry](/wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry) explains what a tissue stain measures.

## Where this step sits

This is step 1 of [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index): **recognition and action** → delivery and exposure → safety and clinical evidence.

## The address and the action

Imagine four products recognizing the same surface protein. One blocks a signal. One carries a chemical payload. One recruits a T cell. One carries a radionuclide, a radioactive atom. Their address may be similar, but the action and its requirements differ. Even attaching cargo can change a binder's behavior, so a tested binder is not automatically a tested therapeutic product.

A [binder is a targeting module](/wiki/education/concepts/engineering-and-manufacturing/binders/binder-as-a-targeting-module) that recognizes a molecular feature. The [epitope](/wiki/education/concepts/immunology/antigen-presentation/antigen-and-epitope) is the particular feature it recognizes. Finding the protein's name in a report does not establish that the epitope is exposed on living tumor cells. Tissue preparation, location on the cell, and product access all matter.

A surface protein can also be an address without being a survival dependency. Blocking its signal requires evidence that the blocked process matters. Delivering a payload asks whether recognition and processing deliver a damaging chemical. Redirecting T cells asks whether recognition becomes productive immune contact.

| Format | What finds the target? | What can act after recognition? | An additional requirement |
|---|---|---|---|
| Unconjugated antibody | Antibody binding region | Signal blocking or recruitment of immune effectors, depending on design | The intended biological effect must follow binding |
| Cytotoxic ADC | Antibody binding region | Chemical payload | Appropriate delivery, processing, and payload sensitivity |
| Surface-target T-cell engager | A binding region plus a CD3-binding region | Recruited T cells | Accessible, functional T cells and productive contact |
| Radioligand or radioimmunotherapy | A small molecule, peptide, or antibody | Radiation from a radionuclide | Suitable distribution and absorbed radiation dose |
| Receptor-engineered T cells | An engineered receptor on a living cell | That cell's activation and cytotoxic machinery | Cell access, function, and an appropriate recognition system |

The table is a mechanism map. It does not rank efficacy, toxicity, or readiness for a person.

Follow the linked [monoclonal-antibody](/wiki/education/concepts/therapeutics/antibody-based/monoclonal-antibodies) and [radioligand-therapy](/wiki/education/concepts/therapeutics/antibody-based/radioligand-therapy) explanations to inspect those formats. [Theranostics](/wiki/education/concepts/therapeutics/local-therapies/theranostics) connects a target-based diagnostic with a therapeutic strategy; a positive diagnostic scan still needs product-specific interpretation.

## Two kinds of target at the surface

An antibody can recognize an exposed part of an intact surface protein. The protein does not need to be broken into a peptide and presented by [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) for that recognition.

A different route recognizes a short protein fragment displayed in a peptide–HLA complex. The source protein can be intracellular, but the presented complex must be accessible at the surface. A [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) recognizes the paired peptide and HLA, rather than the source protein alone.

This distinction cuts across product formats. A peptide–HLA-directed soluble TCR can be part of a dosed engager protein. TCR-engineered T cells carry a receptor on living cells. Tebentafusp illustrates the protein format: its target arm recognizes a specific peptide–HLA-A*02:01 complex while its CD3 arm recruits T cells. The protein remains HLA-dependent for target recognition.

A [chimeric antigen receptor (CAR)](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy) usually recognizes an intact surface target and contains its own intracellular signaling design. A surface-target engager instead recruits the T cell through CD3. Neither requires that cell's native TCR to recognize the tumor peptide, but both still depend on immune-cell function.

## Worked example: the fictional target M

A tissue stain finds protein M in a fictional tumor. Investigators then show that a proposed antibody binds living M-positive cells more strongly than matched M-negative cells. These are two connected observations: protein signal in tissue and target-associated binding in a live-cell model.

Now consider three proposed products made around that antibody:

- **A blocking antibody:** investigators must test whether it changes the relevant signal and whether that change affects survival.
- **An ADC:** investigators must follow delivery and active payload production, then measure the cells' response.
- **A T-cell engager:** investigators must test T-cell-dependent activation and killing, with target-negative and no-T-cell controls.
- **A radiolabeled product:** investigators must measure distribution over time and absorbed radiation dose in tumor and vulnerable tissues. Binding alone supplies neither.

Suppose only binding has been measured. All four remain mechanistic proposals beyond binding. [Binder discovery](/wiki/education/concepts/engineering-and-manufacturing/binders/binder-discovery) has found a candidate; [format-specific constraints](/wiki/education/concepts/engineering-and-manufacturing/binders/format-constraints-on-binders) now determine the next tests. Attach the unanswered question to each product.

## What can go wrong at this step

**Expression can be mistaken for access.** A stain does not recreate every feature of a living tissue or establish delivery throughout a tumor. Start with the assay's actual [measurement scope](/wiki/education/concepts/measurement/pathology-readouts/immunohistochemistry).

**Recognition can be mistaken for dependence.** A delivery address need not drive cancer growth, while a blocking strategy needs its own functional rationale.

**HLA independence can be stretched into immune independence.** A surface-target approach avoids one recognition requirement. It does not remove [T-cell functional constraints](/wiki/education/concepts/immunology/t-cells/t-cell-states).

**A shared target can be mistaken for shared safety.** A drug's action, distribution, and exposure change the consequences of recognizing healthy tissue. [On-target, off-tumor toxicity](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/on-target-off-tumor-toxicity) concerns correct recognition in the wrong tissue.

## Try it

A fictional tumor model loses [beta-2 microglobulin (B2M)](/wiki/education/concepts/immunology/antigen-presentation/b2m), and an assay confirms loss of the class-I peptide–HLA complex a proposed engager recognizes. A different intact surface target M remains accessible. What survives from the proposal, and what needs a new test?

**Possible answer:** the affected peptide–HLA recognition route has lost its measured target. A product recognizing intact M could still bind through a different route. That observation does not show that it delivers payload, recruits effective T cells, spares healthy tissue, or improves a clinical outcome. Those claims need their own evidence.

## Explain it back

Complete: “The binder tells me ______. The format tells me ______. A binding assay alone cannot show ______.”

**One possible answer:** the binder tells me which molecular feature can be recognized. The format tells me which action and additional requirements follow. A binding assay alone cannot show useful killing, a safety window, or benefit in people.

## Takeaway

**Keep recognition, biological action, and clinical benefit as separate claims, each supported by an appropriate measurement.**

**Next:** [Follow delivery, exposure, and the treatment clock](/wiki/education/targeted-therapy-modalities/02-timing).

## Sources and scope

Source check: October 9, 2026. General mechanisms with fictional exercises; expert and learner review remain pending. This lesson does not establish treatment selection or access.

- [NCI: monoclonal antibodies](https://www.cancer.gov/about-cancer/treatment/types/immunotherapy/monoclonal-antibodies) — recognition and immune-effector mechanisms.
- [FDA, 2024: ADC clinical pharmacology](https://www.fda.gov/media/155997/download) — components and product-specific action.
- [Tebentafusp prescribing information, mechanism section](https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=24a49f57-d2fc-4ffe-9eb1-fe0460c6b067) — a soluble TCR/CD3 engager with a specific peptide–HLA target.
- [NCI: CAR T cells](https://www.cancer.gov/about-cancer/treatment/research/car-t-cells) — receptor signaling and living-cell behavior.
- [FDA, 2019: therapeutic radiopharmaceutical development](https://www.fda.gov/media/129547/download) — ligand, radiation, distribution, and dosimetry questions.
