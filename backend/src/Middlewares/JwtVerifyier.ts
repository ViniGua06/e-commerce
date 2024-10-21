import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../Errors/Unauthorized.error";

export const VerifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["x-acess-token"];

  if (!token) {
    const error: UnauthorizedError = new UnauthorizedError("Token faltando!");
    next(error);
  }

  jwt.verify(token!.toString(), "senha", (error) => {
    if (error) {
      const error: UnauthorizedError = new UnauthorizedError("Token inválido!");
      next(error);
    }

    next();
  });
};
