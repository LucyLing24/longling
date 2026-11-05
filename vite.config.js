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

      // Keep previous entry bundle filenames as aliases so browsers/proxies with a cached index.html never 404.
      const assetsDir = path.join(outDir, 'assets')
      const files = fs.readdirSync(assetsDir)
      const mainJs = files.find((f) => /^index-[^.]+\.js$/.test(f))
      const mainCss = files.find((f) => /^index-[^.]+\.css$/.test(f))
      if (mainJs) {
        for (const alias of ['index-DUN2phgm.js', 'index-OPpbut6F.js', 'index-jkoloN5t.js']) {
          if (alias !== mainJs) fs.copyFileSync(path.join(assetsDir, mainJs), path.join(assetsDir, alias))
        }
      }
      if (mainCss) {
        for (const alias of ['index-BSpIeg69.css', 'index-CVId9_7N.css', 'index-CuqFuctN.css']) {
          if (alias !== mainCss) fs.copyFileSync(path.join(assetsDir, mainCss), path.join(assetsDir, alias))
        }
      }
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
