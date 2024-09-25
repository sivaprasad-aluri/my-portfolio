import React, { SyntheticEvent } from "react";
import {
  AppBar,
  Box,
  Button,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Element } from "react-scroll";
import { useTheme } from "@mui/material/styles";

// https://wordpress.validthemes.net/ambrox/portfolio-dark/

const Resume = () => {
  const steps = [
    {
      label: "Select campaign settings",
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Create an ad",
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];

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
              width: "35%", // Make the line 50% of the width
              height: "4px", // Line thickness
              backgroundColor: "#aeaeae", // Line color
            },
            "::after": {
              content: "'SUMMARY'",
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
          Resume
        </Typography>
        <Box
          display={{
            xs: "block",
            md: "flex",
          }}
          justifyContent="space-between"
        >
          <Box pl={2} width={{ xs: "100%", md: "50%" }} pr={3}>
            <Stepper orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === steps.length - 1 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Box px={2} width={{ xs: "100%", md: "50%" }} pt={5}></Box>
        </Box>
      </Box>
    </Element>
  );
};

export default Resume;
