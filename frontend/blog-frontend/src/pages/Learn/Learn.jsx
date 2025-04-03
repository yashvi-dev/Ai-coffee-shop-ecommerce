import React from "react";
import {
  Container,
  Box,
  Typography,
  Link,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";

const SectionImage = styled("img")({
  width: "100%",
  maxHeight: "300px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "16px",
});

const Learn = () => {
  const learnSections = [
    {
      title: "History of Coffee",
      content:
        "Coffee originated in Ethiopia around the 9th century. A goatherd named Kaldi discovered that his goats became more energetic after eating red coffee cherries. From there, coffee spread throughout the Arabian Peninsula and eventually the world.",
      image:
        "https://images.unsplash.com/photo-1614816535399-76d8ccf59019?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlzdG9yeSUyMG9mJTIwY29mZmVlZXxlbnwwfHwwfHx8MA%3D%3D",
      googleLink: "https://www.google.com/search?q=history+of+coffee",
    },
    {
      title: "Coffee Cultivation",
      content:
        "Coffee is grown in the 'Bean Belt' between the Tropics of Cancer and Capricorn. It requires specific conditions: rich soil, mild temperatures, frequent rain, and shaded sun.",
      image:
        "https://images.unsplash.com/photo-1701958901971-1a382675cfec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwY3VsdGl2YXRpb258ZW58MHx8MHx8fDA%3D",
      googleLink: "https://www.google.com/search?q=coffee+cultivation+process",
    },
    {
      title: "Processing Methods",
      content:
        "Coffee cherries are processed using wet (washed), dry (natural), or semi-washed methods, each affecting the final flavor profile of the beans.",
      image:
        "https://guentercoffee.com/cdn/shop/articles/coffee-processing-weiterverarbeitung-blog-header.webp?v=1703065223&width=1440",
      googleLink: "https://www.google.com/search?q=coffee+processing+methods",
    },
    {
      title: "Brewing Techniques",
      content:
        "From French press to pour-over, espresso to cold brew, different brewing methods extract unique flavors from coffee beans.",
      image:
        "https://images.unsplash.com/photo-1585435247026-1d8560423d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwQnJld2luZyUyMHRlY2huaXF1aWV8ZW58MHx8MHx8fDA%3D",
      googleLink: "https://www.google.com/search?q=coffee+brewing+techniques",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          Learn About Coffee
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Explore the fascinating world of coffee from its origins to your cup
        </Typography>
      </Box>

      {learnSections.map((section, index) => (
        <Box key={section.title} sx={{ mb: 6 }}>
          <SectionImage src={section.image} alt={section.title} />
          <Typography variant="h4" gutterBottom>
            {section.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {section.content}
          </Typography>
          <Link
            href={section.googleLink}
            target="_blank"
            rel="noopener"
            sx={{ textDecoration: "none", color: "primary.main" }}
          >
            Explore more on Google
          </Link>
          {index < learnSections.length - 1 && <Divider sx={{ my: 4 }} />}
        </Box>
      ))}

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Additional Resources
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              <Link
                href="https://www.google.com/search?q=coffee+education"
                target="_blank"
                rel="noopener"
              >
                General Coffee Education
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link
                href="https://www.google.com/search?q=coffee+tasting+guide"
                target="_blank"
                rel="noopener"
              >
                Coffee Tasting Guide
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link
                href="https://www.google.com/search?q=about+this+learn+coffee+page"
                target="_blank"
                rel="noopener"
              >
                About This Learn Page (Search Results)
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Learn;
