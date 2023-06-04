/* eslint-disable no-unused-vars */
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { getAllRecipes } from "../../data";
import RecipeList from "../RecipeList";

export const SearchBar = () => {
	const [recipes, setRecipes] = useState([]);
	const [resultRecipes, setResultRecipes] = useState([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			setRecipes(await getAllRecipes());
		};
		fetchRecipes();
	}, []);

	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const debounceTimer = setTimeout(() => {
			handleSearch(searchTerm);
		}, 400); // Adjust the debounce delay as needed (300ms in this example)

		return () => clearTimeout(debounceTimer);
	}, [searchTerm]);

	const searchTermChecks = (searchTerm) => {
		let updatedSearchTerm = searchTerm;

		if (searchTerm.endsWith(" ")) {
			updatedSearchTerm = updatedSearchTerm.slice(0, -1);
		}

		updatedSearchTerm = updatedSearchTerm.toLowerCase();

		return updatedSearchTerm;
	};

	const handleSearch = (searchTerm) => {
		// search by name, description, keyword or ingredient, vegStatus
		let searchResults = [];

		// check search term for trailing space
		if (searchTerm) {
			const checkedSearchTerm = searchTermChecks(searchTerm);

			recipes.forEach((recipe) => {
				if (recipe.name.toLowerCase().match(checkedSearchTerm)) {
					searchResults = [...searchResults, recipe];
				} else if (recipe.description.toLowerCase().match(checkedSearchTerm)) {
					searchResults = [...searchResults, recipe];
				}
			});
		}
		setResultRecipes(searchResults);
	};

	const handleChange = (event) => {
		const { value } = event.target;
		setSearchTerm(value);
	};

	const handleReset = () => {
		setSearchTerm("");
		setResultRecipes([]);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				mt: 2,
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<TextField
					sx={{ width: "95%" }}
					value={searchTerm}
					onChange={handleChange}
					placeholder="Search recipes"
					inputProps={{ "aria-label": "search recipes" }}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						),
						endAdornment: (
							<IconButton onClick={() => handleReset()}>
								<Clear />
							</IconButton>
						),
					}}
				/>
			</Box>
			<RecipeList recipes={resultRecipes} />
		</Box>
	);
};
