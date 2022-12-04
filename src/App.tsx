import React, { useEffect, useState } from "react";
import { ThemeProvider, Theme, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioMenu from "./menu/PortfolioMenu";
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Demos from "./demos/Demos";
import SkipLink from "./skip-link/SkipLink";
import ThemeService, { theme$ } from "./services/ThemeService";

function App() {
  const [theme, setTheme] = useState(ThemeService.getTheme() || ThemeService.getDarkTheme());
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    function handleThemeChange(theme: Theme | null) {
      if (!theme) {
        theme = prefersDarkMode ? ThemeService.getDarkTheme() : ThemeService.getLightTheme();
      }
      setTheme(theme);
    }
    const subscription = theme$.subscribe(handleThemeChange);
    return function cleanup() {
      subscription.unsubscribe();
    };
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
