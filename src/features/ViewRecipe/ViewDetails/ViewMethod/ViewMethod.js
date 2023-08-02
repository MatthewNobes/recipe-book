import {
	List,
	ListItem,
	Typography,
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from "@mui/material";
import { utf8Decode } from "utils";
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
	const [isExpanded, setExpanded] = useState(true);

	const handleChange = () => {
		setExpanded(!isExpanded);
	};

	if (hasMethod === true) {
		return (
			<Accordion expanded={isExpanded} onChange={() => handleChange()}>
				<Header />
				<AccordionDetails>
					<List>
						{method.map((step, index) => {
							return (
								<ListItem disablePadding key={index}>
									<Typography variant="body2" gutterBottom component="div">
										<Typography variant="body1" sx={{ fontWeight: "bold" }}>
											Step {index + 1}:
										</Typography>

										{utf8Decode(step)}
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
			<Accordion expanded={isExpanded} onChange={() => handleChange()}>
				<Header />
				<AccordionDetails>
					<Typography variant="body1" sx={{ px: 1, py: 1 }}>
						No method exists for this recipe
					</Typography>
				</AccordionDetails>
			</Accordion>
		);
	}
};

ViewMethod.propTypes = {
	method: PropTypes.array,
};
