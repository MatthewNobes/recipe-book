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
	Skeleton,
} from "@mui/material";
import FavoriteButton from "../../FavoriteButton";
import TotalTime from "./TotalTime";
import { useNavigate } from "react-router-dom";
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
		isLoading,
	} = props;
	const navigate = useNavigate();

	const pageToNavigateTo = "/view/" + id;

	return (
		<Box>
			<ListItem>
				<ListItemButton sx={{ padding: 0 }}>
					<Tooltip
						title={isLoading ? "" : recipeName + " - " + recipeDescription}
					>
						<Card
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "row",
							}}
						>
							<Box sx={{ width: "40vw" }}>
								{isLoading ? (
									<Skeleton variant="rounded" width={"auto"} height={"250px"} />
								) : (
									<CardMedia
										component="img"
										image={`${image}?quality=70&resize=300,250&webp=true`}
										alt={recipeName}
										sx={{ maxHeight: "250px" }}
										onClick={() => navigate(pageToNavigateTo)}
									/>
								)}
							</Box>
							<CardContent
								sx={{
									width: "100%",
									minWidth: "200px",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
								}}
							>
								{isLoading ? (
									<Box>
										<Skeleton variant="rounded" width={"auto"} height={"3em"} />
										<Skeleton
											variant="rounded"
											width={"auto"}
											height={"6em"}
											sx={{ marginTop: 1 }}
										/>
									</Box>
								) : (
									<Box onClick={() => navigate(pageToNavigateTo)}>
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
								)}

								<CardActions>
									{isLoading ? (
										<Box sx={{ display: "flex", gap: 1 }}>
											<Skeleton
												variant="rounded"
												width={"10em"}
												height={"1.5em"}
											/>
											<Skeleton
												variant="rounded"
												width={"10em"}
												height={"1.5em"}
											/>
										</Box>
									) : (
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
												width: "100%",
												padding: 0,
											}}
										>
											<Box sx={{ display: "flex", gap: 1 }}>
												<TotalTime cookTime={cookTime} prepTime={prepTime} />
												<Chip
													label={category}
													color="primary"
													variant="outlined"
												/>
											</Box>
											{isFavorite === null ? (
												<></>
											) : (
												<FavoriteButton
													isFav={isFavorite}
													recipeID={parseInt(id)}
												/>
											)}
										</Box>
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
	isLoading: PropTypes.bool,
};
