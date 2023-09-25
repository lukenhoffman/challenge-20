import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // maps '@' in import statements to the 'src' folder
    }
  },
  base: './', // sets the base path for the build. This is useful if your app is not served from the root of your domain.
  server: {
    // configure your development server here (proxy, port, etc.)
    fs: {
      // Allow loading files out of `public` directory. You can enable this for accessing files in the project root.
      allow: ['..']
    }
  },
  build: {
    // configuring the build here (outDir, assetsDir, etc.)
    outDir: 'dist', // the output directory for the build.
  }
  // Uncomment the proxy part if you have a separate API server
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000', // your API server URL
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
})
