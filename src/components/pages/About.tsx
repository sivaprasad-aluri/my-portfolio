import React from "react";
import {
  Box,
  Button,
  Grid2,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Element } from "react-scroll";
import AboutMe from "../../assets/image/about.jpg";
import DownloadIcon from "@mui/icons-material/Download";

const About = () => {
  return (
    <Element
      name="AboutPage"
      className="element"
      style={{
        minHeight: "100vh",
        background: "#333",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        px={5}
        my={{ xs: 5, md: 0 }}
        display={{
          xs: "block",
          md: "flex",
        }}
        flexDirection="column"
        rowGap={5}
      >
        <Typography
          variant="h5"
          p={2}
          textAlign="center"
          mb={5}
          sx={{
            position: "relative",
            "::before": {
              content: '""', // Empty content for the line
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)", // Center the line horizontally
              width: "5%", // Make the line 50% of the width
              height: "4px", // Line thickness
              backgroundColor: "#000", // Line color
            },
            "::after": {
              content: "'ABOUT ME'",
              position: "absolute",
              left: "50%",
              top: "-50%",
              transform: "translateX(-50%)", // Ensure horizontal centering
              fontSize: { xs: "3rem", md: "4rem" }, // Change for medium screens
              fontWeight: 900,
              letterSpacing: { xs: 5, md: 10 },
              color: "#888",
              opacity: 0.1, // Subtle background effect
            },
          }}
        >
          Know me more
        </Typography>

        <Box
          display={{
            xs: "block",
            md: "flex",
          }}
          justifyContent="space-between"
        >
          <Box pl={2} width={{ xs: "100%", md: "60%" }} pr={3}>
            <Typography variant="h5" color="secondary">
              I'm{" "}
              <span
                style={{ color: "#fff", letterSpacing: 2, fontWeight: 800 }}
              >
                Sivaprasad Aluri
              </span>
              , a Senior UI Developer
            </Typography>
            <Typography variant="body1" py={3} textAlign="justify">
              Highly skilled and results-oriented Front End Developer with over
              a 10 years experience in crafting exceptional user experiences and
              building robust web applications. Adept at translating design
              mockups into pixel-perfect, responsive interfaces while ensuring
              optimal performance, accessibility, and usability.
            </Typography>
            <Typography variant="body1" textAlign="justify">
              Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </Typography>
          </Box>
          <Box px={2} width={{ xs: "100%", md: "40%" }} pt={5}>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell
                      align="left"
                      sx={{ pl: 0, letterSpacing: 1, borderColor: "#777" }}
                    >
                      <span style={{ fontWeight: 600 }}>Name:</span> Sivaprasad
                      Aluri
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="left"
                      sx={{ pl: 0, letterSpacing: 1, borderColor: "#777" }}
                    >
                      <span style={{ fontWeight: 600 }}>Email:</span>{" "}
                      sivaprasad.aluri@gmail.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="left"
                      sx={{ pl: 0, letterSpacing: 1, borderColor: "#777" }}
                    >
                      <span style={{ fontWeight: 600 }}>Age:</span> 35
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="left"
                      sx={{ pl: 0, letterSpacing: 1, border: "none" }}
                    >
                      <span style={{ fontWeight: 600 }}>From:</span> Hyderabad,
                      India
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              variant="contained"
              size="large"
              endIcon={<DownloadIcon />}
              color="secondary"
              sx={{
                fontWeight: 600,
                color: "#1f1f1f",
                py: 1.24,
                borderRadius: "30px",
                mt: 2,
              }}
            >
              Download CV
            </Button>
          </Box>
        </Box>
      </Box>
    </Element>
  );
};

export default About;
