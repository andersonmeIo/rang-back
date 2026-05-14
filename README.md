# Rang Back

API REST para gerenciamento de produtos e autenticação de usuários, desenvolvida com Node.js, TypeScript e MySQL.

## Stack

* Node.js
* Express
* TypeScript
* MySQL
* Zod
* Bcrypt

---

## Arquitetura

O projeto segue uma estrutura modular baseada em separação de responsabilidades:

```txt id="wqgrtk"
src/
 ├── modules/
 │    ├── auth/
 │    └── products/
 │
 ├── database/
 ├── routes/
 ├── app.ts
 └── server.ts
```

Cada módulo possui:

* routes
* controllers
* services
* validations

---

## Funcionalidades

### Auth

* Registro de usuários
* Login
* Hash de senha com bcrypt
* Validação com Zod

### Products

* Criação de produtos
* Listagem de produtos
* Relacionamento com categorias

---

## Environment

```env id="l1q1j3"
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=rang
```

---

## Instalação

```bash id="n3t1u0"
git clone https://github.com/andersonmeIo/rang-back.git
```

```bash id="zpt7k7"
npm install
```

```bash id="c61a4h"
npm run dev
```

---

## Próximos passos

* JWT Authentication
* Middleware global de erros
* Authorization
* Prisma ORM
* Swagger/OpenAPI
* Docker
* Testes automatizados

---

## Autor

Anderson Melo
