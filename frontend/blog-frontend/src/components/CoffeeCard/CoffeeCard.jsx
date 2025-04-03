import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

// Base URL for the front-end (adjust for production)
const BASE_URL = "http://localhost:5173";

const CoffeeCard = ({ id, name, description, image }) => {
  // Prepend the base URL to the image path
  const imageUrl = image
    ? `${BASE_URL}${image}`
    : "https://via.placeholder.com/140";

  return (
    <Card
      sx={{
        backgroundColor: "background.paper",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)", // Blackish-grey shadow on hover
        },
        height: "100%", // Ensure the card takes the full height of the grid item
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: 200, // Fixed height for consistency
          width: "100%", // Take the full width of the card
          objectFit: "cover", // Crop the image to fit the aspect ratio
          aspectRatio: "4/3", // Enforce a consistent aspect ratio (adjust as needed)
        }}
        image={imageUrl}
        alt={name}
      />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button
          component={Link}
          to={`/product/${id}`}
          variant="text"
          color="primary"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default CoffeeCard;
