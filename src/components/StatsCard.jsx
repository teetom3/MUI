/* eslint-disable no-unused-vars */
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const StatsCard = ({ title, value, icon: Icon, iconColor }) => {
  return (
    <Card sx={{ height: "100%", width: "100%" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon sx={{ fontSize: 20, color: iconColor, mx: 1 }} />
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {value}
              </Typography>
              <Typography>{title}</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
