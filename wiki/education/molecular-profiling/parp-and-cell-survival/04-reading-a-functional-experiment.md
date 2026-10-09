---
title: "Reading a functional experiment"
tags: [education, functional-testing, PARP, autophagy, synergy]
---

# Reading a functional experiment

**A useful test asks both “did the combination work in this model?” and “what does that result actually establish?”** A lower viability readout is a starting observation. It is not automatically synergy, selective cancer-cell killing, proof of autophagy dependence, or evidence of benefit after surgery.

[[wiki/education/molecular-profiling/parp-and-cell-survival/index|Guide]] · Previous: [[wiki/education/molecular-profiling/parp-and-cell-survival/03-pi3k-akt-mtor-and-repair|PI3K, AKT, and mTOR]]

## Follow the sample to the claim

<div class="dark:hidden">
<img src="https://4pdxqyvytfd88yy1.public.blob.vercel-storage.com/sites/diana/files/wiki/education/molecular-profiling/parp-and-cell-survival/images/functional-experiment-evidence-light.png" alt="functional combination experiment and evidence limits cartoon">
</div>
<div class="hidden dark:block">
<img src="https://4pdxqyvytfd88yy1.public.blob.vercel-storage.com/sites/diana/files/wiki/education/molecular-profiling/parp-and-cell-survival/images/functional-experiment-evidence-dark.png" alt="functional combination experiment and evidence limits cartoon">
</div>

The core experiment compares a **vehicle control**, each drug alone, and the combination, using comparable conditions and replicated measurements. Vehicle means the carrier or solvent without active drug. A positive control helps show that the assay can detect a response.

For two proposed modifiers, the question is not just PARP alone versus PARP + HCQ versus PARP + PI3K inhibitor. **HCQ alone and the PI3K inhibitor alone are also needed.** Otherwise, a stronger combination result could simply be the independent effect of the added drug. More than one concentration and time point help distinguish a narrow exposure artifact from a consistent response.

## Worked example: better than either drug is not automatically synergy

These are **invented values for teaching**, not patient results. All numbers are percent viability relative to the vehicle control at one time point; lower is a larger measured effect.

| Condition | Viability |
|---|---:|
| Vehicle | 100% |
| Drug A alone | 70% |
| Drug B alone | 80% |
| A + B, example 1 | 56% |
| A + B, example 2 | 30% |

Under a simple **Bliss independence** model, expected combined viability is `0.70 × 0.80 = 0.56`, or **56%**. Example 1 is better than either single drug, yet exactly matches that model's independent-effect expectation. Example 2 is lower than expected and would be a candidate positive interaction at that dose pair.

Real analysis needs uncertainty, replication, dose-response data, and a stated reference model. Other models make different assumptions. Even reproducible laboratory synergy does not establish tolerability or clinical benefit. The numbers above are arithmetic, not a suggested clinical threshold. [Original independence model, Bliss 1939](https://doi.org/10.1111/j.1744-7348.1939.tb06990.x).

## Ask what the readout measures

| Readout | What it helps answer | Main limitation |
|---|---|---|
| ATP or metabolic viability | Did the assay signal fall under treatment? | Lower metabolism or fewer cells can reduce the signal without proving irreversible death. |
| Apoptosis / cell-death assays | Are cells entering or completing measured death processes? | A short observation window can miss delayed effects or surviving populations. |
| Regrowth after drug removal | Can survivors recover and expand? | Culture conditions and duration still shape the result. |
| Tumor identity and cell composition | Which cells contributed to the response? | A mixed culture may include nonmalignant cells or lose important tumor populations. |
| Autophagic flux and PARP trapping | Did the proposed mechanism change? | A correlated change does not establish that it caused the survival effect. |
| RAD51 with damage and proliferation controls | Is current HR function assessable? | An inadequate specimen can produce an uninterpretable low signal. |

A separate genetic perturbation and, where feasible, rescue of the altered function can strengthen a causal explanation. They are research extensions, not features guaranteed by a routine drug screen. A lab should distinguish what its standard service measures from what would require a custom collaboration.

## What leaves the dish behind

Patient-derived cells preserve some features of the specimen. Culture can also select which cells survive, and models vary in their immune cells, stromal cells, architecture, and drug penetration. Human absorption, metabolism, organ toxicity, and treatment scheduling are additional questions.

A pediatric functional-testing study demonstrated practical testing and returned treatment recommendations, but only a selected small subgroup received guided therapy. A breast proof-of-concept study compared pretreatment anthracycline assay results with MRI response. Neither validates a residual-tumor PARP combination for preventing recurrence in adult breast cancer. [Acanda de la Rocha 2024](https://pubmed.ncbi.nlm.nih.gov/38605166/), [Ladan 2023](https://pubmed.ncbi.nlm.nih.gov/37777518/).

## Why tissue planning happens before the answer is known

Formalin preserves structure for pathology but prevents a living drug culture. Fresh tissue intended for functional testing needs the receiving lab's collection, transport, and processing protocol. **Viable cryopreservation and ordinary snap-freezing are not interchangeable.** Fixed material can still answer important pathology and some functional-repair questions.

If surgery yields residual viable tumor, that may be a valuable opportunity to study cells that survived therapy. It is not guaranteed that there will be enough material or that culture will succeed. Clinical pathology, margins, nodes, residual cancer burden assessment, and required trial specimens take priority. Surgery is an opportunity to plan around, not proof that this is the only possible source of living cells.

## A discussion card for the laboratory

1. What specimen state, minimum material, handling protocol, and turnaround does **this assay** require?
2. How will you confirm viable tumor identity, representation, and assay adequacy? What produces a “no result”?
3. Will the experiment include vehicle, each single agent, combinations, dose ranges, replicates, and suitable controls?
4. Are exposures and schedules clinically plausible, and how is synergy defined?
5. Does the service measure short-term viability, cell death, regrowth, autophagic flux, or PARP trapping? Which are separate research work?
6. What validation connects its result to the relevant cancer, treatment, and disease setting?

For current arrangements and specimen decisions, use [[project-management/projects/research/diagnostics|the diagnostic workplan]] and [[wiki/questions/adjuvant-treatment|the postoperative decision page]]. For a broader comparison of organoids, tissue models, and computational prediction, see [[wiki/education/modeling-tumor-response/index|modeling tumor response]].

## Check your understanding

**“The combination beat both drugs, so it is synergistic.”** Compare it with a specified expectation from the single-agent effects, not just with the better single agent.

**“The culture responded, so this will prevent recurrence.”** The experiment concerns the sampled cells under laboratory conditions. Preventing recurrence requires evidence in that clinical setting.
