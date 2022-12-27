import { Button, Box, Typography } from "@mui/material";
import { isURL } from "../../../utils";

const Header = () => <Typography variant="h4">See also</Typography>;

export const RecipeFooter = ({ recipeSource = "" }) => {
	if (recipeSource && isURL(recipeSource)) {
		return (
			<Box sx={{ mb: 5 }}>
				<Header />
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						float: "right",
					}}
				>
					<Button
						onClick={() => window.open(recipeSource, "_blank", "noreferrer")}
					>
						View Recipe Source
					</Button>
				</Box>
			</Box>
		);
	} else {
		return <div data-testid="empty-footer"></div>;
	}
};
