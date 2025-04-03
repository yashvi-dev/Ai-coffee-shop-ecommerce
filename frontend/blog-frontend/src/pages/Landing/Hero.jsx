import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

function Hero() {
  return (
    <Box
      sx={{
        height: "400px",
        backgroundImage: "url('/banner1.jpg')",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h1">Coffee, but make it India </Typography>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Explore the newest blend rich with vibrant flavors
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }}>
        Shop
      </Button>
    </Box>
  );
}

export default Hero;
