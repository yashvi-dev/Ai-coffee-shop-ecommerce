import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";

function DeliveryFrequency() {
  const [frequency, setFrequency] = useState("Every 4 weeks");

  const handleFrequencyChange = (event, newFrequency) => {
    if (newFrequency !== null) {
      setFrequency(newFrequency);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Delivery Frequency
      </Typography>
      <ToggleButtonGroup
        value={frequency}
        exclusive
        onChange={handleFrequencyChange}
      >
        <ToggleButton value="Every 4 weeks">Every 4 weeks</ToggleButton>
        <ToggleButton value="Every 2 weeks">Every 2 weeks</ToggleButton>
        <ToggleButton value="Weekly">Weekly</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default DeliveryFrequency;
