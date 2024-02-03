import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import { RecipeChip } from "components";
import { ArrowForward } from "@mui/icons-material";

export const TitlePage = ({
	nextFunction,
	name,
	image,
	cookTime,
	prepTime,
	style,
}) => {
	return (
		<Box sx={style}>
			<Box sx={{ position: "relative", textAlign: "center" }}>
				<img
					src={image}
					style={{ width: "100%", objectFit: "cover", maxHeight: "85vh" }}
				/>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						backgroundColor: "rgb(0, 0, 0, 0.5)",
						width: "100%",
						paddingX: 5,
						paddingY: 5,
					}}
				>
					<Typography variant="h1">{name}</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-around",
							paddingTop: 1,
						}}
					>
						<RecipeChip label="Prep: " value={prepTime} />
						<RecipeChip label="Cook: " value={cookTime} />
					</Box>
					<Typography
						onClick={nextFunction}
						variant="h3"
						sx={{ cursor: "pointer" }}
					>
						Begin <ArrowForward />
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

TitlePage.propTypes = {
	prepTime: PropTypes.string,
	cookTime: PropTypes.string,
	name: PropTypes.string,
	image: PropTypes.string,
	nextFunction: PropTypes.func,
	style: PropTypes.object,
};
