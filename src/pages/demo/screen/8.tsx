import Header from '@/components/cookingApp/header';
import IngrAndRecipeToggle from '@/components/cookingApp/ingrAndRecipeToggle';
import Recipe from '@/components/cookingApp/recipe';
import RecipesImgAndTitle from '@/components/cookingApp/recipeImgAndTitle';
import RecipeStats from '@/components/cookingApp/recipeStats';
import { Meta } from '@/layouts/Meta';
import { CookingApp } from '@/templates/CookingApp';

const Screen = () => {
  return (
    <CookingApp
      meta={
        <Meta
          title="Cooking Project Demo Page"
          description="Side project using Next.js, cooking recipes and ingredients app, demo page"
        />
      }
    >
      <Header></Header>
      <RecipesImgAndTitle></RecipesImgAndTitle>
      <RecipeStats></RecipeStats>
      <IngrAndRecipeToggle></IngrAndRecipeToggle>
      <Recipe className="line-through"></Recipe>
    </CookingApp>
  );
};

export default Screen;
