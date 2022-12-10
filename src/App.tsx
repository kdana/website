import React, { useEffect, useState } from "react";
import { ThemeProvider, Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioMenu from "./menu/PortfolioMenu";
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Demos from "./demos/Demos";
import SkipLink from "./skip-link/SkipLink";
import ThemeService, { theme$ } from "./services/ThemeService";
import Calculator from "./demos/utilities/Calculator";
import Whiteboard from "./demos/utilities/Whiteboard";
import Platformer from "./demos/games/Platformer";
import Bees from "./demos/games/Bees";

console.log(
  `%c
╔═╗     ╔═╗ ╔═════╗ ╔═╗       ╔═════╗  ╔═════╗  ╔══╗   ╔══╗ ╔═════╗
██║ ╔═╗ ██║ ██████╝ ██║      ╔██████╝ ╔██████╚╗ ███╚╗  ███║ ██████╝
██║╔██╚╗██║ ██║     ██║      ██║      ██║   ██║ ████║ ████║ ██║    
██╚████╚██║ ████║   ██║      ██║      ██║   ██║ ██╔████╔██║ ████║  
████╝ ████║ ██╚═══╗ ██╚════╗ ██╚════╗ ██║   ██║ ██║╚██╔╝██║ ██╚═══╗
███╝   ███╝ ██████╝ ███████╝  ██████╝  ██████╝  ██╝ ╚═╝ ██╝ ██████╝
`,
  "color: #e65100"
);

function App() {
  const [theme, setTheme] = useState(ThemeService.getTheme() || ThemeService.getDarkTheme());
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    function handleThemeChange(newTheme: Theme | null) {
      if (!newTheme) {
        newTheme = prefersDarkMode ? ThemeService.getDarkTheme() : ThemeService.getLightTheme();
      }
      if (newTheme.palette.mode !== theme.palette.mode) {
        setTheme(newTheme);
      }
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
              <Route path="/demos/calculator" element={<Calculator />} />
              <Route path="/demos/whiteboard" element={<Whiteboard />} />
              <Route path="/demos/platformer" element={<Platformer />} />
              <Route path="/demos/bees" element={<Bees />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
