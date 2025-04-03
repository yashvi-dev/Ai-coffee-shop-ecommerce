import { Card, CardContent, Typography, Button, Checkbox } from "@mui/material";

const BASE_URL = "http://localhost:5173";

function SubscriptionPlan({ name, price, features, isSelected, onSelect }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        border: isSelected ? "2px solid #F5C518" : "none",
      }}
    >
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h5">{price}</Typography>
        {features.map((feature, index) => (
          <Typography key={index} variant="body2">
            {feature}
          </Typography>
        ))}
        <Checkbox checked={isSelected} onChange={onSelect} />
      </CardContent>
    </Card>
  );
}

export default SubscriptionPlan;
