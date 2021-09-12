import { Request, Response } from "express";

export function getUser(request: Request, response: Response) {
  return response.json({ message: "Get Route by id" });
}
