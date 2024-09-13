import React, { SyntheticEvent } from "react";
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Element } from "react-scroll";
import { useTheme } from "@mui/material/styles";

// https://wordpress.validthemes.net/ambrox/portfolio-dark/

const Resume = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Element
      name="ResumePage"
      className="element"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        margin: "16px 0px",
      }}
    >
      <Typography
        variant="h3"
        textTransform="uppercase"
        color="#fff"
        letterSpacing={3}
        width="90%"
        textAlign="left"
        fontWeight={600}
        my={3}
      >
        {" "}
        Resume{" "}
      </Typography>

      <Box sx={{ width: "75%" }}>
        <AppBar
          position="static"
          sx={{
            width: "100%",
            borderRadius: isSmallScreen ? 0 : 50,
            p: 0.5,
            background: isSmallScreen ? "transparent" : "#444",
            color: "#fff",
            flexDirection: isSmallScreen ? "row" : "column",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            TabIndicatorProps={{
              sx: {
                backgroundColor: "#222", // Custom color for the indicator
                color: "#fff !important",
                borderRadius: 50,
                height: "100%", // Adjust height based on orientation
                width: "100%", // Adjust width based on orientation
                left: isSmallScreen ? 0 : "unset", // Align indicator for vertical tabs
              },
            }}
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            orientation={isSmallScreen ? "vertical" : "horizontal"}
            sx={{
              color: "#fff",
              "& .Mui-selected": {
                color: "#fff !important", // Active tab text color (white)
                zIndex: 2, // Keep the text on top of the indicator
              },
            }}
          >
            <Tab
              disableRipple
              label="Biography"
              sx={{
                textTransform: "uppercase",
                color: "#fff",
              }}
            />
            <Tab
              label="Skills"
              sx={{ textTransform: "uppercase" }}
              disableRipple
            />
            <Tab
              label="Education"
              sx={{ textTransform: "uppercase" }}
              disableRipple
            />
          </Tabs>
        </AppBar>
      </Box>
      <Box
        sx={{
          border: "1px double #fff",
          zIndex: -8,
          borderRadius: 2,
          flexGrow: 1,
          p: 3,
          width: "90%",
        }}
        mt={isSmallScreen ? "0px" : "-30px"}
      >
        {value === 0 && (
          <Box my={4}>
            <Typography variant="h4">Content for Tab One</Typography>
          </Box>
        )}
        {value === 1 && <div>Content for Tab Two</div>}
        {value === 2 && <div>Content for Tab Three</div>}
      </Box>
    </Element>
  );
};

export default Resume;
