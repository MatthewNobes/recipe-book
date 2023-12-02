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
			<Route path="/login" element={<Login />} />
			<Route
				path="/add"
				element={isContributor ? <AddRecipe /> : <Navigate to="/" />}
			/>
			<Route
				path="/edit/:recipeID"
				element={isContributor ? <EditRecipe /> : <Navigate to="/" />}
			/>
			<Route path="/category/:category" element={<Category />} />
			<Route path="/view/:recipeID" element={<ViewRecipe />} />
			<Route
				path="/admin"
				element={isAdmin ? <Admin /> : <Navigate to="/" />}
			/>
			<Route
				path="/admin/units"
				element={isAdmin ? <UnitsAdmin /> : <Navigate to="/" />}
			/>
			<Route
				path="/admin/roles"
				element={isAdmin ? <RoleManagementAdmin /> : <Navigate to="/" />}
			/>
			<Route
				path="/admin/users"
				element={isAdmin ? <UserManagement /> : <Navigate to="/" />}
			/>
			<Route path="/settings/about" element={<About />} />
			<Route path="/recommendRecipe" element={<RecommendRecipe />} />
			<Route path="/settings" element={<Settings />} />
			<Route
				path="/settings/myAccount"
				element={isLoggedIn ? <MyAccount /> : <Navigate to="/login" />}
			/>
			<Route
				path="/favorites"
				element={isGeneralUser ? <Favorites /> : <Navigate to="/" />}
			/>
			<Route path="/categories" element={<Categories />} />
			<Route path="/browse" element={<BrowseRecipes />} />
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};
