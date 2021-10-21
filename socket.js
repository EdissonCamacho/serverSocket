const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html'); });
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {

        io.emit('chat message', msg);
    });

    socket.on('variable', (msg) => {
        io.emit('variable', msg);
    });

    socket.on('recargarUsuario', (msg) => {
        io.emit('recargarUsuario', msg);
    });

    socket.on('turno', (msg) => {
        io.emit('turno', msg);
    });

    socket.on('gano', (msg) => {
        io.emit('gano', msg);
    });


});




server.listen(3000, () => { console.log('listening on *:3000'); });