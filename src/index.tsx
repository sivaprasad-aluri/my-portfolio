import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatedCursor
        color="250, 220, 230"
        innerSize={5}
        outerSize={20}
        outerScale={2}
        innerScale={1}
        outerStyle={{
          background: "rgba(0,0,0,0.3)",
          border: "2px solid",
          zIndex: 10000,
        }}
        innerStyle={{ zIndex: 10000 }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
