import { promises as fs } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(async () => {
  try {
    const dir = resolve(process.cwd(), 'public', 'img', 'gallery')
    const files = await fs.readdir(dir)
    const images = files
      .filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .map(f => `/img/gallery/${f}`)
    return { images }
  } catch (error) {
    // naplózzuk a hibát, hogy lásd a konzolban
    console.error('Error reading gallery folder:', error)
    throw createError({ statusCode: 500, statusMessage: 'Nem sikerült betölteni a galéria képeket.' })
  }
})