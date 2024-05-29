import { useQuery } from "@tanstack/react-query";

import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,

} from "@mui/material";
import { useParams } from "react-router-dom";

const URL = "https://search.imdbot.workers.dev/?tt=";

export default function Details() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const res = await fetch(URL + id);
      return res.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack>
      <Card sx={{ margin: 6 }}>
        <CardContent>
          <Typography
            variant="h6"
            sx={{ color: "#646464" }}
            fontWeight={"bold"}
          >
            {data.short.review.itemReviewed["@type"]}
          </Typography>

          <Typography variant="h4" fontWeight={"bold"}>
            {data.short.name}
          </Typography>

          <CardContent sx={{ textAlign: "center" }}>
            <div>
              <video
                style={{ height: 300 }}
                src={data.top.primaryVideos.edges[0].node.playbackURLs[0].url}
                autoPlay
                controls
              ></video>
            </div>
            <div>
              {data.short.genre.map((element: string) => (
                <Button variant="outlined" sx={{ margin: 2 }}>
                  {element}
                </Button>
              ))}
            </div>
          </CardContent>
          <Typography fontWeight="bold" variant="h6">
            Description
          </Typography>
          <Typography>{data.short.description}</Typography>
          <Typography sx={{ color: "#646464" }} fontWeight="bold">
            Date Created: {data.short.review.dateCreated}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
