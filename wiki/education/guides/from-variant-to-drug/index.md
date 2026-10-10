---
title: "From a variant to a drug claim"
type: "guide"
goal: "Evaluate a molecular drug claim from credible finding through measured biology to clinical evidence and access."
audience: "Curious reader or caregiver; basic DNA, RNA, and protein familiarity is helpful."
minutes: 94
sensitive: false
tags: ["education"]
updated: 2026-10-10
source_checked: "2026-10-09"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# From a variant to a drug claim

**Evaluate a molecular drug claim from credible finding through measured biology to clinical evidence and access.**

A sequencing report can offer a useful clue. The next step is to find out what the clue actually supports. This guide helps you ask a sequence of concrete questions without needing to become a specialist in every pathway.

The core path takes about 46 minutes. Start with [DNA, RNA, and protein](/wiki/education/multi-omics-foundations/00-genes-rna-and-protein) if those layers are unfamiliar. [The multi-omics guide](/wiki/education/reading-a-tumor/omics-and-multi-omics) offers a fuller introduction to connecting measurements.

## The big ideas

1. A finding needs a clear specimen, assay, and attribution before it can support a biological claim.
2. A gene name does not establish the direction of a protein or pathway change.
3. A measured state and a selective survival dependence are different conclusions.
4. Clinical evidence must fit the disease, biomarker, treatment setting, and intended outcome.
5. Eligibility and access are additional gates; neither substitutes for evidence of benefit.

## The map

```mermaid
flowchart TD
 A["Authenticate and attribute<br/>the finding"] --> B["Connect a measured<br/>biological consequence"]
 B --> C["Check clinical evidence<br/>and access"]
```

## Lessons

| Step | Lesson | The question it answers | Minutes | Learning aid |
|---|---|---|---|---|
| 1 | [Authenticate and attribute the finding](/wiki/education/guides/from-variant-to-drug/01-authenticate-and-attribute-the-finding) | Is the finding credible, and which cells carry it? | 14 | A read-fraction and specimen exercise |
| 2 | [Connect repair biology to PARP sensitivity](/wiki/education/guides/from-variant-to-drug/02-connect-repair-biology-to-parp-sensitivity) | What consequence was measured, and what remains predicted? | 16 | Two models with similar scars and different current repair |
| 3 | [Check clinical evidence and access](/wiki/education/guides/from-variant-to-drug/03-check-clinical-evidence-and-access) | Does the evidence fit the intended use? | 16 | Disease, biomarker, and setting comparisons |

The repair example teaches a general method. It does not make every drug claim a homologous recombination deficiency (HRD) question. Use [the pathway mechanisms library](/wiki/education/molecular-profiling/evee-proposed-pathways) when your proposed consequence involves recycling, growth signals, lipid supply, developmental signals, or stress defenses.

## Supporting mechanistic lessons

The three-step core takes about 46 minutes. These four optional lessons add about 48 minutes of mechanism and experiment practice. They follow one connected story: a drug creates a DNA obstacle, a cell tries to repair or clear it, growth signals change several responses, and an experiment tests the result.

| Step | Lesson | The question it answers | Minutes | Learning aid |
|---|---|---|---|---|
| 4 | [PARP trapping and recycling](./04-parp-trapping-and-recycling) | What obstacle does the drug create, and what might remove it? | 12 | An obstacle cartoon and fictional models |
| 5 | [Autophagy: traffic, flow, and dependence](./05-autophagy-flux-and-dependence) | Does a busy-looking recycling system help a cell survive? | 12 | A delivery analogy and snapshot exercise |
| 6 | [Growth signals, repair, and recycling](./06-pi3k-akt-mtor-and-repair) | How can one intervention push survival in different directions? | 12 | A pathway cartoon and feedback example |
| 7 | [Read a functional experiment](./07-reading-a-functional-experiment) | What would a convincing combination result establish? | 12 | Controls and interaction arithmetic |

Keep three questions nearby: what changed, what was measured, and what conclusion follows? Amount, completed recycling, and survival dependence are different claims. A repair weakness supplies context for a hypothesis; it does not promise a drug response. A second drug can have competing effects, so the net response needs to be measured.

## Concepts you will use

For the finding, use [mutation types](/wiki/education/concepts/biology-basics/genetics/mutation-types), [germline versus somatic](/wiki/education/concepts/biology-basics/genetics/germline-vs-somatic), and [variant allele fraction versus cancer-cell fraction](/wiki/education/concepts/measurement/sequencing-basics/variant-allele-fraction-and-cancer-cell-fraction).

For the consequence, use [DNA damage and repair](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/dna-damage-and-repair-overview), [PARP inhibitors and trapping](/wiki/education/concepts/therapeutics/targeted-small-molecules/parp-inhibitors-and-trapping), [homologous recombination and HRD](/wiki/education/concepts/cancer-biology/genome-instability-and-repair/homologous-recombination-and-hrd) and [synthetic lethality](/wiki/education/concepts/therapeutics/how-drugs-work/synthetic-lethality). The supporting library links to its specialist concepts at the start of each lesson.

For translation, use [clinical actionability](/wiki/education/concepts/evidence-and-statistics/biomarkers/actionability), [prognostic versus predictive biomarkers](/wiki/education/concepts/evidence-and-statistics/biomarkers/prognostic-vs-predictive), and [analytical validity, clinical validity, and utility](/wiki/education/concepts/measurement/computational-analysis/analytical-validity-clinical-validity-and-utility). A clear mechanism and a valid measurement still leave a clinical comparison to answer.

## Keep an evidence ledger

Use the [variant-to-benefit evidence chain](/wiki/education/concepts/evidence-and-statistics/reasoning-tools/evidence-chain-variant-to-benefit) to keep the bridges visible. At each step, record the observation, its source, the conclusion it supports, and the next unresolved question. A fictional repair-gene variant may be confirmed in DNA, alter an RNA junction, and accompany a protein signal. A functional assay then asks whether repair is impaired. A clinical study asks a different question about benefit in a defined population.

[From data to a care plan](/wiki/education/molecular-profiling/07-from-data-to-care-plan) is the shared supporting lesson for this ledger. [Judging a test or vendor claim](/wiki/education/guides/judging-a-test-or-vendor-claim/index) helps assess the claim's wording and validation. [Accessing experimental therapy](/wiki/education/guides/accessing-experimental-therapy/index) develops the practical final gate.

## Applied to Diana

[The molecular profile](/wiki/care/molecular-profile) owns qualified findings. [The postoperative treatment question](/wiki/questions/adjuvant-treatment) owns the care decision. [The diagnostic workplan](/project-management/projects/research/diagnostics) owns practical specimen arrangements. This guide teaches the reasoning rather than maintaining case results.

## What is still uncertain

Selective removal of trapped PARP remains a research question. One preclinical study does not establish that broad lysosomal drugs reproduce the mechanism in patients. Exact drugs, exposure, schedule, safety, and disease setting matter.

A model can differ from the tumor in cell mixture, exposure, and environment. A pathway can be active without being a selective bottleneck. A clinical signal can be real while leaving an unstudied setting unresolved. Each uncertainty should stay attached to the claim it limits.

Source check: 2026-10-09. General education; expert and learner review pending. Study and indication examples are dated in the lessons and need a fresh check for a real clinical decision.
