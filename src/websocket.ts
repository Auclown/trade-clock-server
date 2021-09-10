import { createServer } from "http";
import { Server } from "ws";
import app from "./app";

const server = createServer(app);
const wss = new Server({ server });

wss.on("connection", (ws) => {
  console.log("A new client connected");

  ws.on("message", function incoming(message) {
    console.log(`received ${message}`);
  });
  ws.on("close", () => {
    console.log("Closed");
  });
});

export default server;
