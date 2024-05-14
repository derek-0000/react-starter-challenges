import { Button, Container, Stack, Typography, Box } from "@mui/material";
// Add required imports here
import { useState } from "react";
export default function RandomColorGenerator() {
  
  const [color, setColor] = useState('#000000');
  const numeros = ['0','1','2','3','4','5', '6','7','8','9','A','B', 'C', 'D', 'E', 'F'];

  function generateHexadecimal(){
    let index;
    let colors ='';

    for (let i = 0; i < 6; i++) {
      index = Math.floor(Math.random()*15);
      colors = colors + numeros[index];
    }
    return ('#' + colors);
  }

  function handleClick(){
    setColor(generateHexadecimal)
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
