import { Box, Chip, Stack } from "@mui/material";
import React from "react";
const Category = ({ data }) => {
  return (
    <Box className="category-wrapper">
      <Stack
        flexWrap={"wrap"}
        direction="row"
        justifyContent=""
        alignItems="center"
        spacing={2}
      >
        {data.map((item) => (
          <Chip key={item} label={item} variant="outlined" />
        ))}
      </Stack>
    </Box>
  );
};

export default Category;
