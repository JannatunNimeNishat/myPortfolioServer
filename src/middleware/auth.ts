import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { TUserRole } from "../constants";

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error("You have no access to this route.");
    }

    let decoded;
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string
      ) as JwtPayload;
    } catch (error) {
      throw new Error("You have no access to this route.");
    }

    const { role, email } = decoded;

    if (email !== "admin@admin.com") {
      throw new Error("You have no access to this route.");
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new Error("You have no access to this route.");
    }
    //  req.user = decoded as JwtPayload;
    next();
  });
};
export default auth;
