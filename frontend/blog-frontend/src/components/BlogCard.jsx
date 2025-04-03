import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`http://localhost:8000/${blog.coverImageUrl}`}
        alt={blog.title}
      />
      <CardContent>
        <Typography variant="h6">{blog.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {blog.body.substring(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/blog/${blog._id}`}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;