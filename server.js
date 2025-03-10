import express from 'express';
import 'dotenv/config.js';
import './config/database.js';

const server = express();

const PORT = process.env.PORT || 8080;

const ready = () => console.log("Server ready in port:"+PORT);

//Esto me sirve para probar mi servidor si esta funcionando
server.get('/', (request, response) => {
    response.send('Hola, bienvenidos a EXPRESS!');
});

server.get('/hola', (request, response) => {
    response.send('I come back');
});


server.listen(PORT, ready); 