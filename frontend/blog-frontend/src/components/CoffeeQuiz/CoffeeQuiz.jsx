import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { getCoffees } from "../../api/coffeeApi";

function CoffeeQuiz({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendation, setRecommendation] = useState(null);

  const questions = [
    {
      question: "Do you prefer fruity or nutty flavors?",
      options: ["Fruity", "Nutty"],
      key: "flavor",
    },
    {
      question: "Do you like your coffee light or dark roast?",
      options: ["Light", "Dark"],
      key: "roast",
    },
  ];

  const handleAnswer = (key, value) => {
    setAnswers({ ...answers, [key]: value });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      recommendCoffee();
    }
  };

  const recommendCoffee = async () => {
    const coffees = await getCoffees("featured");
    // Simple logic: recommend based on answers
    const recommended =
      coffees.find((coffee) => {
        if (
          answers.flavor === "Fruity" &&
          coffee.tastingNotes?.includes("Fruit")
        )
          return true;
        if (
          answers.flavor === "Nutty" &&
          coffee.tastingNotes?.includes("Nutty")
        )
          return true;
        return false;
      }) || coffees[0];
    setRecommendation(recommended);
  };

  const handleClose = () => {
    setStep(0);
    setAnswers({});
    setRecommendation(null);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Find Your Perfect Coffee</DialogTitle>
      <DialogContent>
        {recommendation ? (
          <div>
            <Typography variant="h6">
              We recommend: {recommendation.name}
            </Typography>
            <Typography variant="body2">
              {recommendation.description}
            </Typography>
          </div>
        ) : (
          <div>
            <Typography variant="h6">{questions[step].question}</Typography>
            <RadioGroup
              onChange={(e) =>
                handleAnswer(questions[step].key, e.target.value)
              }
            >
              {questions[step].options.map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CoffeeQuiz;
