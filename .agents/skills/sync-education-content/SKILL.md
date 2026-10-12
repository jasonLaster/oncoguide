---
name: sync-education-content
description: Compare and synchronize the shared public education content in Diana TNBC and Oncoguide, preserving source bytes, artwork provenance and independent edits. Use after shared curriculum changes, for a requested content copy, or to investigate drift between the repositories.
---

# Keep education content consistent

This skill owns transfer and consistency checks between the two content repositories. Teaching revisions belong to Diana's education-content skill; the renderer remains in Oncobase.

## Ownership and receipts

- Author the shared curriculum in diana-tnbc/obsidian/wiki/education/. Oncoguide keeps a byte-for-byte public copy under wiki/education/.
- Preserve Markdown, citations, review metadata and paths. The pinned renderer converts education links to local routes and sends other wiki links back to Diana; do not rewrite clinical owner pages into Oncoguide.
- provenance.json is the immutable initial import receipt. content-sync.json records the latest committed source, active page/asset/prompt hashes and retired assets with their original source revisions.
- The exporter includes referenced media, inferred dark companions and associated saved prompts, including exact `-light-call.txt` and `-dark-call.txt` invocations when saved beside the active image pair. Retired artwork is retained by default; it is not presented as current teaching.
- `scripts/education-supplemental-artifacts.json` is the explicit reviewed allowlist for additional source-owned public custody beside active artwork. It preserves original nonstandard call filenames, JSON metadata and reviewed custody ZIPs; it does not create aliases or reconstruct executed calls from base specifications.
- Each supplemental entry binds its exact original path, SHA-256 and byte size to a current public owner and associated active artwork hashes. Version 1 and legacy entries keep the flat `images/prompts/` artwork-stem rule. Version 2 may additionally use an explicit `artworks` array of two to eight `{path, sha256}` identities for a joint JSON receipt, original JSON call metadata or flat reviewed custody ZIP: the file must be directly under the owner's `images/prompts/` or exactly one bounded namespace directory below it. Nested entries are JSON only; joint ZIPs stay flat. Joint entries are at most 1 MiB each; the existing manifest limits remain 1000 entries and 8 MiB total. Paths remain exact reviewed originals, with no globs, recursive discovery, call aliases or invented model fields.
- Version 3 additionally admits explicitly listed flat joint `.txt` invocations with their original names. Versions 1 and 2 retain their existing path/extension rules; TXT namespaces remain refused. Each version 3 joint TXT must be valid UTF-8 and contain the literal `image_gen.imagegen` line followed by one valid JSON argument object with a nonempty prompt. The recursive public/privacy, redaction and raw-base64 guards apply to those arguments, including decoded property names and values for TXT redaction checks, with the same current public owner, all-active artwork, exact source commit/path/hash/size and byte limits. This does not authorize arbitrary prose, tool-result bodies, neighboring files, reconstructed calls or fetching reference paths. A saved reference can name a privately retained rejected image; preserve the original text but do not import that image or claim self-contained replay.
- Joint entries bind every relevant active image, including applicable light/dark pairs, and the current owner hash. Review their public classification and original bytes before adding them. Nested JSON privacy flags, redactions, raw base64 and changed or missing bytes stop export. A namespace grants no permission for neighboring files. Source symlinks and symlinked manifests stop export. ZIP acceptance for both entry forms relies on the exact reviewed archive hash, not a new semantic review of its members.
- An uncommitted candidate's entry list is a private proposal with `reviewedSourceCommit: null`, not an executable manifest. After canonical source adoption, bind the reviewed exact committed revision (versions 2 and 3 require it to equal the resolved export commit) and verify its current owner, every artwork identity and each file's original hash/size through the normal explicit Git-source plan. Synthetic fixture receipts demonstrate helper behavior only; they do not certify a future source export or release.
- Treat this manifest as bounded maintainer data: review the source-owned custody and update owner/artwork/file hashes when active source bytes change. Record the reviewed source commit, then plan/check against the actual explicit committed ref. Do not add private case bundles, third-party full bodies or raw reader captures. No filename glob expands this allowlist.
- When associated artwork is no longer active (any bound identity for a joint entry), its supplemental files are not re-exported. Already imported custody remains retained with its original hash and source revision through the existing receipt reconciliation. Reviewed exact removals remain a separate decision.
- Restricted metadata, redacted spans, unhydrated LFS media and symlinked content are rejected. A public source page does not authorize copying private case bundles or the source repository's Git history.

## Find and compare

Locate the actual checkouts and inspect their Git state; do not assume the task's cwd is the latest Diana checkout. Fetch the relevant remotes and choose an explicit committed Diana revision. Installed paths are usually /Users/jasonlaster/src/projects/oncoguide and a Diana checkout or release worktree.

From the Oncoguide root, prepare its exact pinned renderer if needed:

    bash scripts/prepare-renderer.sh

Validate the local receipt, then plan against the chosen committed source:

    bun run check:content-consistency
    bun scripts/education-content-sync.ts plan --source <diana-repo-or-vault> --ref <commit> --report /tmp/education-sync-plan.json

Read the plan before applying it. The comparison uses the previous receipt, the current destination and the proposed source. Destination-only edits, simultaneous differences, missing imported files and new-path collisions are conflicts. Do not replace the receipt to make an unexplained edit pass.

Use a fresh JSON filename for each report, outside both repositories, the renderer checkout and their Git directories. Existing files and symlinked report targets cannot be overwritten.

For a read-only request, report drift without applying. For an authorized copy or shared-content update, reconcile destination changes into the canonical source first; source release and generation checks still belong to Diana's normal workflow.

When a curriculum rewrite reveals a conflicting claim in a current Diana care, question or treatment owner, correct or qualify it in Diana under that owner's workflow. Preserve recorded decisions and source custody, and verify any redacted spans stay protected. Those owner corrections are part of the Diana release; they remain outside the Oncoguide export. Check the revised lesson's links to the owner so the shared copy does not point readers to a contradictory explanation.

## Apply the reviewed update

    bun scripts/education-content-sync.ts apply --source <diana-repo-or-vault> --ref <same-commit>
    bun scripts/education-content-sync.ts check --source <diana-repo-or-vault> --ref <same-commit>

The helper stages a committed export, validates all conflicts and hashes before writing, updates the receipt last and rechecks destination bytes. Repeating the comparison should show no additions, updates or conflicts. An unrelated Diana commit with identical education bytes does not require a new transfer.

For new illustrations, verify the active light/dark pair and its saved base prompt and any exact theme invocation prompts are in the export, then check their published bytes against the receipt. Keep source checking and automated validation separate from actual expert or learner review; copying a page must preserve pending review metadata.

Check supplemental custody explicitly when present. The sync summary counts all active TXT files as prompts and non-Markdown/non-TXT files as assets, including JSON/ZIP custody. These inventory counts can differ from the rendered public manifest, which lists referenced assets; repository custody alone does not establish a static download URL.

Page moves or removals require reviewed exact paths using repeated --remove <vault-relative-path> arguments in both plan and apply. A path must have been imported, be absent from the new export, and have no independent destination edit. Never use a broad mirror-delete command to clean up retired media.

For a consolidation, record the exact old-to-new page mapping and preserve unique material at its substantive owner before removing the old page. Check public destination metadata and reroute authored inbound links; immutable source captures retain their original references. Verify replacement pages on Diana before its exact server-side retirement. A move to a company, research or care owner removes the education copy from Oncoguide while keeping that owner in Diana; retain the artwork hashes and historical provenance in the sync receipt.

## Validate and release

Run the focused sync tests and the pinned site build:

    bun run test:content-sync
    bun run build
    bun --cwd .renderer/apps/oncoguide test:unit
    bun --cwd .renderer/apps/oncoguide typecheck
    bun run test:reader

The content repository owns browser checks against its current corpus: direct routes, aliases, metadata, reading without JavaScript, search, theme persistence, mobile navigation, image viewing, all lessons and all image variants. Keep these checks aligned with real content; do not require a retired illustration to remain on a particular lesson.

Review the exact content/receipt/tooling diff, preserve unrelated changes, and use the repository's existing Git release workflow. Main deploys Oncoguide automatically. Do not update renderer.lock.json as part of an ordinary content sync. Confirm the released site reports the intended content and renderer commits, then verify representative new paths, image variants and navigation. Keep Git push, build/deployment and live verification as separate reported outcomes.

If the curriculum requires a new reader capability, release and verify that feature in Oncobase first, then make a deliberate reviewed renderer-pin update. For an interactive learning lab, preserve the original HTML and ZIP hashes, confirm both appear in the export receipt, and test the embedded activities on the released sites in both themes and at mobile width. Executable embeds remain explicitly marked local education HTML with an opaque sandbox; a working download alone does not verify the reader activity.
