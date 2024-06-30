import config from "../../config";
import { createToken } from "../../utils/createToken";

const loginIntoDB = async (payload: {
  email: string;
  password: string;
}) => {
  if (payload?.password !== "12345678!!!" || payload?.email !== "admin@admin.com" ) {
    throw new Error("Password or Email did not matched");
  }

  const jwtPayload = {
    email: payload?.email,
    role: "admin",
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  return accessToken;
};

export const AuthServices={
    loginIntoDB
}