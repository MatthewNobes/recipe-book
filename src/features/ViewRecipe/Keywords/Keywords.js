import PropTypes from "prop-types";
import { Paper, Chip, Tooltip, Typography } from "@mui/material";

export const Keywords = ({ keywords }) => {
	if (keywords.length) {
		return (
			<Tooltip title="Keywords/tags associated with the recipe">
				<Paper
					sx={{
						display: "flex",
						gap: 1,
						flexWrap: "wrap",
						listStyle: "none",
						py: 1,
						px: 1.5,
						mt: 2,
						mb: 0,
						borderRadius: 3,
					}}
					component="div"
					aria-label="Keywords/tags associated with the recipe"
				>
					<Typography variant="body1">Tags: </Typography>
					{keywords.map((keyword, index) => {
						return (
							<Chip
								key={index}
								size="small"
								label={keyword.toLowerCase()}
								variant="outlined"
								color={"secondary"}
								sx={{ px: "0.5em" }}
							/>
						);
					})}
				</Paper>
			</Tooltip>
		);
	} else {
		return <div title="no keywords" aria-label="no keywords" />;
	}
};

Keywords.propTypes = {
	keywords: PropTypes.array,
};
