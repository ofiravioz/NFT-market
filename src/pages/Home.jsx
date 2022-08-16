import "../assets/style/main.css";
import { Button, Container, Stack, Typography } from "@mui/material";
import { AccordionPanel } from "../components/AccordionPanel";
import NFTCard from "../components/NFTCard";
import Email from "../components/Email";
import HeroSection from "../components/HeroSection";
import appData from "../data/app.json";
function Home() {
  return (
    <Container maxWidth="lg">
      <Container>
        <HeroSection data={appData.herotag} />
      </Container>
      <Stack direction="row">
        <AccordionPanel
          expandedDefault={true}
          title="History"
          data={appData.history}
        />
        <AccordionPanel
          expandedDefault={true}
          title="Bids"
          data={appData.bids}
        />
      </Stack>
      <Stack className="more-works" direction="row">
        <Typography gutterBottom variant="h2">
          More Works by CameronWill{" "}
        </Typography>
        <Button color="primary" variant="contained">
          See All
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ display: "inline-flex" }}>
        {appData.nft.map((item) => (
          <NFTCard item={item} />
        ))}
      </Stack>
      <Email />
    </Container>
  );
}

export default Home;
