import { useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";
import { Card, Avatar, Typography, CardActionArea, Stack } from "@mui/material";
//import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

/*const GetName = (id: string) => {
  const { data } = useQuery({
    queryKey: [`search_${id}`],
    queryFn: async () => {
      const res = await fetch("https://search.imdbot.workers.dev/?tt=" + id);
      return res.json();
    },
  });

};*/

export default function UserProfile() {
  const user = useContext(UserContext);

  return (
    <Stack
      sx={{ p: 2 }}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ width: "50%" }}>
        <CardActionArea>
          <Typography
            textAlign="center"
            variant="h4"
            fontWeight="bold"
            margin={4}
          >
            {user.username}
          </Typography>

          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ width: 200, height: 200 }}
              alt="Remy Sharp"
              src={user.avatar}
            />
          </Stack>
          <Stack>
            <Typography margin={2} variant="h6">
              Full name: {user.fullName}
            </Typography>
            <Typography margin={2} variant="h6">
              Email: {user.email}
            </Typography>
          </Stack>
        </CardActionArea>
      </Card>
      <Card sx={{marginTop:4, width: "50%"}}>
        <Typography margin={2} variant="h6" fontWeight="bold">
          Liked Videos
        </Typography>

        {user.likes.map((item) => (
          <Link to={`/videoSearcher/${item}`} style={{ color: "white", textDecorationLine:'none' }}>
            <Typography margin={2}>{item}</Typography>
          </Link>
        ))}
      </Card>
    </Stack>
  );
}
