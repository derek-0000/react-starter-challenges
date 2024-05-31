import { Avatar, Button, Stack, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";
import HomeIcon from "@mui/icons-material/Home";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const avatar = useContext(UserContext);

  return (
    <div>
      <Stack justifyContent="space-between" direction="row">
        <Link to="/">
          <Button variant="outlined" startIcon={<HomeIcon />}>
            Home
          </Button>
        </Link>

        <Link to="/profile">
          <IconButton>
            <Avatar alt="Avatar" src={avatar.avatar} />
          </IconButton>
        </Link>
      </Stack>

      <div style={{ padding: 10 }}>{children}</div>
    </div>
  );
}
