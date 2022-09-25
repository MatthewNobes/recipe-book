import css from "./RecipeImage.module.css";

export const RecipeImage = (props) => {
  const imageSource = props.imageSource;
  const recipeName = props.recipeName;
  return (
    <img className={css.RecipeImage} alt={recipeName} src={imageSource}></img>
  );
};
