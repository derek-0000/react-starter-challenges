import { Link } from "react-router-dom";
import { Container, Stack, Typography } from "@mui/material";

function App() {
  return (
    <Container>
      <Stack alignItems="center" gap={2}>
        <Typography variant="h4" fontWeight="bold">
          Challenges
        </Typography>
        <Link to="/random-color-generator">
          <Typography>Random Color Generator</Typography>
        </Link>
        <Link to="/card">
          <Typography>Card</Typography>
        </Link>
        <Link to="/using-props">
          <Typography>Using Props</Typography>
        </Link>
        <Link to="/videoSearcher">
          <Typography>Video Searcher</Typography>
        </Link>
      </Stack>
    </Container>
  );
}

export default App;
