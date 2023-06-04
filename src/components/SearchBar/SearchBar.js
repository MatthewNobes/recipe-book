import {
	Box,
	IconButton,
	InputAdornment,
	TextField,
	Tooltip,
} from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { getAllRecipes } from "../../data";
import RecipeList from "../RecipeList";

export const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [recipes, setRecipes] = useState([]);
	const [resultRecipes, setResultRecipes] = useState([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			setRecipes(await getAllRecipes());
		};
		fetchRecipes();
	}, []);

	useEffect(() => {
		const debounceTimer = setTimeout(() => {
			handleSearch(searchTerm);
		}, 400);

		return () => clearTimeout(debounceTimer);
	}, [searchTerm]);

	const searchTermChecks = (searchTerm) => {
		let updatedSearchTerm = searchTerm;

		if (searchTerm.endsWith(" ")) {
			updatedSearchTerm = updatedSearchTerm.slice(0, -1);
		}

		return updatedSearchTerm.toLowerCase();
	};

	const handleSearch = (searchTerm) => {
		let searchResults = [];

		if (searchTerm) {
			const checkedSearchTerm = searchTermChecks(searchTerm);

			recipes.forEach((recipe) => {
				if (recipe.name.toLowerCase().match(checkedSearchTerm)) {
					searchResults = [...searchResults, recipe];
				} else if (recipe.description.toLowerCase().match(checkedSearchTerm)) {
					searchResults = [...searchResults, recipe];
				} else if (recipe.vegStatus.toLowerCase().match(checkedSearchTerm)) {
					searchResults = [...searchResults, recipe];
				} else if (recipe.keywords.includes(checkedSearchTerm)) {
					searchResults = [...searchResults, recipe];
				} else {
					recipe.ingredients.forEach((ingredient) => {
						if (
							JSON.parse(ingredient).name.toLowerCase().match(checkedSearchTerm)
						) {
							searchResults = [...searchResults, recipe];
						}
					});
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
							<Tooltip title={"Clear search"}>
								<IconButton onClick={() => handleReset()}>
									<Clear />
								</IconButton>
							</Tooltip>
						),
					}}
				/>
			</Box>
			<RecipeList recipes={resultRecipes} />
		</Box>
	);
};
