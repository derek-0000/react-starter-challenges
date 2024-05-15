import { Typography } from "@mui/material";

export default function CardList() {
  //Map through a list of elements to be displayed in the card.
  const renderCards = () => (
    <Card title="Card Title" description="Card Description" />
  );

  // Render List of cards
  return <>{renderCards}</>;
}

type Props = {
  title: string;
  description: string;
};

// Implement Hidding and showing description Inside the component
const Card = ({ description, title }: Props) => {
  return (
    <>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
    </>
  );
};
