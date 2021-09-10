import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello from Trade Clock server",
  });
});

router.post("/verify", (req: Request, res: Response) => {
  // body = { uuid: token }
  const uuid = req.body.uuid;
  const token = req.body.token;
  return res.send({ uuid, token });
});

export default router;
