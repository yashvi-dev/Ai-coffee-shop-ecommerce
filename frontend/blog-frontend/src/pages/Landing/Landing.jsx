import { useState } from "react";
import Hero from "./Hero";
import FeaturedCoffee from "./FeaturedCoffee";
import BestSellingBeans from "./BestSellingBeans";
import PopularBreakfast from "./PopularBreakfast";
import CoffeeQuiz from "../../components/CoffeeQuiz/CoffeeQuiz";
import { Button } from "@mui/material";

function Landing() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setQuizOpen(true)}
        sx={{ m: 2 }}
      >
        Find Your Perfect Coffee
      </Button>
      <Hero />
      <FeaturedCoffee />
      <BestSellingBeans />
      <PopularBreakfast />
      <CoffeeQuiz open={quizOpen} onClose={() => setQuizOpen(false)} />
    </div>
  );
}

export default Landing;
