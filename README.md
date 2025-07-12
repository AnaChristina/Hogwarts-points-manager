# Hogwarts-points-manager
Sistema web para gerenciamento de alunos, casas e pontuação em Hogwarts. Permite login de usuários, cadastro, edição e exclusão de alunos, além de adicionar ou remover pontos das casas para o acompanhamento da Taça das Casas.

---

## Pré-requisitos

- Node.js instalado 
- PostgreSQL rodando localmente ou remotamente
- `npm`
- Prisma CLI (vai instalar com o projeto via `devDependencies`)

## Passos para rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/hogwarts-points-manager.git
cd hogwarts-points-manager/backend
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o banco de dados

Crie um banco PostgreSQL e configure a variável de ambiente `DATABASE_URL` no arquivo `.env` na pasta `backend` com a string de conexão:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
```

### 4. Execute as migrations
```bash
npx prisma migrate deploy
```

### 5. Execute o seeding para criar as casas iniciais
```bash
npx prisma db seed
```

### 6. Inicie o servidor backend
```bash
npm run dev
```

### 7. Abra o frontend

Abra o arquivo `index.html` na raiz do projeto no seu navegador. Ou utilize a extensão live share.


## Comandos úteis

- `npm run dev` — Inicia o servidor backend em modo de desenvolvimento
- `npx prisma migrate deploy` — Aplica as migrations no banco
- `npx prisma db seed` — Insere dados iniciais no banco (casas já criadas)

