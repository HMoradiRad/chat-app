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

    socket.emit('newMessage',{
        from:"admin",
        text:"wellcome to chat ",
        createAt: new Date().getTime()
    })

    socket.broadcast.emit('newMessage',{
        from:"admin",
        text:"new user joined",
        createAt:new Date().getTime()
    })

    // socket.emit('newMessage',{
    //     from : "kakero",
    //     text:"salam khobi chetori??",
    //     createAt:123
    // })
   socket.on('createMessage',(message)=>{
       console.log("create message : ",message)
        io.emit('newMessage',{
            from : message.from,
            text: message.text,
            createAt : new Date().getTime()
        })
   })
    socket.on('disconnect',()=>{
        console.log("disconnected ...!")
    })
})

app.use(express.static(publicpath))


server.listen(3000,()=>{
    console.log(`server is up on ${port}`)
})