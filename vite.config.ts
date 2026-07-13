import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    // Desativamos algumas verificações pesadas para acelerar o build
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: './index.html',
        ajuda: './ajuda.html',
        blog: './blog.html',
        captura: './captura.html',
        conhecimento: './conhecimento.html',
        cursos: './cursos.html',
        ferramentas: './ferramentas.html',
        hub: './hub.html',
        lazer: './lazer.html',
        obrigado: './obrigado.html',
        tutorial: './tutorial.html',
      },
    },
  },
});
