import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import theme from "./styles/theme";
import Header from "./components/Header/Header";
import Landing from "./pages/Landing/Landing";
import Product from "./pages/Product/Product";
import Subscription from "./pages/Subscription/Subscription";
import Locations from "./pages/Locations/Locations";
import Shop from "./pages/Shop/Shop";
import Origins from "./pages/Origins/Origins";
import Learn from "./pages/Learn/Learn";
import { CartProvider } from "./context/CartContext";

const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        background: "linear-gradient(to bottom, #F7E8D5, #F5E1B8)",
      },
    }}
  />
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <CartProvider>
        <BrowserRouter>
          <div style={{ padding: "20px" }}>
            {" "}
            {/* Add wrapper div with padding */}
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/origins" element={<Origins />} />
              <Route path="/learn" element={<Learn />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
