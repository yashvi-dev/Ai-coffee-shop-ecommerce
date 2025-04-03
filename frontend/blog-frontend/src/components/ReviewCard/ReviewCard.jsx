import { Card, CardContent, Typography, Rating } from "@mui/material";

function ReviewCard({ reviewer, date, rating, comment }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{reviewer}</Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography variant="body1" sx={{ mt: 1 }}>
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
