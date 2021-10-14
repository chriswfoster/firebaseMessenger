
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const ws = require('./controllers/ws-server');
const socketIo = require('./controllers/socket-io');
const http = require('http');
const server = http.createServer(app);

// ws();
// socketIo(server);


const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
});



const port = 1738;

// app.listen(port, () => {
//     console.log("Tuned in to smooth jazz: ", port)
// });
server.listen(port, () => {
  console.log('listening on *:', port);
});