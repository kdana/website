import React from "react";
import StorageService from "./StorageService";
import { BehaviorSubject } from "rxjs";
import { Theme, createTheme } from "@mui/material/styles";

export const ThemeService = {
  setTheme(theme: Theme): void {
    StorageService.store("theme", theme.palette.mode);
    theme$.next(theme);
  },
  getTheme(): Theme | null {
    let theme = StorageService.fetch("theme");
    if (theme === "light") return this.getLightTheme();
    if (theme === "dark") return this.getDarkTheme();
    return null;
  },
  isLightMode(): boolean {
    return this.getTheme()?.palette.mode === "light";
  },
  getDarkTheme(): Theme {
    return createTheme({
      palette: { mode: "dark" },
    });
  },
  getLightTheme(): Theme {
    return createTheme({
      palette: { mode: "light" },
    });
  },
};

export let theme$ = new BehaviorSubject<Theme | null>(ThemeService.getTheme());

export default ThemeService;
