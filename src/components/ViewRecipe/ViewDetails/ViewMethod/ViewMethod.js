import {
	Box,
	List,
	ListItem,
	Typography,
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from "@mui/material";
import { utf8Decode } from "../../../../utils";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import PropTypes from "prop-types";

const Header = () => (
	<AccordionSummary
		expandIcon={<ExpandMore />}
		sx={{ paddingY: 0, marginY: 0 }}
	>
		<Typography variant="h4">Method</Typography>
	</AccordionSummary>
);

export const ViewMethod = ({ method = [] }) => {
	const hasMethod = method.length === 0 ? false : true;

	if (hasMethod === true) {
		const [isExpanded, setExpanded] = useState(true);

		const handleChange = () => {
			setExpanded(!isExpanded);
		};

		return (
			<Accordion expanded={isExpanded} onChange={() => handleChange()}>
				<Header />
				<AccordionDetails>
					<List>
						{method.map((step) => {
							return (
								<ListItem disablePadding key={step.recipeStepID}>
									<Typography variant="body2" gutterBottom component="div">
										<Typography variant="body1" sx={{ fontWeight: "bold" }}>
											Step {step.stepNumber}:
										</Typography>

										{utf8Decode(step.stepText)}
									</Typography>
								</ListItem>
							);
						})}
					</List>
				</AccordionDetails>
			</Accordion>
		);
	} else {
		return (
			<Box>
				<Header />
				<Typography variant="body1">
					No method exists for this recipe
				</Typography>
			</Box>
		);
	}
};

ViewMethod.propTypes = {
	method: PropTypes.array,
};
