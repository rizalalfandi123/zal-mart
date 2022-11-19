import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import type { User } from "@prisma/client";

import { SxProps, Theme } from "@mui/material";

import { Button } from "components";
import { getAuthState, useAppSelector, useAppDispatch, addUser } from "state-management";
import { AccountMenu } from "./account-menu";

const buttonLoginStyle: SxProps<Theme> = {
  width: "6rem",
  height: "2.8rem",
  fontSize: "0.875rem",
};

export const UserMenu = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userState = useAppSelector(getAuthState).user;
  const [user, setUser] = useState<User | undefined>(undefined);

  const handleButtonLogin = () => router.push("/auth/signin");

  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem("token");
      if (token) {
        const localUser = jwt.decode(token) as User;
        dispatch(addUser(localUser));
      }
    }
  }, []);

  useEffect(() => {
    setUser(userState);
  }, [userState]);

  if (user) return <AccountMenu {...user} />;

  return (
    <Button loadingSize="1.4rem" variant="contained" sx={buttonLoginStyle} onClick={handleButtonLogin}>
      Login
    </Button>
  );
};
