import { Box, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";
import { useState, useEffect } from "react";
import { getCoffees } from "../../api/coffeeApi";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

function BestSellingBeans() {
  const [beans, setBeans] = useState([]);

  useEffect(() => {
    getCoffees("best-selling").then((data) => setBeans(data.slice(0, 4)));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Best Selling Coffee Beans
      </Typography>
      <Grid2 container spacing={3}>
        {beans.map((bean) => (
          <Grid2 size={{ xs: 12, sm: 3 }} key={bean._id}>
            <CoffeeCard {...bean} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default BestSellingBeans;
