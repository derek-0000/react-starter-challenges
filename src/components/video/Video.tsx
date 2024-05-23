import { IconButton, ListItem, ListItemText, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

type Props = {
  image: string;
  name: string;
  autor: string;
  like: boolean;
  handleClick: () => void;
};

export default function Video({
  name,
  image,
  like,
  autor,
  handleClick,
}: Props) {
  return (
    <ListItem>
      <div>
        <img
          src={image}
          alt={name}
          style={{ width: "130px", height: "80px", borderRadius: 15 }}
        />
      </div>
      <ListItemText sx={{ margin: 2 }}>
        <Typography fontWeight="bold">{name}</Typography>
        <Typography sx={{ color: "gray" }}>{autor}</Typography>
      </ListItemText>
      <IconButton onClick={handleClick}>
        {like ? (
          <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
        ) : (
          <FavoriteBorderOutlinedIcon sx={{ color: "gray" }} />
        )}
      </IconButton>
    </ListItem>
  );
}
