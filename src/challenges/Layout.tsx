import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Link to="/">
        <Button variant="contained" size="small">
          <Typography fontWeight="bold" style={{ color: "white" }}>
            Home
          </Typography>
        </Button>
      </Link>
      <div>{children}</div>
    </div>
  );
}
