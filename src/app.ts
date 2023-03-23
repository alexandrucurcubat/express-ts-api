import express, { Request, Response } from "express";

const app = express();

app.get("/healthcheck", (_: Request, res: Response) => {
  res.json({ status: "ok" });
});

export default app;
