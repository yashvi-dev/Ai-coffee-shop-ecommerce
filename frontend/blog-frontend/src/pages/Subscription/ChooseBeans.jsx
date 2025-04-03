import { Box, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";
import { useState, useEffect } from "react";
import { getCoffees } from "../../api/coffeeApi";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

function ChooseBeans() {
  const [beans, setBeans] = useState([]);

  useEffect(() => {
    getCoffees("subscription").then((data) => setBeans(data));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Choose Your Beans
      </Typography>
      <Grid2 container spacing={3}>
        {beans.map((bean) => (
          <Grid2 size={{ xs: 12, sm: 4 }} key={bean._id}>
            <CoffeeCard {...bean} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default ChooseBeans;
