import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ConstructionTwoToneIcon from "@mui/icons-material/ConstructionTwoTone";
import CalculateIcon from "@mui/icons-material/Calculate";
import Category from "@mui/icons-material/Category";
import Hive from "@mui/icons-material/Hive";
import Games from "@mui/icons-material/Games";
import SportsEsportsTwoToneIcon from "@mui/icons-material/SportsEsportsTwoTone";
import DemoCategory, { DemoPageCategory } from "./DemoCategory";
import { Outlet } from "react-router-dom";

function Demos() {
  const categories: DemoPageCategory[] = [
    {
      name: "Utilities",
      icon: ConstructionTwoToneIcon,
      pages: [
        { name: "Calculator", description: "", icon: CalculateIcon, link: "calculator" },
        { name: "Whiteboard", description: "", icon: Category, link: "./whiteboard" },
      ],
    },
    {
      name: "Games",
      icon: SportsEsportsTwoToneIcon,
      pages: [
        { name: "Platformer", description: "", icon: Games, link: "./platformer" },
        { name: "Beeees!", description: "Make your way as a bee on a peaceful day.", icon: Hive, link: "./bees" },
      ],
    },
  ];
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h1" sx={{ fontSize: "3rem", textAlign: "center" }}>
        Demos
      </Typography>

      {categories.map((category) => (
        <Container key={category.name}>
          <DemoCategory category={category} />
        </Container>
      ))}

      <Outlet />
    </Box>
  );
}

export default Demos;
