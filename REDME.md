<
## 💻 Sobre o projeto

🚀 Projeto fullstack de app de monitoramento de hábitos com calendário mostrando hábitos por dia com tonalidades de cores diferentes para identificar a conclusão de hábitos a cada dia. Possibilidade de criação e edição de conclusão de hábitos diariamente.

BACKEND:

- TypeScript
- TSX
- Fastify
- Prisma
- Zod

FRONTEND:

- ViteJs
- ReactJs
- TypeScript
- Tailwindcss
- Radix
- Axios

MOBILE:

- React-Native
- Expo
- TypeScript
- NativeWind
- Axios

Possui as funcionalidades de:

- Calendário interativo com identificação de dia atual;
- Identificação de conclusão de hábitos nos dias, quanto mais azul menos hábitos concluídos no dia;
- Possibilidade de criação de novos hábitos marcando os dias que o mesmo será monitorado;
- Edição (toggle) de hábitos por dia entre concluído e a concluir.
- Barra de progresso de hábitos por dia. Concluídos Vs a concluir.

Projeto foi realizado no NLW-Setup da Rocketseat.

&nbsp;

&nbsp;
<a id="-instalação"></a>

## ⚙️ Instalações

### BACK-END | TypeScript - TSX - Fastify - Prisma - Zod

Criar pasta server dentro do projeto

```bash
mkdir server
cd server
```

Inicia um projeto e cria package.json

```bash
npm init -y
```

Instalar typescript na dependência de desenvolvimento

```bash
npm i typescript -D

# Cria tsconfig.json
npx tsc --init
```

Instalar TSX na dependência de desenvolvimento

```bash
# dependência tsx para compilar .ts para .js (node agora consegue rodar arquivos .ts)
npm i tsx -D
```

Instalar Zod na dependência de produção

```bash
# biblioteca de validação e tipagem TypeScript (https://zod.dev)
npm install zod
```

Instalar Fastify na dependência de produção | Cria rotas HTTP

```bash
npm i fastify

# cors é a segurança do backend, basicamente é quem esta autorizado a consumir dados no meu backend
npm i @fastify/cors
```

Instalando Prisma (ORM)

```bash
npm i prisma -D
npm i @prisma/client
```

Instalando gerador de diagrama para DB Prisma

```bash
npm i -D prisma-erd-generator @mermaid-js/mermaid-cli

# adicionar o código abaixo em schema.prisma
generator erd {
  provider = "prisma-erd-generator"
}
```

Instalar Dayjs na dependência de produção

```bash
# biblioteca de manipulação de datas
npm install dayjs
```

### FRONT-END | ViteJs - ReactJs - TypeScript - Tailwindcss - Radix - Axios

Cria um projeto com ViteJs

```bash
npm create vite@latest
# Project name: » web | Select a framework: » React | Select a variant: » TypeScript

npm install
```

Instalando arquitetura Tailwindcss

```bash
npm install -D tailwindcss postcss autoprefixer prettier prettier-plugin-tailwindcss

# Criar arquivo .prettierrc.json na raiz do projeto
```

Criando tailwind.config.cjs

```bash
npx tailwindcss init -p
```

Editando tailwind.config.cjs

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Adicionando configuração Tailwindcss em src/styles/global.css

```bash
@tailwind base;
@tailwind components;
@tailwind utilities
```

Instalando biblioteca de ícones Phosphor

```bash
npm install phosphor-react
```

Instalando faker para gerar números aleatórios

```bash
npm install @faker-js/faker
```

Instalar Dayjs na dependência de produção

```bash
# biblioteca de manipulação de datas
npm install dayjs
```

Instalar componentes do Radix

```bash
npm install @radix-ui/react-dialog
npm install @radix-ui/react-popover
npm install @radix-ui/react-checkbox
```

Instalar CLSX para criar condicionais em className

```bash
npm install clsx
```

Instalando biblioteca de Axios para comunicação Http

```bash
npm install axios
```

### MOBILE | React-Native - Expo - TypeScript - NativeWind - Axios

Instalando expo-cli globalmente

```bash
npm install -g expo-cli

# verificando a versão instalada
expo --version
```

Criar projeto React Native | Blank | TypeScript

```bash
npx create-expo-app mobile --template
# Choose a template: » Blank (TypeScript)
```

Instalando expo-font e font Inter do Google

```bash
npx expo install expo-font @expo-google-fonts/inter
```

Instalando biblioteca de navegação entre telas react-navigation

```bash
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
```

Instalando react-native-reanimated para animações

```bash
npx expo install react-native-reanimated

# vá em babel.config.js e atualize os plugins
plugins: ["nativewind/babel", "react-native-reanimated/plugin"],
```

Instalando NativeWind no ambiente de produção (Tailwindcss em React-native)

```bash
npm install nativewind
```

Instalando arquitetura Tailwindcss

```bash
npm install -D tailwindcss prettier prettier-plugin-tailwindcss

# Criar arquivo .prettierrc.json na raiz do projeto
```

Criando tailwind.config.cjs

```bash
npx tailwindcss init
```

Editando tailwind.config.cjs

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Editando babel.config.js

```bash
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"], // <=====
  };
};
```

Criando types para className

```ts
// crie um arquivo em uma pasta @types/app.d.ts em src
// adicione no app.d.ts o script abaixo
/// <reference types="nativewind/types" />
```

Instalando biblioteca para ler imagens SGV

```bash
npx expo install react-native-svg
npm install -D react-native-svg-transformer

# Obs. tem que criar arquivo na raiz do projeto (metro.config.js)
```

Criando arquivo na raiz do projeto (metro.config.js)

```javascript
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
```

Criando types para svg

```ts
// crie um arquivo em uma pasta @types/svg.d.ts em src
// adicione no svg.d.ts o script abaixo
declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

Instalando faker para gerar números aleatórios

```bash
npm install @faker-js/faker
```

Instalar Dayjs na dependência de produção

```bash
# biblioteca de manipulação de datas
npm install dayjs
```

Instalando biblioteca de Axios para comunicação Http

```bash
npm install axios
```

Instalar CLSX para criar condicionais em className

```bash
npm install clsx
```

---

&nbsp;
<a id="-funcionalidades"></a>

## ⚙️ Funcionalidades

### Running the server back-end

```bash
# development (http://localhost:3000/) | tsx watch src/server.ts
cd server
npm run dev
```

### ORM Prisma back-end

```bash
cd server

# Criando BD prisma SQLite
npx prisma init --datasource-provider SQLite

# criando/atualizando as tabelas do BD no prisma
npx prisma migrate dev
# Enter a name for the new migration: » created tab Habits

# prisma studio (Verificar tabelas e realizar CRUD manual)
npx prisma studio
# ou
npx prisma studio -b firefox -p 5173
# -b firefox p/ especificar navegador
# -p 5173 p/ especificar porta
# ou
npm run db

# Gerando diagrama de banco de dados Prisma
npx prisma generate
# ou
npm run diagrama

# Criando Seed, lançamentos de dados para testes
npx prisma db seed
```

### Running the app mobile

```bash
cd mobile

npx expo start

# Iniciando com a cash limpa
npx expo start --clear
```

### Running the app web

```bash
cd web

npm run dev
```

---
