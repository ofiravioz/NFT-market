import "./App.css";
import "./assets/style/main.css";
import { Button, Container, Stack, Typography } from "@mui/material";
import { AccordionPanel } from "./components/AccordionPanel";
import NFTCard from "./components/NFTCard";
import Email from "./components/Email";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import appData from "./data/app.json";

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
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
      <Stack direction="row" spacing={2}>
        {appData.nft.map((item) => (
          <NFTCard key={"nft-item-${item.user.name}"} item={item} />
        ))}
      </Stack>
      <Email />
      <Footer />
    </Container>
  );
}

export default App;
