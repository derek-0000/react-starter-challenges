import { Button, Stack, Paper, AppBar, Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Box>
      <AppBar position="sticky" sx={{ padding: 1, justifyContent: "center" }}>
        <Stack justifyContent="space-between" direction="row">
          <Link to="/" style={{ textDecorationLine: "none" }}>
            <Button
              size="large"
              variant="outlined"
              sx={{ color: "white", borderColor: "white", }}
              startIcon={<HomeIcon />}
            >
              <Typography fontWeight={'bold'}>Home</Typography>
            </Button>
            
          </Link>
        </Stack>
        <Paper elevation={24} />{" "}
      </AppBar>

      <Box sx={{ paddingY: 3 }}>{children}</Box>
    </Box>
  );
}
