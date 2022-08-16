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
        <Button component={Link} to="/Home" className="active">
          Home
        </Button>
        <Button component={Link} to="/404">
          Market
        </Button>
        <Button component={Link} to="/404">
          Explore
        </Button>
        <Button component={Link} to="/404">
          Exhibitiontab
        </Button>
        <Button component={Link} to="/404">
          Artist
        </Button>
        <Button component={Link} to="/404">
          Community
          <ExpandMoreIcon />
        </Button>
        <Button
          component={Link}
          to="/404"
          color="secondary"
          variant="contained"
          sx={{
            width: 184,
            height: 52,
            fontSize: "13px",
            flex: "none",
            borderradius: 8,
          }}
        >
          connect wallet
        </Button>
      </Stack>
    </Container>
  );
};
export default Header;
