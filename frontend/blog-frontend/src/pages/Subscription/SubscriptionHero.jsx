import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const BASE_URL = "http://localhost:5173";

function SubscriptionHero() {
  return (
    <Box
      sx={{
        height: "300px",
        backgroundImage: `url(${BASE_URL}/banner.jpg)`,
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
      <Typography variant="h1">Never run out of your favorite beans</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }}>
        Subscribe Now
      </Button>
    </Box>
  );
}

export default SubscriptionHero;
