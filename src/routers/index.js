import express from 'express';
import livros from './livrosRoutes.js';
import autores from './AutoresRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"}) // Resposta padrão
    })

    app.use(
        express.json(), // Indicação que vai trabalhar com json
        livros,
        autores
    )
}

export default routes;