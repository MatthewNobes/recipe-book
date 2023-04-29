import { Box, IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import { ArrowBack, MoreVert } from "@mui/icons-material";
import { RecipeImage } from "./RecipeImage/RecipeImage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteRecipe } from "../../../data";
import { useDispatch } from "react-redux";
import { setToast } from "../../../store/slices/toastSlice/toastSlice";
import PropTypes from "prop-types";

export const RecipeHeader = ({ imageSource, recipeName, id }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const goBack = () => {
		navigate(-1);
	};

	const menuOptions = [
		{
			label: "Edit recipe",
			onClickFunction: () =>
				dispatch(
					setToast({
						message: "This feature will be added later",
						alertType: "info",
						isOpen: true,
					}),
				),
		},
		{
			label: "Delete recipe",
			onClickFunction: async () => {
				const response = await deleteRecipe(id);
				if (response === "success") {
					dispatch(
						setToast({
							message: "Delete successful",
							alertType: "success",
							isOpen: true,
						}),
					);
					await goBack();
				} else {
					dispatch(
						setToast({
							message: "Unable to delete",
							alertType: "error",
							isOpen: true,
						}),
					);
				}
			},
		},
	];

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ textAlign: "center" }}>
			<Box
				sx={{
					width: "100%",
					position: "absolute",
					display: "flex",
					justifyContent: "space-between",
					paddingTop: 1,
				}}
			>
				<IconButton
					aria-label="back"
					sx={{ paddingLeft: 3 }}
					size="large"
					onClick={() => goBack()}
				>
					<Avatar sx={{ opacity: 0.6, backgroundColor: "black" }}>
						<ArrowBack htmlColor="#fff" />
					</Avatar>
				</IconButton>
				<Box>
					<IconButton
						aria-label="more options"
						sx={{ paddingRight: 3 }}
						size="large"
						onClick={handleMenu}
					>
						<Avatar sx={{ opacity: 0.6, backgroundColor: "black" }}>
							<MoreVert htmlColor="#fff" />
						</Avatar>
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						{menuOptions.map((option, index) => {
							return (
								<MenuItem onClick={option.onClickFunction} key={index}>
									{option.label}
								</MenuItem>
							);
						})}
					</Menu>
				</Box>
			</Box>
			<RecipeImage imageSource={imageSource} recipeName={recipeName} />
		</Box>
	);
};

RecipeHeader.propTypes = {
	imageSource: PropTypes.string,
	recipeName: PropTypes.string,
	id: PropTypes.number,
};
