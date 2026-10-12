---
title: "Compare delivery and recognition separately"
type: guide-lesson
guide: local-therapy-and-the-immune-system
step: 6
minutes: 14
objectives: ["Distinguish probe ablation, external radiation and blood-distributed radioligands.", "Separate physical cell injury, antigen-specific immune recognition and evidence for patient benefit."]
prerequisites: ["[[wiki/education/local-treatment-modalities/05-tissue-and-sample-budget]]", "[[wiki/education/concepts/therapeutics/local-therapies/hypofractionation]]", "[[wiki/education/concepts/immunology/antigen-presentation/hla]]"]
sensitive: false
tags: [education, local-treatment, therapeutics]
updated: 2026-10-09
source_checked: 2026-10-09
reviewed: pending
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Compare delivery and recognition separately

**You will learn to compare how a treatment reaches a site, how it injures cells and what evidence supports the hoped-for outcome.** Review [hypofractionation](/wiki/education/concepts/therapeutics/local-therapies/hypofractionation) and [human leukocyte antigen (HLA)](/wiki/education/concepts/immunology/antigen-presentation/hla) before the final comparison.

## The intuition: an address and an effect are different

The word “targeted” can describe a probe placed in a tumor, a shaped radiation field, or a molecule that binds a target. These are different ways of directing exposure. They do not imply the same coverage, normal-tissue risk or immune response.

Make two passes through a comparison. First trace delivery and cell injury. Then trace any proposed immune learning. Keeping those passes separate helps you see which parts are measured and which are still hypotheses.

## How delivery differs

| Approach | How exposure reaches tissue | What limits its reach | Main distinction |
|---|---|---|---|
| [Probe-based ablation](/wiki/education/concepts/therapeutics/local-therapies/ablation), such as freezing or heating | Image-guided placement of one or more probes | Access, treatment-zone coverage, margins and nearby structures | Treats selected tissue; it does not physically treat every distant site |
| External [radiation therapy](/wiki/education/concepts/therapeutics/local-therapies/radiation-therapy-basics), including [stereotactic body radiation therapy (SBRT)](/wiki/education/concepts/therapeutics/local-therapies/sbrt) where appropriate | Planned beams deliver energy from outside the body | Target definition, motion, dose distribution and normal-tissue constraints | Treats a planned volume; precise aiming still gives some normal tissue exposure |
| Radioligand therapy | A target-binding molecule carries a radioactive component through the body | Delivery, binding, retention, clearance and absorbed dose in tumors and normal organs | A systemic radiopharmaceutical approach, rather than simply another externally aimed local tool |

Radioligand therapy does not require a T cell to recognize a cancer cell for radiation to injure that cell. It also does not guarantee exposure to every microscopic deposit. Normal-organ uptake and elimination can constrain treatment even when a tumor expresses the binding target. See [FDA radiopharmaceutical guidance](https://www.fda.gov/media/129547/download).

These approaches are not a ladder from “one lesion” to “many lesions” to “invisible disease.” Their possible roles depend on the goal and evidence, as well as how exposure is delivered.

## Fractionation is a separate comparison

A fraction is a radiation treatment session. Hypofractionation describes dose per session relative to a specified conventional schedule. SBRT adds a particular approach to precise, high-dose treatment of a defined body target; session count alone cannot identify it.

FAST-Forward compared postoperative whole-breast or chest-wall schedules in a defined early-breast-cancer population, including a five-session schedule. That supplies evidence about local control and normal-tissue effects in that setting. It does not establish that every five-session course is SBRT or that fewer sessions cause more systemic immunity. [Brunt and colleagues, 2020](https://pubmed.ncbi.nlm.nih.gov/32580883/).

### Advanced optional practice: equal totals, different model assumptions

Alex compares two **invented patterns of brief external-beam fractions**: A is 15 × 2 Gy; B is 5 × 6 Gy. Both total 30 [gray (Gy)](/wiki/education/concepts/therapeutics/local-therapies/radiation-therapy-basics). No patient, tissue volume or clinical calendar is attached.

The **linear-quadratic (LQ) model** expresses these patterns as **biologically effective dose (BED)**:

`BED = n × d × [1 + d/(α/β)]`

Here `n` counts equal fractions; `d` is Gy per fraction; and **α/β (alpha/beta)** is a parameter in Gy for a specified tissue and biological endpoint. BED is a modeled quantity reported in Gy, not extra physical dose.

**Assume** one hypothetical tissue element receives each listed fraction, with negligible repair during delivery and complete repair of modeled sublethal damage between fractions. This expression omits repopulation and overall treatment time; it cannot automatically describe prolonged or internally distributed irradiation. Use **3 Gy and 10 Gy as alternative assumed α/β values**, not measurements of a person's tumor or organs. See the [International Atomic Energy Agency (IAEA) model equation](https://pub.iaea.org/MTCD/Publications/PDF/Pub1556_web.pdf#page=84).

**1. What are the physical totals and four BED values?** Calculate first.

**Worked answer:**

| Fictional pattern | Physical total, Gy | BED, Gy at assumed α/β = 3 Gy | BED, Gy at assumed α/β = 10 Gy |
|---|---|---|---|
| A: 15 × 2 Gy | 30 | 50 | 36 |
| B: 5 × 6 Gy | 30 | 90 | 48 |

Both totals are `n × d = 30 Gy`. For A: `30 × (1 + 2/3) = 50` and `30 × (1 + 2/10) = 36`. For B: `30 × (1 + 6/3) = 90` and `30 × (1 + 6/10) = 48`. Inside each bracket, Gy divided by Gy is dimensionless.

**2. Why does changing α/β change the comparison?**

**Answer:** Lower α/β gives fraction size more weight at fixed total. B minus A is 40 Gy of BED under the 3 Gy assumption, versus 12 Gy under the 10 Gy assumption. Changing the tissue, endpoint or parameter changes the comparison; numbers from different columns do not establish equivalent effects.

**3. Does higher BED prove better treatment or greater harm?**

**Answer:** It indicates a larger modeled effect under that column's assumptions, not an outcome or toxicity probability. Dose distributions, volumes, timing, other exposures and population-specific evidence remain missing. Arithmetic does not validate the model at a particular fraction size or settle parameter uncertainty.

**4. Is B automatically SBRT, or an immune optimum?**

**Answer:** Neither follows. Five fractions do not specify [SBRT's localization and delivery](/wiki/education/concepts/therapeutics/local-therapies/sbrt). This equation measures neither immune priming nor an abscopal response, and supplies no immune threshold.

**5. What would Alex request from a study?**

**Answer:** Actual dose distributions and volumes, fraction sizes and intervals, duration, population, comparator, endpoint and follow-up. Keep the existing fractionation evidence in its tested setting. Revisit [hypofractionation](/wiki/education/concepts/therapeutics/local-therapies/hypofractionation): a model worksheet establishes no care plan, safety or clinical equivalence.

## Physical killing and immune recognition

Physical injury from heat, cold or radiation can occur without peptide–HLA recognition. If the hoped-for additional effect is antigen-specific CD8 T-cell killing, the requirements change. CD8 T cells, which carry the CD8 coreceptor, need appropriate peptide–HLA display, access to the tumor and capacity to function there.

[Immunogenic cell death](/wiki/education/concepts/cancer-biology/cell-death-and-survival/immunogenic-cell-death) and [in-situ vaccination](/wiki/education/concepts/immunology/tumor-immunology/in-situ-vaccination) concern possible immune consequences. They are not automatic properties of every successfully destroyed tumor.

A [personalized manufactured cancer vaccine](/wiki/education/guides/personalized-cancer-vaccine/index) selects and delivers antigen material through a defined product and process. An in-situ vaccination strategy instead attempts to use material in the tumor within the body. It does not provide the same control over antigen selection or guarantee which fragments will be presented. Both approaches still need evidence of immune activity and clinical outcomes.

## Worked example: three uses of “targeted”

**Fictional proposals.** An educational workshop gives Alex three cards:

- Card A places a probe in a visible liver lesion to control that site.
- Card B aims external beams at a defined lung lesion while limiting exposure to nearby structures.
- Card C gives a target-binding radioactive drug and studies its distribution in tumor and normal organs.

All three direct exposure, but by different routes. Alex asks A about access and coverage, B about motion and the radiation plan, and C about uptake, retention and dosimetry. Dosimetry estimates absorbed radiation dose.

The workshop then adds the same sentence to every card: “This will train T cells to eliminate the other tumors.” Alex marks it as a separate hypothesis. Delivery information alone has not measured presentation, T-cell recognition, distant response or patient benefit.

## Common failure modes

Do not infer universal superiority of freezing over heating from antigen-preservation arguments. Do not equate higher dose with greater immune learning. Do not assume an [immune-checkpoint inhibitor](/wiki/education/concepts/therapeutics/immunotherapy/immune-checkpoint-inhibitor) repairs every missing recognition step. Compare complete strategies in matching populations rather than ranking tools by a single mechanism.

## Try it: finish the claim ladder

A fictional study reports that a probe covered its planned zone and the treated tumor remained controlled. Another study reports a response at an untreated site. What additional comparison would be needed to assess whether adding the local treatment improved progression-free survival?

**Answer:** A suitable comparison of the systemic strategy with and without the local addition, using the same defined endpoint, starting time and follow-up. Local coverage and distant response observations do not themselves answer the added-outcome question. Harms and other patient outcomes need assessment too.

## Explain it back

Choose a card and give three sentences: “It reaches tissue by ___.” “Its direct effect depends on ___.” “The proposed immune effect still needs evidence of ___.”

## Takeaway

Compare delivery, recognition and clinical evidence on their own terms. A convincing mechanism is a reason to investigate a strategy, not a substitute for its outcome comparison.

Continue with [reading cancer evidence](/wiki/education/guides/reading-cancer-evidence/index), or use [the local-treatment reference shelf](/wiki/education/local-treatment-modalities/index) to find a source for a particular question.

## Sources and scope

Source check: 2026-10-09. Alex and the cards are fictional; expert and learner review pending.

- [National Cancer Institute: external-beam radiation](https://www.cancer.gov/about-cancer/treatment/types/radiation-therapy/external-beam) — planned volumes and beam delivery.
- [RadiologyInfo: thermal ablation](https://www.radiologyinfo.org/en/info/thermal-ablation) — probe-based heating and freezing.
- [FDA 2019: oncology therapeutic radiopharmaceutical guidance](https://www.fda.gov/media/129547/download) — systemic distribution, absorbed dose and normal-organ questions.
- [Brunt et al., 2020: FAST-Forward](https://pubmed.ncbi.nlm.nih.gov/32580883/) — short postoperative breast-radiation schedules in a defined trial.
- [Galluzzi et al., 2020: immunogenic cell death guidance](https://pubmed.ncbi.nlm.nih.gov/32209603/) — evidence requirements for adaptive immune consequences.

Dose-model source check: October 11, 2026. [IAEA, 2010, *Radiation Biology*, section 3.12.7, p. 105](https://www-pub.iaea.org/MTCD/Publications/PDF/TCS-42_web.pdf#page=116) supplies the LQ parameter, complete-repair and omitted-time assumptions. [IAEA, 2013, *Management of Cervical Cancer*, Annex XI, pp. 72–73](https://pub.iaea.org/MTCD/Publications/PDF/Pub1556_web.pdf#page=84) supplies the external-beam BED equation and distinguishes prolonged irradiation. Selected teaching pages and typeset equations were read; treatment recommendations are not imported. Earlier source scopes and expert/learner review remain unchanged.
