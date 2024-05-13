import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Tarun Jaikihan is a good Bot You know".repeat(1000),
  });
});

const port = process.env.PORT || 8080;

app.listen(port, (): void => {
  console.log("Server Running On PORT " + port);
});
