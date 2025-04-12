# **ToDoList - Talita-API**

**Backend** para uma aplicação de gerenciamento de tarefas (ToDo List), desenvolvido para o **Bootcamp da TASCOM**.  
Permite criar usuários, tasks e tags, além de associar tags às tasks para melhor organização.

## **Funcionalidades**

**Autenticação**

- Cadastro de usuário (`username`, `email`, `password`)
- Login com JWT (token de acesso)

**Tasks (Tarefas)**

- Criar, listar, editar e excluir tasks
- Campos: `title`, `description`, `status`, `priority`
- Associação com tags

**Tags**

- Criar, listar editar e excluir tags
- Campos: `name`, `color`

## **Passo a Passo para Executar**

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Talitavit/ToDoList.git
   cd ToDoList
   ```

2. **Instale as dependências**

   ```bash
   npm i
   ```

3. **Configure o ambiente**

   - Crie um arquivo `.env` baseado no `.env.example`:

     ```env
     # Configurações do PostgreSQL
     DB_USERNAME=seu_usuario_postgres
     DB_PASSWORD=sua_senha_postgres
     DB_DATABASE=nome_do_banco_de_dados
     DB_HOST=localhost
     DB_PORT=5432
     DB_DIALECT=postgres

     JWT_SECRET=sua_chave_secreta_jwt
     ```

4. **Execute as migrations (cria as tabelas no banco de dados)**

   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Inicie o servidor**

   ```bash
   npm run dev
   ```

6. **Acesse a API**
   - **Local:** `http://localhost:4000`

## **Endpoints Principais**

### **Autenticação**

| Método | Rota            | Descrição                 |
| ------ | --------------- | ------------------------- |
| POST   | `/users/create` | Cria um novo usuário      |
| POST   | `/users/login`  | Faz login e retorna token |

### **Usuários (requer token)**

| Método | Rota                 | Descrição                |
| ------ | -------------------- | ------------------------ |
| GET    | `/users/list`        | Lista todos usuários     |
| GET    | `/users/show/:id`    | Busca usuário específico |
| PUT    | `/users/update/:id`  | Atualiza usuário         |
| DEL    | `/users/destroy/:id` | Remove usuário           |

### **Tasks (requer token)**

| Método | Rota                 | Descrição                    |
| ------ | -------------------- | ---------------------------- |
| POST   | `/tasks/create`      | Cria uma nova task           |
| GET    | `/tasks/list`        | Lista todas tasks do usuário |
| GET    | `/tasks/show/:id`    | Busca task específica        |
| PUT    | `/tasks/update/:id`  | Atualiza task                |
| DELETE | `/tasks/destroy/:id` | Exclui task                  |

### **Tags (requer token)**

| Método | Rota                | Descrição                   |
| ------ | ------------------- | --------------------------- |
| POST   | `/tags/create`      | Cria uma nova tag           |
| GET    | `/tags/list`        | Lista todas tags do usuário |
| GET    | `/tags/show/:id`    | Busca tag específica        |
| PUT    | `/tags/update/:id`  | Atualiza tag                |
| DELETE | `/tags/destroy/:id` | Exclui tag                  |

## **Licença**

MIT License.

**Desenvolvido por [Talita Vitória]**
**Bootcamp TASCOM**
