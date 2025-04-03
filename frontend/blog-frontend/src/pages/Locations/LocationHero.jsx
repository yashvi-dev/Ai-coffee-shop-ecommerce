import React from "react";
import { Box, Typography } from "@mui/material";

const LocationsHero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        py: 8,
        textAlign: "center",
        mb: 4,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
      }}
    >
      <Typography variant="h2" color="text.primary">
        Your Current Location
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        Based on your IP address, we’ve detected your location.
      </Typography>
    </Box>
  );
};

export default LocationsHero;
