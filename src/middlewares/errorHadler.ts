import { NextFunction, Request, Response } from "express";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error.stack);
  res.status(500).json({
    message: "Something went wrong",
    error: error.message,
  });
};

export default errorHandler;