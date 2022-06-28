import Header from "../../components/Header";

fetch("http://localhost:4444/api/ingredients")
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data)));

export const BrowseRecipes = () => {
  return (
    <div>
      <Header headerText="Recipes" />
      <p>Home in development</p>
    </div>
  );
};
