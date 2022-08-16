import { Box, Typography } from "@mui/material";
import React from "react";
function PageNotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Typography gutterBottom variant="h1">
        404 Error
      </Typography>
      <Typography gutterBottom variant="h2">
        Page Not Found
      </Typography>
    </Box>
  );
}

export default PageNotFound;
