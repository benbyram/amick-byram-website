import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/** Map Figma Make's virtual `figma:asset/…` imports to files in src/assets (local Vite). */
function figmaAssetResolver(): Plugin {
  const prefix = 'figma:asset/'
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith(prefix)) {
        const file = id.slice(prefix.length)
        return path.resolve(__dirname, 'src/assets', file)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetResolver(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
