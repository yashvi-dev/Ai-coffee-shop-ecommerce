// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Badge,
// } from "@mui/material";
// // import SearchIcon from "@mui/icons-material/Search";
// // import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Link } from "react-router-dom";
// import { useCart } from "../../context/CartContext";
// import { useState } from "react";
// import SearchModal from "../SearchModal/SearchModal";

// function Header() {
//   const { cart } = useCart();
//   const [searchOpen, setSearchOpen] = useState(false);

//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
//             Coffee Shop
//           </Link>
//         </Typography>
//         <Button color="inherit" component={Link} to="/shop">
//           Shop
//         </Button>
//         <Button color="inherit" component={Link} to="/subscription">
//           Subscriptions
//         </Button>
//         <Button color="inherit" component={Link} to="/origins">
//           Origins
//         </Button>
//         <Button color="inherit" component={Link} to="/learn">
//           Learn
//         </Button>
//         <Button color="inherit" component={Link} to="/locations">
//           Locations
//         </Button>
//         <IconButton color="inherit" onClick={() => setSearchOpen(true)}>
//           {/* <SearchIcon /> */}
//         </IconButton>
//         <IconButton color="inherit">
//           <Badge badgeContent={cart.length} color="primary">
//             {/* <ShoppingCartIcon /> */}
//           </Badge>
//         </IconButton>
//       </Toolbar>
//       <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
//     </AppBar>
//   );
// }

// export default Header;
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import SearchModal from "../SearchModal/SearchModal";

function Header() {
  const { cart } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

  const buttonStyles = {
    "&:hover": {
      boxShadow: "0px 4px 10px rgba(255, 165, 0, 0.5)", // Soft yellow-orange shadow
      transition: "0.3s ease-in-out",
    },
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Coffee Shop
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/shop" sx={buttonStyles}>
          Shop
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/subscription"
          sx={buttonStyles}
        >
          Subscriptions
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/origins"
          sx={buttonStyles}
        >
          Origins
        </Button>
        <Button color="inherit" component={Link} to="/learn" sx={buttonStyles}>
          Learn
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/locations"
          sx={buttonStyles}
        >
          Locations
        </Button>
        <IconButton color="inherit" onClick={() => setSearchOpen(true)}>
          {/* <SearchIcon /> */}
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={cart.length} color="primary">
            {/* <ShoppingCartIcon /> */}
          </Badge>
        </IconButton>
      </Toolbar>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </AppBar>
  );
}

export default Header;
