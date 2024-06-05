import {
  Button,
  Stack,
  Paper,
  AppBar,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const user = useContext(UserContext);
  return (
    <Box>
      <AppBar position="sticky" sx={{ padding: 1, justifyContent: "center" }}>
        <Stack justifyContent="space-between" direction="row">
          <Link to="/" style={{ textDecorationLine: "none" }}>
            <Button
              size="large"
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
              startIcon={<HomeIcon />}
            >
              <Typography fontWeight={"bold"}>Home</Typography>
            </Button>
          </Link>

          <Link
            to="/userProfile"
            style={{ textDecorationLine: "none", color: "white" }}
          >
            <Button
              size="large"
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
              startIcon={
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt="Remy Sharp"
                  src={user.avatar}
                />
              }
            >
              <Typography fontWeight={"bold"}>{user.username}</Typography>
            </Button>
          </Link>
        </Stack>
        <Paper elevation={24} />
      </AppBar>

      <Box sx={{ paddingY: 3 }}>{children}</Box>
    </Box>
  );
}
