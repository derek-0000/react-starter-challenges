import { useQuery } from "@tanstack/react-query";

import {
  Box,
  Typography,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Container,
  Button,
  IconButton,
} from "@mui/material";
import { useParams } from "react-router-dom";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";
import DownloadIcon from "@mui/icons-material/Download";

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
      <Box>
        <Container>
          <Box>
            <video
              style={{ width: "100%", borderRadius: 10 }}
              src={data.top.primaryVideos.edges[0].node.playbackURLs[0].url}
              //autoPlay
              controls
            ></video>
          </Box>
          <Typography
            marginY={3}
            variant="h4"
            fontWeight={"bold"}
            sx={{ textAlign: "left" }}
          >
            {data.short.name}
          </Typography>

          <div>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
              >
                <Stack direction="row" spacing={1}>
                  <Avatar alt={data.short.name} src={data.short.image} />

                  <Stack>
                    <Typography fontWeight={"bold"}>
                      {
                        data.top.production.edges[1].node.company.companyText
                          .text
                      }
                    </Typography>
                    <Typography>{data.fake["#RANK"]}</Typography>
                  </Stack>
                </Stack>

                <Chip
                  label="Suscribe"
                  variant="filled"
                  sx={{
                    height: 30,
                    width: 90,
                    marginY: 2,
                    color: "black",
                    background: "white",
                  }}
                />
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={1}
              >
                <Button
                  sx={{
                    borderRadius: 20,
                    textTransform: "capitalize",
                    height: 30,
                    width: 90,
                    background: "rgba(255, 255, 255, 0.16)",
                    color: "white",
                  }}
                  variant="contained"
                  startIcon={<ThumbUpIcon />}
                >
                  Like
                </Button>
                <Button
                  sx={{
                    borderRadius: 20,
                    textTransform: "capitalize",
                    height: 30,
                    width: 90,
                    background: "rgba(255, 255, 255, 0.16)",
                    color: "white",
                  }}
                  variant="contained"
                  startIcon={<ReplyIcon />}
                >
                  Share
                </Button>
                <Button
                  sx={{
                    borderRadius: 20,
                    height: 30,
                    width: 120,
                    textTransform: "capitalize",
                    background: "rgba(255, 255, 255, 0.16)",
                    color: "white",
                  }}
                  variant="contained"
                  startIcon={<DownloadIcon />}
                >
                  Download
                </Button>
                <IconButton
                  sx={{
                    background: "rgba(255, 255, 255, 0.16)",
                    height: 30,
                    width: 30,
                  }}
                >
                  <MoreHorizIcon />
                </IconButton>
              </Stack>
            </Stack>
          </div>

          <Accordion sx={{ marginTop: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography fontWeight="bold" variant="h6">
                Description
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="h6"
                sx={{ color: "#646464", marginBottom:1}}
                fontWeight={"bold"}
              >
                {data.short.review.itemReviewed["@type"]}
              </Typography>

              <Typography>{data.short.description}</Typography>
              <Typography sx={{ color: "#646464", marginTop:1}} fontWeight="bold">
                Date Created: {data.short.review.dateCreated}
              </Typography>
              <Stack justifyContent="left " direction={"row"}>
                {data.short.genre.map((element: string) => (
                  <Chip
                    label={element}
                    variant="outlined"
                    sx={{ height: 30, width: 90, marginY: 2, marginX: 1 }}
                  />
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
    </Stack>
  );
}
