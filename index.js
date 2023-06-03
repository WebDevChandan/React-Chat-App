const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const PORT = 4000 || process.env.PORT;

//Cors is used for inter communication between URL
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello BackEnd");
})

const server = http.createServer(app);

const io = socketIO(server);

const users = {};

//As io server in turn on, we've to pass a socket here
io.on("connect", (socket) => {
    console.log("new Connection");

    //data received as an object, here we're doing object destructuring.
    socket.on('joined', ({ user }) => {
        users[socket.id] = user;
        // console.log(`${user} has Joined.`);

        //This would emit the message to every user of the application except who just joined. 
        //It will work as notification as someone joined/online
        socket.broadcast.emit('userJoined', { user: "Admin", message: `${users[socket.id]} has Joined` });
        socket.emit('welcome', { user: "Admin", message: `Welcome to the React Chat, ${users[socket.id]}` });
    });

    socket.on('message', ({ message, id }) => {
        //Sending message to whole circuit/application i.e. to both joined user for chatting
        io.emit('sendMessage', { user: users[id], message, id });

    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('leave', { user: "Admin", message: `${users[socket.id]} left the Chat` });
        console.log(`User Left`);
    })


})


server.listen(PORT, () => {
    console.log("Server is working on http://localhost:" + PORT);
})