import { useState } from "react";

import Avatar from "@mui/material/Avatar";

import { Button } from "components";

export const UserMenu = () => {
  return (
    <Button loadingSize="1.4rem" variant="contained" sx={{ width: "6rem", height: "2.8rem", fontSize: "0.875rem" }}>
      Login
    </Button>
  );
};
