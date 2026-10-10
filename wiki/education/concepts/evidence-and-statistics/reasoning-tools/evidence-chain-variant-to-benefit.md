---
title: "The evidence chain from variant to benefit"
type: concept
domain: evidence-and-statistics/reasoning-tools
summary: "The evidence chain from variant to benefit separates a supported sequence finding, its biological effect, a relevant drug response and evidence of benefit in people."
glossary_anchor: evidence-chain-variant-to-benefit
aliases: [variant-to-benefit evidence chain, evidence chain from variant to benefit]
level: foundation
prerequisites:
  - "[[wiki/education/concepts/evidence-and-statistics/biomarkers/actionability]]"
  - "[[wiki/education/concepts/measurement/computational-analysis/variant-effect-prediction]]"
used_by: ["[[wiki/education/guides/from-variant-to-drug/01-authenticate-and-attribute-the-finding]]","[[wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access]]","[[wiki/education/guides/from-variant-to-drug/index]]"]
sensitive: false
tags: [education, evidence-and-statistics]
updated: 2026-10-10
source_checked: 2026-10-10
reviewed: pending
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# The evidence chain from variant to benefit

## In one sentence

The evidence chain from variant to benefit separates a supported sequence finding, its biological effect, a relevant drug response and evidence of benefit in people.

## The intuition

A correct address does not tell us whether a parcel was delivered, opened or useful. Each is a different observation. A molecular report has similar handoffs: a real sequence change can be important without supporting the drug claim placed beside it.

The analogy stops at biology. There is no single mandatory experimental sequence for every medicine, and not every effective treatment starts with a mutation. This chain is a way to examine a **variant-based treatment claim**, keeping missing evidence visible.

## How it works

A variant is a change in [deoxyribonucleic acid (DNA)](/wiki/education/concepts/biology-basics/molecules/dna) sequence relative to a reference. [Variant calling](/wiki/education/concepts/measurement/sequencing-basics/variant-calling) supports the observation. [Effect prediction](/wiki/education/concepts/measurement/computational-analysis/variant-effect-prediction) supplies a model-based hypothesis. Neither automatically demonstrates what the altered gene product does in the tumor.

| Link to examine | What would strengthen it | What remains separate |
|---|---|---|
| Finding → biological effect | Relevant expression and controlled functional evidence for the exact alteration | Another variant in the same gene can behave differently |
| Effect → cancer dependence | Perturbation and suitable rescue or complementary controls | An active pathway need not be required for growth |
| Dependence → drug effect | Relevant exposure and verified action on the intended target | The drug may have other effects or fail to reach the tumor |
| Drug effect → patient benefit | Clinical evidence matching disease, biomarker, setting and comparison | Eligibility, availability and an individual's outcome |

An assay must fit the mechanism it is asked to test. A protein-only expression construct, for example, may miss a variant's effects on [ribonucleic acid (RNA) processing](/wiki/education/concepts/biology-basics/genetics/splicing). “Functionally normal” means normal in the measured assay; it need not cover every relevant function. The primary functional-evidence recommendations make those limits explicit. [Brnich et al., 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6938631/).

## Why it matters in cancer

An activating change, a loss of function and high protein abundance are different biological findings. Inhibiting the named protein does not follow from all three. Other cells in the sample, parallel pathways and treatment history can also change the hypothesis.

[Target engagement](/wiki/education/concepts/therapeutics/how-drugs-work/chemical-probe-vs-drug-and-target-engagement) means a drug affects its intended target under the measured conditions. It does not by itself show cancer-cell death, tumor response or survival benefit. Those outcomes need their own measurements.

[Clinical actionability](/wiki/education/concepts/evidence-and-statistics/biomarkers/actionability) asks whether the finding supports a specific decision. The European Society for Medical Oncology's clinical-actionability framework separates relevant human evidence, adjacent clinical evidence and preclinical support. A plausible pathway match cannot erase the disease and treatment-setting boundary. [Mateo et al., 2018](https://pubmed.ncbi.nlm.nih.gov/30137196/).

## The evidence card

Keep the sequence identity, specimen, assay version, controls and interpretation together. For each additional claim, name the readout and units: altered transcript proportion, normalized protein activity, cell growth under a defined exposure, or a [clinical response rate](/wiki/education/concepts/evidence-and-statistics/endpoints/response-rates). A single combined score can conceal that these are different quantities.

At the clinical link, record population, comparator, outcome definition, follow-up and harms. Clinical benefit cannot be inferred solely from a biochemical signal. [FDA oncology endpoint guidance, 2018](https://www.fda.gov/media/71195/download).

## Common confusions

- **Pathogenic versus drug-sensitive:** causing disease and predicting a treatment response are different claims.
- **Same gene versus same alteration:** allele, direction, cell state and disease context matter.
- **Many agreeing predictions versus independent experiments:** repeated computational annotations may share data or assumptions.
- **Normal assay versus harmless variant:** a test may miss the relevant function.
- **Clinical evidence versus access:** an evidence grade does not establish an available treatment route.

## Try it

A fictional report calls a variant activating. The sequence is well supported. A drug reduces a pathway signal in the model, but cell growth is unchanged; no matched clinical comparison is supplied. Which links are supported?

**Answer:** The finding is supported, the activating interpretation remains a hypothesis unless tested, and the experiment shows a biochemical drug effect under its conditions. It has not demonstrated a growth dependence or patient benefit. Unchanged growth also does not resolve every possible drug effect; exposure, timing and assay sensitivity need review.

## Explain it back

“We measured ___; that supports ___; the missing bridge is ___.” One answer: “a lower pathway signal after drug exposure; a biochemical effect; evidence of a relevant dependence and clinical benefit.”

## Takeaway

**Name every supported link and every untested bridge before turning a molecular match into a benefit claim.**

## Related concepts

[Dependency mapping](/wiki/education/concepts/measurement/functional-models/dependency-mapping-crispr) tests requirements in specified models. [Absence of evidence](/wiki/education/concepts/evidence-and-statistics/biomarkers/absence-of-evidence) keeps an untested or uninformative link distinct from evidence against it.

## Sources and scope

Source check: October 10, 2026. General reasoning, with a fictional model. Functional variant classification and cancer drug actionability are distinct frameworks. Expert and learner review pending.

- [Brnich et al., 2019: primary functional-evidence recommendations](https://pmc.ncbi.nlm.nih.gov/articles/PMC6938631/) — assay relevance, controls and function-specific limits; not a drug-benefit validation rule.
- [Mateo et al., 2018: primary clinical-actionability framework](https://pubmed.ncbi.nlm.nih.gov/30137196/) — evidence tiers distinguish preclinical from relevant clinical support.
- [FDA, December 2018: oncology clinical-trial endpoints](https://www.fda.gov/media/71195/download) — treatment activity and clinical outcome claims.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Authenticate and attribute the finding](/wiki/education/guides/from-variant-to-drug/01-authenticate-and-attribute-the-finding)
- [Check clinical evidence and access](/wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access)
- [From a variant to a drug claim](/wiki/education/guides/from-variant-to-drug/index)
<!-- END GENERATED USED IN -->
