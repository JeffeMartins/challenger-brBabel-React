# Catálogo demonstrativo de empresas

Cliente React/TypeScript de um desafio BrBabel. Usa o dataset fictício versionado em `src/api/MOCK_DATA.json` e não exige um backend para a demonstração.

[![CI](https://github.com/JeffeMartins/challenger-brBabel-React/actions/workflows/ci.yml/badge.svg)](https://github.com/JeffeMartins/challenger-brBabel-React/actions/workflows/ci.yml)

## Melhorias de engenharia

- React atual e Vite substituem Create React App e o conjunto antigo de Material UI.
- Busca por nome e paginação funcionais, com limites calculados a partir dos dados.
- HTML semântico, labels de formulário, foco visível e grid responsivo.
- Imagens originais preservadas; componentes demonstrativos sem ação foram retirados.
- TypeScript no build e teste de filtro/paginação, incluindo página inválida após uma busca.

## Executar localmente

Pré-requisitos: Node.js 24 LTS e npm; Docker Compose v2 para os serviços que usam banco.

```sh
npm ci
npm run dev
```

Abra `http://localhost:5173`. `npm run build` gera `dist/`; `npm run preview` abre o build local; `npm test` executa as regras de busca/paginação.

O catálogo é uma demonstração local: dados não são persistidos e não há cadastro de empresas nem integração automática com a API BrBabel. Essa separação permite avaliar a interface sem credenciais/banco. O nome histórico do repositório foi preservado.

## Qualidade e limites da evidência

As mudanças preservam a proposta do exercício e corrigem problemas observados no código. A CI usa Node 24 e `npm ci`, executa o build quando disponível e os testes existentes. O lockfile é versionado; dependências e pastas de build não são. Dependabot acompanha atualizações semanais. Não há promessa de cobertura total, auditoria completa de segurança ou capacidade de produção.

Não publique `.env`, cookies, tokens ou dados reais de clientes. Antes de expor a aplicação à internet, revise autenticação/autorização, TLS, limites de chamadas, logs e backups conforme o domínio. Os exemplos são para execução local. Use `docker compose down` para parar os containers; volumes persistem e `down -v` apaga seus dados.
