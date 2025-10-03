# Sistema de Cadastro de Usuários (Atividade EstartandoDevs)

Sistema simples de cadastro de usuários criado com **React + Vite**. Permite adicionar, editar, remover e buscar usuários, persistindo os dados no `localStorage`.

---

## 📦 Tecnologias utilizadas

- React  
- Vite  
- CSS (variáveis, responsividade)  
- localStorage (para persistência dos dados no navegador)  

---

## 🗂️ Estrutura do projeto

```bash
├─ public/
├─ src/
│ ├─ components/
│ │ ├─ form/ 
│ │ ├─ userList/
│ │ ├─ userItem/ 
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ styles 
├─ index.html
├─ package.json
└─ vite.config.js
```


Principais componentes:

- **Form**: formulário para adicionar ou editar usuário  
- **UserList**: lista de usuários filtrada  
- **UserItem**: renderiza cada usuário na lista com botões de editar/remover  

---

## 🎯 Funcionalidades

- Adicionar usuário com nome (e outros campos que você queira estender)  
- Editar usuário existente  
- Remover usuário  
- Buscar usuário por nome (campo busca)  
- Persistência via `localStorage`, para que os usuários cadastrados permaneçam após recarregar a página  

---

## 🚀 Como rodar o projeto localmente

1. Clone este repositório  
```bash
   git clone https://github.com/bfabbio90/estartandodevs-atividade-sistema-cadastro.git
```

2. Acesse a pasta do projeto
```bash
    cd estartandodevs-atividade-sistema-cadastro
```

3. Instale as dependências

```bash
    npm install
```


4. Execute em modo de desenvolvimento

```bash
    npm run dev
```
 