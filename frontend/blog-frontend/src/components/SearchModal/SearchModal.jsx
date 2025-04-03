import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { getCoffees } from "../../api/coffeeApi";
import { Link } from "react-router-dom";

function SearchModal({ open, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [coffees, setCoffees] = useState([]);
  const [filteredCoffees, setFilteredCoffees] = useState([]);

  useEffect(() => {
    getCoffees().then((data) => setCoffees(data));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredCoffees(
        coffees.filter((coffee) =>
          coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredCoffees([]);
    }
  }, [searchTerm, coffees]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Search Coffees</DialogTitle>
      <DialogContent>
        <TextField
          label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <List>
          {filteredCoffees.map((coffee) => (
            <ListItem
              key={coffee._id}
              component={Link}
              to={`/product/${coffee._id}`}
              onClick={onClose}
            >
              <ListItemText
                primary={coffee.name}
                secondary={coffee.description}
              />
            </ListItem>
          ))}
          {filteredCoffees.length === 0 && searchTerm && (
            <Typography>No results found.</Typography>
          )}
        </List>
      </DialogContent>
    </Dialog>
  );
}

export default SearchModal;
