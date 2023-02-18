import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { ArrowBack, MoreVert } from "@mui/icons-material";
import { RecipeImage } from "./RecipeImage/RecipeImage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

export const RecipeHeader = ({ imageSource, recipeName }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	const menuOptions = [
		{
			label: "Edit recipe",
			onClickFunction: () => console.log("Edit recipe - to do later"),
		},
		{
			label: "Delete recipe",
			onClickFunction: () => console.log("Delete recipe - to do later"),
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
					<ArrowBack htmlColor="#fff" /**TEMP measure till theme is sorted */ />
				</IconButton>
				<Box>
					<IconButton
						aria-label="more options"
						sx={{ paddingRight: 3 }}
						size="large"
						onClick={handleMenu}
					>
						<MoreVert
							htmlColor="#fff" /**TEMP measure till theme is sorted */
						/>
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
	imageSource: PropTypes.array,
	recipeName: PropTypes.array,
};
