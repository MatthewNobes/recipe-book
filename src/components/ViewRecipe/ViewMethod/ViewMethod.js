import { Box, List, ListItem, Typography } from "@mui/material";
import { utf8Decode } from "../../../utils";

const Header = () => <Typography variant="h4">Method</Typography>;

export const ViewMethod = ({ method = [] }) => {
	const hasMethod = method.length === 0 ? false : true;

	if (hasMethod === true) {
		return (
			<Box>
				<Header />
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
			</Box>
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
