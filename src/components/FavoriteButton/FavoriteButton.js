import { IconButton } from "@mui/material";
import { FavoriteOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import { toggleFavorite } from "data";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../../store/slices/toastSlice/toastSlice";
import PropTypes from "prop-types";

export const FavoriteButton = ({ isFav, recipeID }) => {
	const dispatch = useDispatch();

	const [isFavorite, setIsFavorite] = useState(isFav);

	const usersRoles = useSelector((state) => state.usersRoles.usersRoles);
	const isLoggedIn = usersRoles !== false ? true : false;
	const isGeneralUser = isLoggedIn
		? usersRoles.includes("General User")
		: false;

	const onClickFn = async () => {
		let notification = {
			message: "Added to favorites",
			alertType: "success",
			isOpen: true,
		};
		if (isFavorite) {
			notification = {
				message: "Removed from favorites",
				alertType: "success",
				isOpen: true,
			};
		}

		const result = await toggleFavorite(recipeID);
		if (result) {
			setIsFavorite(!isFavorite);
		} else {
			notification = {
				message: "Unable to add/remove favorite",
				alertType: "error",
				isOpen: true,
			};
		}

		dispatch(setToast(notification));
	};

	if (isGeneralUser) {
		return (
			<IconButton
				aria-label="favorite"
				aria-describedby="Add or remove from favorites"
				onClick={() => onClickFn()}
			>
				{isFavorite ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
			</IconButton>
		);
	}
};

FavoriteButton.propTypes = {
	isFav: PropTypes.bool,
	recipeID: PropTypes.number,
};
