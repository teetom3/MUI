import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box, Grid, Toolbar } from "@mui/material";
import { AttachMoney, People, Message } from "@mui/icons-material";

import { theme } from "./theme";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import Chart from "./components/Chart";
import OrdersTable from "./components/OrdersTable";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor: "#f5f5f5",
            minHeight: "100vh",
          }}
        >
          <Header />

          <Box sx={{ width: "100%", p: 2 }}>
            <Grid container spacing={3} sx={{ mb: 2, width: "100%", p: "1" }}>
              <Grid item xs sx={{ flexGrow: 1 }}>
                <StatsCard title="Ventes" value={1000} icon={AttachMoney} />
              </Grid>
              <Grid item xs sx={{ flexGrow: 1 }}>
                <StatsCard title="Clients" value={300} icon={People} />
              </Grid>
              <Grid item xs sx={{ flexGrow: 1 }}>
                <StatsCard title="Messages" value={5} icon={Message} />
              </Grid>
            </Grid>

            {/* Graphique */}
            <Box sx={{ mb: 4 }}>
              <Chart />
            </Box>

            {/* Tableau des commandes */}
            <OrdersTable />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
