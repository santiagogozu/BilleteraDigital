import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (userId) => {
  return jwt.sign({id: userId}, process.env.JWT_SECRET, {
    expiresIn: "7d", // El token expira en 7 días
  });
};

export default generateToken;
