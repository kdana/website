import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ComputerIcon from "@mui/icons-material/Computer";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DarkModeToggle from "../dark-mode-toggle/DarkModeToggle";
import Button from "@mui/material/Button";

interface Props {}
interface State {
  auth: boolean;
  anchorElement: HTMLElement | null;
}

class PortfolioMenu extends React.Component<Props, State> {
  pages = ["Home", "Articles", "Demos"];

  constructor(props: Props) {
    super(props);
    this.state = {
      auth: false,
      anchorElement: null,
    };
  }

  handleMenu(event: React.MouseEvent<HTMLElement>) {
    this.setState({ anchorElement: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorElement: null });
  }

  render() {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <ComputerIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KDana Development |
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {this.pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  this.handleClose();
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <DarkModeToggle />
          {this.state.auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(event) => {
                  this.handleMenu(event);
                }}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorElement}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(this.state.anchorElement)}
                onClose={() => {
                  this.handleClose();
                }}
              >
                <MenuItem
                  onClick={() => {
                    this.handleClose();
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    this.handleClose();
                  }}
                >
                  My account
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default PortfolioMenu;
