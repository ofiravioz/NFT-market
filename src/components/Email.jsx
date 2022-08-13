import { Box, Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import React from "react";
const Email = () => {
  return (
    <Container className="subscription-container">
      <Box>
        <Typography gutterBottom variant="h3">
          Stay in the loop on CryptoArt and NFTs
        </Typography>
        <Typography gutterBottom variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField id="filled-basic" label="Your Email" variant="filled" />
          <Button>Subscribe</Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Email;
