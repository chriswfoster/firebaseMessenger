import socketIOClient from "socket.io-client";
const ENDPOINT = "http://loalhost:8080"; 

const socket = socketIOClient(ENDPOINT);


// client-side
socket.on("connect", () => {
  console.log("Socket connected");
});

socket.on("disconnect", () => {
  console.log("Socket disconnected"); // undefined
});

export default socket;