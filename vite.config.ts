{
  "operation": "edit",
  "language": "typescript",
  "prompt": "Atualize o arquivo vite.config.ts para configurar um Multi-Page App. O código deve:\n1. Importar { resolve } de 'path'.\n2. Manter a 'base: /portal-esta-rolando/'.\n3. Adicionar build.rollupOptions.input contendo um objeto com as seguintes chaves e caminhos (usando resolve(__dirname, 'arquivo.html')):\n   - main: index.html\n   - ajuda: ajuda.html\n   - blog: blog.html\n   - captura: captura.html\n   - conhecimento: conhecimento.html\n   - cursos: cursos.html\n   - ferramentas: ferramentas.html\n   - hub: hub.html\n   - lazer: lazer.html\n   - obrigado: obrigado.html\n   - tutorial: tutorial.html\n4. Manter os plugins react() e tailwindcss().",
  "shouldRecommendSkip": false
}
