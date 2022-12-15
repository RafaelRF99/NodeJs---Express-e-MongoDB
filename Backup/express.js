import express from 'express';

const app = express();

app.use(express.json()) // Recurso que faz interpretação do que chega via Post ou Put e transforma em objeto.

// Variavel utilizada para o estudo.
const livros = [
    {id: 1, "titulo": "Senhor dos Anéis"},
    {id: 2, "titulo": "O Hobbit"}
]

// Faz a localização do ID dentro do Json e compara se são iguais.
function buscaLivros(id) {
    return livros.findIndex(livro => livro.id == id);
}

// ROTAS
// ROTAS
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node'); //Status 200 = OK //SEND msg.
}) // Requisição GET do App

app.get('/livros', (req, res) => {
    res.status(200).json(livros) // Devolve um Json dos livros.
})

// Devolve o livro de acordo com ID.
app.get('/livros/:id', (req, res) => {
    let index = buscaLivros(req.params.id); // Pegou o ID
    res.json(livros[index]); // Devolve o livro de acordo com ID.
})

app.post('/livros', (req, res) => {
    livros.push(req.body); // Faz o push no corpo da requisão.
    res.status(201).send("O livro foi cadastrado com sucesso!"); // Status de OK para criação de algo.
})

// Devolve a lista modificada.
app.put('/livros/:id', (req, res) => {
    let index = buscaLivros(req.params.id); // Pegou o ID
    livros[index].titulo = req.body.titulo; // Faz a alteração do titulo antigo pro novo
    res.json(livros); // Devolve a lista modificada.
})

// Devolve a lista modificada.
app.put('/livros/:id', (req, res) => {
    let index = buscaLivros(req.params.id); // Pegou o ID
    livros[index].titulo = req.body.titulo; // Faz a alteração do titulo antigo pro novo
    res.json(livros); // Devolve a lista modificada.
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params; // Desestruturado para poder pegar o objeto json e deletar
    let index = buscaLivros(id); // Pegou o ID
    livros.splice(index, 1);
    res.send(`Livro ${id} foi excluido com sucesso!`);
})

export default app;