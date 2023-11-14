import { Routes, Route, Navigate } from "react-router-dom";
import {
	Admin,
	RoleManagementAdmin,
	UserManagement,
	HomePage,
	BrowseRecipes,
	MyAccount,
	Favorites,
	AddRecipe,
	Settings,
	About,
	ViewRecipe,
	EditRecipe,
	Categories,
	Category,
	RecommendRecipe,
	Login,
	PageNotFound,
	UnitsAdmin,
} from "features";
import { useEffect } from "react";
import { getUsersRoleNames } from "data";
import { useDispatch, useSelector } from "react-redux";
import { setUsersRoles } from "store/slices/usersRoles/usersRoles";

export const Router = () => {
	const usersRoles = useSelector((state) => state.usersRoles.usersRoles);
	const dispatch = useDispatch();

	const isLoggedIn = usersRoles !== false ? true : false;
	const isAdmin = isLoggedIn ? usersRoles.includes("App Admin") : false;
	const isContributor = isLoggedIn ? usersRoles.includes("Contributor") : false;
	const isGeneralUser = isLoggedIn
		? usersRoles.includes("General User")
		: false;

	useEffect(() => {
		const getRoles = async () => {
			dispatch(setUsersRoles(await getUsersRoleNames()));
		};
		getRoles();
	}, []);

	return (
		<Routes>
			<Route path="*" element={<PageNotFound />} />
			<Route path="/Login" element={<Login />} />
			<Route
				path="/add"
				element={isContributor ? <AddRecipe /> : <Navigate to="/Home" />}
			/>
			<Route
				path="/edit/:recipeID"
				element={isContributor ? <EditRecipe /> : <Navigate to="/Home" />}
			/>
			<Route path="/category/:category" element={<Category />} />
			<Route path="/ViewRecipe/:recipeID" element={<ViewRecipe />} />
			<Route
				path="/Admin"
				element={isAdmin ? <Admin /> : <Navigate to="/Home" />}
			/>
			<Route
				path="/Admin/UnitsAdmin"
				element={isAdmin ? <UnitsAdmin /> : <Navigate to="/Home" />}
			/>
			<Route
				path="/Admin/Roles"
				element={isAdmin ? <Admin /> : <Navigate to="/Home" />}
			/>
			<Route
				path="/Admin/Roles/Management"
				element={isAdmin ? <RoleManagementAdmin /> : <Navigate to="/Home" />}
			/>
			<Route
				path="/Admin/UserManagement"
				element={isAdmin ? <UserManagement /> : <Navigate to="/Home" />}
			/>
			<Route path="/Settings/About" element={<About />} />
			<Route path="/RecommendRecipe" element={<RecommendRecipe />} />
			<Route path="/Settings" element={<Settings />} />
			<Route
				path="/Settings/MyAccount"
				element={isLoggedIn ? <MyAccount /> : <Navigate to="/Home" />}
			/>
			<Route
				path="/Favorites"
				element={isGeneralUser ? <Favorites /> : <Navigate to="/Home" />}
			/>
			<Route path="/Categories" element={<Categories />} />
			<Route path="/browse" element={<BrowseRecipes />} />
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};
