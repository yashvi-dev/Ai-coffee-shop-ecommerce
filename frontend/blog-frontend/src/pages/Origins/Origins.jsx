import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid2,
  Divider,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";

const OriginImage = styled("img")({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "16px",
});

const originsData = [
  {
    name: "Ethiopia",
    description:
      "Considered the birthplace of coffee, Ethiopia produces some of the world's most distinctive beans with floral and fruity notes.",
    details: {
      "Main Regions": "Yirgacheffe, Sidamo, Harrar",
      Altitude: "1,500 - 2,200 meters",
      Harvest: "October - December",
      "Flavor Profile": "Floral, citrus, berry-like",
    },
    image:
      "https://images.unsplash.com/photo-1593958446514-33f10e28e6b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RXRob3BpYSUyMGNvZmZlZWV8ZW58MHx8MHx8fDA%3D",
    learnMore: "https://en.wikipedia.org/wiki/Coffee_production_in_Ethiopia",
  },
  {
    name: "Colombia",
    description:
      "Known for its smooth, well-balanced coffee with mild acidity and rich body.",
    details: {
      "Main Regions": "Antioquia, Huila, Nariño",
      Altitude: "1,200 - 2,000 meters",
      Harvest: "April - June, October - December",
      "Flavor Profile": "Nutty, chocolatey, mild fruit",
    },
    image:
      "data:image/jpeg;base64,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",
    learnMore: "https://en.wikipedia.org/wiki/Coffee_production_in_Colombia",
  },
  {
    name: "Indonesia (Java)",
    description:
      "Famous for its earthy, full-bodied coffee with low acidity and herbal notes.",
    details: {
      "Main Regions": "Java, Sumatra, Sulawesi",
      Altitude: "1,000 - 1,800 meters",
      Harvest: "June - December",
      "Flavor Profile": "Earthy, spicy, dark chocolate",
    },
    image:
      "https://images.unsplash.com/photo-1640941242812-c624222c239e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEluZG9uZXNpYSUyMGNvZmZlZSUyMHBhY2tldHxlbnwwfHwwfHx8MA%3D%3D",
    learnMore: "https://en.wikipedia.org/wiki/Coffee_production_in_Indonesia",
  },
];

const Origins = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          Coffee Origins
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Discover the unique characteristics of coffee from different regions
          around the world
        </Typography>
      </Box>

      <Grid2 container spacing={4}>
        {originsData.map((origin) => (
          <Grid2 size={{ xs: 12, md: 4 }} key={origin.name}>
            <Box
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <OriginImage src={origin.image} alt={`${origin.name} coffee`} />
              <Typography variant="h5" gutterBottom>
                {origin.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {origin.description}
              </Typography>

              <Box sx={{ mb: 2 }}>
                {Object.entries(origin.details).map(([key, value]) => (
                  <Box key={key} sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {key}:
                    </Typography>
                    <Typography variant="body2">{value}</Typography>
                  </Box>
                ))}
              </Box>

              <Link
                href={origin.learnMore}
                target="_blank"
                rel="noopener"
                sx={{ mt: "auto", textDecoration: "none" }}
              >
                Learn More
              </Link>
            </Box>
          </Grid2>
        ))}
      </Grid2>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          Want to Learn More?
        </Typography>
        <Typography variant="body2">
          Check out{" "}
          <Link
            href="https://www.ncausa.org/About-Coffee/Coffee-Around-the-World"
            target="_blank"
            rel="noopener"
          >
            Coffee Around the World
          </Link>{" "}
          for a comprehensive guide to global coffee production.
        </Typography>
      </Box>
    </Container>
  );
};

export default Origins;
