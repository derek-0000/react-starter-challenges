import { useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";
import { Card, Avatar } from "@mui/material";

export default function User() {
  const user = useContext(UserContext);

  return (
    <Card>
      <Avatar sx={{size: 60}} alt="Avatar" src={user.avatar} />
      <p> {user.fullName} </p>
      <p> {user.email} </p>
      <p>{user.username}</p>
      <p>{user.likes.toString()}</p>
    </Card>
  );
}
