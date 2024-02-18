import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <Home />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
