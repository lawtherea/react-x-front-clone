# 🐦 Twitter Clone React

Um clone do Twitter/X desenvolvido em React como projeto de estudo, recriando a interface e funcionalidades principais da plataforma.

## 📋 Descrição

Este projeto é uma implementação educacional de um clone do Twitter/X, desenvolvido para praticar conceitos de React, incluindo componentes, hooks, estado, e integração com APIs externas. O projeto demonstra uma interface responsiva e moderna que simula a experiência do usuário da plataforma original.

## ✨ Funcionalidades Principais

### 🏠 Interface Principal
- **Sidebar de Navegação**: Menu lateral com todas as opções principais (Página Inicial, Explorar, Notificações, Mensagens, etc.)
- **Timeline Interativa**: Alternância entre "Para você" e "Seguindo" com conteúdo dinâmico
- **Área de Postagem**: Interface para criar novos posts com ícones de funcionalidades
- **Feed de Tweets**: Lista de posts com interações (comentários, retweets, curtidas, visualizações)

### 📱 Componentes Principais

#### Sidebar
- Logo do X/Twitter
- Menu de navegação completo
- Botão de postagem destacado
- Ícones para todas as seções principais

#### Timeline Central
- **Navegação por Abas**: Alternância entre "Para você" e "Seguindo"
- **Área de Escrita**: Campo de texto para novos posts com toolbar de funcionalidades
- **Lista de Tweets**: Feed dinâmico com dados de API externa
- **Interações**: Contadores de comentários, retweets, curtidas e visualizações

#### Barra Lateral Direita
- **Trending Topics**: Assuntos em alta com categorias e contadores
- **Quem Seguir**: Sugestões de usuários para seguir
- **Bandeja de Mensagens**: Sistema de chat expandível

### 💬 Sistema de Mensagens
- **Lista de Conversas**: Preview das últimas mensagens
- **Chat Expandível**: Interface de conversa completa
- **Funcionalidades de Chat**: Envio de mensagens, histórico de conversas
- **Interface Responsiva**: Expansão/colapso da bandeja de mensagens

## 🛠️ Tecnologias Utilizadas

- **React 19.1.0**: Framework principal
- **Vite**: Build tool e servidor de desenvolvimento
- **CSS Modules**: Estilização modular
- **JSONPlaceholder API**: Dados mockados para posts e usuários
- **Pravatar**: Geração de avatares dinâmicos
- **Picsum**: Imagens aleatórias para posts

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/lawtherea/react-x-front-clone
cd react-x-front-clone
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Sidebar/          # Menu lateral de navegação
│   ├── Middle/           # Timeline e área de postagem
│   └── Right/            # Barra lateral direita e mensagens
├── css/                  # Arquivos de estilo
├── assets/               # Ícones e imagens
├── images/               # Imagens do projeto
└── App.jsx              # Componente principal
```

## 🎯 Funcionalidades Implementadas

- Interface responsiva similar ao Twitter/X
- Sistema de navegação por abas
- Feed dinâmico com dados de API
- Sistema de mensagens expandível
- Trending topics estáticos
- Sugestões de usuários para seguir
- Área de postagem com toolbar
- Interações de tweets (contadores)

## 📚 Aprendizados do Projeto

Este projeto foi desenvolvido para praticar:

- **Componentização**: Estrutura modular de componentes React
- **Hooks**: useState, useEffect para gerenciamento de estado
- **Integração com APIs**: Fetch de dados externos
- **CSS Responsivo**: Layout adaptável
- **Estado Local**: Gerenciamento de estado entre componentes
- **Event Handling**: Interações do usuário
- **Props e Children**: Comunicação entre componentes

## 📄 Licença

Este projeto é de uso educacional e não possui fins comerciais. É uma recriação para fins de estudo da interface do Twitter/X.
