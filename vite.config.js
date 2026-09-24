import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages has no SPA fallback, so every project route needs its own HTML entry.
function projectRoutePages() {
  let root
  let outDir
  return {
    name: 'project-route-pages',
    apply: 'build',
    configResolved(config) {
      root = config.root
      outDir = path.resolve(root, config.build.outDir)
    },
    closeBundle() {
      const html = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      const source = fs.readFileSync(path.resolve(root, 'src/data/publications.js'), 'utf8')
      const projects = [...source.matchAll(/id:\s*"([^"]+)",\s*title:\s*"((?:[^"\\]|\\.)*)"/g)]
        .map(([, id, title]) => ({ id, title: title.replace(/\\"/g, '"') }))
      if (projects.length === 0) throw new Error('project-route-pages: no publications found')

      for (const { id, title } of projects) {
        const name = title.split(': ')[0].replace(/"/g, '')
        const page = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(name)} | Long Ling</title>`)
        fs.mkdirSync(path.join(outDir, 'projects', id), { recursive: true })
        fs.writeFileSync(path.join(outDir, 'projects', id, 'index.html'), page)
      }
      fs.writeFileSync(path.join(outDir, '404.html'), html)
    },
  }
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), projectRoutePages()],
  server:{
    host: '0.0.0.0',
  },
  base: '/'
})
