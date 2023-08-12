import {
	Typography,
	Box,
	Divider,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	ListItem,
	Tooltip,
	Chip,
	ListItemButton,
} from "@mui/material";
import FavoriteButton from "../../FavoriteButton";
import TotalTime from "./TotalTime";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import PropTypes from "prop-types";

export const RecipeListItem = (props) => {
	const {
		id,
		recipeName,
		recipeDescription,
		isFavorite,
		cookTime,
		prepTime,
		image,
		category,
	} = props;
	const navigate = useNavigate();

	const itemClickedOn = useCallback(
		() => navigate("/ViewRecipe/" + id),
		[navigate, id],
	);

	return (
		<Box>
			<ListItem>
				<ListItemButton sx={{ padding: 0 }}>
					<Tooltip title={recipeName + " - " + recipeDescription}>
						<Card
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "row",
							}}
							onClick={() => itemClickedOn()}
						>
							<Box sx={{ width: "40vw" }}>
								<CardMedia
									component="img"
									image={image}
									alt={recipeName}
									sx={{ maxHeight: "250px" }}
								/>
							</Box>
							<CardContent
								onClick={() => itemClickedOn()}
								sx={{
									width: "100%",
									minWidth: "200px",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Typography variant="h6">{recipeName}</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{
											height: "4.5em",
											overflowY: "hidden",
											textOverflow: "ellipsis",
										}}
									>
										{recipeDescription}
									</Typography>
								</Box>
								<CardActions
									sx={{ justifyContent: "space-between", padding: 0 }}
								>
									<Box sx={{ display: "flex", gap: 1 }}>
										<TotalTime cookTime={cookTime} prepTime={prepTime} />
										<Chip label={category} color="primary" variant="outlined" />
									</Box>
									{isFavorite === null ? (
										<></>
									) : (
										<FavoriteButton
											isFav={isFavorite}
											recipeID={parseInt(id)}
										/>
									)}
								</CardActions>
							</CardContent>
						</Card>
					</Tooltip>
				</ListItemButton>
			</ListItem>
			<Divider component="li" sx={{ marginX: 1 }} />
		</Box>
	);
};

RecipeListItem.propTypes = {
	id: PropTypes.number,
	recipeName: PropTypes.string,
	recipeDescription: PropTypes.string,
	isFavorite: PropTypes.bool,
	cookTime: PropTypes.number,
	prepTime: PropTypes.number,
	image: PropTypes.string,
	category: PropTypes.string,
};
