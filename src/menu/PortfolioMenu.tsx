import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import ComputerIcon from "@mui/icons-material/Computer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import DarkModeToggle from "./dark-mode-toggle/DarkModeToggle";
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import DrawerHeader from "./DrawerHeader";
import DrawerPull from "./DrawerPull";
import PageService from "../services/PageService";

function PortfolioMenu() {
  const pages = PageService.getPages();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            sx={{ display: { xs: "flex", sm: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            id="menu-appbar"
            anchor="left"
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            onOpen={() => setIsOpen(true)}
            swipeAreaWidth={isOpen ? 56 : 0}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}
          >
            <DrawerPull />
            <DrawerHeader>
              <IconButton
                size="large"
                aria-label="close menu"
                aria-controls="menu-appbar"
                onClick={() => {
                  setIsOpen(false);
                }}
                color="inherit"
              >
                <Close />
              </IconButton>
            </DrawerHeader>
            <List>
              {pages.map((page) => (
                <ListItem key={page.name}>
                  <ListItemButton
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    href={page.link}
                  >
                    <ListItemIcon>{page.icon}</ListItemIcon>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
        </>
        <>
          <ComputerIcon sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KDana Development |
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {
                  setIsOpen(false);
                }}
                href={page.link}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </>
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  );
}

export default PortfolioMenu;
