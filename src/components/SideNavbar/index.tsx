import React, { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  ListItemButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import MainWrapper from "../MainWrapper";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-scroll";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface SideNavbarProps {
  drawerWidth: string | number;
}

const SideNavbar: React.FC<SideNavbarProps> = ({ drawerWidth }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box
      sx={{
        width: drawerWidth,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          size="large"
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 1300, // Ensures the button is above the Drawer
          }}
        >
          <CloseOutlinedIcon />
        </IconButton>
      )}

      <Toolbar>
        <Typography
          variant="h2"
          noWrap
          width="100%"
          sx={{
            fontWeight: 900,
            py: 0,
            my: 0,
            px: 4,
            letterSpacing: 4,
          }}
        >
          <Link
            to="HomePage"
            spy={true}
            onClick={handleDrawerToggle}
            offset={0}
            smooth={true}
            duration={500}
            style={{ color: "white", textDecoration: "none" }}
          >
            SIVA
          </Link>
        </Typography>
      </Toolbar>

      {/* List Menu */}
      <List sx={{ px: 4 }}>
        {[
          { text: "Home", icon: <HomeIcon />, hasSecondaryAction: false },
          { text: "About", icon: <InfoIcon />, hasSecondaryAction: false },
          { text: "Resume", icon: <InfoIcon />, hasSecondaryAction: false },
          {
            text: "Portfolio",
            icon: <InfoIcon />,
            hasSecondaryAction: false,
          },
          { text: "Contact", icon: <InfoIcon />, hasSecondaryAction: false },
        ].map((item) => (
          <ListItem key={item.text} sx={{ py: 0 }} dense>
            <ListItemButton
              disableRipple
              sx={{
                "&:hover": {
                  //   background: "#222",
                  background: "transparent",
                },
              }}
            >
              <Link
                to={`${item.text}Page`}
                activeClass="active"
                spy={true}
                smooth={true}
                activeStyle={{
                  color: "#fff",
                }}
                duration={500}
                style={{
                  color: "#b8b8b8",
                  textDecoration: "none",
                  width: "100%",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
              >
                {item.text}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Social Icons */}
      <Box sx={{ p: 2 }}>
        <List
          sx={{ px: 5, display: "flex", width: "80%", alignSelf: "stretch" }}
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
      <Box sx={{ textAlign: "center", width: "90%", mt: 4 }}>
        <Typography variant="body1" color="secondary">
          &#169; 2024 Sivaprasad Aluri
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          size="large"
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 1, // Ensures the button is above the Drawer
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerContent}
        </Drawer>
        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflowX: "hidden",
              background: "background.default",
            },
            px: 2,
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
        }}
      >
        <MainWrapper />
      </Box>
    </Box>
  );
};

export default SideNavbar;
