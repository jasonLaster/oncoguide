---
status: active
evidence_cutoff: 2026-09-01
tags: [RAG1, AMPK, mTOR, BCL2L1, neoepitope, variant-validation, research-only]
---

# RAG1 S382* pathway hypothesis — what is observed, inferred, and testable

**Short source note:** [[sources/research/syntheses/08-30-sam-rag1-s382-stop-pathway-note|Sam's RAG1 pathway note]]

**Full supplied analysis:** [[sources/research/syntheses/08-30-yugabio-rag1-s382-stop-ampk-bcl2-analysis|YugaBio RAG1 / AMPK / mTOR / BCL-2 conversation]]

**PARP/RAG follow-up:** [[sources/research/syntheses/09-01-parp-rag-functional-relationship-krita|Krita PARP/RAG synthesis and reconstructed source map]]

**Variant source:** [[sources/diagnostics/05-12-altera-tumor-profile|May 12 preliminary Altera DNA/RNA report]]

## Bottom line

The preliminary Altera table lists `RAG1 S382*` at 14% variant allele fraction and `BCL2L1 E179Q` at 7%. Those calls justify a **validation question**, but they do not yet establish that either mutant transcript or protein exists, that either change is functionally important in breast-tumor cells, or that the tumor is sensitive to AMPK activation, mTOR inhibition, a BH3 mimetic, DNA-damaging therapy, or radiation.

Three corrections are load-bearing:

1. **RAG1 is not a general DNA-repair protein.** RAG1/RAG2 is a lymphoid-specific endonuclease that creates programmed DNA breaks during V(D)J recombination; non-homologous end joining repairs those breaks. A breast-tumor DNA call does not establish that epithelial tumor cells express or use RAG1.
2. **The direction of the AMPK result is reversed in the short note and parts of the Yuga export.** The primary 2013 study reports that AMPK phosphorylation of RAG1 at S528 **enhanced** RAG catalytic activity and increased recombination in the tested substrates. It did not show downregulation, degradation, or relocalization of RAG1. [Um et al., PNAS 2013](https://doi.org/10.1073/pnas.1307928110)
3. **`S382*` is a nonsense stop, not a frameshift.** Under standard translation it ends the protein without encoding a novel amino-acid tail. The truncation therefore is not automatically a useful neoepitope. A mutation-specific peptide would require evidence for an actually translated novel sequence, such as an alternate transcript, splice junction, readthrough product, or a corrected variant annotation.

## Evidence ladder

| Level | What the current record supports | What it does not support |
|---|---|---|
| **Observed in the preliminary report** | `RAG1 S382*` at 14% VAF; `BCL2L1 E179Q` at 7% VAF | Matched-normal status, clonality, biallelic loss, RNA expression, protein expression, or functional effect |
| **Protein-sequence inference** | If the annotated RAG1 transcript is expressed and translated, a stop at residue 382 would remove the canonical catalytic core and S528 | Stable truncated protein, dominant-negative behavior, or a general DNA-repair defect |
| **Primary RAG1 mechanism** | AMPK can phosphorylate RAG1 S528 and enhance RAG activity in lymphoid recombination assays | That AMPK activation selectively kills `RAG1 S382*` breast-cancer cells |
| **Breast-cancer combination evidence** | PI3K/mTOR plus BCL-2/BCL-XL inhibition has shown synergy in breast-cancer cell models; everolimus can block adaptive MCL-1 translation in ER-positive models | A validated TNBC regimen, a clinical benefit claim, or an `RAG1 S382*` / `BCL2L1 E179Q` biomarker. [Hamunyela et al. 2017](https://doi.org/10.1016/j.tiv.2016.10.002) · [Williams et al. 2019](https://doi.org/10.18632/oncotarget.27070) |
| **Exact BCL2L1 allele** | E179Q is a charge-neutralizing substitution in BCL-XL | The supplied export's claim that it likely weakens BCL-XL or increases drug sensitivity. No exact `BCL2L1 E179Q` functional paper was found in a PubMed title/abstract search on August 30, 2026 |

The Yuga export is useful as a hypothesis trail, but its numbered citations and referenced “supporting materials” are not included in the exported file. Treat claims that cannot be traced to a linked primary source as unverified.

## PARP–RAG cross-check

The September 1 synthesis is directionally correct that its cited literature does not show a direct PARP1/2/3–RAG1/2 protein interaction or a RAG1-specific PARP-inhibitor vulnerability in epithelial breast cancer. Two case statements need correction:

1. **“The tumor has no functional RAG1” is not established.** A preliminary `RAG1 S382*` call at 14% VAF does not by itself prove biallelic loss, malignant-cell expression, stable truncated protein, or absence of all RAG-generated breaks. It may ultimately prove biologically silent in the breast tumor, but that conclusion needs the existing DNA, RNA, cell-compartment, and protein gates.
2. **The BRCA1 rationale is independent of RAG1, but it still needs clinical validation and setting-specific review.** The tumor/research record supports an HRD/BRCA1 confirmation question; it should not be shortened to an already-established clinical PARP-inhibitor indication. Eligibility and treatment choice depend on a validated biomarker, disease setting, prior therapy, current approvals/guidelines, and the oncology team.

The mechanistic lane reconstructed from the ten cited primary papers is narrower:

- With intact classical NHEJ, PARP1 is not required for ordinary V(D)J recombination in the reported mouse systems. In Ku70-deficient lymphoid models, PARP1–XRCC1/LigIII alternative end joining can repair a subset of RAG-induced breaks.
- RAG post-cleavage-complex stability, RSS sequence, and RAG2 mutations can change whether broken ends become accessible to alternative repair machinery.
- The class-switch, gene-conversion, B/T-cell development, and general DSB-pathway studies describe lymphoid diversification or DNA-repair context. They do not validate `RAG1 S382*` as a PARP biomarker in breast cancer.
- Constitutive single- or double-gene knockout is not equivalent to clinical PARP-inhibitor target coverage, PARP trapping, exposure, timing, or systemic effects. The synthesis's explanation for relatively modest clinical immunosuppression is therefore an inference, not a direct result of the cited mouse studies.

See the [[sources/research/papers/parp-rag-dna-repair/index|PARP–RAG primary-paper collection]] for full source status and boundaries.

## What is worth verifying

### 1. Establish the variants before interpreting pathways

- Reconcile genome build, transcript, codon, strand, read support, mapping quality, and tumor purity for both calls.
- Check matched normal and an orthogonal tumor assay before calling either alteration tumor-only.
- Estimate cancer-cell fraction and copy state; low VAF alone cannot distinguish subclonality from purity or local copy-number effects.
- Confirm whether `RAG1 S382*` is truly a single-nucleotide stop-gain rather than a frameshift, splice event, or annotation artifact.

### 2. Ask whether the genes are active in malignant cells

- Review gene-level RNA abundance and allele-specific reads for `RAG1` and `BCL2L1`, with tumor-cell versus lymphocyte composition in mind.
- Inspect splice junctions and transcript coverage around RAG1 exon/codon 382 for nonsense-mediated decay or alternate isoforms.
- Use protein testing only with validated reagents and controls. RAG1 IHC in a lymphocyte-containing breast specimen could report immune cells rather than malignant-cell expression.

### 3. Keep the neoepitope gate sequence-aware

- Do not rank `S382*` as a vaccine peptide merely because it truncates a protein; the ordinary upstream peptide sequence remains wild type.
- Require a defined mutant amino-acid sequence, patient HLA binding, mutant RNA expression, and preferably immunopeptidomics or a mutation-specific T-cell assay.
- If no novel translated sequence exists, treat loss of downstream RAG1 peptides as loss of antigen, not creation of a neoepitope.

### 4. Measure pathway state before considering a combination

IHC or phosphoprotein measurements could support a pathway-state screen, but static staining cannot establish drug dependence:

| Question | Candidate readouts | Boundary |
|---|---|---|
| Is AMPK engaged? | p-AMPK and the downstream substrate p-ACC | Activation state, not proof of `RAG1` coupling or selective killing |
| Is mTORC1 active? | p-S6 and p-4EBP1, interpreted with total protein and controls | Pathway activity, not proof that an mTOR inhibitor will produce apoptosis |
| Which anti-apoptotic proteins are present? | BCL-XL (`BCL2L1`), MCL-1, BCL-2, BIM and related family members | Abundance is not mitochondrial dependence and does not establish the effect of E179Q |
| What is the autophagy state? | LC3B and p62/SQSTM1 with morphology and compartment annotation | Static IHC cannot distinguish increased flux from blocked degradation |

The higher-value functional bridge is **dynamic BH3 profiling** plus an ex-vivo dose matrix of the specific mTOR/PI3K and BH3-mimetic agents, with single agents, combination controls, normal-cell controls, and predefined synergy/toxicity rules. If viable material is unavailable, the hypothesis remains untested; protein IHC alone should not be promoted into a treatment recommendation.

## Clinical boundary

The breast-cancer evidence cited here is preclinical and not specific to either reported allele. The direct ALL trial mentioned in the Yuga export, `NCT07522801`, is a not-yet-recruiting relapsed/refractory T-ALL study and is not evidence for breast-cancer eligibility or efficacy. Adding DNA-damaging drugs or radiation to this proposed combination is another independent hypothesis with substantial normal-tissue and marrow-toxicity implications; it should not be inferred from the two preliminary variant calls.

For Diana, the immediate value is a compact validation packet, not a drug combination: confirm the calls, malignant-cell expression, protein/pathway state, and functional dependence in that order.

## Sources

- [[sources/research/syntheses/08-30-sam-rag1-s382-stop-pathway-note]]
- [[sources/research/syntheses/08-30-yugabio-rag1-s382-stop-ampk-bcl2-analysis]]
- [[sources/research/syntheses/09-01-parp-rag-functional-relationship-krita]]
- [[sources/research/papers/parp-rag-dna-repair/index]]
- [[sources/diagnostics/05-12-altera-tumor-profile]]
- [Um et al. 2013 — AMPK directly phosphorylates RAG1 at S528](https://pubmed.ncbi.nlm.nih.gov/23716691/)
- [Hamunyela et al. 2017 — PI3K/mTOR plus BCL-2-family inhibition in breast cell lines](https://pubmed.ncbi.nlm.nih.gov/27737796/)
- [Williams et al. 2019 — mTOR/MCL-1 escape from BCL-2/BCL-XL inhibition in ER-positive models](https://pubmed.ncbi.nlm.nih.gov/31595181/)
- [ClinicalTrials.gov NCT07522801 — relapsed/refractory T-ALL precision trial](https://clinicaltrials.gov/study/NCT07522801)
