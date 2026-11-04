# Portfólio de Matheus Silvano

Site pessoal em React + Vite, em português, inglês e espanhol, com tema claro e escuro.

Online em https://matheussilvano.github.io/matheus-silvano/

## Páginas

- `index.html`: apresentação, stack, projetos, open source, experiência, recomendações e contato.
- `all-projects.html`: lista completa de projetos.
- `cursos.html`: cursos e certificações, com busca.

## Estrutura

- `data/site-data.js` e `data/text.js`: conteúdo e textos nos três idiomas.
- `components/`: layout, cards e páginas.
- `style.css`: estilos e tokens de cor.
- `public/assets/`: imagens, currículos e certificados.

## Rodar localmente

Requer Node.js 20.19 ou superior.

```bash
npm install
npm run dev
```

Build de produção: `npm run build` (use `BASE_PATH=/matheus-silvano/` para simular o GitHub Pages).

## Deploy

Cada push na `main` publica no GitHub Pages pelo workflow em `.github/workflows/pages.yml`.
