import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Logo } from "../common/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box className="footer-wrap">
      <Container>
        <Logo className="logo" />
        <Typography sx={{ margintop: 41.52 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          tristique placerat eleifend aliquam pellentesque facilisis ultrices.
          Imperdiet mus urna egestas at tellus.{" "}
        </Typography>
        <Stack direction="row" spacing={7} sx={{ marginTop: "130px" }}>
          <Button component={Link} to="/404" className="test">
            Privacy Policy
          </Button>
          <Button component={Link} to="/404" className="test">
            Terms and Condition
          </Button>
        </Stack>
      </Container>
      <Box>
        <Button component={Link} to="/404" className="header">
          About
        </Button>
        <Button component={Link} to="/404">
          About Us
        </Button>
        <Button component={Link} to="/404">
          Our Services
        </Button>
        <Button component={Link} to="/404">
          How It Works
        </Button>
        <Button component={Link} to="/404">
          Support
        </Button>
        <Button component={Link} to="/404">
          Become a Partner
        </Button>
      </Box>
      <Box>
        <Button component={Link} to="/404" className="header">
          {" "}
          Comunity
        </Button>
        <Button component={Link} to="/404">
          Token
        </Button>
        <Button component={Link} to="/404">
          Discussion
        </Button>
        <Button component={Link} to="/404">
          Voting
        </Button>
        <Button component={Link} to="/404">
          Blog
        </Button>
        <Button component={Link} to="/404">
          Help Center
        </Button>
      </Box>
      <Box>
        <Button component={Link} to="/404" className="header">
          {" "}
          Social Media
        </Button>
        <Button component={Link} to="/404">
          Facebook
        </Button>
        <Button component={Link} to="/404">
          Instagram
        </Button>
        <Button component={Link} to="/404">
          Twitter
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
