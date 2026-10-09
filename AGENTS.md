# Oncoguide content

Shared public education originates in diana-tnbc/obsidian/wiki/education/.
Use [.agents/skills/sync-education-content/SKILL.md](.agents/skills/sync-education-content/SKILL.md)
for imports, drift checks and companion curriculum updates.

Preserve shared Markdown bytes, citations, paths and review status. Resolve
independent edits against the imported baseline before copying. Keep the initial
provenance.json receipt, update content-sync.json through the sync helper, and
retain retired media with historical provenance. Private case/source bundles
and source Git history do not belong here.

Application source remains in Oncobase. Ordinary content updates use the existing
renderer.lock.json pin; the content build rejects receipt drift before rendering.
