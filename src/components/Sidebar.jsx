import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Box,
} from "@mui/material";
import {
  Home,
  Apps,
  Person,
  BarChart,
  Settings,
  Add,
} from "@mui/icons-material";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, isActive: false },
    { icon: Apps, isActive: false },
    { icon: Person, isActive: false },
    { icon: BarChart, isActive: false },
    { icon: Settings, isActive: false },
    { icon: Add, isActive: false },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 100,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 100,
          boxSizing: "border-box",
          backgroundColor: "#f5f5f5",
          borderRight: "1px solid #e0e0e0",
        },
      }}
    >
      <Box sx={{ overflow: "hidden" }}>
        <List sx={{ pt: 2 }}>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  mt: 2,
                  px: 2.5,
                  mx: 1,
                  mb: 1,
                  borderRadius: 1,
                  backgroundColor: item.isActive ? "#673ab7" : "transparent",
                  "&:hover": {
                    backgroundColor: item.isActive ? "#673ab7" : "#e0e0e0",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    color: item.isActive ? "#ffffff" : "#666666",
                  }}
                >
                  <item.icon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
