const http = require("http"); // Modulo nativo http.
const port = 3000; // Definir em que porta será usada.

const rotas = {
    '/': "Curso de Node",
    '/livros': "Entrei na pág de livros",
    '/autores': "Listagem de autores",
    '/editora': "Pág da editora",
    '/sobre': "Informação sobre o projeto"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Context-type': 'text-plain'});
    res.end(rotas[req.url]); // Difine qual porta vai entrar.
})

server.listen(port, () => {
    console.log(`Servidor na porta http://localhost:${port}`)
}) // Define qual porta ele vai escutar.