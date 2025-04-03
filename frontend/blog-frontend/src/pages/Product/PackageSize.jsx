import {
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";

function PackageSize() {
  const [size, setSize] = useState("12 oz");

  const handleSizeChange = (event, newSize) => {
    if (newSize !== null) {
      setSize(newSize);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Select Package Size
      </Typography>
      <ToggleButtonGroup value={size} exclusive onChange={handleSizeChange}>
        <ToggleButton value="12 oz">12 oz</ToggleButton>
        <ToggleButton value="1 lb">1 lb</ToggleButton>
        <ToggleButton value="2 lb">2 lb</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default PackageSize;
