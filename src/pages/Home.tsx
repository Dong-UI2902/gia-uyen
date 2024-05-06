import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Footer from "../components/Footer";
import { isMobile } from "../helper/helper";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Project />
      {!isMobile() && <Profile />}
      <Footer />
    </div>
  );
};

export default Home;
