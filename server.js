import app from './src/app.js';

const port = process.env.PORT || 3000; // Definir em que porta será usada.

// Iniciar o server e escutar requisição
// Iniciar o server e escutar requisição
app.listen(port, () => {
    console.log(`Servidor na porta http://localhost:${port}`)
}) // Define qual porta ele vai escutar.