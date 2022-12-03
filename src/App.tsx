import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioMenu from "./menu/PortfolioMenu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Demos from "./demos/Demos";

function App() {
  const theme = createTheme({
    palette: { mode: "dark" }
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <PortfolioMenu />
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/articles/" element={<Articles />} />
            <Route path="/demos/" element={<Demos />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
