import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

const OrdersTable = () => {
  const ordersData = [
    { id: 1, nom: "Nom 1", date: "24-04-2023", statut: "En cours" },
    { id: 2, nom: "Nom 2", date: "18-04-2023", statut: "Payée" },
    { id: 3, nom: "Nom 3", date: "10-04-2023", statut: "Terminée" },
    { id: 4, nom: "Nom 5", date: "02-04-2023", statut: "Terminée" },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Dernières commandes
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Nom</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Statut</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ordersData.map((order) => (
                <TableRow key={order.id} hover>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.nom}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Chip label={order.statut} size="small" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default OrdersTable;
