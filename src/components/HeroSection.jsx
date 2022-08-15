import React from "react";
import Category from "./Category";
import UserInfo from "./UserInfo";
import Lastprice from "./Lastprice";
import { Box, Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { MainImage } from "../common/assets.js";
import ShareIcon from "@mui/icons-material/Share";

const Owner = () => {
  return (
    <Container className="owner-wrapper">
      <Stack marginBottom="8px" direction="row" spacing={16}>
        <Typography>Artist</Typography>
        <Typography>Owner</Typography>
      </Stack>
      <Stack direction="row" spacing={5}>
        <UserInfo name="CameronWill" />
        <UserInfo name="Williamson" />
      </Stack>
    </Container>
  );
};

const HeroSection = ({ data }) => {
  return (
    <Container
      sx={{
        color: "#fff",
        padding: 0,
      }}
    >
      <Stack
        className="hero-section-stack"
        direction="row"
        spacing={10}
        justifyContent="flex-end"
        alignItems="start"
      >
        <img src={MainImage} width="608px" height="783px" />
        <Container>
          <Typography gutterBottom variant="h3" component="div">
            Geometrical heart-fire dispersion
          </Typography>
          <Box>
            A fragmental dispersion of the heart. I used many photoshop
            geometrical brushes with different random size and opacity, in order
            to emphatize the contrast between front and background spaces,
            enhancing better the main subject exposure.
          </Box>
          <Category data={data} />
          <Owner />
          <Lastprice />
          <Stack classname="herosection-button" direction="row" spacing={2}>
            <Button color="primary" variant="contained">
              place a Bid
            </Button>
            <Button variant="outlined">
              Share <ShareIcon fontSize="small" sx={{ marginLeft: "13px" }} />
            </Button>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
};

export default HeroSection;
