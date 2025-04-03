import React from "react";
import { Container, Box, Divider } from "@mui/material";
import ShopHero from "./ShopHero";
import PackageSize from "./PackageSize";
import ShopDetails from "./ShopDetails";
import BrewingTips from "./BrewingTips";
import FeaturedReview from "./FeaturedReview";

const product = {
  id: 1,
  name: "San Francisco Blend",
  image: "coffee1.jpg",
  price: 25,
  description:
    "The delectable interplay of the rich and nutty Toffee pairing, originally a sweet natural coffee from Yemen, blended with the earthy washed coffee from Java. Our taste takes you on an Ethiopian natural of fruity tendencies.",
};

// Define brewing tips here to pass to BrewingTips component
const brewingTips = {
  "Water Temperature": "Use water between 195-205°F (90-96°C)",
  "Grind Size": "Medium grind for drip, coarse for French press",
  Ratio: "Use 1:16 coffee to water ratio",
  "Brew Time": "3-4 minutes for optimal extraction",
};

const Shop = () => {
  return (
    <Box>
      <ShopHero product={product} />
      <Container sx={{ py: 4 }}>
        <PackageSize price={product.price} />
        <Divider sx={{ my: 4 }} />
        <ShopDetails product={product} />
        <BrewingTips tips={brewingTips} />
        <FeaturedReview />
      </Container>
    </Box>
  );
};

export default Shop;
