import { Button, Card, Container, Typography, Box } from "@mui/material";
// Add required imports here
import { useState } from "react";
export default function RandomColorGenerator() {
  const [color, setColor] = useState("#000000");
  const numeros = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  function generateHexadecimal() {
    let index;
    let colors = "";

    for (let i = 0; i < 6; i++) {
      index = Math.floor(Math.random() * 15);
      colors = colors + numeros[index];
    }
    return "#" + colors;
  }

  function handleClick() {
    setColor(generateHexadecimal);
  }

  return (
    <Container sx={{ padding: 2 }}>
      <Typography variant="h4" fontWeight={"bold"} marginY={2}>
        Random Color Generator
      </Typography>
      <Box style={{ display: "grid", placeItems: "center" }}>
        <Card style={{ display: "grid", placeItems: "center", width: "70%" }}>
          {/* Add your code here */}

          <Box
            sx={{
              marginY: 4,
              bgcolor: color,
              width: 200,
              height: 200,
              borderRadius:100
            }}
          ></Box>

          <Button
            variant="contained"
            onClick={handleClick}
            sx={{ marginBottom: 4 }}
          >
            Color
          </Button>
        </Card>
      </Box>
    </Container>
  );
}
