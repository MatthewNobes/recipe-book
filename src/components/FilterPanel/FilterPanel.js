import { Paper } from "@mui/material";
import PropTypes from "prop-types";
import FilterForm from "./FiltersForm";
import { useSelector } from "react-redux";

export const FilterPanel = ({ filterPanelVisibility, setPanelVisibility }) => {
	const filters = useSelector((state) => state.filters.filters);

	if (filterPanelVisibility) {
		return (
			<Paper sx={{ py: 2, px: 2 }}>
				<FilterForm
					filterValues={filters}
					closePanel={() => setPanelVisibility(false)}
				/>
			</Paper>
		);
	}
};

FilterPanel.propTypes = {
	filterPanelVisibility: PropTypes.bool,
	setPanelVisibility: PropTypes.func,
};
