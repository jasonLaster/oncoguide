---
title: "PDX, organoid or tumor fragment: choose by the question"
type: "comparison"
domain: "measurement/functional-models"
summary: "PDX, organoids and tumor fragments preserve different cells and surroundings and take days, weeks or months to answer; the useful choice depends on the question and the decision window."
glossary_anchor: "pdx-vs-organoid-vs-tumor-fragment"
aliases: ["PDX vs organoid vs ex vivo fragment", "PDX vs organoid vs tumor fragment"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/measurement/functional-models/patient-derived-xenograft]]", "[[wiki/education/concepts/measurement/functional-models/organoid]]", "[[wiki/education/concepts/measurement/functional-models/ex-vivo-tumor-fragments]]"]
used_by: []
sensitive: false
tags: ["education", "functional-models", "comparison"]
updated: "2026-11-07"
source_checked: "2026-11-07"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# PDX, organoid or tumor fragment: choose by the question

## In one sentence

PDX, organoids and tumor fragments preserve different cells and surroundings and take days, weeks or months to answer; the useful choice depends on the question and the decision window.

## The intuition

You can study a plant by moving it into another garden, growing selected seeds in a greenhouse, or lifting a small patch of soil with its neighbors for an afternoon. The transplant shows whole-plant growth but slowly, in foreign soil. The greenhouse lets you test many conditions on chosen seeds. The soil patch keeps the original neighbors, but only briefly. None transports the entire original ecosystem.

- A **patient-derived xenograft (PDX)** grows human tumor material in another species, usually an immunodeficient mouse.
- An **organoid** is a three-dimensional culture of tumor cells that organizes into selected tissue features.
- An **ex vivo tumor fragment** (or slice) is a piece of living tumor kept alive outside the body for a short experiment.

## What they share

All three start from living patient tumor, so all three need fresh viable tissue rather than formalin-fixed tissue (see [FFPE versus fresh-frozen versus viable](/wiki/education/concepts/measurement/specimens/ffpe-vs-fresh-frozen-vs-viable)). All three can fail to produce a result, and none reproduces whole-body drug metabolism, healthy-organ toxicity or recruitment of new immune cells from blood.

## The axis on which they differ

They trade **time and expandability** against **how much of the original neighborhood survives**. The fragment keeps the most original neighbors for the shortest time. The organoid keeps selected tumor cells and can be expanded and re-tested. The PDX adds a living circulation, but a mouse's, and takes the longest.

<div class="cartoon-frame">
<img src="./images/pdx-vs-organoid-vs-tumor-fragment-comparison-compartments-v1-light.svg" width="600" height="1800" data-theme-pair alt="Three stacked fictional preparations. PDX P has human tumor cells within mouse supporting tissue and circulation. Organoid O contains selected human tumor cells in a supplied gel with no demonstrated T-cell compartment. Fragment F retains local human tumor cells, T cells and matrix in a cut tissue piece without perfused blood flow. These contents indicate what to check, not a hierarchy or a functional result.">
<p class="cartoon-caption">Each model keeps a different compartment: the PDX swaps in mouse support and circulation, the organoid keeps selected tumor cells in a gel, and the fragment keeps local neighbors without blood flow.</p>
</div>

## Side by side

| Check | Conventional PDX | Tumor organoid | Ex vivo tumor fragment or slice |
|---|---|---|---|
| Time to a first result | **Months.** Developing a PDX ready for a drug study normally takes 4–8 months [1] | **Weeks.** Median 6 weeks (range 4–10) from biopsy to a 25-drug panel in colorectal cancer [2]; mean 6.8 weeks in pancreatic cancer [3] | **Days.** Breast biopsy slices were exposed to anthracycline chemotherapy for 3 days [4] |
| How often a model is obtained | Varies by tumor type; more aggressive tumors generally engraft more often [1] | 61.5% of colorectal core biopsies [2]; 62% in pretreated pancreatic cancer [3] | 23 of 30 breast biopsies gave a usable result [4] |
| What survives | Human malignant cells; human stroma and vessels are largely replaced by mouse tissue [5] | Selected tumor populations; conventional cultures usually lack immune and supporting cells [6] | Original tumor cells, immune cells and matrix, but no blood flow, and viability falls with time |
| Throughput and repeat testing | Few drugs per model; can be passaged into more mice | Many drugs at once; can be frozen and re-tested | Few conditions; limited by the tissue piece; cannot be re-grown |
| Best-fit question | Growth under whole-animal dosing in a characterized graft | Direct tumor-cell response to many drugs | Short-term local response, including immune activity in the original neighborhood |

## What agreement with patients has looked like

These are the kinds of numbers a reader should ask for. Each is one small study in one setting.

| Model | Study and population | Result |
|---|---|---|
| Fragment or slice | Ladan 2023: breast cancer biopsies before neoadjuvant chemotherapy [4] | 15 of 20 evaluable patients (75%) matched their MRI response. No tumor tested resistant in the dish, so the assay's ability to flag resistance was untested |
| Organoid | Vlachogiannis 2018: heavily pretreated metastatic gastrointestinal cancers, 21 drug–patient comparisons [7] | Positive predictive value 88%, negative predictive value 100% |
| Organoid | Boilève 2024: 34 evaluable patients with pretreated pancreatic cancer [3] | Sensitivity 83.3%, specificity 92.9% |
| Fragment | Voabil 2021: patient tumor fragments exposed to an anti-PD-1 antibody [8] | The ability of immune cells to reactivate in the fragment was associated with clinical response to PD-1 blockade |

These are agreement studies. None shows that choosing treatment by the model improves survival; that needs a trial comparing model-guided with standard choice (see [how a model earns trust](/wiki/education/concepts/measurement/functional-models/how-a-model-earns-trust)).

## When each wins

- **Fragment:** the decision is days away and the question needs the original immune neighbors, as with checkpoint antibodies.
- **Organoid:** you need to compare many drugs and can wait weeks.
- **PDX:** you need whole-animal exposure or growth over time, and the answer can wait months, as in drug development rather than a single patient's next step.

**Mental model:** fragment = original neighbors, days; organoid = chosen cells, many drugs, weeks; PDX = living host, months.

## Try it

A team must choose a post-surgery treatment within three weeks and wants to know whether a checkpoint antibody reactivates the tumor's own T cells. Which model fits?

**Answer:** a fragment. It keeps resident T cells and returns a result in days. A conventional organoid usually lacks the T cells, and a PDX takes months in a host without a human immune system. The fragment result would still be one small-sample laboratory association, not proof of patient benefit.

## Common confusions

- **“Patient-derived means patient-identical.”** Sampling, culture and engraftment select populations.
- **“A failed model means a resistant tumor.”** A culture or graft that does not grow gives no result; keep it in the denominator.
- **“I can see T cells, so the immune mechanism works.”** Presence, movement, recognition and killing are different measurements.
- **“More complex is better.”** Complexity helps only when it supplies biology the question needs, inside the time available.

## Explain it back

“For a decision due in ___, I would choose ___ because it keeps ___ ; it still leaves out ___.”

**One possible answer:** “two weeks; a fragment; the tumor's own immune cells; blood flow, whole-body metabolism and proof of patient benefit.”

## Takeaway

**Pick the model whose preserved biology matches the question and whose time to result fits the decision.**

## Related concepts

- [Patient-derived xenograft](/wiki/education/concepts/measurement/functional-models/patient-derived-xenograft)
- [Organoid](/wiki/education/concepts/measurement/functional-models/organoid)
- [Ex vivo tumor fragments](/wiki/education/concepts/measurement/functional-models/ex-vivo-tumor-fragments)
- [How a model earns trust](/wiki/education/concepts/measurement/functional-models/how-a-model-earns-trust)
- [Choose a tumor model for the question](/wiki/education/modeling-tumor-response/index)

## Sources and scope

Source check: November 7, 2026. Times and agreement figures come from the named studies and do not generalize to every laboratory. Expert and learner review remain pending.

1. [Hidalgo et al., 2014: patient-derived xenograft review](https://pmc.ncbi.nlm.nih.gov/articles/PMC4167608/) — 4–8 months to a study-ready PDX; take rates (PMID 25185190).
2. [Cartry et al., 2023: organoids in advanced colorectal cancer](https://doi.org/10.1186/s13046-023-02853-4) — 61.5% take from core biopsies; 6-week median turnaround (PMID 37880806).
3. [Boilève et al., 2024: organoids in advanced pancreatic cancer](https://doi.org/10.1053/j.gastro.2024.05.032) — 62% take; 6.8-week mean turnaround; sensitivity and specificity in 34 evaluable patients (PMID 38866343).
4. [Ladan et al., 2023: breast biopsy slice anthracycline assay](https://pmc.ncbi.nlm.nih.gov/articles/PMC10542784/) — 3-day exposure; 23/30 usable; 15/20 concordant with MRI response.
5. [DeRose et al., 2011: breast-tumor grafts and species-specific stroma](https://pmc.ncbi.nlm.nih.gov/articles/PMC3553601/).
6. [Neal et al., 2018: immune-containing tumor organoids](https://pubmed.ncbi.nlm.nih.gov/30550791/) — a specialized method; conventional organoids lack these cells.
7. [Vlachogiannis et al., 2018: organoids in metastatic gastrointestinal cancer](https://pmc.ncbi.nlm.nih.gov/articles/PMC6112415/) — 21 comparisons; PPV 88%, NPV 100% (PMID 29472484).
8. [Voabil et al., 2021: ex vivo tumor fragments and PD-1 blockade](https://doi.org/10.1038/s41591-021-01398-3) (PMID 34239134).
