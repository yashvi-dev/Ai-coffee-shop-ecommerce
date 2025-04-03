const mongoose = require("mongoose");
require("dotenv").config();

const Coffee = mongoose.model(
  "Coffee",
  new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    category: String,
    tastingNotes: String,
    roastLevel: String,
  })
);

const Review = mongoose.model(
  "Review",
  new mongoose.Schema({
    coffeeId: String,
    reviewer: String,
    date: String,
    rating: Number,
    comment: String,
  })
);

const Location = mongoose.model(
  "Location",
  new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    hours: String,
    mapLink: String,
  })
);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB for seeding"))
  .catch((err) => console.error("MongoDB connection error:", err));

const coffees = [
  // Featured Coffees (3 items)
  {
    name: "San Francisco Blend",
    description: "Caramel, chocolate",
    image:
      "https://images.unsplash.com/photo-1554600740-951beab4712b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMGN1cHxlbnwwfHwwfHx8MA%3D%3D",
    category: "featured",
    tastingNotes: "Chocolate, Caramel",
    roastLevel: "Medium",
  },
  {
    name: "Ethiopian Blend",
    description: "Bright, fruity",
    image: "coffee2.jpg",
    category: "featured",
    tastingNotes: "Fruit",
    roastLevel: "Light",
  },
  {
    name: "Mission District Blend",
    description: "Rich, floral",
    image: "coffee3.jpg",
    category: "featured",
    tastingNotes: "Floral",
    roastLevel: "Medium",
  },

  // Best Selling Coffees (3 items)
  {
    name: "Frech toast",
    description: "Sweet and fruity",
    image: "coffeebreak5.jpg",
    category: "best-selling",
    tastingNotes: "Nutty",
    roastLevel: "Dark",
  },
  {
    name: "Museli with Berry",
    description: "Smooth and nutty",
    image: "coffeebreak6.jpg",
    category: "best-selling",
    tastingNotes: "Nutty",
    roastLevel: "Medium",
  },
  {
    name: "Quick Break",
    description: "Bold and earthy",
    image: "coffeebrek4.jpg",
    category: "best-selling",
    tastingNotes: "Earthy",
    roastLevel: "Dark",
  },

  // Subscription Coffees (3 items)
  {
    name: "Robusta beans",
    description: "Bolder",
    image: "coffee8.jpg",
    category: "subscription",
    tastingNotes: "Floral",
    roastLevel: "Light",
  },
  {
    name: "Liberica beans",
    description: "Dark and smoky",
    image: "breakfast1.jpg",
    category: "subscription",
    tastingNotes: "Smoky",
    roastLevel: "Dark",
  },

  // Breakfast Items (6 items)
  {
    name: "Teriyaki Salmon",
    description: "Sweet and savory salmon",
    image: "breakfast1.jpg",
    category: "breakfast",
    tastingNotes: "",
    roastLevel: "",
  },
  {
    name: "Eggs Benedict",
    description: "Eggs benedict with hollandaise sauce",

    image: "breakfast2.jpg",
    category: "breakfast",
    tastingNotes: "",
    roastLevel: "",
  },
  {
    name: "Tamago Kake Gohan",
    description: "Eggs and bread",
    image: "breakfast3.jpg",
    category: "breakfast",
    tastingNotes: "",
    roastLevel: "",
  },
  {
    name: "Museli with Berry",
    description: "Smooth and nutty",
    image: "coffeebreak6.jpg",
    category: "best-selling",
    tastingNotes: "Nutty",
    roastLevel: "Medium",
  },
  {
    name: "Quick Break",
    description: "Bold and earthy",
    image: "coffeebrek4.jpg",
    category: "best-selling",
    tastingNotes: "Earthy",
    roastLevel: "Dark",
  },
  {
    name: "Frech toast",
    description: "Sweet and fruity",
    image: "coffeebreak5.jpg",
    category: "best-selling",
    tastingNotes: "Nutty",
    roastLevel: "Dark",
  },
];

const reviews = [
  {
    coffeeId: "1", // Will be updated after seeding
    reviewer: "John",
    date: "May 2022",
    rating: 5,
    comment:
      "This is one of my favorite blends from Mendocino Coffee. It’s incredibly smooth and well-balanced.",
  },
];

const locations = [
  {
    name: "Downtown Cafe",
    address: "123 Main St",
    city: "San Francisco, CA",
    hours: "Mon-Sun: 7AM - 7PM",
    mapLink: "https://maps.google.com/?q=123+Main+St,+San+Francisco,+CA",
  },
  {
    name: "Mission District Cafe",
    address: "456 Valencia St",
    city: "San Francisco, CA",
    hours: "Mon-Sun: 8AM - 6PM",
    mapLink: "https://maps.google.com/?q=456+Valencia+St,+San+Francisco,+CA",
  },
  {
    name: "Hayes Valley Cafe",
    address: "789 Hayes St",
    city: "San Francisco, CA",
    hours: "Mon-Sun: 7AM - 5PM",
    mapLink: "https://maps.google.com/?q=789+Hayes+St,+San+Francisco,+CA",
  },
];

async function seedDB() {
  try {
    await Coffee.deleteMany({});
    await Review.deleteMany({});

    const insertedCoffees = await Coffee.insertMany(coffees);
    console.log("Coffees inserted:", insertedCoffees);

    reviews[0].coffeeId = insertedCoffees[0]._id.toString();
    await Review.insertMany(reviews);
    console.log("Reviews inserted");

    const insertedLocations = await Location.insertMany(locations);
    console.log("Locations inserted:", insertedLocations);

    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();
