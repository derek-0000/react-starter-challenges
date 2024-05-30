import {
  Typography,
  TextField,
  Stack,
  InputAdornment,
  List,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";
//import { info } from "../utils/mock/videos.ts";

//Components
import Video from "../components/video/Video.tsx";

import { useQuery } from "@tanstack/react-query";

export default function VideoSearcher() {
  const [text, setText] = useState("");

  //const [array, newArray] = useState(info);

  // const [arrayVideos, setArray] = useState([]);
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

    const arreglo = data.description.map((index: never) => {count++; return(
      <div>
        <Video
          key={index["#IMDB_ID"]}
          name={index["#TITLE"]}
          image={index["#IMG_POSTER"]}
          autor={index["#YEAR"]}
          //id={}
        />
      </div>
    )});
    return (
      <div >
        <Typography variant="h6" fontWeight="bold" paddingY={1}>
          {count > 0 ? count + " Videos" : `No matches for “${text}”`}
        </Typography>
        {arreglo}
      </div>
    );
  };

  /*  function handleClick(item: {
    name: string;
    autor: string;
    image: string;
    like: boolean;
  }) {
    const e = array.indexOf(item);

    newArray(
      array.map((element, i) => {
        if (i === e) {
          const update = !element.like;
          return { ...element, like: update };
        }
        return element;
      })
    );
  }*/

  return (
    <>
      <Stack sx={{ p: 2 }}>
        <Typography variant="h4" fontWeight="bold" paddingY={1}>
          React Videos
        </Typography>
        <Typography variant="h6" color={"#36454F"}>
          A brief history of React
        </Typography>

        <TextField
          sx={{ backgroundColor: "", borderRadius: 10 }}
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
