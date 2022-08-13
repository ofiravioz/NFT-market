import { Container, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
const Lastprice = () => {
  return (
    <Container>
      <Typography>List Price :</Typography>
      <Stack className="lastprice-wrapper" direction="row" spacing={4}>
        <Typography gutterBottom variant="h4">
          0.4435 ETH
        </Typography>
        <Typography className="price-location">$1.231</Typography>
      </Stack>
    </Container>
  );
};

export default Lastprice;
