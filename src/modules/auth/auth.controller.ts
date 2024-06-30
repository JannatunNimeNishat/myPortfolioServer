import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.services";

const login = catchAsync(async (req: Request, res: Response) => {
  try {
    const result = await AuthServices.loginIntoDB(req.body);
    res.json({
      message: "Login Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error,
    });
  }
});

export const AuthController = {
  login,
};
