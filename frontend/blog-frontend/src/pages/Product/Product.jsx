import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCoffeeById } from "../../api/coffeeApi";
import ProductHero from "./ProductHero";
import FeaturedReview from "./FeaturedReview";
import ProductDetails from "./ProductDetails";
import BrewingTips from "./BrewingTips";
import PackageSize from "./PackageSize";

function Product() {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);

  useEffect(() => {
    getCoffeeById(id).then((data) => setCoffee(data));
  }, [id]);

  if (!coffee) return <div>Loading...</div>;

  const details = {
    "Roast Level": coffee.roastLevel || "Medium",
    Varietal: coffee.varietal || "Blend",
    Elevation: coffee.elevation || "1200-1800m",
    Producer: coffee.producer || "Various Smallholder Farmers",
    "Tasting Notes": coffee.tastingNotes || "Chocolate, Caramel, Hint of Fruit",
    Process: coffee.process || "Washed, Natural",
    Region: coffee.region || "Central & South America",
    Harvest: coffee.harvest || "2023",
    Certification: coffee.certification || "Organic, Fair Trade",
  };

  const brewingTips = {
    "Grind Size": "Medium-Fine",
    "Brew Ratio": "1:16-17",
    "Water Temperature": "195-205°F",
    "Brew Time": "3-4 Minutes",
  };

  return (
    <div>
      <ProductHero
        name={coffee.name}
        description={coffee.description}
        coffee={coffee}
      />
      <FeaturedReview coffeeId={id} />
      <ProductDetails details={details} />
      <BrewingTips tips={brewingTips} />
      <PackageSize />
    </div>
  );
}

export default Product;
