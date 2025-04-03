// src/pages/Shop/ShopDetails.jsx
import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Grid2 } from "@mui/material";

const ShopDetails = ({ product }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const details = {
    roast: "Medium",
    tastingNotes: "Toffee, Chocolate, Red Fruit",
    varietal: "Blend",
    process: "Washed and natural",
    elevation: "1500-2000 meters",
    harvest: "Summer",
    origin: "Ethiopia, Yemen, Indonesia",
  };

  return (
    <Box>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Overview" />
        <Tab label="Tasting Notes" />
        <Tab label="Origin" />
        <Tab label="Brewing Tips" />
        <Tab label="Reviews" />
      </Tabs>

      {tabValue === 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Details</Typography>
          <Grid2 container spacing={2} sx={{ mt: 2 }}>
            <Grid2 item xs={6}>
              <Typography>Roast: {details.roast}</Typography>
              <Typography>Tasting Notes: {details.tastingNotes}</Typography>
              <Typography>Varietal: {details.varietal}</Typography>
              <Typography>Process: {details.process}</Typography>
            </Grid2>
            <Grid2 item xs={6}>
              <Typography>Elevation: {details.elevation}</Typography>
              <Typography>Harvest: {details.harvest}</Typography>
              <Typography>Origin: {details.origin}</Typography>
            </Grid2>
          </Grid2>
        </Box>
      )}

      {tabValue === 1 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Tasting Notes</Typography>
          <Typography>
            The delectable interplay of the rich and nutty Toffee pairing,
            originally a sweet natural coffee from Yemen, blended with the
            earthy washed coffee from Java. Our taste takes you on an Ethiopian
            natural of fruity tendencies.
          </Typography>
        </Box>
      )}

      {tabValue === 2 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Origin</Typography>
          <Typography>{details.origin}</Typography>
        </Box>
      )}

      {tabValue === 3 && <Box sx={{ mt: 4 }} />}
      {tabValue === 4 && <Box sx={{ mt: 4 }} />}
    </Box>
  );
};

export default ShopDetails;
