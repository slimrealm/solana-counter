import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [react(), nodePolyfills()]
})


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
