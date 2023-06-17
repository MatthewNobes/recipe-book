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
import { utf8Decode } from "../../../../utils";
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
				<AccordionDetails>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 1,
						}}
					>
						<Button
							onClick={() =>
								window.open(utf8Decode(recipeSource), "_blank", "noreferrer")
							}
						>
							View Recipe Source
						</Button>
						{createdDate ? (
							<Typography variant="Body2">
								Added: {createdDate.toString()}
							</Typography>
						) : (
							<></>
						)}
					</Box>
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
