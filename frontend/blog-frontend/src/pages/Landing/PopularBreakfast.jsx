import { Box, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";
import { useState, useEffect } from "react";
import { getCoffees } from "../../api/coffeeApi";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

function PopularBreakfast() {
  const [breakfasts, setBreakfasts] = useState([]);

  useEffect(() => {
    getCoffees("breakfast").then((data) => setBreakfasts(data.slice(2, 5)));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Popular Breakfast
      </Typography>
      <Grid2 container spacing={3}>
        {breakfasts.map((breakfast) => (
          <Grid2 size={{ xs: 12, sm: 4 }} key={breakfast._id}>
            <CoffeeCard {...breakfast} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default PopularBreakfast;
