import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { getReviews } from "../../api/reviewApi";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

function FeaturedReview({ coffeeId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(coffeeId).then((data) => setReviews(data));
  }, [coffeeId]);

  const featuredReview = reviews[0] || {};

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Featured Review
      </Typography>
      {featuredReview && <ReviewCard {...featuredReview} />}
    </Box>
  );
}

export default FeaturedReview;
