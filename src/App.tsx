import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioMenu from "./menu/PortfolioMenu";
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Demos from "./demos/Demos";
import SkipLink from "./skip-link/SkipLink";

function App() {
  const theme = createTheme({
    palette: { mode: "dark" }
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <SkipLink skipTo="#mainContent"></SkipLink>
        <PortfolioMenu />
        <div id="mainContent">
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/articles/" element={<Articles />} />
              <Route path="/demos/" element={<Demos />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
