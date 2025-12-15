import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Resolve paths robustly across platforms (Windows included)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const srcSvg = path.join(publicDir, "favicon.svg");

const pngSizes = [16, 32, 48];
const appleSize = 180;

async function ensureSourceExists() {
  try {
    await fs.access(srcSvg);
  } catch {
    console.error(`[favicons] Source SVG not found at: ${srcSvg}`);
    process.exit(1);
  }
}

async function generatePng(size) {
  const out = path.join(publicDir, `favicon-${size}.png`);
  await sharp(srcSvg).resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(out);
  console.log(`[favicons] Wrote ${path.relative(projectRoot, out)}`);
}

async function generateAppleTouch() {
  const out = path.join(publicDir, `apple-touch-icon.png`);
  await sharp(srcSvg).resize(appleSize, appleSize, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } }).png().toFile(out);
  console.log(`[favicons] Wrote ${path.relative(projectRoot, out)}`);
}

(async function run() {
  await ensureSourceExists();
  for (const s of pngSizes) {
    await generatePng(s);
  }
  await generateAppleTouch();
  console.log("[favicons] Done.");
})();
