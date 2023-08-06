/**
 * Calculate what filters should be used based on what the user entered into the form
 * @param {Array} answers the array containing the answers
 * @returns {object} filter object to be applied to the getAllRecipes function
 */
export const calculateFilters = (answers) => {
	let filters = {
		vegStatus: "",
		region: "",
		category: "",
		minTime: 0,
		maxTime: 60,
	};

	// check dinner size
	if (answers[0] === "Dinner") {
		filters.category = ["Entrée"];
	} else if (answers[0] === "Drink") {
		filters.category = ["Drink"];
	} else if (answers[0] === "Snack") {
		filters.category = ["Cake", "Biscuit", "Patisserie", "Dessert"];
	} else if (answers[0] === "Small dish") {
		filters.category = ["Soup", "Appetiser"];
	}

	// check dietary requirements
	if (answers[3] !== "None") {
		filters.vegStatus = answers[3];
	}

	// check the region
	if (answers[2] !== "Any") {
		filters.region = answers[2];
	}

	// generate time frame
	if (answers[1] === "Quick meal (Less than 30 mins)") {
		filters.minTime = 0;
		filters.maxTime = 30;
	} else if (answers[1] === "More time (Less than 1hr)") {
		filters.minTime = 30;
		filters.maxTime = 60;
	} else if (answers[1] === "Longer meal (Less than 1:30hr)") {
		filters.minTime = 60;
		filters.maxTime = 90;
	} else if (answers[1] === "More effort (More than 1:30hr)") {
		filters.minTime = 90;
		filters.maxTime = 1000;
	} else {
		filters.minTime = 0;
		filters.maxTime = 1000;
	}

	return filters;
};
