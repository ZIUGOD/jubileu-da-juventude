# Jubileu da Juventude

- index.html: estrutura e textos.
- css/style.css: tema e layout responsivo.
- js/script.js: preencha os links no objeto eventLinks.
- images/: imagens originais e favicon.
- regulamento.html: página de leitura compartilhada pelos sete regulamentos, com retorno à página inicial.
- js/regulamentos.js: títulos e conteúdo dos regulamentos. Preencha `sections` com objetos no formato `{ title: '1. Participação', paragraphs: ['Texto oficial da organização.'] }`. Enquanto a lista estiver vazia, a página informa que o regulamento aguarda publicação.

O regulamento geral abre em `regulamento.html?tipo=geral`. As modalidades usam `futsal-masculino`, `volei-areia-masculino`, `volei-areia-feminino`, `tenis-de-mesa`, `fifa` e `corrida` no parâmetro `tipo`. Os links da página inicial já apontam para cada regulamento.

Abra index.html no navegador. Mantenha as pastas juntas. Para Cloudflare Pages, envie a pasta inteira ou este ZIP; index.html fica na raiz.
