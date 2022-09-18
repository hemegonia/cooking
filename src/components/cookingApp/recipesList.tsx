import { useRouter } from 'next/router';
import React from 'react';

import RecipeCarousel from '@/components/cookingApp/recipeCarousel';

type Props = {
  className?: string;
};

const Component = (props: Props) => {
  const router = useRouter();
  const [recipes, setRecipes] = React.useState<string[]>(['', '', '']);
  return (
    <div className={`${props.className} flex flex-col`}>
      <div className={`flex justify-between`}>
        <h1> {recipes.length} Recipes Found</h1>
        <button
          className="flex items-center"
          onClick={() => {
            setRecipes([]);
          }}
        >
          <img
            src={`${router.basePath}/assets/images/sort_icon.svg`}
            alt="Ingredients Place Holder Image"
          />
          Sort
        </button>
      </div>
      <div className={`flex justify-between`}>
        <h1> Ready to Make</h1>
        <button className="flex items-center">View All</button>
      </div>
      <RecipeCarousel></RecipeCarousel>
      <div className={`flex justify-between`}>
        <h1> Missing Ingredient</h1>
        <button className="flex items-center">View All</button>
      </div>
      <RecipeCarousel></RecipeCarousel>
    </div>
  );
};

export default Component;
