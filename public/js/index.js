var socket = io();
socket.on('connect',function(){
    console.log("conected to server ...");
socket.emit('createMessage',{
    from:"Hossein",
    text:"salam dash hossien"
    }) 
})

socket.on('disconnect',function(){
    console.log("disconnect plz try again later!");
})

socket.on('newMessage',function(message){
    console.log("new message ", message)
});