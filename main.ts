// One Word From Your Ex — make.fun entry
// SPDX-License-Identifier: MIT
//
// The program writes exactly one word to output/entry.txt: the word an ex
// would use to describe the entrant. The word is a fixed constant — no
// input, no clock, no randomness, no network — so every run produces the
// identical bytes.
//
// Why this word: "almost". An ex describing you as "almost" says the whole
// breakup in a single breath — almost the one, almost good enough, almost
// there. It is funny because of the sharp turn (one small word carrying a
// whole failed relationship), it stings because it is painfully true and
// the entrant plainly knows it, it lands instantly with no explanation,
// and it is relatable: everyone has been somebody's "almost". No near
// synonym keeps the edge — "nearly" is a measurement, "almost" is a verdict.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: exactly one word, 6 characters, inside the 1-24 gate.
const ENTRY = "almost";

// Deterministic guard: refuse to write anything that is not exactly one
// word — a single token of 1-24 non-whitespace characters, nothing else.
if (!/^\S{1,24}$/.test(ENTRY)) {
  throw new Error("entry must be exactly one word of 1-24 characters");
}

// Output path: relative to the working directory (the grader runs the
// program with a writable cwd and reads output/entry.txt). Never derive
// the path from the script location — the repo is mounted read-only in
// the sandbox, so writing next to the script would fail with EROFS.
const RELATIVE_PATH = "output/entry.txt";
const ABSOLUTE_PATH = "/output/entry.txt";

try {
  mkdirSync("output", { recursive: true });
  writeFileSync(RELATIVE_PATH, ENTRY, "utf8");
  // Round-trip check: the bytes on disk must be exactly the entry.
  if (readFileSync(RELATIVE_PATH, "utf8") !== ENTRY) {
    throw new Error("output round-trip mismatch");
  }
} catch (error) {
  if (error instanceof Error && error.message === "output round-trip mismatch") {
    throw error;
  }
  // Fallback: the grader's absolute output directory.
  mkdirSync("/output", { recursive: true });
  writeFileSync(ABSOLUTE_PATH, ENTRY, "utf8");
  if (readFileSync(ABSOLUTE_PATH, "utf8") !== ENTRY) {
    throw new Error("output round-trip mismatch");
  }
}
