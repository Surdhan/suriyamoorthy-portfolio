import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MY_profile/',   // MUST MATCH YOUR REPO NAME
})