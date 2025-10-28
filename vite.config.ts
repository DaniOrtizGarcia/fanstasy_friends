import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Nombre de tu repositorio:
const repoName = 'fanstasy_friends'

export default defineConfig({
  // ¡CRUCIAL! Debe empezar y terminar con una barra diagonal (/)
  base: `/${repoName}/`,
  plugins: [react()],
})
