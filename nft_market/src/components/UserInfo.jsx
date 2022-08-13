import { Avatar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const UserInfo = ({ name, image }) => {
  return (
    <Stack className="user-info-wrapper" direction="row" spacing={2}>
      <Avatar sx={{ width: 32, height: 32 }}>
        <img src="../assets/images/user1.png" />
      </Avatar>
      <Typography>{name}</Typography>
    </Stack>
  );
};

export default UserInfo;
