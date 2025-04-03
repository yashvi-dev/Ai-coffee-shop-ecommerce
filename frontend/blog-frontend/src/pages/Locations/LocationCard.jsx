import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const LocationCard = ({ name, address, city, timezone, mapLink }) => {
  return (
    <Card
      sx={{
        backgroundColor: "background.paper",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {city}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          UTC Offset: {timezone?.utc || "N/A"}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#ff9800",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#e68900",
            },
          }}
        >
          View on Map
        </Button>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
