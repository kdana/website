import React, { ReactNode } from "react";
import Home from "@mui/icons-material/Home";
import Article from "@mui/icons-material/Article";
import Apps from "@mui/icons-material/Apps";
import SvgIcon from "@mui/material/SvgIcon";

export interface Page {
  name: string;
  description: string;
  icon: typeof SvgIcon;
  link: string;
}

const PageService = {
  getPages: function (): Page[] {
    return [
      { name: "Home", description: "The home page dashboard for the website", icon: Home, link: "/" },
      {
        name: "Articles",
        description:
          "Knowledge articles, hieroglyphics, and random scribbles from systems and idealogies I've interacted with",
        icon: Article,
        link: "/articles",
      },
      {
        name: "Demos",
        description:
          "Various side projects that I've worked on and collaborated with others to build. Click here to view and interact!",
        icon: Apps,
        link: "/demos",
      },
    ];
  },
};

export default PageService;
