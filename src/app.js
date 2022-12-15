import express from 'express';
import dbConnect from './config/dbConnect.js';
import livros from './models/Livro.js'
import routes from './routers/index.js';

dbConnect.on("erro", console.log.bind(console, "Erro de conexão")) // on => Metodo do que esta acontecendo
dbConnect.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!")
}) // Abrir a conexão

const app = express();

app.use(express.json()) // Recurso que faz interpretação do que chega via Post ou Put e transforma em objeto.

routes(app) // Rotas

// Faz a localização do ID dentro do Json e compara se são iguais.
function buscaLivros(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;