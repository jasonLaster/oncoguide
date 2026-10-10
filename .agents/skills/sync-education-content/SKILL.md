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
- The exporter includes referenced media, inferred dark companions and associated saved prompts. Retired artwork is retained by default; it is not presented as current teaching.
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

For new illustrations, verify the active light/dark pair and its saved prompt are in the export, then check their published bytes against the receipt. Keep source checking and automated validation separate from actual expert or learner review; copying a page must preserve pending review metadata.

Page moves or removals require reviewed exact paths using repeated --remove <vault-relative-path> arguments in both plan and apply. A path must have been imported, be absent from the new export, and have no independent destination edit. Never use a broad mirror-delete command to clean up retired media.

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
