import {
	List,
	ListItemButton,
	ListItem,
	ListItemText,
	Typography,
	AccordionSummary,
	Accordion,
	AccordionDetails,
} from "@mui/material";
import { ExpandMore, Launch } from "@mui/icons-material";
import { isURL, utf8Decode } from "utils";
import { useState } from "react";
import PropTypes from "prop-types";

const Header = () => (
	<AccordionSummary
		expandIcon={<ExpandMore />}
		sx={{ paddingY: 0, marginY: 0 }}
	>
		<Typography variant="h4">See also</Typography>
	</AccordionSummary>
);

export const RecipeFooter = ({ recipeSource = "", createdDate = "" }) => {
	if (recipeSource && isURL(recipeSource)) {
		const [isExpanded, setExpanded] = useState(true);

		const handleChange = () => {
			setExpanded(!isExpanded);
		};

		return (
			<Accordion expanded={isExpanded} onChange={() => handleChange()}>
				<Header />
				<AccordionDetails sx={{ paddingX: 0 }}>
					<List sx={{ paddingX: 0 }}>
						<ListItemButton
							onClick={() =>
								window.open(utf8Decode(recipeSource), "_blank", "noreferrer")
							}
						>
							<ListItemText primary="View Recipe Source" />

							<Launch />
						</ListItemButton>
						{createdDate ? (
							<ListItem variant="Body2">
								Added: {createdDate.toString()}
							</ListItem>
						) : (
							<div data-testid="no-created-date"></div>
						)}
					</List>
				</AccordionDetails>
			</Accordion>
		);
	} else {
		return <div data-testid="empty-footer"></div>;
	}
};

RecipeFooter.propTypes = {
	recipeSource: PropTypes.string,
	createdDate: PropTypes.object,
};
