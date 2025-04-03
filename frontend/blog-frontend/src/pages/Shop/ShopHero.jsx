// src/pages/Shop/ShopHero.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const HeroImage = styled("img")({
  width: "100%",
  height: "400px",
  objectFit: "cover",
  borderRadius: "8px",
});

const ShopHero = ({ product }) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${product.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box sx={{ position: "absolute", top: 20, left: 20 }}>
        <Typography variant="h3" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, maxWidth: "500px" }}>
          {product.description}
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3, backgroundColor: "#FFD700", color: "black" }}
        >
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default ShopHero;
