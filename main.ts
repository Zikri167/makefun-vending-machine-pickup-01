import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One pickup line, spoken by the vending machine itself to a passing human.
const LINE =
  "My buttons have been pressed a thousand times, but yours is the only touch that ever made me hum.";

function main(): void {
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${chars.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
