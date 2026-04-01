import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join } from 'path';

const DIR = './public/images';
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 80;

async function compress() {
  const files = await readdir(DIR);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const path = join(DIR, file);
    const s = await stat(path);
    const sizeMB = s.size / 1024 / 1024;

    if (sizeMB < 0.3) continue;
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;

    totalBefore += s.size;
    const tmpPath = path + '.tmp';

    try {
      const img = sharp(path);
      const meta = await img.metadata();

      let pipeline = sharp(path);

      if (meta.width && meta.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      if (file.endsWith('.png')) {
        pipeline = pipeline.png({ quality: JPEG_QUALITY, compressionLevel: 9 });
      } else {
        pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
      }

      // Write to temp file, then replace
      await pipeline.toFile(tmpPath);
      const tmpStat = await stat(tmpPath);

      if (tmpStat.size < s.size) {
        await unlink(path);
        await rename(tmpPath, path);
        totalAfter += tmpStat.size;
        console.log(`✅ ${file}: ${sizeMB.toFixed(1)}MB → ${(tmpStat.size/1024/1024).toFixed(1)}MB (${Math.round((1 - tmpStat.size/s.size) * 100)}% smaller)`);
      } else {
        await unlink(tmpPath);
        totalAfter += s.size;
        console.log(`⏭️ ${file}: already optimal`);
      }
    } catch (e) {
      totalAfter += s.size;
      try { await unlink(tmpPath); } catch {}
      console.log(`❌ ${file}: ${e.message}`);
    }
  }

  console.log(`\n📊 Total: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB (saved ${((totalBefore-totalAfter)/1024/1024).toFixed(1)}MB)`);
}

compress();
