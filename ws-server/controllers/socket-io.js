const { Server } = require("socket.io")

module.exports = (server) => {
    const io = new Server(server, {
        cors: 
            { origins: '*:*'}
        
    });

    io.on('connection', (socket) => {
        console.log('a user connected');
    });
    return io;  
}