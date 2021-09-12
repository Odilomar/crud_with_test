import { Request, Response } from "express";

export function deleteUser(request: Request, response: Response) {
  return response.json({ message: "Delete Route" });
}
