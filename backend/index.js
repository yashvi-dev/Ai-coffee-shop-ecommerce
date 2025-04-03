const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Coffee Schema
const coffeeSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  category: String,
  tastingNotes: String,
  roastLevel: String,
});
const Coffee = mongoose.model("Coffee", coffeeSchema);

// Review Schema
const reviewSchema = new mongoose.Schema({
  coffeeId: String,
  reviewer: String,
  date: String,
  rating: Number,
  comment: String,
});
const Review = mongoose.model("Review", reviewSchema);

// API Routes
// Get all coffees
app.get("/api/coffees", async (req, res) => {
  try {
    const coffees = await Coffee.find();
    res.json(coffees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get coffees by category
app.get("/api/coffees/:category", async (req, res) => {
  try {
    const coffees = await Coffee.find({ category: req.params.category });
    res.json(coffees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single coffee by ID
app.get("/api/coffee/:id", async (req, res) => {
  try {
    const coffee = await Coffee.findById(req.params.id);
    if (!coffee) return res.status(404).json({ message: "Coffee not found" });
    res.json(coffee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get reviews for a coffee
app.get("/api/reviews/:coffeeId", async (req, res) => {
  try {
    const reviews = await Review.find({ coffeeId: req.params.coffeeId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
