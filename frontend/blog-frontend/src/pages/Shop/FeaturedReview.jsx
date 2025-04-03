// src/pages/Shop/FeaturedReview.jsx
import React from "react";
import { Box, Typography, Rating } from "@mui/material";

const FeaturedReview = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Customer Reviews</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Typography variant="h4">4.5</Typography>
        <Rating value={4.5} readOnly precision={0.5} sx={{ ml: 2 }} />
        <Typography sx={{ ml: 2 }}>(52 Reviews)</Typography>
      </Box>
    </Box>
  );
};

export default FeaturedReview;
