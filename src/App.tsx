import { Link } from "react-router-dom";
import {
  Container,
  Stack,
  Typography,
  List,
  ListItemButton,
  Divider,
} from "@mui/material";

function App() {
  return (
    <Container>
      <Stack gap={2}>
        <Typography variant="h4" fontWeight="bold" textAlign={"center"}>
          Challenges
        </Typography>
        <List>
          <Link
            to="/random-color-generator"
            style={{ textDecorationLine: "none", color: "white" }}
          >
            <ListItemButton>
              <Typography variant="h6" fontWeight={"bold"}>
                Random Color Generator
              </Typography>
            </ListItemButton>
            <Divider component="li" />
          </Link>

          <Link
            to="/card"
            style={{ textDecorationLine: "none", color: "white" }}
          >
            <ListItemButton>
              <Typography variant="h6" fontWeight={"bold"}>
                Card
              </Typography>
            </ListItemButton>
            <Divider component="li" />
          </Link>

          <Link
            to="/using-props"
            style={{ textDecorationLine: "none", color: "white" }}
          >
            <ListItemButton>
              <Typography variant="h6" fontWeight={"bold"}>
                Using Props
              </Typography>
            </ListItemButton>
            <Divider component="li" />
          </Link>

          <Link
            to="/videoSearcher"
            style={{ textDecorationLine: "none", color: "white" }}
          >
            <ListItemButton>
              <Typography variant="h6" fontWeight={"bold"}>
                Video Searcher
              </Typography>
            </ListItemButton>
            <Divider component="li" />
          </Link>
        </List>
      </Stack>
    </Container>
  );
}

export default App;
