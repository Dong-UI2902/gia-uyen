import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Container maxWidth="lg" className="layout shadow-blur">
        <Navbar />
        <Home />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
