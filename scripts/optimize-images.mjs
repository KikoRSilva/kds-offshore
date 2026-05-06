#!/usr/bin/env node
/**
 * Build-time image optimizer.
 *
 * Walks public/images/ recursively, generates AVIF + WebP variants at
 * editorial-friendly widths, and writes a manifest the KDSImage component
 * uses to emit <picture> elements with responsive srcsets.
 *
 * Variants land in public/images/_optimized/ and are gitignored.
 * Incremental: a variant is regenerated only if the source mtime is newer.
 *
 * Run:
 *   npm run optimize:images
 *
 * Auto-runs as a prebuild step in npm run build.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const IMAGES_DIR = path.join(ROOT, 'public', 'images');
const OPTIMIZED_DIR = path.join(IMAGES_DIR, '_optimized');
const MANIFEST_PATH = path.join(ROOT, 'src', 'lib', 'image-manifest.json');

const WIDTHS = [320, 640, 960, 1280, 1920];
const FORMATS = ['avif', 'webp'];
const SUPPORTED_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const SKIP_DIRS = new Set(['_optimized']);

const QUALITY = {
  avif: 60,
  webp: 75,
};

async function walkImages(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      out.push(...(await walkImages(full)));
    } else if (SUPPORTED_EXTS.has(path.extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function shouldRegenerate(srcPath, dstPath) {
  try {
    const [srcStat, dstStat] = await Promise.all([
      fs.stat(srcPath),
      fs.stat(dstPath),
    ]);
    return srcStat.mtimeMs > dstStat.mtimeMs;
  } catch {
    return true;
  }
}

function toPosix(p) {
  return p.split(path.sep).join('/');
}

async function processImage(src) {
  const rel = path.relative(IMAGES_DIR, src);
  const parsed = path.parse(rel);
  const meta = await sharp(src).metadata();
  if (!meta.width || !meta.height) {
    throw new Error(`Could not read dimensions for ${src}`);
  }

  const targetWidths = WIDTHS.filter((w) => w <= meta.width);
  if (targetWidths.length === 0) targetWidths.push(meta.width);

  const variants = [];
  let regenerated = 0;

  for (const width of targetWidths) {
    for (const format of FORMATS) {
      const outRel = path.join(
        parsed.dir,
        `${parsed.name}.${width}.${format}`,
      );
      const outAbs = path.join(OPTIMIZED_DIR, outRel);
      await ensureDir(path.dirname(outAbs));

      if (await shouldRegenerate(src, outAbs)) {
        const pipeline = sharp(src).resize({
          width,
          withoutEnlargement: true,
        });
        if (format === 'avif') {
          pipeline.avif({ quality: QUALITY.avif });
        } else {
          pipeline.webp({ quality: QUALITY.webp });
        }
        await pipeline.toFile(outAbs);
        regenerated += 1;
      }

      variants.push({
        url: `/images/_optimized/${toPosix(outRel)}`,
        format,
        width,
      });
    }
  }

  return {
    publicPath: `/images/${toPosix(rel)}`,
    naturalWidth: meta.width,
    naturalHeight: meta.height,
    variants,
    regenerated,
  };
}

async function main() {
  await ensureDir(OPTIMIZED_DIR);
  await ensureDir(path.dirname(MANIFEST_PATH));

  const sources = await walkImages(IMAGES_DIR);
  if (sources.length === 0) {
    console.log('No images found under public/images/.');
    await fs.writeFile(MANIFEST_PATH, '{}\n');
    return;
  }

  const manifest = {};
  let totalRegenerated = 0;
  for (const src of sources) {
    const entry = await processImage(src);
    manifest[entry.publicPath] = {
      naturalWidth: entry.naturalWidth,
      naturalHeight: entry.naturalHeight,
      variants: entry.variants,
    };
    totalRegenerated += entry.regenerated;
    const tag = entry.regenerated > 0 ? `+${entry.regenerated}` : 'cached';
    process.stdout.write(`✓ ${entry.publicPath} (${tag})\n`);
  }

  await fs.writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(
    `\n${sources.length} sources, ${totalRegenerated} variants written, manifest at ${path.relative(ROOT, MANIFEST_PATH)}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
