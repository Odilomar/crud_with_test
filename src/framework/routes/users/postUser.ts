import { Request, Response } from "express";

export function postUsers(request: Request, response: Response) {
  return response.json({ message: "POST Route" });
}
