import { Link } from "react-router-dom";

import {
  IconButton,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

type Props = {
  id: string;
  image: string;
  name: string;
  autor: string;
  //like: boolean;
};

export default function Video({
  id,
  name,
  image,
  //like,
  autor,
}: Props) {
  const { likes, handleClick } = useContext(UserContext);
  
  return (
    <ListItemButton>
      <div>
        <Link to={`/videoSearcher/${id}`}>
          <img
            src={image}
            alt={name}
            style={{ width: "130px", height: "80px", borderRadius: 15 }}
          />
        </Link>
      </div>
      <ListItemText sx={{ margin: 2 }}>
        <Link
          to={`/videoSearcher/${id}`}
          style={{ color: "white", textDecorationLine: "none" }}
        >
          <Typography fontWeight="bold">{name}</Typography>
        </Link>
        <Typography sx={{ color: "gray" }}>{autor}</Typography>
      </ListItemText>
      <IconButton onClick={() => handleClick(id)}>
        {likes.includes(id) ? (
          <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
        ) : (
          <FavoriteBorderOutlinedIcon sx={{ color: "gray" }} />
        )}
      </IconButton>
    </ListItemButton>
  );
}
