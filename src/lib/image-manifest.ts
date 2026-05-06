import manifestData from './image-manifest.json';

export type ImageFormat = 'avif' | 'webp';

export interface ImageVariant {
  url: string;
  format: ImageFormat;
  width: number;
}

export interface ImageManifestEntry {
  naturalWidth: number;
  naturalHeight: number;
  variants: ImageVariant[];
}

const manifest = manifestData as Record<string, ImageManifestEntry>;

export function getManifestEntry(src: string): ImageManifestEntry | undefined {
  return manifest[src];
}

export function variantsByFormat(
  entry: ImageManifestEntry,
  format: ImageFormat,
): ImageVariant[] {
  return entry.variants.filter((v) => v.format === format);
}

export function buildSrcSet(variants: ImageVariant[]): string {
  return variants
    .slice()
    .sort((a, b) => a.width - b.width)
    .map((v) => `${v.url} ${v.width}w`)
    .join(', ');
}
