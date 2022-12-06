import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { Page } from "../services/PageService";
import DemoCard from "./DemoCard";

export interface Props {
  category: DemoPageCategory;
}

export interface DemoPageCategory {
  name: string;
  icon: typeof SvgIcon;
  pages: Page[];
}

function DemoCategory(props: Props) {
  return (
    <>
      <Typography variant="h2" sx={{ fontSize: "2rem", display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <props.category.icon fontSize="large" />
        {props.category.name}
      </Typography>
      <Box
        sx={{
          margin: 4,
          mt: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {props.category.pages.map((page) => (
          <DemoCard key={page.name} page={page}></DemoCard>
        ))}
      </Box>
    </>
  );
}

export default DemoCategory;
