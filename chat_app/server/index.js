const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js')
const { addRoom, removeRoom, getRoom } = require('./rooms');

const PORT = process.env.PORT || 5000

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        console.log(`User ${name} has joined room ${room}`)

        const { error, user } = addUser({ id: socket.id, name, room});

        if (error) return callback(error);

        socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room ${user.room}`})
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!`});

        socket.join(user.room);

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)})

        callback();
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', { user: user.name, text: message });
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })
        }
        callback();
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left the chat.`})
        }
    })
})
  
app.use(express.json());
app.use(router);

app.get('/rooms/:room', (req, res) => {
    const { room } = req.params; 

    const requiredRoom = getRoom(room);

    res.status(200).send(
        requiredRoom
    );
});

app.post('/rooms', (req, res) => {

    const { room, password } = req.body;
    res.status(200).send({ response: "success" });

    if (addRoom(room, password)) {
        res.status(200).send({ response: "success" });
    } else {
        res.status(404).send({ message: "error" })
    }
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));