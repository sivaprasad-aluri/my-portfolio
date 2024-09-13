import React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid2 as Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Element, Link } from "react-scroll";
import Siva from "../../assets/image/siva.jpg";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumDevice = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Element name="HomePage" className="element" style={{ height: "100vh" }}>
      <Box
        display="flex"
        width="100%"
        justifyContent="space-around"
        alignItems="center"
        height="100vh"
        px={5}
      >
        <Grid
          container
          spacing={2}
          left={3}
          alignItems="center"
          flexDirection={
            isSmallDevice || isMediumDevice ? "column-reverse" : "row"
          }
        >
          <Grid size={{ md: 8, sm: 12 }}>
            <Typography variant="h6"> SIVAPRASAD </Typography>
            <Typography variant="h3" mb={2}>
              {" "}
              WEB/MOBILE DEVELOPER{" "}
            </Typography>
            <Button
              size="large"
              variant="contained"
              sx={{
                color: "#fff",
                background: "#666",
                borderRadius: 0,
                transition: "0.5s",
                "&:hover": {
                  background: "#000",
                  letterSpacing: 0.5,
                },
              }}
            >
              <Link
                to="ContactPage"
                // containerId="ContactPage"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                GET IN TOUCH
              </Link>
            </Button>
          </Grid>
          <Grid size={{ md: 4, sm: 12 }}>
            <Box width="300px" mr={4}>
              <Avatar
                alt="SivaPrasad"
                src={Siva}
                sx={{
                  width: isMediumDevice ? 150 : 256,
                  height: isMediumDevice ? 150 : 256,
                  scale: isMediumDevice ? 1 : 1.2,
                  border: "10px double #979797",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Element>
  );
};

export default Home;
