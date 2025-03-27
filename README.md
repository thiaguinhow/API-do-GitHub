# GitHub Profile API

Esta é uma API simples criada com Node.js e Express que permite consultar informações detalhadas sobre um perfil de usuário do GitHub, incluindo nome, bio, seguidores, localização e outros dados disponíveis na API pública do GitHub.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework para construir APIs web de forma rápida e simples.
- **Axios**: Biblioteca para realizar requisições HTTP assíncronas.

## Funcionalidade

A API permite consultar informações sobre um usuário do GitHub, incluindo:

- Nome do usuário
- Bio do usuário
- Localização do usuário
- Número de seguidores
- Número de repositórios públicos
- URL do avatar
- URL do perfil no GitHub

### Endpoint

- **GET** `/github/profile?username=<nome-do-usuário>`

Exemplo de requisição:


### Resposta

A resposta da API será um JSON contendo as informações do perfil do usuário:

```json
{
  "username": "octocat",
  "name": "The Octocat",
  "bio": "I'm a friendly robot",
  "location": "San Francisco",
  "followers": 2000,
  "public_repos": 20,
  "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
  "html_url": "https://github.com/octocat"
}
