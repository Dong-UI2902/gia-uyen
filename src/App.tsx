import React, { useEffect, useState } from "react";
import "./App.scss";
import Home from "./pages/Home";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [sections, setSections] = useState<any>();
  useEffect(() => {
    setSections(document.querySelectorAll<HTMLElement>("section[id]"));
  }, []);

  const scrollActive = () => {
    const scrollY = window.pageYOffset;

    if (sections) {
      sections.forEach(
        (current: {
          offsetHeight: any;
          offsetTop: number;
          getAttribute: (arg0: string) => any;
        }) => {
          const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id");

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // @ts-expect-error
            document
              .querySelector(".nav-menu a[href*=" + sectionId + "]")
              .classList.add("active");
          } else {
            // @ts-expect-error
            document
              .querySelector(".nav-menu a[href*=" + sectionId + "]")
              .classList.remove("active");
          }
        }
      );
    }
  };

  window.addEventListener("scroll", scrollActive);

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
