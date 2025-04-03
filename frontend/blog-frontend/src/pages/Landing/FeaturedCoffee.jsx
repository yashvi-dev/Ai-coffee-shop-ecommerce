import { Box, Typography } from "@mui/material";
import { Grid2 } from "@mui/material"; // Replace Grid with Grid2
import { useState, useEffect } from "react";
import { getCoffees } from "../../api/coffeeApi";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

function FeaturedCoffee() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    getCoffees("featured").then((data) => {
      setCoffees(data.slice(0, 3)); // Only take the first 3 featured coffees
    });
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Featured Coffee
      </Typography>
      <Grid2 container spacing={3}>
        {coffees.map((coffee) => (
          <Grid2 size={{ xs: 12, sm: 4 }} key={coffee._id}>
            <CoffeeCard {...coffee} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default FeaturedCoffee;
