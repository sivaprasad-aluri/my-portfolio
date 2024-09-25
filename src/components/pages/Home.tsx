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
    <Element
      name="HomePage"
      className="element"
      style={{ height: "100vh", padding: 3 }}
    >
      <Grid
        container
        height="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row-reverse" }}
        gap={{
          xs: 0,
          md: 10,
        }}
      >
        <Grid
          size={{ xs: 12, sm: 12, md: 5 }}
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "start",
            lg: "start",
          }}
          alignItems={{
            xs: "center",
            sm: "center",
            md: "start",
            lg: "start",
          }}
          display="flex"
          pt={{
            xs: 5,
            sm: 0,
            md: 0,
          }}
        >
          <Avatar
            alt="SivaPrasad"
            src={Siva}
            sx={{
              width: {
                xs: 180,
                sm: 180,
                md: 180,
                lg: 256,
              },
              height: {
                xs: 180,
                sm: 180,
                md: 180,
                lg: 256,
              },
              // scale: {
              //   xs: 1,
              //   sm: 1,
              //   md: 1.1,
              //   lg: 1.2,
              // },
              border: "10px double #979797",
            }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 5 }}
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "end",
            lg: "end",
          }}
          alignItems={{
            xs: "center",
            sm: "center",
            md: "end",
            lg: "end",
          }}
          display="flex"
          // gap={2}
          mt={1}
          flexDirection={{ xs: "column" }}
        >
          <Typography
            variant="h2"
            fontWeight={{
              xs: 400,
              sm: 600,
              md: 600,
            }}
            letterSpacing={{
              xs: 0,
              sm: 4,
              md: 4,
            }}
          >
            {" "}
            SIVAPRASAD{" "}
          </Typography>
          <Typography variant="h6" fontWeight={200} letterSpacing={1}>
            {" "}
            WEB / UI DEVELOPER{" "}
          </Typography>
          <Button
            size="large"
            variant="contained"
            sx={{
              color: "#fff",
              background: "#666",
              mt: 1,
              borderRadius: 0,
              transition: "0.5s",
              "&:hover": {
                background: "#000",
                letterSpacing: 0.5,
              },
              fontWeight: "100",
            }}
          >
            <Link
              to="ContactPage"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              GET IN TOUCH
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Element>
  );
};

export default Home;
