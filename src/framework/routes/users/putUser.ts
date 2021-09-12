import { Request, Response } from "express";

export function putUsers(request: Request, response: Response) {
  return response.json({ message: "PUT Route" });
}
