import { Header, Page } from "components";
import UserFavorites from "./UsersFavorites";

export const Favorites = () => {
	return (
		<>
			<Header headerText="Favorites" />
			<Page>
				<UserFavorites />
			</Page>
		</>
	);
};
