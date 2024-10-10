import { NextFunction, Request, Response } from "express";

import { BadRequestError } from "../Errors/BadRequest.error";

export const ErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  if (error instanceof BadRequestError) {
    return res.status(400).json({ message: error.message });
  } else {
    return res
      .status(500)
      .json({ message: "Internal server error - " + error.message });
  }
};
