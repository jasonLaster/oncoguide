---
title: "Bayesian and adaptive trial designs"
type: concept
domain: evidence-and-statistics/study-design
level: advanced
sensitive: false
tags: [education, evidence-and-statistics]
updated: 2026-11-08
source_checked: 2026-11-08
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
glossary_anchor: bayesian-and-adaptive-designs
aliases: [Bayesian trial design, Bayesian design, adaptive design, adaptive trial, adaptive randomization, response-adaptive randomization, platform trial, posterior probability, predictive probability, graduation]
summary: "Adaptive trial designs change features such as randomization ratios, arms or sample size by rules written in advance, and Bayesian designs express results as probabilities of an effect given the data and a starting assumption."
prerequisites:
  - "[[wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization]]"
  - "[[wiki/education/concepts/evidence-and-statistics/effect-measures/p-values-and-multiple-testing]]"
  - "[[wiki/education/concepts/breast-cancer/surgery-and-pathology-results/pcr]]"
used_by: ["[[wiki/education/guides/reading-cancer-evidence/05-read-a-real-trial]]","[[wiki/education/guides/reading-cancer-evidence/index]]"]
---

# Bayesian and adaptive trial designs

## In one sentence

Adaptive trial designs change features such as randomization ratios, arms or sample size by rules written in advance, and Bayesian designs express results as probabilities of an effect given the data and a starting assumption.

## The intuition

A weather forecaster starts the morning with a chance of rain, then revises it each hour as clouds arrive. A Bayesian trial does the same with a treatment effect: it starts from a stated assumption, called the **prior**, and updates it with data into a **posterior** probability. An adaptive trial goes further and acts on the update, for example by sending more new participants to arms that look better.

The analogy has a limit. A forecast is only as good as its model and starting assumption. A high probability that a drug "looks better" on an early endpoint is not proof that it helps people live longer.

## How it works

**Two ways to express evidence.** A [p-value](/wiki/education/concepts/evidence-and-statistics/effect-measures/p-values-and-multiple-testing) is the probability of data at least this extreme if there were no effect. A Bayesian **posterior probability** is the probability of an effect of a given size, given the data, the model and the prior. A **predictive probability** goes one step further: the chance that a future trial would succeed if it ran. A Bayesian **probability interval** (also called a credible interval) is not the same object as a [confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval).

**Adaptive features** the U.S. Food and Drug Administration (FDA) describes include [1]:

- **Response-adaptive randomization:** the chance of assignment to each arm shifts toward arms with better accumulating results. FDA calls the arguments for it "controversial," especially in two-arm trials.
- **Dropping or adding arms**, as in a **platform trial** that tests many drugs against a shared control under one protocol.
- **Sample-size changes** and early stopping, related to [interim analysis](/wiki/education/concepts/evidence-and-statistics/study-design/interim-analysis).

FDA expects every adaptation to be prespecified. Bayesian designs are usually checked by computer simulation to estimate how often they would declare a false success [1].

## Worked example: I-SPY2

I-SPY2 is a phase 2 platform trial of drugs added to standard chemotherapy before surgery, in high-risk stage II–III breast cancer [2]:

- Tumors were sorted into 8 subtypes by HER2 (human epidermal growth factor receptor 2), hormone receptors and a 70-gene assay. Each drug was judged in up to 10 **signatures**, which are prespecified groups of subtypes.
- The endpoint was [pathologic complete response (pCR)](/wiki/education/concepts/breast-cancer/surgery-and-pathology-results/pcr). Changes in magnetic resonance imaging (MRI) volume during treatment were used to predict each person's pCR early.
- Randomization within each subtype favored arms with a higher Bayesian probability of beating control.
- A drug **graduated** when its predictive probability of success in a 300-patient phase 3 trial reached 85% in a signature. It stopped for futility if that probability fell below 10% in every signature [3].

| Arm | Signature | Estimated pCR, drug vs control | Predicted phase 3 success |
|---|---|---|---|
| Veliparib plus carboplatin | Triple-negative | 51% vs 26% in triple-negative patients (the arm enrolled 72 HER2-negative patients of all hormone-receptor types, against 44 concurrent controls) | 88% [2] |
| Neratinib | HER2-positive, hormone-receptor-negative | 56% vs 33% | Graduated; 79% at final analysis [3] |
| Pembrolizumab | Triple-negative | 60% vs 22% (29 triple-negative patients on pembrolizumab) | Graduated in all 3 signatures tested [4] |

## What I-SPY2 did and did not validate

The phase 3 trials that followed show both the strength and the limits of the method.

- **Veliparib plus carboplatin.** In the BrighTNess phase 3 trial, pCR was 53% with veliparib, carboplatin and paclitaxel, 58% with carboplatin and paclitaxel, and 31% with paclitaxel alone [5]. The gain came from carboplatin. I-SPY2 had correctly flagged the *combination*, but because the arm added two drugs at once, it could not say which one worked.
- **Pembrolizumab.** In [KEYNOTE-522](/wiki/education/concepts/breast-cancer/treatment-setting/the-keynote-522-regimen), pCR in triple-negative disease rose from 51.2% to 64.8% [6]. The direction matched I-SPY2, but the gain was smaller than I-SPY2's estimate. KEYNOTE-522 had carboplatin in both arms, a different control from I-SPY2's.

So I-SPY2 validated a fast way to find regimens worth a phase 3 trial. It did not:

- show survival benefit, because its endpoint was pCR, which is not a validated trial-level substitute for survival; see [surrogate endpoints](/wiki/education/concepts/evidence-and-statistics/endpoints/surrogate-endpoints);
- isolate the effect of one drug when an arm added two;
- predict the size of a phase 3 effect against a different control;
- validate its exploratory response-prediction biomarkers for choosing a person's treatment.

## Why it matters in cancer

- Platform trials can screen many drugs with fewer patients than separate trials would need.
- "Graduated" means "promising enough for a confirmatory trial," not "proven" or "approved."
- The successor I-SPY2.2 adapts each person's treatment by response; see [response-adapted therapy](/wiki/education/concepts/breast-cancer/treatment-setting/response-adapted-therapy), which is a different idea from adaptive randomization.

## Common confusions

- **A posterior probability is not a p-value.** "95% probability that the drug is better" and "p = 0.05" answer different questions.
- **Predicted probabilities move.** Neratinib graduated at 85% and finished at 79% as data matured [3].
- **Adaptive is not improvised.** An adaptation is valid only if its rule was written before the data were seen.
- **Adaptive randomization is not response-adapted treatment.** The first changes who gets assigned to an arm; the second changes a participant's later treatment.
- **Small numbers stay small.** I-SPY2's triple-negative pembrolizumab estimate came from 29 patients on that arm.

## Try it

A headline says, "Drug X graduated from I-SPY2 with a 90% probability of success." What is the 90% a probability of?

**Answer:** That a 300-patient phase 3 trial in that signature would show a higher pCR rate, under the trial's model. It is not a 90% chance of survival benefit, and not a 90% chance that any one person responds.

## Explain it back

"I-SPY2 graduation means ___; it does not establish ___."

**One possible answer:** "A high predicted chance that a phase 3 trial would show more pCR in that subtype group; survival benefit, which drug in a combination is responsible, or the effect size against a different control."

## Takeaway

**Read a Bayesian or adaptive result by its rule and its endpoint: a high probability on an early endpoint is a reason to run the confirmatory trial, not a substitute for it.**

## Related concepts

- [Interim analysis](/wiki/education/concepts/evidence-and-statistics/study-design/interim-analysis)
- [Trial phases and randomization](/wiki/education/concepts/evidence-and-statistics/study-design/trial-phases-and-randomization)
- [Surrogate endpoints](/wiki/education/concepts/evidence-and-statistics/endpoints/surrogate-endpoints)
- [Response-adapted therapy](/wiki/education/concepts/breast-cancer/treatment-setting/response-adapted-therapy)
- [Confidence interval](/wiki/education/concepts/evidence-and-statistics/effect-measures/confidence-interval)

## Sources and scope

Source-checked November 8, 2026 against the FDA guidance text and the primary abstracts. General statistics education; expert and learner review pending. I-SPY2 estimates are Bayesian model estimates from its phase 2 reports, not phase 3 results.

1. [FDA 2019: Adaptive designs for clinical trials of drugs and biologics](https://www.fda.gov/media/78495/download) — response-adaptive randomization, Bayesian adaptive designs and simulation.
2. [Rugo and colleagues, NEJM 2016: veliparib plus carboplatin in I-SPY2](https://pubmed.ncbi.nlm.nih.gov/27406347/).
3. [Park and colleagues, NEJM 2016: neratinib in I-SPY2](https://pubmed.ncbi.nlm.nih.gov/27406346/) — graduation and futility thresholds.
4. [Nanda and colleagues, JAMA Oncology 2020: pembrolizumab in I-SPY2](https://pubmed.ncbi.nlm.nih.gov/32053137/).
5. [Loibl and colleagues, Lancet Oncology 2018: BrighTNess](https://pubmed.ncbi.nlm.nih.gov/29501363/).
6. [Schmid and colleagues, NEJM 2020: KEYNOTE-522](https://pubmed.ncbi.nlm.nih.gov/32101663/).

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read a real trial: KEYNOTE-522](/wiki/education/guides/reading-cancer-evidence/05-read-a-real-trial)
- [Read trial claims, survival statistics and single success stories](/wiki/education/guides/reading-cancer-evidence/index)
<!-- END GENERATED USED IN -->
