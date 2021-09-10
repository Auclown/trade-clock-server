import server from "./websocket";

const port = process.env.PORT || 8080;

try {
  server.listen(port, (): void => {
    console.log(`Server is running on port ${port}`);
  });
} catch {
  console.error(`Error occured`);
}
