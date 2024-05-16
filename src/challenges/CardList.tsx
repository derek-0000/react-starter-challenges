import { Typography, Button, Grid } from "@mui/material";
import { useState } from "react";


export default function CardList() {
  const data = [
    {title: 'Uno', description: 'Hola1'},
    {title: 'Dos', description: 'Hola2'},
    {title: 'Tres', description: 'Hola3'},
    {title: 'Cuatro', description: 'Hola4'},
    {title: 'Cinco', description: 'Hola5'},
  ];


  //Map through a list of elements to be displayed in the card.
  const renderCards = () => (
    data.map((item)=><Card  title={item.title} description={item.description} />  )
  );


  // Render List of cards
  return <>
    <Typography variant="h5" fontWeight="bold">Cards</Typography>
    <Grid container>{renderCards()}</Grid>
  </>;
}
        
type Props = {
  title: string;
  description: string;
};

// Implement Hidding and showing description Inside the component
const Card = ({ description, title }: Props) => {
  const [active, isActive] = useState(false);


  function handleClick(){
    isActive(!active)
  }


  return (
    <>
      <Grid item style={{margin: 20}}>
      <Typography>{title}</Typography>
        <Button variant='contained' onClick={handleClick}>{active ? 'Hide' : 'Show'}</Button>
        {active &&<Typography>{description}</Typography>}
      </Grid>
    </>
  );
};
