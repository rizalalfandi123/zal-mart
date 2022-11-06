import { useSession } from "next-auth/react";

export const useAuth = () => {
  const { data } = useSession();

  const isLogged = Boolean(data?.user);
  const isAdmin = Boolean(data?.user.role === "ADMIN");
  const isUser = Boolean(data?.user.role === "USER");
  const userData = data?.user;

  return { isAdmin, isLogged, isUser, userData };
};
