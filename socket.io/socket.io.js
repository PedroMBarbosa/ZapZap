// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + '/public')); // Serve arquivos estáticos

io.on('connection', (socket) => {
    console.log('Um usuário se conectou');
    
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Envia a mensagem para todos os usuários conectados
    });

    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    });
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
