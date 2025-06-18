import { promises as fs } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(async () => {
  const dir = resolve(process.cwd(), 'public', 'img', 'gallery', 'szja')
  const files = await fs.readdir(dir)
  const images = files
    .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .map((f) => `/img/gallery/szja/${f}`)
  return { images }
})
