import { Box, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";
import { useState } from "react";
import SubscriptionPlan from "../../components/SubscriptionPlan/SubscriptionPlan";

function PlansPricing() {
  const [selectedPlan, setSelectedPlan] = useState("Classic");

  const plans = [
    {
      name: "Sampler",
      price: "$16/shipment",
      features: ["6 oz of coffee", "Free shipping", "No commitment"],
    },
    {
      name: "Classic",
      price: "$16/shipment",
      features: ["12 oz of coffee", "Free shipping", "No commitment"],
    },
    {
      name: "Adventure",
      price: "$16/shipment",
      features: ["20 oz of coffee", "Free shipping", "No commitment"],
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Plans & Pricing
      </Typography>
      <Grid2 container spacing={3}>
        {plans.map((plan) => (
          <Grid2 size={{ xs: 12, sm: 4 }} key={plan.name}>
            <SubscriptionPlan
              {...plan}
              isSelected={selectedPlan === plan.name}
              onSelect={() => setSelectedPlan(plan.name)}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default PlansPricing;
