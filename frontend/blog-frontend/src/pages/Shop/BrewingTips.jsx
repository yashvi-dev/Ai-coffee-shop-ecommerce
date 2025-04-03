// Shop/BrewingTips.jsx
import { Box, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";

function BrewingTips({ tips }) {
  // Add default tips if none provided
  const defaultTips = tips || {
    "Water Temperature": "Use water between 195-205°F (90-96°C)",
    "Grind Size": "Medium grind for drip, coarse for French press",
    Ratio: "Use 1:16 coffee to water ratio",
    "Brew Time": "3-4 minutes for optimal extraction",
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Brewing Tips
      </Typography>
      <Grid2 container spacing={2}>
        {Object.entries(defaultTips).map(([key, value]) => (
          <Grid2 size={{ xs: 6 }} key={key}>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              {key}
            </Typography>
            <Typography variant="body2">{value}</Typography>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default BrewingTips;
