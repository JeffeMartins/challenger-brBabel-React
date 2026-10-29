# Contexto da modernização

Repositório: `challenger-brBabel-React`. Revisão em 28/10/2026. O objetivo é tornar o clone reproduzível e o comportamento compreensível em uma entrevista técnica, preservando o contexto histórico de exercício/protótipo.

## Decisões e validação

- React atual e Vite substituem Create React App e o conjunto antigo de Material UI.
- Busca por nome e paginação funcionais, com limites calculados a partir dos dados.
- HTML semântico, labels de formulário, foco visível e grid responsivo.
- Imagens originais preservadas; componentes demonstrativos sem ação foram retirados.
- TypeScript no build e teste de filtro/paginação, incluindo página inválida após uma busca.


Consulte os scripts reais em `package.json` (ou nos módulos do monorepo). Build, teste unitário e teste com serviços externos são evidências diferentes. A CI não valida credenciais de terceiros nem garante comportamento em produção. O README informa dependências externas e funcionalidades ainda não implementadas.

## Segurança de configurações antigas

Configurações locais e segredos foram retirados da versão atual quando presentes. Isso não remove conteúdo de commits antigos. Se algum segredo histórico ainda estiver ativo, revogue-o no provedor e gere outro; não reutilize credenciais publicadas. A revisão preserva o histórico Git e não faz force push.
