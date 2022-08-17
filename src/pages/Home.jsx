import "../assets/style/main.css";
import { Button, Container, Stack, Typography } from "@mui/material";
import { AccordionPanel } from "../components/AccordionPanel";
import NFTCard from "../components/NFTCard";
import Subscripton from "../components/Subscripton";
import HeroSection from "../components/HeroSection";
import appData from "../data/app.json";
function Home() {
  return (
    <Container maxWidth="lg">
      <Container>
        <HeroSection data={appData.herotag} />
      </Container>
      <Stack direction="row" spacing={3}>
        <AccordionPanel
          expandedDefault={true}
          title="History"
          data={appData.history}
          icon={appData.historyicon}
        />
        <AccordionPanel
          expandedDefault={true}
          title="Bids"
          data={appData.bids}
          icon={appData.bidsicon}
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
      <Subscripton />
    </Container>
  );
}

export default Home;
