import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import AnimatedCursor from "react-animated-cursor";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <>
      {!isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
          outerStyle={{
            border: "3px solid var(--cursor-color)",
          }}
        />
      )}
      <Layout />;
    </>
  );
}

export default App;
