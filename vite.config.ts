import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

type LegalRoute = {
  slug: 'impressum' | 'datenschutz'
  title: string
}

const LEGAL_ROUTES: LegalRoute[] = [
  { slug: 'impressum', title: 'Impressum | Nike Wessel' },
  { slug: 'datenschutz', title: 'Datenschutz | Nike Wessel' },
]

function generateStaticLegalPages(): Plugin {
  return {
    name: 'generate-static-legal-pages',
    apply: 'build',
    writeBundle() {
      const outDir = resolve(process.cwd(), 'dist')
      const indexPath = resolve(outDir, 'index.html')
      let indexHtml = ''

      try {
        indexHtml = readFileSync(indexPath, 'utf8')
      } catch {
        this.warn('Skipping legal page generation: dist/index.html not found.')
        return
      }

      for (const route of LEGAL_ROUTES) {
        const absoluteUrl = `https://nike-wessel.studio36.berlin/${route.slug}`
        const routeHtml = indexHtml
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`)
          .replace(
            /<link rel="canonical" href="[^"]*" \/>/,
            `<link rel="canonical" href="${absoluteUrl}" />`
          )
          .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${absoluteUrl}" />`)
          .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${route.title}" />`)
          .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${route.title}" />`)

        const routeDir = resolve(outDir, route.slug)
        mkdirSync(routeDir, { recursive: true })
        writeFileSync(resolve(routeDir, 'index.html'), routeHtml, 'utf8')
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), generateStaticLegalPages()],
  base: '/',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        passes: 2,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/scheduler/')
          ) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion'
          }
        },
      },
    },
  },
})
