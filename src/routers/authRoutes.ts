import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello from Trade Clock server",
  });
});

export default router;
