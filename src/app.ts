import express, { Application } from "express";
import authRoute from "./routers/authRoutes";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", authRoute);

export default app;
