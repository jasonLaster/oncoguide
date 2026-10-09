---
title: "Compare formats with evidence and normal-tissue risk"
type: "guide-lesson"
guide: "aiming-a-drug-at-a-surface-target"
step: 3
minutes: 16
objectives: ["Compare targeted formats by recognition, action, and bottleneck rather than a universal ranking.", "Separate normal-tissue recognition from other sources of toxicity.", "Match a clinical benefit claim to its actual product, population, setting, and comparator."]
prerequisites: ["[[wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate]]", "[[wiki/education/concepts/therapeutics/antibody-based/t-cell-engager]]", "[[wiki/education/concepts/therapeutics/toxicities-and-supportive-care/on-target-off-tumor-toxicity]]", "[[wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity]]", "[[wiki/education/concepts/evidence-and-statistics/biomarkers/actionability]]"]
sensitive: false
tags: ["education", "therapeutics"]
updated: "2026-10-09"
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Compare formats with evidence and normal-tissue risk

**The useful comparison is which bottleneck a product might address, what new risks it creates, and which clinical evidence fits the proposed use.**

After learning the mechanisms, it is natural to ask which format is best. Start one step earlier: best for which target, biological problem, person, and outcome? A good comparison makes those conditions visible. It also leaves room for an honest “we do not know yet.”

**Before you start:** [Antibody-drug conjugates (ADCs)](/wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate) require a complete chemical delivery chain. [T-cell engagers](/wiki/education/concepts/therapeutics/antibody-based/t-cell-engager) need productive immune contact. [On-target, off-tumor toxicity](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/on-target-off-tumor-toxicity) concerns healthy tissue bearing the intended target. [Tumor heterogeneity](/wiki/education/concepts/cancer-biology/what-cancer-is/tumor-heterogeneity) limits what one sample represents. [Clinical actionability](/wiki/education/concepts/evidence-and-statistics/biomarkers/actionability) connects a finding to a justified clinical use.

## Where this step sits

This is step 3 of [Aiming a drug at a surface target](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index): recognition and action → delivery and exposure → **safety and clinical evidence**.

## Compare the requirements, not just the target name

Suppose a tumor still displays a target after one therapy stops controlling it. Retained target expression is useful evidence, but it does not identify the resistance mechanism. Another product may use a different action, or may run into the same barrier.

| Comparison | What may be shared? | What changes? | What must be tested again? |
|---|---|---|---|
| Blocking antibody versus ADC | An antibody target | Signal inhibition versus chemical delivery | Functional dependence versus payload delivery and sensitivity |
| ADC versus surface-target engager | An intact surface target | Chemical payload versus recruited T cells | Processing and payload response versus immune access and function |
| Surface-target engager versus [CAR (chimeric antigen receptor) T cells](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy) | An intact surface target | Dosed protein recruiting T cells versus receptor-engineered living cells | Geometry, exposure, signaling, cell access, and safety |
| ADC versus radioligand | A target-associated address | Chemical damage versus radiation | Distribution and tissue dose, as well as biological response |

[Chimeric antigen receptor (CAR)](/wiki/education/concepts/therapeutics/cell-therapies/car-anatomy) T cells carry an engineered receptor with intracellular signaling components. A surface-target engager binds CD3 on T cells to redirect them. Calling both “T-cell treatment” is accurate but incomplete: the administered product, recognition geometry, persistence, and control mechanisms differ.

Neither format has a universal safety advantage. Protein exposure can be adjusted through a dosing regimen, but stopping dosing does not instantly undo injury. Engineered cells can persist, but persistence and durable tumor control are not guaranteed. A proposed control switch also needs evidence about what it actually stops.

A radioligand delivers radiation rather than a chemical payload. [Chemotherapy](/wiki/education/concepts/therapeutics/chemotherapy/chemotherapy) resistance does not, by itself, establish radiation sensitivity. A related imaging tracer can inform distribution, but safe therapeutic exposure still needs product-specific dosimetry: an estimate of absorbed radiation dose in relevant tissues.

## Keep the recognition requirement explicit

A [T-cell receptor (TCR)](/wiki/education/concepts/immunology/t-cells/t-cell-receptor) recognizes peptide displayed on [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla). TCR-engineered cells and peptide–HLA-directed soluble engagers both retain requirements imposed by their chosen target complex. They are different products using a related recognition route.

An intact surface-target engager or a typical CAR can avoid the HLA requirement for that recognition. This is a specific advantage when that is the measured bottleneck. It does not solve every other barrier. Target-negative populations, poor tissue access, immune dysfunction, and normal-tissue expression remain relevant.

## Normal-tissue expression changes the comparison

A target can be more abundant in tumor than healthy tissue and still produce important healthy-tissue injury. Binding strength, accessible density, exposure, and the product's action all affect the safety window. Testing a stained healthy-tissue section is helpful; testing relevant living cells and the full product asks additional questions.

Keep three mechanisms distinct. **On-target, off-tumor injury** follows recognition of the intended target on healthy tissue. **Off-target cross-reactivity** involves an unintended molecular target. **Inflammatory toxicity**, including [cytokine release syndrome](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/cytokine-release-syndrome), can follow immune activation. Several mechanisms can contribute to the same clinical event.

HER2 (human epidermal growth factor receptor 2) is the protein encoded by ERBB2. A primary case report of severe injury after a HER2-directed CAR T-cell infusion illustrates why low-level normal-tissue expression cannot simply be dismissed. It is a specific event with a proposed mechanism, not an estimate of risk for every CAR or every treatment against that target.

## Worked example: three fictional evidence cards

All three cards concern accessible surface target M. They are questions to investigate, not treatment recommendations.

**Card A: binding survives, chemical response does not.** An ADC binds and enters cells, but active payload formation is low. A controlled experiment supplying active material at its action compartment reduces survival. This supports investigating processing or delivery. A new linker or product is a hypothesis that must be tested; the target stain cannot validate the redesign.

**Card B: target survives, immune contact is scarce.** M is accessible, but very few functional T cells reach the modeled tumor region. A surface engager would need to overcome that access and function problem. Engineered-cell delivery might change part of the problem, while introducing its own trafficking, signaling, and safety questions.

**Card C: the tumor address is also a normal address.** M is present on important healthy cells. Accurate targeting can now become a source of harm. Changing from antibody to payload or T-cell activation can change the consequence of binding; the earlier product's tolerability cannot settle the new product's safety.

For each card, write four lines: observation, supported conclusion, unresolved bottleneck, and next discriminating test. This keeps a plausible mechanism from becoming an unsupported preference.

## From a model result to a clinical claim

A binding assay tests recognition. A controlled functional experiment tests activity under its conditions. A clinical study adds outcomes and harms in people. A comparative trial can address benefit relative to the actual comparator. These evidence types are connected; they are not interchangeable.

For a dated example, Nathan and colleagues' 2021 randomized tebentafusp trial studied previously untreated, HLA-A*02:01-positive people with metastatic uveal melanoma. Overall survival improved relative to the trial's investigator-selected comparator treatments. That supports a benefit claim for a specific product and population. It does not establish that every engager works, that an intact surface target behaves the same way, or that benefit transfers to breast cancer or a postoperative setting.

Read the product, disease, biomarker definition, treatment setting, comparator, endpoint, and follow-up together. Eligibility and access are later practical questions; they cannot fill a missing clinical comparison. [The evidence-to-access lesson](/wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access) develops that boundary.

## What can go wrong at this step

**A preserved target can be treated as a solved resistance problem.** Recheck which delivery or action step failed.

**A format label can substitute for a safety study.** Use the full product, relevant healthy tissues, and product-specific exposure.

**Activity can substitute for benefit.** Killing cells in a dish does not measure recurrence reduction or survival in people.

**An exciting clinical result can lose its population.** Preserve the disease, biomarker, setting, and comparator when explaining the result.

## Try it

A fictional brochure says: “M remains expressed after ADC resistance. An M-targeted engager therefore bypasses resistance and will be safer.” Which part is an observation, and which parts overreach?

**Possible answer:** retained expression is the observation, with its assay and specimen limitations. Different action makes resistance bypass a testable hypothesis, not an established result. Safety requires evidence about target access in healthy tissues, immune activation, exposure, and actual harms. Neither claim follows from the target name alone.

## Explain it back

Complete: “Before comparing formats, I need to know ______. Before claiming benefit, I need ______.”

**One possible answer:** I need the recognition route, measured bottleneck, normal-tissue risk, and each product's action and exposure. For benefit, I need clinical evidence that fits the product, population, setting, and intended outcome.

## Takeaway

**A useful comparison links a measured problem to a product-specific mechanism, safety question, and appropriately scoped clinical evidence.**

**Next:** [Judge a test or company claim](/wiki/education/guides/judging-a-test-or-vendor-claim/index), or revisit [the guide map](/wiki/education/guides/aiming-a-drug-at-a-surface-target/index) to apply the evidence ledger again.

## Sources and scope

Source check: October 9, 2026. General comparisons and fictional exercises; expert and learner review remain pending. The dated clinical example illustrates evidence scope, not an approval inventory or treatment recommendation.

- [Nathan and colleagues, 2021: randomized tebentafusp trial](https://pubmed.ncbi.nlm.nih.gov/34551229/) — defined product, HLA group, disease, setting, and comparator.
- [Primary ERBB2 CAR T-cell case report, 2010](https://pubmed.ncbi.nlm.nih.gov/20179677/) — a specific serious event and proposed normal-tissue mechanism.
- [NCI: CAR T cells](https://www.cancer.gov/about-cancer/treatment/research/car-t-cells) — receptor signaling and solid-tumor barriers.
- [Primary phase 1 solitomab study, 2018](https://pubmed.ncbi.nlm.nih.gov/30221040/) — product-specific toxicity and dose limits.
- [FDA, 2019: therapeutic radiopharmaceutical development](https://www.fda.gov/media/129547/download) — distribution and absorbed-dose safety questions.
