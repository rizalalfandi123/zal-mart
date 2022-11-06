import { useState } from "react";
import { signIn, useSession } from "next-auth/react";

import Avatar from "@mui/material/Avatar";

import { Button } from "components";

export const UserMenu = () => {
  const [loadingButtonLogin, setLoadingButtonLogin] = useState<boolean>(false);
  const { data } = useSession();
  const user = data?.user;

  const handleClickLogin = () => {
    setLoadingButtonLogin(true);
    signIn();
  };

  if (!data || !user) {
    return (
      <Button onClick={handleClickLogin} loading={loadingButtonLogin} loadingSize="1.4rem" variant="contained">
        Login
      </Button>
    );
  }

  if (user.image) return <Avatar src={user.image} alt="profile" />;

  return <Avatar>{user.name}</Avatar>;
};
