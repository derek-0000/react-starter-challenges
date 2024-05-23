import {
  Typography,
  TextField,
  Stack,
  InputAdornment,
  List,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
//import FavoriteIcon from "@mui/icons-material/Favorite";
import { data } from "../utils/mock/videos.ts";
import Video from "../components/video/Video.tsx";

export default function VideoSearcher() {
  const [text, setText] = useState("");

  const [array, newArray] = useState(data);

  function filteredVideos() {
    const videos = array.filter(
      (item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.autor.toLowerCase().includes(text.toLocaleLowerCase())
    );

    return videos;
  }

  function handleClick(item: {
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
  }

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
          onChange={(e) => setText(e.target.value)}
        ></TextField>
        <Typography variant="h6" fontWeight="bold" paddingY={1}>
          {filteredVideos().length > 0
            ? filteredVideos().length + " Videos"
            : `No matches for “${text}”`}
        </Typography>
      </Stack>

      {filteredVideos().map((item, index) => (
        <List key={index} sx={{ background: "" }}>
          <Video
            name={item.name}
            image={item.image}
            like={item.like}
            autor={item.autor}
            handleClick={() => handleClick(item)}
          />
        </List>
      ))}
    </>
  );
}
