#!/usr/bin/env bash
set -euo pipefail
content_dir="$(pwd)"
bash scripts/prepare-renderer.sh
bun scripts/education-content-sync.ts verify
renderer_sha="$(node -p 'require("./renderer.lock.json").commit')"
ONCOGUIDE_CONTENT_DIR="$content_dir" ONCOGUIDE_APP_SHA="$renderer_sha" bun --cwd .renderer/apps/oncoguide build
