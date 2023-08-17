import { Paper } from "@mui/material";
import PropTypes from "prop-types";
import FilterForm from "./FiltersForm";

export const FilterPanel = ({
	filterPanelVisibility,
	filterValues,
	setFilterValues,
}) => {
	if (filterPanelVisibility) {
		return (
			<Paper sx={{ py: 2, px: 2 }}>
				<FilterForm
					filterValues={filterValues}
					setFilterValues={setFilterValues}
				/>
			</Paper>
		);
	}
};

FilterPanel.propTypes = {
	filterPanelVisibility: PropTypes.bool,
	filterValues: PropTypes.object,
	setFilterValues: PropTypes.func,
};
