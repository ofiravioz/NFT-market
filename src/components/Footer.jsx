import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Logo } from "../common/assets";
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
        <Stack direction="row" spacing={7}>
          <Button className="test">Privacy Policy</Button>
          <Button className="test">Terms and Condition</Button>
        </Stack>
      </Container>
      <Box>
        <Button className="header"> About</Button>
        <Button>About Us</Button>
        <Button>Our Services</Button>
        <Button>How It Works</Button>
        <Button>Support</Button>
        <Button>Become a Partner</Button>
      </Box>
      <Box>
        <Button className="header"> Comunity</Button>
        <Button>Token</Button>
        <Button>Discussion</Button>
        <Button>Voting</Button>
        <Button>Blog</Button>
        <Button>Help Center</Button>
      </Box>
      <Box>
        <Button className="header"> Social Media</Button>
        <Button>Facebook</Button>
        <Button>Instagram</Button>
        <Button>Twitter</Button>
      </Box>
    </Box>
  );
};

export default Footer;
