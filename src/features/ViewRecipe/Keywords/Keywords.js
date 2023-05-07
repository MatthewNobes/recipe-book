import PropTypes from "prop-types";
import { Paper, Chip, Tooltip } from "@mui/material";

export const Keywords = ({ keywords }) => {
	if (keywords.length) {
		return (
			<Tooltip title="Keywords associated with the recipe">
				<Paper
					sx={{
						display: "flex",
						gap: 1,
						flexWrap: "wrap",
						listStyle: "none",
						p: 1,
						mt: 2,
						mb: 0,
						borderRadius: 5,
					}}
					component="div"
					aria-label="keywords"
				>
					{keywords.map((keyword, index) => {
						return (
							<Chip
								key={index}
								size="small"
								label={keyword}
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
