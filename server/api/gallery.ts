import { promises as fs, existsSync } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(async () => {
  // Debug: log root and target directory
  const root = process.cwd();
  const galleryDir = resolve(root, 'public', 'img', 'gallery');
  console.log('[gallery API] root:', root);
  console.log('[gallery API] galleryDir:', galleryDir);

  try {
    // Ellenőrizzük, hogy a mappa létezik-e
    if (!existsSync(galleryDir)) {
      console.error('[gallery API] Directory not found:', galleryDir);
      throw createError({ statusCode: 500, statusMessage: 'Galéria mappa nem található.' });
    }

    const files = await fs.readdir(galleryDir);
    const images = files
      .filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .map(f => `/img/gallery/${f}`);

    return { images };
  } catch (error: any) {
    console.error('[gallery API] Error reading gallery folder:', error);
    throw createError({ statusCode: 500, statusMessage: error.statusMessage || 'Nem sikerült betölteni a galéria képeket.' });
  }
})