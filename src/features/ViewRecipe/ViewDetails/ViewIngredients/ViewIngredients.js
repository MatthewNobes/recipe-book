import {
	Box,
	List,
	ListItem,
	Typography,
	Divider,
	ListItemText,
	Tooltip,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Chip,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import PropTypes from "prop-types";
import { getMeasurementsThatNeedASpace } from "utils";

const Header = () => (
	<AccordionSummary
		expandIcon={<ExpandMore />}
		sx={{ paddingY: 0, marginY: 0 }}
	>
		<Typography variant="h4">Ingredients</Typography>
	</AccordionSummary>
);

export const ViewIngredients = ({ ingredients = [] }) => {
	const hasIngredients = ingredients.length === 0 ? false : true;
	const [isExpanded, setExpanded] = useState(true);

	const handleChange = () => {
		setExpanded(!isExpanded);
	};

	if (hasIngredients === true) {
		const measurementsThatNeedASpace = getMeasurementsThatNeedASpace();
		return (
			<Accordion expanded={isExpanded} onChange={() => handleChange()}>
				<Header />
				<AccordionDetails>
					<List>
						{ingredients.map((ingredient, index) => {
							const ing = JSON.parse(ingredient);

							let measurement = measurementsThatNeedASpace.includes(
								ing.measurement,
							)
								? " " + ing.measurement
								: ing.measurement;

							return (
								<Box key={index}>
									<Tooltip title={ing.description}>
										<ListItem disablePadding>
											<ListItemText variant="body1">
												{ing.quantity + measurement + " " + ing.name}
											</ListItemText>
											{ing.optional ? (
												<Chip
													label="Optional"
													variant="outlined"
													color="info"
													size="small"
													sx={{ marginX: 1 }}
												/>
											) : null}
										</ListItem>
									</Tooltip>
									<Divider />
								</Box>
							);
						})}
					</List>
				</AccordionDetails>
			</Accordion>
		);
	} else {
		return (
			<Accordion expanded={isExpanded} onChange={() => handleChange()}>
				<Header />
				<AccordionDetails>
					<Typography variant="body1" sx={{ px: 1, py: 1 }}>
						No ingredients exists for this recipe
					</Typography>
				</AccordionDetails>
			</Accordion>
		);
	}
};

ViewIngredients.propTypes = {
	ingredients: PropTypes.array,
};
