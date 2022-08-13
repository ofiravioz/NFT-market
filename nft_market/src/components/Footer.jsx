import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Logo } from "../common/assets";
const Footer = () => {
  return (
    <Stack direction="row" spacing={5}>
      <Container>
        <Logo className="logo" />
        <Typography sx={{ margintop: 41.52 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          tristique placerat eleifend aliquam pellentesque facilisis ultrices.
          Imperdiet mus urna egestas at tellus.{" "}
        </Typography>

        <Stack direction="row" spacing={7}>
          <Button>Privacy Policy</Button>
          <Button>Terms and Condition</Button>
        </Stack>
      </Container>
      <Container className="footer-container">
        <Button> About</Button>
        <Button>About Us</Button>
        <Button>Our Services</Button>
        <Button>How It Works</Button>
        <Button>Support</Button>
        <Button>Become a Partner</Button>
      </Container>
      <Container className="footer-container">
        <Button> Comunity</Button>
        <Button>Token</Button>
        <Button>Discussion</Button>
        <Button>Voting</Button>
        <Button>Blog</Button>
        <Button>Help Center</Button>
      </Container>
      <Container className="footer-container">
        <Button> Social Media</Button>
        <Button>Facebook</Button>
        <Button>Instagram</Button>
        <Button>Twitter</Button>
      </Container>
    </Stack>
  );
};

export default Footer;
