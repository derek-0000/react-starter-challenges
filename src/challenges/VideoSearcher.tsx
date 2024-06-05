import {
  Typography,
  TextField,
  Stack,
  InputAdornment,
  List,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";

//Components
import Video from "../components/video/Video.tsx";

import { useQuery } from "@tanstack/react-query";

//Use Context

export default function VideoSearcher() {
  const [text, setText] = useState("");

  let count = 0;

  const URL = "https://search.imdbot.workers.dev/?q=";

  const MyURL = () => {
    const { data, isLoading } = useQuery({
      queryKey: [`search_${text}`],
      queryFn: async () => {
        const res = await fetch(URL + text);
        return res.json();
      },
    });

    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    const arreglo = data.description.map((index: never) => {
      count++;
      return (
        <div>
          <Video
            key={index["#IMDB_ID"]}
            name={index["#TITLE"]}
            image={index["#IMG_POSTER"]}
            autor={index["#YEAR"]}
            id={index["#IMDB_ID"]}
          />
        </div>
      );
    });

    return (
      <div>
        <Typography variant="h6" fontWeight="bold" paddingY={1}>
          {count > 0 ? count + " Videos" : `No matches for “${text}”`}
        </Typography>
        {arreglo}
      </div>
    );
  };

  /*function handle(id: string) {
    if (array.includes(id)) {
      setArray(array.filter((element) => element !== id));
      console.log("eliminado");
    } else {
      setArray(array.concat(id));
      console.log("Agregado");
    }
  }*/

  return (
    <>
      <Stack sx={{ p: 2 }}>
        <Typography variant="h4" fontWeight={"bold"} marginY={2}>
          React Videos
        </Typography>
        <Typography variant="h6" marginBottom={2}>
          A brief history of React
        </Typography>

        <TextField
          variant="outlined"
          placeholder="Search"
          type="text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#899499" }} />
              </InputAdornment>
            ),
          }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></TextField>
        <List>{MyURL()}</List>
      </Stack>
    </>
  );
}
