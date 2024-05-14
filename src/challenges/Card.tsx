import { Button, Container,Stack } from "@mui/material";
// Add required imports here
import { useState } from "react";
export default function Card() {
    const [content, setContent] = useState(false)

    const opti

    function Show(){
        
        const text = 'Hola';

        return (
            <div>
                
            </div>
        )
    }

    function handleClick(){
        setContent(Show)
    }

    return (
    <Container>
        <h1>Card</h1>
        <Stack spacing={2}> 
            <Button variant='contained' onClick={handleClick}>{option}</Button>

        </Stack>
        
    </Container>
  );
}

