// src/pages/Shop/PackageSize.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
} from "@mui/material";

const PackageSize = ({ price }) => {
  const [selectedSize, setSelectedSize] = useState("12oz");
  const [grind, setGrind] = useState("Whole Bean");

  const sizes = [
    { label: "8oz", price: price * 0.8 },
    { label: "12oz", price: price },
    { label: "2lb", price: price * 2 },
    { label: "5lb", price: price * 5 },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h6">Choose a size</Typography>
        <RadioGroup
          row
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {sizes.map((size) => (
            <FormControlLabel
              key={size.label}
              value={size.label}
              control={<Radio />}
              label={size.label}
            />
          ))}
        </RadioGroup>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Add a {selectedSize} bag of San Francisco Blend to your order
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          ${sizes.find((size) => size.label === selectedSize).price}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Add to Cart
        </Button>
      </Box>
      <Box>
        <Typography variant="h6">Grind</Typography>
        <Select value={grind} onChange={(e) => setGrind(e.target.value)}>
          <MenuItem value="Whole Bean">Whole Bean</MenuItem>
          <MenuItem value="Ground">Ground</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default PackageSize;
