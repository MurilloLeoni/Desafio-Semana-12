# Desafio 3 - Semana 12 - Loja de Móveis - CompassUol

Este projeto é uma loja de compra de móveis desenvolvido durante o programa de bolsas da CompassUol. O estilo da aplicação foi seguido conforme o especificado no Figma, incentivando a busca por conhecimentos que não possuíamos e a aplicação de conteúdos já vistos na trilha de front-end.

## Tecnologias Utilizadas

- **TypeScript**
- **React**
- **Vite**
- **Splide**
- **Zod**
- **Firebase**
- **Git**
- **GitHub**
- **AWS (EC2 e S3)**
- **JsonServer**

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- Node.js
- Git

## Instalação
1. Clone o repositório:
```
git clone https://github.com/MurilloLeoni/Desafio-Semana-12.git
```
2.Navegue até o diretório do projeto:
```
cd Desafio-Semana-12
```

3.Instale as dependencias:
```
npm install
```

## Inicialização do Projeto
Para iniciar a aplicação em modo de desenvolvimento, execute:
```
npm run dev
```

## Inicialização do JsonServer
Ative o JsonServer em outro terminal, para o projeto fazer fetch dos itens.
```
npm run json-server
```
O servidor JsonServer será iniciado em http://localhost:3000

## Contribuição
Se você deseja contribuir com o projeto, siga os passos abaixo:

1. Fork o projeto
2. Crie uma branch para sua feature (git checkout -b feature/MinhaFeature)
3. Commite suas alterações (git commit -m 'Adiciona MinhaFeature')
4. Faça o push para a branch (git push origin feature/MinhaFeature)
5. Abra um Pull Request

## Agradecimentos
Agradecimentos especiais ao programa de bolsas da CompassUol pela oportunidade de desenvolvimento deste projeto.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
