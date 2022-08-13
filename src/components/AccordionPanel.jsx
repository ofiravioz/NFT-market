import { ExpandMore, Maximize } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Stack,
  Container,
  Grid,
} from "@mui/material";
import UserInfo from "./UserInfo";

const AccordionPanelItem = ({ image, name, bid, date }) => {
  return (
    <Stack direction="row">
      <UserInfo name={name} image={image} />
      <Grid direction="coulmn" spacing={1}>
        <Typography>{bid}</Typography>
        <Typography>{date}</Typography>
      </Grid>
    </Stack>
  );
};

export const AccordionPanel = ({ expanded, title, data }) => {
  return (
    <Container>
      <Accordion expanded={expanded}>
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
              image={item.user.image}
              name={item.user.name}
              bid={item.bid.amount}
              date={item.bid.date}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
