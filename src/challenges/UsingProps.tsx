import {
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Add required imports here
import { useState } from "react";
export default function UsingProps() {
  // Add your code here
  const [task, setTask] = useState("");

  const [data, setData] = useState<string[]>([]);

  function addTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!data.includes(task)) {
      setData([...data, task]);
    }
  }

  function deleteTodo(index: number) {
    setData(data.filter((element) => element !== data[index]));
  }

  return (
    <Container sx={{ padding: 2 }}>
      <Typography variant="h4" fontWeight={"bold"} marginY={2}>
        Using Props
      </Typography>
      <Stack direction="row">
        <form onSubmit={addTodo}>
          <TextField
            required
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button type="submit">Add Todo</Button>
        </form>
      </Stack>

      <List>
        {data.map((item, index) => (
          <ToDo key={index} name={item} onDelete={() => deleteTodo(index)} />
        ))}
      </List>
    </Container>
  );
}

// Implement ToDo component with: ToDo name and a delete button that deletes the todo and only apears on hover

type ToDoProps = {
  name: string;
  onDelete: () => void;
};

const ToDo = ({ name, onDelete }: ToDoProps) => {
  const [active, isActive] = useState(false);

  return (
    <ListItem
      onMouseOver={() => {
        isActive(true);
      }}
      onMouseOut={() => {
        isActive(false);
      }}
    >
      <ListItemButton sx={{ justifyContent: "space-between" }}>
        <Typography>{name} </Typography>

        {active && (
          <Button
            onClick={onDelete}
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        )}
      </ListItemButton>
    </ListItem>
  );
};
