import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

test("package.json defines next scripts", () => {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(root, "package.json"), "utf8"),
  );

  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.test, "node --test test/**/*.test.mjs");
});

test("phase 1 files exist", () => {
  const requiredFiles = [
    "app/layout.tsx",
    "app/page.tsx",
    "app/globals.css",
    "components/Nav.tsx",
    "components/Hero.tsx",
  ];

  for (const file of requiredFiles) {
    assert.equal(fs.existsSync(path.join(root, file)), true, file);
  }
});
