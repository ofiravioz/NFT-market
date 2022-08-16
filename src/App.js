import "./App.css";
import "./assets/style/main.css";
import { Button, Container, Stack, Typography } from "@mui/material";
import { AccordionPanel } from "./components/AccordionPanel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/" index element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
