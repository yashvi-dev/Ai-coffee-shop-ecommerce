import { Box, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";

function BrewingTips({ tips }) {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Brewing Tips
      </Typography>
      <Grid2 container spacing={2}>
        {Object.entries(tips).map(([key, value]) => (
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
