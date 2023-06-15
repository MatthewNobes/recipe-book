import {
	List,
	ListItem,
	Typography,
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import PropTypes from "prop-types";

const Header = () => (
	<AccordionSummary
		expandIcon={<ExpandMore />}
		sx={{ paddingY: 0, marginY: 0 }}
	>
		<Typography variant="h4">Notes</Typography>
	</AccordionSummary>
);

export const ViewExtras = ({ notes }) => {
	const [isExpanded, setExpanded] = useState(true);

	const handleChange = () => {
		setExpanded(!isExpanded);
	};
	if (notes && notes.length) {
		return (
			<Accordion expanded={isExpanded} onChange={() => handleChange()}>
				<Header />
				<AccordionDetails>
					<List>
						{notes.map((note, index) => {
							return (
								<ListItem disablePadding key={index}>
									<Typography variant="body1">{note}</Typography>
								</ListItem>
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
					<Typography variant="body1">
						No notes exists for this recipe
					</Typography>
				</AccordionDetails>
			</Accordion>
		);
	}
};

ViewExtras.propTypes = {
	notes: PropTypes.array,
};
