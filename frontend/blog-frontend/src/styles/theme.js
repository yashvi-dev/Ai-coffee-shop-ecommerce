import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#F7E8D5", // Warmer light coffee brown for the page background
      paper: "#FFFFFF", // White for cards
      featured: "#F5F5DC", // Light beige for Featured Coffee section
      bestSelling: "#EDE4C8", // Slightly darker beige for Best Selling section
      breakfast: "#E8DAB2", // Soft taupe for Breakfast section
    },
    text: {
      primary: "#2A2A2A", // Dark Gray-Black
      secondary: "#4A4A4A", // Medium Gray
    },
    primary: {
      main: "#F5C518", // Mustard Yellow for buttons
    },
    secondary: {
      main: "#D3D3D3", // Light Gray for icons
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "48px",
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "36px",
    },
    h4: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 500,
      fontSize: "20px",
    },
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "14px",
      color: "#4A4A4A",
    },
    button: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
});

export default theme;
