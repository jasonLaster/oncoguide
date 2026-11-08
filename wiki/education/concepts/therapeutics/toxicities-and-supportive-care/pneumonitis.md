---
title: "Pneumonitis"
type: "concept"
domain: "therapeutics/toxicities-and-supportive-care"
summary: "Pneumonitis is inflammation of lung tissue whose cause and severity require clinical assessment."
glossary_anchor: "pneumonitis"
aliases: ["pneumonitis", "immune-mediated pneumonitis", "checkpoint inhibitor pneumonitis", "interstitial lung disease", "ILD", "drug-induced interstitial lung disease", "ADC-related ILD"]
level: "intermediate"
prerequisites: ["[[wiki/education/concepts/immunology/the-immune-system/inflammation]]", "[[wiki/education/concepts/therapeutics/toxicities-and-supportive-care/immune-related-adverse-event]]"]
used_by: ["[[wiki/education/guides/treating-early-tnbc/01-read-the-jobs-in-the-plan]]"]
sensitive: false
tags: ["education", "therapeutics"]
updated: "2026-11-07"
source_checked: "2026-11-07"
reviewed: "pending"
reviewed_by: ""
review_status: "Source-checked; expert and learner review pending"
---

# Pneumonitis

## In one sentence

Pneumonitis is inflammation of lung tissue whose cause and severity require clinical assessment.

## The intuition

Think of the lungs as a huge surface where air and blood meet. Irritation and inflammation can make that exchange harder. “Pneumonitis” names an inflammatory lung problem, much as “engine trouble” names a problem without identifying the broken part. The analogy stops there: lungs are living tissue, and several causes can act together.

## How it works

[Inflammation](/wiki/education/concepts/immunology/the-immune-system/inflammation) changes cells, signals and tissue function. In the lungs, it can affect the air sacs and surrounding tissue. The word pneumonitis does not establish one cause. Radiation, medicines, inhaled substances, infection and other diseases can enter the assessment. In cancer-treatment reports, it often refers to noninfectious lung injury; check the report's definition. [NCI definition](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/pneumonitis).

One important setting is an [immune-related adverse event (irAE)](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/immune-related-adverse-event) after checkpoint inhibition. Immune regulation has changed, and healthy lung tissue may be injured. This is a clinical attribution, not proof from a cough or one immune marker. Treatment timing matters, including previous treatment; an immune effect may appear after treatment has stopped. [Pembrolizumab label, section 5.1](https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287).

A second setting is **interstitial lung disease (ILD)**, injury to the tissue between the air sacs, with some [antibody-drug conjugates (ADCs)](/wiki/education/concepts/therapeutics/antibody-based/antibody-drug-conjugate). It is best characterized for products carrying the payload deruxtecan. In the DESTINY-Breast04 trial in previously treated HER2-low advanced breast cancer, an independent committee attributed ILD or pneumonitis to trastuzumab deruxtecan in 12.1% of treated patients, and 0.8% died of it [Modi et al., 2022](https://pubmed.ncbi.nlm.nih.gov/35665782/). That product's label carries a boxed warning and directs interruption or permanent discontinuation by grade [trastuzumab deruxtecan label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7e67e73e-ddf4-4e4d-8b50-09d7514910b6). Across 841 people with breast cancer given datopotamab deruxtecan, which carries the same payload, the label reports ILD or pneumonitis in 3.0%, fatal in 0.2% [datopotamab deruxtecan label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2950227c-6230-4ca4-a135-46e44d9424a0). The mechanism is not settled. Rates differ by product, so each conjugate's own trial data define its risk; a shared [payload class](/wiki/education/concepts/therapeutics/antibody-based/adc-payload-classes) is a reason to check, not a measured risk.

A third setting is **radiation pneumonitis**, inflammation in lung tissue inside a radiation field, which can follow chest or breast radiotherapy. It matters when drugs are given near radiation: the trastuzumab emtansine label, for example, has separate stopping rules for radiation pneumonitis in the adjuvant setting [trastuzumab emtansine label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23f3c1f4-0fc8-4804-a9e3-04cf25dd302e). See [ADC payload toxicities](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/adc-payload-toxicity) for how lung risk compares with other payload effects.

| Setting | What causes it | Example rate or rule | Where the details live |
|---|---|---|---|
| Checkpoint inhibitor | Immune attack on healthy lung (an irAE) | Varies by study definition; see Naidoo 2017 below | [Immune-related adverse event](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/immune-related-adverse-event) |
| Deruxtecan ADCs | Drug-induced interstitial lung disease; mechanism unsettled | 12.1% with trastuzumab deruxtecan in DESTINY-Breast04; 3.0% with datopotamab deruxtecan in the breast-cancer label pool | [ADC payload toxicities](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/adc-payload-toxicity) |
| Radiation | Inflammation in lung inside the radiation field | Product labels may set separate stopping rules, as for trastuzumab emtansine | [Radiation therapy basics](/wiki/education/concepts/therapeutics/local-therapies/radiation-therapy-basics) |

Symptoms can include cough or breathlessness. Some cases first appear on imaging without obvious symptoms. A **computed tomography (CT) scan**, which uses X-rays to form cross-sectional images, can show abnormal lung patterns, but similar appearances can have different causes. Infection, cancer involving the lungs, fluid and other treatment effects remain relevant competing explanations. Breathing tests can be part of the work-up and of follow-up: an expert panel on drug-induced interstitial lung disease lists spirometry and the diffusing capacity for carbon monoxide alongside imaging and tests for infection ([Conte et al., 2022](https://pubmed.ncbi.nlm.nih.gov/35219244/)); see [pulmonary function testing](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/pulmonary-function-testing). [SITC guideline](https://pmc.ncbi.nlm.nih.gov/articles/PMC8237720/).

```mermaid
flowchart TD
  A[New lung symptom<br/>or scan finding] --> B[Clinical assessment]
  B --> C[Cause and competing<br/>explanations]
  C --> D[Severity and<br/>lung function]
  D --> E[Named finding and<br/>care-team plan]
```

*The assessment separates an observation, its cause and its consequences; it is not a home diagnostic pathway.*

## Why it matters in cancer

A treatment-associated lung event can affect safe delivery even when the tumor is responding. Conversely, a concerning scan cannot by itself establish that anticancer treatment caused the change. The clinical team combines the history, examination, oxygenation, imaging and investigations appropriate to the situation.

A useful evidence card records the treatment and population, diagnostic definition, grading version, timing, competing causes, clinical outcome and follow-up. It keeps **suspected**, **attributed** and **resolved** as different states. Improvement does not automatically establish the original cause or make restarting treatment safe.

A primary study by Naidoo and colleagues examined patients receiving checkpoint antibodies at two institutions, with advanced solid cancers at one and melanoma at the other. Lung findings and timing varied; the investigators excluded confirmed infection and malignant lung infiltration from their pneumonitis cases. That teaches why ascertainment matters. It does not supply a universal incidence or an individual rechallenge rule. [Naidoo et al., 2017](https://pubmed.ncbi.nlm.nih.gov/27646942/).

For people receiving or previously treated with checkpoint therapy, new or worsening cough, chest pain or breathlessness should be reported promptly to the treating team. Severe breathing difficulty warrants urgent medical assessment. The product's symptom-reporting instructions and the team's emergency plan matter. [Pembrolizumab label, section 17](https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287).

## How it is measured

Severity is usually graded with the National Cancer Institute's Common Terminology Criteria for Adverse Events (CTCAE), from grade 1 (mildest) to grade 5 (death) [CTCAE](https://ctep.cancer.gov/protocoldevelopment/electronic_applications/ctc.htm). Drug labels tie actions to these grades. The trastuzumab deruxtecan label, for example, treats grade 1 as asymptomatic ILD, for which treatment is withheld until recovery, and directs permanent discontinuation for symptomatic ILD of grade 2 or higher. Trials of deruxtecan products also used an independent committee to adjudicate whether a lung event was drug-related.

## Common confusions

- **Pneumonitis versus pneumonia:** oncology often uses these for noninfectious injury and infection, respectively. Naming conventions do not replace a cause assessment or rule out coexistence.
- **Scan pattern versus diagnosis:** an abnormal pattern is evidence to interpret, not a unique fingerprint of checkpoint toxicity.
- **Less inflammation versus full recovery:** symptoms, oxygen needs and imaging can recover on different timetables.
- **Observed recurrence versus personal risk:** a recurrence proportion depends on who restarted, their prior event and the follow-up.
- **Checkpoint pneumonitis versus ADC-related ILD:** both injure the lung, but they arise from different drugs and mechanisms and are managed under different product labels. A history of one is relevant information for the other, and trial eligibility rules may treat any prior pneumonitis as an exclusion.

## Try it

Fictional patient Lila develops a cough after checkpoint treatment. Her scan shows new hazy areas. A reader says, “The scan proves immune pneumonitis.” What is missing?

**Answer:** Clinical attribution and assessment of severity and competing causes. The scan supports a lung problem; it cannot identify its cause alone. Lila needs clinical evaluation rather than a diagnosis inferred from this teaching example.

## Explain it back

“Pneumonitis names ___; deciding what caused it requires ___.” One answer: “lung inflammation; the treatment history and clinical assessment of competing explanations.”

## Related concepts

- [Immune-checkpoint inhibitors](/wiki/education/concepts/therapeutics/immunotherapy/immune-checkpoint-inhibitor)
- [Immune-related adverse events](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/immune-related-adverse-event)
- [ADC payload classes](/wiki/education/concepts/therapeutics/antibody-based/adc-payload-classes)
- [Topoisomerase I inhibitors](/wiki/education/concepts/therapeutics/chemotherapy/topoisomerase-i-inhibitors)
- [Pulmonary function testing](/wiki/education/concepts/therapeutics/toxicities-and-supportive-care/pulmonary-function-testing)

## Sources and scope

Source-checked October 9, 2026; ADC-related lung disease added November 6, 2026; radiation pneumonitis, the datopotamab deruxtecan rate and grading added November 7, 2026. Expert and learner review pending. General lung-toxicity vocabulary; the example is fictional. No personal diagnosis, management or restart recommendation is supplied.

- [NCI: pneumonitis](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/pneumonitis) — broad definition and possible causes.
- [Brahmer et al., 2021: Society for Immunotherapy of Cancer (SITC) guideline](https://pmc.ncbi.nlm.nih.gov/articles/PMC8237720/) — checkpoint-related lung assessment and varied imaging appearances.
- [Naidoo et al., 2017](https://pubmed.ncbi.nlm.nih.gov/27646942/) — primary two-institution checkpoint-toxicity study; definition and population limit transfer.
- [Modi et al., 2022: DESTINY-Breast04](https://pubmed.ncbi.nlm.nih.gov/35665782/) — adjudicated drug-related ILD with trastuzumab deruxtecan in HER2-low advanced breast cancer.
- [Trastuzumab deruxtecan prescribing information](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7e67e73e-ddf4-4e4d-8b50-09d7514910b6) — boxed warning and grade-based interruption rules.
- [Datopotamab deruxtecan prescribing information](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2950227c-6230-4ca4-a135-46e44d9424a0), section 5.1 — pooled breast-cancer ILD rate and steroid-treated ILD exclusion.
- [Trastuzumab emtansine prescribing information](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23f3c1f4-0fc8-4804-a9e3-04cf25dd302e), section 5.4 — pulmonary toxicity and radiation pneumonitis rules.
- [Pembrolizumab prescribing information, revised July 2026, sections 5.1 and 17](https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287) — delayed reactions and prompt reporting of new lung symptoms.

<!-- BEGIN GENERATED USED IN -->
## Used in

- [Read the jobs in the treatment plan](/wiki/education/guides/treating-early-tnbc/01-read-the-jobs-in-the-plan)
<!-- END GENERATED USED IN -->
