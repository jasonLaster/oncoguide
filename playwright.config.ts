import { defineConfig, devices } from "./.renderer/node_modules/@playwright/test/index.mjs";
import path from "node:path";
export default defineConfig({
  testDir:"./tests",timeout:60_000,expect:{timeout:15_000},workers:1,
  use:{baseURL:process.env.ONCOGUIDE_BASE_URL || "http://127.0.0.1:62009",...devices["Desktop Chrome"],trace:"off",screenshot:"off",testIdAttribute:"data-test-id"},
  webServer:process.env.ONCOGUIDE_BASE_URL ? undefined : {command:"bun scripts/serve-export.ts",cwd:path.resolve(import.meta.dir,".renderer/apps/oncoguide"),url:"http://127.0.0.1:62009",reuseExistingServer:!process.env.CI},
});
