import { promises as fs } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(async () => {
  const dir = resolve(process.cwd(), 'public', 'img', 'gallery', 'Szeder_23')
  const files = await fs.readdir(dir)
  const images = files
    .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .map((f) => `/img/gallery/Szeder_23/${f}`)
  return { images }
})
