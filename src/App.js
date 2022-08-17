import "./App.css";
import "./assets/style/main.css";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <Container className="app-wraper" maxWidth="lg">
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
