import React, { useEffect, useState } from "react";
import "./App.scss";
import Home from "./pages/Home";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Marketing from "./pages/Marketing";
import Editorial from "./pages/Editorial";
import Virtual from "./pages/Virtual";
import { isMobile } from "./helper/helper";
import MobileView from "./components/MobileView";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      <Container maxWidth="lg" sx={{ padding: "0!important" }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/project/marketing" element={<Marketing />} />
          <Route path="/project/editorial" element={<Editorial />} />
          <Route path="/project/virtual" element={<Virtual />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
