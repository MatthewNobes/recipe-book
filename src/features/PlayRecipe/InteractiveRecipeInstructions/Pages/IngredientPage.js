import {
	Typography,
	Box,
	IconButton,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import PropTypes from "prop-types";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { getMeasurementsThatNeedASpace } from "utils";

export const IngredientPage = ({
	backFunction,
	nextFunction,
	ingredients,
	style,
}) => {
	const measurementsThatNeedASpace = getMeasurementsThatNeedASpace();

	return (
		<Box sx={style}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					height: "85vh",
					textAlign: "center",
				}}
			>
				<IconButton onClick={backFunction}>
					<ArrowBack />
				</IconButton>
				<Box sx={{ position: "relative", textAlign: "center" }}>
					<Typography variant="h3">You will need</Typography>
					<List>
						{ingredients.map((ingredient, index) => {
							const { name, quantity, measurement } = JSON.parse(ingredient);
							let spacedMeasurement = measurementsThatNeedASpace.includes(
								measurement,
							)
								? " " + measurement
								: measurement;

							return (
								<ListItem key={index}>
									<ListItemText
										primary={quantity + spacedMeasurement + " " + name}
									/>
								</ListItem>
							);
						})}
					</List>
				</Box>
				<IconButton onClick={nextFunction}>
					<ArrowForward />
				</IconButton>
			</Box>
		</Box>
	);
};

IngredientPage.propTypes = {
	ingredients: PropTypes.array,
	backFunction: PropTypes.func,
	nextFunction: PropTypes.func,
	style: PropTypes.object,
};
