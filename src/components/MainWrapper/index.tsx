import React from "react";
import { Box, Typography } from "@mui/material";
import Home from "../pages/Home";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

const MainWrapper = () => {
  return (
    <>
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </>
  );
};

export default MainWrapper;
