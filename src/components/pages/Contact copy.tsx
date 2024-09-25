import React from "react";
import {
  Box,
  Grid2,
  IconButton,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { Element } from "react-scroll";
import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactImage from "../../assets/contact.jpg";

const Contact = () => {
  return (
    <Element name="ContactPage" className="element" style={{ height: "100vh" }}>
      <Box px={2} pt={3} height="100%">
        <Typography
          variant="h4"
          fontWeight={600}
          letterSpacing={2}
          textAlign="center"
        >
          Contact
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          mt={4}
        >
          <Grid2 container spacing={2} width="90%">
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }} maxHeight={200}>
              <Paper elevation={2} sx={{ height: "100%", padding: 2, pt: 5 }}>
                <Box sx={{ textAlign: "center" }}>
                  <PhonelinkRingIcon sx={{ fontSize: 42 }} />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h6"
                    textTransform="uppercase"
                    fontWeight={300}
                    letterSpacing={1.5}
                  >
                    Call Me
                  </Typography>
                  <Typography
                    mt={2}
                    variant="body1"
                    textTransform="uppercase"
                    fontWeight={300}
                    letterSpacing={1.5}
                  >
                    +91 9121081882
                  </Typography>
                </Box>
              </Paper>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }} maxHeight={200}>
              <Paper elevation={2} sx={{ height: "100%", padding: 2, pt: 5 }}>
                <Box sx={{ textAlign: "center" }}>
                  <EmailOutlinedIcon sx={{ fontSize: 42 }} />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h6"
                    textTransform="uppercase"
                    fontWeight={300}
                    letterSpacing={1.5}
                  >
                    Mail Me
                  </Typography>
                  <Typography
                    mt={2}
                    variant="body1"
                    fontWeight={300}
                    letterSpacing={1.5}
                  >
                    shivaprasad.aluri@gmail.com
                  </Typography>
                </Box>
              </Paper>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }} maxHeight={200}>
              <Paper elevation={2} sx={{ height: "100%", padding: 2, pt: 5 }}>
                <Box sx={{ textAlign: "center" }}>
                  <PlaceOutlinedIcon sx={{ fontSize: 42 }} />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h6"
                    textTransform="uppercase"
                    fontWeight={300}
                    letterSpacing={1.5}
                  >
                    Address
                  </Typography>
                  <Typography
                    mt={2}
                    variant="body1"
                    textTransform="uppercase"
                    fontWeight={300}
                    letterSpacing={1.5}
                  >
                    Hyderabad, Telangana, Hyderabad, 500019
                  </Typography>
                </Box>
              </Paper>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }} maxHeight={200}>
              <Paper elevation={2} sx={{ height: "100%", padding: 2, pt: 5 }}>
                <Box sx={{ textAlign: "center" }}>
                  <AlternateEmailOutlinedIcon sx={{ fontSize: 42 }} />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h6"
                    textTransform="uppercase"
                    fontWeight={300}
                    letterSpacing={1.5}
                  >
                    Follow me
                  </Typography>
                  {/* Social Icons */}
                  <Box
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                      },
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <List
                      sx={{
                        px: 5,
                        width: { sm: "95%", xs: "95%", md: "65%" },
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <ListItem sx={{ p: 0 }}>
                        <IconButton sx={{ color: "#fff" }}>
                          {<FacebookIcon fontSize="small" />}
                        </IconButton>
                      </ListItem>
                      <ListItem sx={{ p: 0 }}>
                        <IconButton sx={{ color: "#fff" }}>
                          {<InstagramIcon fontSize="small" />}
                        </IconButton>
                      </ListItem>
                      <ListItem sx={{ p: 0 }}>
                        <IconButton sx={{ color: "#fff" }}>
                          {<LinkedInIcon fontSize="small" />}
                        </IconButton>
                      </ListItem>
                      <ListItem sx={{ p: 0 }}>
                        <IconButton sx={{ color: "#fff" }}>
                          {<GitHubIcon fontSize="small" />}
                        </IconButton>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
              </Paper>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Element>
  );
};

export default Contact;
