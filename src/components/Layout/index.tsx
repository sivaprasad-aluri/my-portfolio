import React, { useState } from "react";
import SideNavbar from "../SideNavbar";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Layout = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <SideNavbar drawerWidth={isSmallScreen ? "100%" : 300} />;
    </>
  );
};

export default Layout;
