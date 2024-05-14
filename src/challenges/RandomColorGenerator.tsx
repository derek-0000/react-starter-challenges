import { Button, Container, Stack, Typography, Box } from "@mui/material";
// Add required imports here
import { useState } from "react";
export default function RandomColorGenerator() {
  
  const [color, setColor] = useState('#000000');

  function hexa(){
    let num;
    const color = [];

    for (let i = 0; i < 6; i++) {
      num = Math.floor(Math.random()*10);
      color.push(num);
    }

    return ('#' +(color.join('')));
  }

  function handleClick(){
    setColor(hexa)
  }

  return (
    <Container>
      <Stack>
        <Typography variant="h5" fontWeight="bold">
          Random Color Generator
        </Typography>
      </Stack>
      <div style={{alignItems:'center', justifyContent:'center'}}>{/* Add your code here */}
        <Box sx={{bgcolor: color, width: 80, height: 70, marginBottom: 5,marginTop: 5}}></Box>

        <Button variant="contained" onClick={handleClick}>Color</Button>
      
      </div>
    </Container>
  );
}
