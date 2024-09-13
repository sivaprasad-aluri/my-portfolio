import { Height } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";

const Portfolio = () => {
  return (
    <Element
      name="PortfolioPage"
      className="element"
      style={{ height: "100vh" }}
    >
      <Typography>Portfolio</Typography>
    </Element>
  );
};

export default Portfolio;
