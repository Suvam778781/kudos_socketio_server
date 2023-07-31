const express = require("express");
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io");
const { generateClientId } = require("./utils/generateClientId");
const { connection, pool } = require("./config/db");
const { groupMessagesByClientId } = require("./utils/groupMessagesByClientId");
const { getCurrentDateTime } = require("./utils/getCurrentDateTime");
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});
app.use(express.json());
app.use(cors());
const connectedClients = new Map();
// Handle socket.io connections
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);
  // Add client to the connectedClients set
 
  socket.on("clientJoin", (data) => {
    const { clientId } = data;
    console.log(`Client with ID ${clientId} joined.`);
    connectedClients.set(clientId, socket.id);
  });
  socket.on("clientMessage", (data) => {
    const { admin_id, client_id, message } = data;
    // Save the client message to the database
    console.log(client_id, message, "client");
    let timestamp=getCurrentDateTime()
    io.emit("adminMessage", { admin_id, socket_id:socket.id, client_id,timestamp:timestamp, message });
  });
  
  // Handle incoming admin messages

  socket.on("adminMessage", (data) => {
    const { admin_id, client_id, message } = data;
    const socketId = connectedClients.get(client_id);
    console.log(connectedClients)
    console.log(admin_id,message, client_id, "admin");
    let time=getCurrentDateTime()

    console.log(socketId,"ans")

    if (socketId) {
      io.to(socketId).emit("clientMessage", { admin_id, client_id, timestamp:time, message });
    }
  });

  // Handle disconnections
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
    // Remove the client entry from the connectedClients map on disconnection
    for (const [clientId, socketId] of connectedClients.entries()) {
      if (socketId === socket.id) {
        connectedClients.delete(clientId);
        console.log(`Client with ID ${clientId} disconnected.`);
        break;
      }
    }
  });
});
// // Start the server
const PORT = 8080;
server.listen(PORT, async (err) => {
  if (err) {
    console.log("inside server fuinction");
    console.log(err);
  } else {
    try {
      console.log(process.env.PORT || 8090,"connected");
    } catch (error) {
      console.log("Error while connecting to the database:", error);
      server.close();
    }
  }
});

app.get("/", (req, res) => {
  res.send("homepage hai ye");
});
