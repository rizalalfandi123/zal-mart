import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export const getUserFromLocal: () => User | null = () => {
  if (typeof window !== "undefined") return null;

  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const user = jwt.decode(token) as User;
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
