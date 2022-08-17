import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Container,
  Grid,
  Box,
} from "@mui/material";
import { useState } from "react";
import UserInfo from "./UserInfo";

const AccordionPanelItem = ({ item }) => {
  return (
    <Stack direction="row">
      <UserInfo name={item.user.name} image={item.user.image} />
      <Grid direction="coulmn" spacing={1}>
        <Typography>{item.bid.amount}</Typography>
        <Typography>{item.bid.date}</Typography>
      </Grid>
    </Stack>
  );
};

export const AccordionPanel = ({ expandedDefault, title, data, icon }) => {
  const [expanded, setExpanded] = useState(expandedDefault);
  const handleChange = () => {
    setExpanded((state) => !state);
  };
  console.log({ icon });
  return (
    <Box>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={
            <ExpandMore
              sx={{
                color: "#fff",
                marginLeft: "auto",
              }}
            />
          }
        >
          <img src={icon} />
          <Typography
            gutterBottom="h2"
            fontSize={24}
            fontweight={700}
            sx={{
              width: "86px",
              height: "32px",
              marginLeft: "18px",
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "#fff",
            backgroundColor: "#06132d",
          }}
        >
          {data.map((item) => (
            <AccordionPanelItem item={item} />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
