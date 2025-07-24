import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const Chart = () => {
  const xLabels = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const uData = [2, 5, 3, 1, 8, 6, 4, 2, 7, 5, 3];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Graphique (avec @mui/x-charts)
        </Typography>
        <Box sx={{ height: 300, mt: 2, width: "400px" }}>
          <LineChart
            width={undefined}
            height={300}
            series={[
              {
                data: uData,
                color: "#00bcd4",
                curve: "rounded",
              },
            ]}
            xAxis={[
              {
                scaleType: "point",
                data: xLabels,
                tickLabelStyle: {
                  fontSize: 12,
                },
              },
            ]}
            yAxis={[
              {
                min: 0,
                max: 10,
                tickLabelStyle: {
                  fontSize: 12,
                },
              },
            ]}
            grid={{ vertical: true, horizontal: true }}
            sx={{
              "& .MuiChartsAxis-line": {
                display: "none",
              },
              "& .MuiChartsAxis-tick": {
                display: "none",
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Chart;
