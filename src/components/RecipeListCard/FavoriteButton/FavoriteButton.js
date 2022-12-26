import { IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { setAsFavorite } from "./setAsFavorite";
import { useState } from "react";

export const FavoriteButton = (props) => {
	const [isFavorite, setIsFavorite] = useState(props.isFavorite);
	const onClickFn = () => {
		setIsFavorite(!isFavorite);
		setAsFavorite(3);
	};

	return (
		<IconButton aria-label="favorite" onClick={() => onClickFn()}>
			{isFavorite ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
		</IconButton>
	);
};
