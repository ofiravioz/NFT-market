import { Button, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Logo, ExpandMoreIcon } from "../common/assets";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Container className="header-wrapper">
      <Stack
        direction="row"
        spacing={5}
        alignItems="center"
        justifyContent="center"
      >
        <Logo className="logo" />
        <Button className="active">Home</Button>
        <Button component={Link} to="/404">
          Market
        </Button>
        <Button>Explore</Button>
        <Button>Exhibitiontab</Button>
        <Button>Artist</Button>
        <Button>
          Community
          <ExpandMoreIcon />
        </Button>
        <Button color="secondary" variant="contained">
          connect wallet
        </Button>
      </Stack>
    </Container>
  );
};
export default Header;
