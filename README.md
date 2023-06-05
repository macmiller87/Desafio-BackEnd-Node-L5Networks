### Desafio Backend Nodejs L5Networks

## 🚀 **Tecnologias**

- Typecript
- Nodejs
- Express
- PrismaORM
- BD Sqlite
- Tsyringe
- Multer
- Axios
- Bcryptjs

### 💻 Projeto

- Neste Desafio foi proposto construir uma API em Nodejs/Typescript com 7 end-points, sendo eles: 

###### `Post` para criar um usuário.
###### `Get` para pesquisar/listar um usuário.
###### `Patch` para atualizar um campo de cadastro do usuário.
###### `Delete` para deletar um usuário.
###### `Get` para pesquisar um usuário via `API publica do Github`.
###### `Post` para ser possível fazer upload de imagem para o usuário.
###### `Get` para ser possível fazer download da imagem anteriormente feito upload, para o usuário.

- OBS: O end-point para download, ainda não foi desenvolvido.

## 🚀 Como executar a Aplicação

### Rotas da aplicação

#### CreateUser: Post - `/createUser`.

- A rota deve receber `name`, `email`, `password` e `login` dentro do corpo da requisição. Ao cadastrar um novo usuário, ele deve ser armazenado dentro de um objeto `json` no seguinte formato:

Obs: (O campo `user_id` e `createdAt`, são gerados automaticamente pelo PrismaORM).

"user_id": "",
"name": "",
"email": "",
"password": "",
"login": "",
"created_at": "",

#### ListUser: Get - `/listUser`.

- A rota deve receber `name` e `email`, dentro do corpo da requisição, no formato de um objeto `json`, essa consulta só pode acontecer caso os dois parâmetros passados anteriormente sejam válidados.

#### UpdateUserField: Patch - `/updateUserField/`.

- A rota deve receber pelo cabeçario de requisição `http` o `user_id` do usuário a ser atualizado, obs: esse user_id tem que ser passado pelo parametro `query` da ferramenta que trabalha com requisições `http`, ex: (Insominia, Postman etc ..), e pelo corpo da requisição o `email` no formato de um objeto `json`, propriedade a ser atualizada no `usuário` , essa atualização só pode acontecer caso o parâmetros `user_id` seja válidado.

#### DeleteUser: Delete - `/deleteUser/`.

- A rota deve receber pelo cabeçario de requisição `http` o `user_id` do usuário a ser deletado, obs: esse user_id tem que ser passado pelo parametro `query` da ferramenta que trabalha com requisições `http`, ex: (Insominia, Postman etc ..).

#### SearchUsersByAPIGithub: Get - `/searchUsersByAPIGithub/`.

- A rota deve receber pelo corpo da requisição `username` no formato de um objeto `json` para o usuário a ser pesquisado na `API Publica do Github`.

#### UploadUserImages: Post - `/userUpload/`.

- A rota deve receber pelo cabeçario de requisição `http` o `user_id` de um usuário valido, obs: esse user_id tem que ser passado pelo parametro `query` da ferramenta que trabalha com requisições `http`, ex: (Insominia, Postman etc ..), e pela propriedade/parametro `Multipart Form`, da ferramenta que trabalha com requisições `http`, ex: (Insominia, Postman etc ..), `a imagem a ser feito o upload`.

## Para rodar essa aplicação siga os seguintes passos:

- Copie a url do repositório na aba `CODE`.
- Com o git instalado, execute o seguinte comando => `git clone "Aqui vai a url copiada acima"`.
- Com o `Nodejs` e o `Yarn ou Npm` instalados, Na sua IDE preferida, abra o terminal do `git`, e execute o seguinte comando => `yarn ou npm i`, para baixar as dependências da aplicação.
- Para rodar o projeto execute o seguinte comando => `yarn dev ou Npm dev`.
- Para testar o funcional da aplicação será necessário o uso das ferramentas `Insomnia ou Postman` e criar as rotas da aplicação citadas acima.