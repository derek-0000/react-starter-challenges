import {
  Typography,
  TextField,
  Stack,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
//import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function VideoSearcher() {
  const data = [
    {
      name: "React 18 Keynote",
      autor: "The React Team",
      image:
        "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
      like: false,
    },
    {
      name: "Hello",
      autor: "Tomby",
      image:
        "https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg",
      like: false,
    },
    {
      name: "Hola",
      autor: "Saludos",
      image:
        "https://cdn.britannica.com/39/226539-050-D21D7721/Portrait-of-a-cat-with-whiskers-visible.jpg",
      like: false,
    },
    {
      name: "Gato",
      autor: "Cat",
      image:
        "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
      like: false,
    },
  ];

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

  function handleClick(index: number) {
    newArray(
      array.map((element, i) => {
        if (i === index) {
          const update = !(element.like)

          return {...element, like: update}

        }else{
          const update = (element.like)

          return {...element, like: update}
 
        }
      })
    );
  }

  console.log(array)

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
          Videos
        </Typography>
      </Stack>

      {filteredVideos().map((item, index) => (
        <List key={index} sx={{ background: "" }}>
          <ListItem>
            <div>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "130px", height: "80px", borderRadius: 15 }}
              />
            </div>
            <ListItemText sx={{ margin: 2 }}>
              <Typography fontWeight="bold">{item.name}</Typography>
              <Typography sx={{ color: "gray" }}>{item.autor}</Typography>
            </ListItemText>
            <IconButton onClick={() => handleClick(index)}>
              {item.like ? (
                <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
              ) : (
                <FavoriteBorderOutlinedIcon sx={{ color: "gray" }} />
              )}
            </IconButton>
          </ListItem>
        </List>
      ))}
    </>
  );
}
