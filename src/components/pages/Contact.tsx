import React from "react";
import { Box, Typography } from "@mui/material";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Element name="ContactPage" className="element">
        <Typography>Contact</Typography>
      </Element>
    </Box>
  );
};

export default Contact;
