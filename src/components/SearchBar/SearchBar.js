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
import { recipeSearchAlgorithm } from "./recipeSearchAlgorithm/recipeSearchAlgorithm";

export const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [recipes, setRecipes] = useState([]);
	const [resultRecipes, setResultRecipes] = useState([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			const foundRecipes = await getAllRecipes();
			setRecipes(foundRecipes.data);
		};
		fetchRecipes();
	}, []);

	useEffect(() => {
		const debounceTimer = setTimeout(() => {
			handleSearch(searchTerm);
		}, 400);

		return () => clearTimeout(debounceTimer);
	}, [searchTerm]);

	const handleSearch = (searchTerm) => {
		if (searchTerm) {
			const searchResults = recipeSearchAlgorithm(searchTerm, recipes);
			setResultRecipes(searchResults);
		} else {
			setResultRecipes([]);
		}
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
					title="search"
					inputProps={{ "aria-label": "search recipes" }}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						),
						endAdornment:
							searchTerm.length > 0 ? (
								<Tooltip title={"Clear search"}>
									<IconButton onClick={() => handleReset()}>
										<Clear />
									</IconButton>
								</Tooltip>
							) : (
								<></>
							),
					}}
				/>
			</Box>
			{resultRecipes.length > 0 ? (
				<RecipeList recipes={resultRecipes} />
			) : (
				<></>
			)}
		</Box>
	);
};
