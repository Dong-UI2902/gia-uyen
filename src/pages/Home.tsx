import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Project />
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
