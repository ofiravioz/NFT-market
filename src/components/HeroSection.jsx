import React from "react";
import Category from "./Category";
import UserInfo from "./UserInfo";
import Lastprice from "./Lastprice";
import { Box, Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { MainImage } from "../common/assets.js";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";

const Owner = () => {
  return (
    <Box className="owner-wrapper">
      <Stack direction="column">
        <Typography>Artist</Typography>
        <UserInfo name="CameronWill" />
      </Stack>
      <Stack direction="column">
        <Typography>Owner</Typography>
        <UserInfo name="Williamson" />
      </Stack>
    </Box>
  );
};

const HeroSection = ({ data }) => {
  return (
    <Container className="hero-container">
      <Stack
        className="hero-section-stack"
        direction="row"
        spacing={10}
        justifyContent="flex-end"
        alignItems="start"
      >
        <img className="hero-image" src={MainImage} />
        <Container>
          <Typography gutterBottom variant="h3" component="div">
            Geometrical heart-fire dispersion
          </Typography>
          <Typography color={"#ccc"}>
            A fragmental dispersion of the heart. I used many photoshop
            geometrical brushes with different random size and opacity, in order
            to emphatize the contrast between front and background spaces,
            enhancing better the main subject exposure.
          </Typography>
          <Category data={data} />
          <Owner />
          <Lastprice />
          <Stack classname="herosection-button" direction="row" spacing={2}>
            <Button
              component={Link}
              to="/404"
              color="primary"
              variant="contained"
            >
              place a Bid
            </Button>
            <Button component={Link} to="/404" variant="outlined">
              Share <ShareIcon fontSize="small" sx={{ marginLeft: "13px" }} />
            </Button>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
};

export default HeroSection;
