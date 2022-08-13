import { Button, Chip, Container, Stack, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const Category = () => {
  return (
    <Container className="category-wrapper">
      <Stack
        flexWrap={"wrap"}
        direction="row"
        justifyContent=""
        alignItems="center"
        spacing={2}
      >
        <Chip label="Blue Color" variant="outlined" />
        <Chip label="Cold" variant="outlined" />
        <Chip label="Crypto Art" variant="outlined" />
        <Chip label="Blue Filter" variant="outlined" />
        <Chip label="Defragmentation" variant="outlined" />
        <Chip label="Hexagon" variant="outlined" />
        <Chip label="Light" variant="outlined" />
        <Chip label="Motion" variant="outlined" />
        <Chip label="Sparks" variant="outlined" />
        <Chip label="Edition 1 of 1" variant="outlined" />
      </Stack>
    </Container>
  );
};

export default Category;
