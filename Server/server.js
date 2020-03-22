const path = require('path');
const express = require('express')
const publicpath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000;
const socketIO = require('socket.io')
const http = require('http');

var app = express();
var server = http.createServer(app);
var io = socketIO(server)

io.on('connection',(socket)=>{
    console.log("New user connection")
    socket.on('disconnect',()=>{
        console.log("disconnected ...!")
    })
})

app.use(express.static(publicpath))


server.listen(3000,()=>{
    console.log(`server is up on ${port}`)
})