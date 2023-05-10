import { Chip, Box } from "@mui/material";
import PropTypes from "prop-types";

export const KeywordsBlock = ({ keywords, removeKeyword }) => {
	if (keywords.length > 0) {
		return (
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 1,
				}}
			>
				{keywords.map((keyword, index) => {
					return (
						<Chip
							key={index}
							label={keyword}
							onDelete={() => {
								removeKeyword(index);
							}}
						/>
					);
				})}
			</Box>
		);
	}
};

KeywordsBlock.propTypes = {
	keywords: PropTypes.array,
	removeKeyword: PropTypes.func,
};
