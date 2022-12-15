# NodeJS

### Executar
npm run dev

### Pasta Backup:
Pasta gerada para salvar o backup do http sem influência do express e express sem influência do MongoDB.

## Plugins instalados:
-Nodemon
-Express
-Mongoose

## Descrição de Plugin:
-Nodemon:
Instalar:  npm i nodemon@2.0.15 -D
Utilização: Ajuda no relod da página.
-Express:
Instalação: npm i express@4.17.3
Utilização: Framework para Node.js que fornece recursos mínimos para construção de servidores.
-Mongoose
Instalação: npm i mongoose@6.2.6
Utilização: Cria a conexão com o MongoDB Atlas.

## package.json
Colocar "type": "module"
NodeMon: Após instalado colocar no "package.json" no "script"> "dev": "nodemon server.js".

## Descrição do projeto:
Foi iniciado "npm init -y" com http, após isso criado backup do http e instalado o express e o nodemon para atualização automatica, então foi feito metodo get, post, put e delete a partir do Postman, feito backup do express e criado o server no mongodb Atlas, criado pasta config somente para fazer a conexão com o server e models para os modelo do livro, exemplo, "id", "titulo", "autor".
Site MongoDB Atlas: https://cloud.mongodb.com/

## O que foi aprendido durante o curso:
O que é uma API REST.
-GET = Obter
-POST = PUBLICAR
-PUT = EDITAR
-DELETE = DELETAR
Iniciar um projeto Node através do npm init.
Construir um servidor local utilizando o módulo http do Node.js.
Realizar a criação de novas rotas.
Instalação do nodemon e utilização para não ter que reiniciar o servidor a cada mudança.
Criado servidor local com express.
Devolver dados como resposta às requisições, usando o padrão JSON.
Utilizar o Postman para fazer as requisições do tipo GET, POST, PUT e DELETE.
Banco relacional:
-Utilização de tabelas.
-Linhas e colunas.
-Chaves primárias e chaves entrangeiras.
Não relacional:
-Não precisa ser divididos em tabelas.
-Todos dados podem estar divididos em uma mesma estrutura.
-Criação de Shema de livros para representar a coleção de livros no banco de dados.
-Conexão com API com Banco de Dados.