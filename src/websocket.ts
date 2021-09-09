import { createServer } from "http";
import { Server } from "ws";

const wsServer = createServer();
const wss = new Server({ server: wsServer });

wss.on("connection", () => {
  console.log("Websocket connected");
});

export default wsServer;
