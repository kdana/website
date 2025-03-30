import React, { useState } from "react";
import { Theme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightness from "@mui/icons-material/SettingsBrightness";
import LightMode from "@mui/icons-material/LightMode";
import ThemeService from "../../services/ThemeService";

export interface ThemeOption {
  index: number;
  theme: Theme | null;
  icon: typeof SvgIcon;
}

function DarkModeToggle() {
  const options = [
    { index: 0, name: "System Mode", theme: null, icon: SettingsBrightness },
    { index: 1, name: "Dark Mode", theme: ThemeService.getDarkTheme(), icon: DarkModeOutlined },
    { index: 2, name: "Light Mode", theme: ThemeService.getLightTheme(), icon: LightMode },
  ];
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.theme?.palette.mode === ThemeService.getTheme()?.palette.mode) || options[0]
  );
  const toggleTheme = function () {
    setSelectedOption((previousOption) => {
      let option = previousOption ? options[(previousOption.index + 1) % 3] : options[0];
      ThemeService.setTheme(option.theme);
      return option;
    });
  };

  return (
    <IconButton title={selectedOption.name} sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
      <selectedOption.icon />
    </IconButton>
  );
}

export default DarkModeToggle;
