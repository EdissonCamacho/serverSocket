const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html'); });
io.on('connection', (socket) => {
    

    socket.on('variable', (msg) => {
        io.emit('variable', msg);
    });

    socket.on('recargarUsuario', (msg) => {
        io.emit('recargarUsuario', msg);
    });

    socket.on('turno', (msg) => {
        io.emit('turno', msg);
    });

    socket.on('turno2', (msg) => {
        io.emit('turno2', msg);
    });

    socket.on('pregunta', (msg) => {
        io.emit('pregunta', msg);
    });


});




server.listen(3000, () => { console.log('listening on *:3000'); });