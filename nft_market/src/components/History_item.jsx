import { Avatar, Box, Stack } from "@mui/material";
import React from "react";
import UserInfo from "./UserInfo";

const Histoy_item = () => {
  return (
    <Stack direction="row" spacing={2}>
      <UserInfo name="Cameron Williamson" />
      <Stack direction="coulmn" spacing={2}>
        <Box>Bid 1 ETH</Box>
        <Box>June 20 2021, 06:30 AM</Box>
      </Stack>
    </Stack>
  );
};

export default Histoy_item;
