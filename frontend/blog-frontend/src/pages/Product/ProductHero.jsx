import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

function ProductHero({ name, description, coffee }) {
  const { addToCart } = useCart();

  return (
    <Box
      sx={{
        height: "300px",
        backgroundImage: "url('/coffee-product.jpg')",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        bgcolor: "#E8E4DC",
        p: 4,
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h1">{name}</Typography>
      <Typography variant="body1" sx={{ mt: 2, maxWidth: "600px" }}>
        {description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => addToCart(coffee)}
      >
        Add to Cart
      </Button>
    </Box>
  );
}

export default ProductHero;
