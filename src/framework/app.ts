import express, { json, Request, Response, NextFunction } from "express";
import "express-async-errors";
import "dotenv/config";

import routes from "./routes";

const app = express();

app.use(json());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err}`,
    });
  }
);

export default app;
