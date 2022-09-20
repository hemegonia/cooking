import Header from '@/components/cookingApp/header';
import IngrAndRecipeToggle from '@/components/cookingApp/ingrAndRecipeToggle';
import IngrList from '@/components/cookingApp/ingrList';
import IngrMissing from '@/components/cookingApp/ingrMissing';
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
      <IngrMissing className="mx-5 mt-3"></IngrMissing>
      <RecipeStats></RecipeStats>
      <IngrAndRecipeToggle></IngrAndRecipeToggle>
      <IngrList></IngrList>
    </CookingApp>
  );
};

export default Screen;
