import { Button, Container, Stack, TextField } from "@mui/material";
// Add required imports here
export default function UsingProps() {
  // Add your code here
  return (
    <Container>
      <h1>Using Props</h1>
      <Stack direction="row">
        <TextField />
        <Button>Add Todo</Button>
      </Stack>
      <Stack>{/* Implement List of To Dos*/}</Stack>
    </Container>
  );
}

// Implement ToDo component with: ToDo name and a delete button that deletes the todo and only apears on hover

/* 
type ToDoProps = {
  name: string;
  onDelete: () => void;
};

const ToDo = ({ name, onDelete }: ToDoProps) => <div>ToDo</div>;
*/
