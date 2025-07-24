import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const Header = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tableau de bord
        </Typography>
        <Avatar src="/broken-image.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
