# 🚀 Clone Simples da DIO com React

Este projeto é um clone simples da interface da [DIO](https://www.dio.me/), desenvolvido para fins educacionais durante um curso introdutório de React. A aplicação possui navegação básica entre a página inicial e a página de login, permitindo apenas o login de usuários cadastrados no arquivo `db.json`.

## 🛠 Tecnologias Utilizadas
- ⚛️ React
- 🌐 React Router
- 🎨 Styled Components (estilização via `styles.ts`)
- 🔥 Axios (para requisições HTTP ao `db.json`)
- ✅ Yup (para validação de formulários)
- 🎭 React Hook Form (para manipulação de formulários)

## 📌 Funcionalidades
- 🏠 Página inicial semelhante à da DIO
- 🔐 Sistema de login validado com `db.json`
- 🆕 Cadastro de novos usuários via API fake
- 🔄 Navegação entre páginas com React Router

## 📂 Estrutura do Projeto
```
react-dio/
│-- src/
│   │-- components/    # Componentes reutilizáveis (.tsx)
│   │-- pages/         # Páginas principais (Home, Login, Cadastro)
│   │-- services/      # Configuração da API (Axios)
│   │-- styles/        # Estilização global (.ts)
│   │-- types/         # Definições e interfaces TypeScript
│   │-- App.tsx        # Configuração principal do React Router
│   │-- main.tsx       # Entrada principal da aplicação
│-- public/
│-- db.json            # Banco de dados fake (JSON Server)
│-- tsconfig.json      # Configuração do TypeScript
│-- package.json
│-- README.md
```

## 🔧 Configurando o Ambiente

1. Clone este repositório:
   ```bash
   git clone https://github.com/michelleGomes85/react-dio.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd clone-dio-react
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o JSON Server para simular o backend:
   ```bash
   npx json-server --watch db.json --port 5000
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
6. Acesse no navegador: `http://localhost:3000`

## 📜 Autenticação e Cadastro de Usuários
- **Login**: Somente usuários cadastrados no `db.json` podem acessar.
- **Cadastro**: Novos usuários são adicionados ao `db.json` via uma requisição `POST` com Axios.
- **Validação**: O Yup é utilizado para validar e-mails e senhas nos formulários.

## 👩‍💻 Autora
Desenvolvido por **Michelle Gomes**

🔗 [GitHub - michelleGomes85](https://github.com/michelleGomes85)

## 📜 Licença
Este projeto é apenas para fins educacionais e não possui licença específica.

