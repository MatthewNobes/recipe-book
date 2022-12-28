import {
	Button,
	Box,
	Typography,
	AccordionSummary,
	Accordion,
	AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { isURL } from "../../../../utils";
import { useState } from "react";

const Header = () => (
	<AccordionSummary
		expandIcon={<ExpandMore />}
		sx={{ paddingY: 0, marginY: 0 }}
	>
		<Typography variant="h4">See also</Typography>
	</AccordionSummary>
);

export const RecipeFooter = ({ recipeSource = "" }) => {
	if (recipeSource && isURL(recipeSource)) {
		const [isExpanded, setExpanded] = useState(true);

		const handleChange = () => {
			setExpanded(!isExpanded);
		};
		return (
			<Accordion expanded={isExpanded} onChange={() => handleChange()}>
				<Header />
				<AccordionDetails>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							float: "left",
						}}
					>
						<Button
							onClick={() => window.open(recipeSource, "_blank", "noreferrer")}
						>
							View Recipe Source
						</Button>
					</Box>
				</AccordionDetails>
			</Accordion>
		);
	} else {
		return <div data-testid="empty-footer"></div>;
	}
};
