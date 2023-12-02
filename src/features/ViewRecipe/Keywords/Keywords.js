import PropTypes from "prop-types";
import {
	Paper,
	Chip,
	Tooltip,
	Typography,
	IconButton,
	Box,
} from "@mui/material";
import { Add, Close } from "@mui/icons-material";
import { KeywordForm } from "components";
import { useState } from "react";

export const Keywords = ({ keywords, deleteKeyword, isContributor, onAdd }) => {
	if (keywords.length) {
		const [newKeywordVisible, setNewKeywordVisible] = useState(false);

		return (
			<Tooltip title="Keywords/tags associated with the recipe">
				<Paper
					component="div"
					aria-label="Keywords/tags associated with the recipe"
				>
					<Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
						<Box
							sx={{
								display: "flex",
								gap: 1,
								flexWrap: "wrap",
								listStyle: "none",
								py: 1,
								px: 1.5,
								mb: 0,
								borderRadius: 3,
							}}
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
										onDelete={() => deleteKeyword(index)}
										sx={{ px: "0.5em" }}
									/>
								);
							})}
						</Box>
						{isContributor ? (
							<IconButton
								size="small"
								sx={{ width: "2em" }}
								onClick={() => setNewKeywordVisible(!newKeywordVisible)}
								aria-label="add keyword"
							>
								{newKeywordVisible ? (
									<Close fontSize="inherit" />
								) : (
									<Add fontSize="inherit" />
								)}
							</IconButton>
						) : (
							<></>
						)}
					</Box>
					{newKeywordVisible ? (
						<Box sx={{ p: 1 }}>
							<KeywordForm addKeyword={(keywordToAdd) => onAdd(keywordToAdd)} />
						</Box>
					) : (
						<></>
					)}
				</Paper>
			</Tooltip>
		);
	} else {
		return <div title="no keywords" aria-label="no keywords" />;
	}
};

Keywords.propTypes = {
	keywords: PropTypes.array,
	deleteKeyword: PropTypes.func,
	isContributor: PropTypes.bool,
	onAdd: PropTypes.func,
};
