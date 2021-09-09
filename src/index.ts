import app from "./app";
import wss from "./websocket";

const wsPort = process.env.WS_PORT || 8081;
const port = process.env.PORT || 8080;

try {
  app.listen(port, (): void => {
    wss.listen(wsPort, () => {
      console.log(`Websocket is running on port ${wsPort}`);
    });
    console.log(`Server is running on port ${port}`);
  });
} catch {
  console.error(`Error occured`);
}
