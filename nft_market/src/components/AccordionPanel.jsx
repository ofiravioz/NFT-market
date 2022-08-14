import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Container,
  Grid,
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

export const AccordionPanel = ({ expandedDefault, title, data }) => {
  const [expanded, setExpanded] = useState(expandedDefault);
  const handleChange = () => {
    setExpanded((state) => !state);
  };
  return (
    <Container>
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
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "#fff",
            backgroundColor: "#06132d",
          }}
        >
          {data.map((item) => (
            <AccordionPanelItem
              key={"accordion-item-${item.user.name}"}
              item={item}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
