import React, { useState, useEffect } from "react";
import { Box, Grid2, Typography } from "@mui/material";
import LocationsHero from "./LocationHero"; // Make sure the file name is correct
import LocationCard from "./LocationCard";
import { getLocations } from "../../api/locationApi";

const Locations = () => {
  const [locations, setLocations] = useState([]); // Ensure it's an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getLocations();

        // Check if data is an array; if not, wrap it in an array
        if (Array.isArray(data)) {
          setLocations(data);
        } else {
          setLocations([data]); // Ensure locations is always an array
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch locations");
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box>
      <LocationsHero />
      <Box
        sx={{
          maxWidth: "400px",
          margin: "0 auto",
          py: 5,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            backgroundColor: "background.paper", // Fixed background color reference
            borderRadius: "12px",
            p: 4,
            mb: 4,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Grid2 container spacing={3}>
            {locations.map(
              (
                location,
                index // Use index as key if `_id` is unavailable
              ) => (
                <Grid2 item xs={12} sm={6} md={4} key={location._id || index}>
                  <LocationCard
                    name={location.name || "Unknown Location"}
                    address={
                      location.address ||
                      `Lat: ${location.latitude}, Lng: ${location.longitude}`
                    }
                    city={location.city || "Unknown City"}
                    hours={location.timezone?.name || "Unknown Timezone"}
                    mapLink={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                  />
                </Grid2>
              )
            )}
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
};

export default Locations;
