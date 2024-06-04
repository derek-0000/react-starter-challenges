import { Typography, Button, Grid, Container, Card } from "@mui/material";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function CardList() {
  const data = [
    { title: "Uno", description: "Hola1" },
    { title: "Dos", description: "Hola2" },
    { title: "Tres", description: "Hola3" },
    { title: "Cuatro", description: "Hola4" },
    { title: "Cinco", description: "Hola5" },
  ];

  //Map through a list of elements to be displayed in the card.
  const renderCards = () =>
    data.map((item) => (
      <CardItem title={item.title} description={item.description} />
    ));

  // Render List of cards
  return (
    <>
      <Container>
        <Typography variant="h4" fontWeight={"bold"} marginY={2}>
          Cards
        </Typography>
        <Grid container>{renderCards()}</Grid>
      </Container>
    </>
  );
}

type Props = {
  title: string;
  description: string;
};

// Implement Hidding and showing description Inside the component
const CardItem = ({ description, title }: Props) => {
  const [active, isActive] = useState(false);

  function handleClick() {
    isActive(!active);
  }

  return (
    <>
      <Grid item style={{ margin: 8, textAlign:'center'}}>
        <Card style={{ height: active ? 150 : 100, width: 200}}>
          <Typography padding={2} >{title}</Typography>
          <Button
            fullWidth
            variant="text"
            onClick={handleClick}
            endIcon={active ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            {active ? "Hide" : "Show"}
          </Button>
          {active && <Typography padding={2}>{description}</Typography>}
        </Card>
      </Grid>
    </>
  );
};
