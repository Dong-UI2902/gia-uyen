import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "Project", "Profile", "Contact"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="navbar">
      <AppBar position="static" color="transparent" className="app-bar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", justifyItems: "center" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
              className={"nav-menu"}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className={`menu-button ${page === "Home" && "active"}`}
                  href={`/#${page.toLowerCase()}`}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
