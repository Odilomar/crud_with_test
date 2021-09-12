import { Request, Response } from "express";

export function getUsers(request: Request, response: Response) {
  return response.json({ message: "Get Route" });
}
