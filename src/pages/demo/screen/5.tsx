import React from 'react';

import Header from '@/components/cookingApp/header';
import RecipesList from '@/components/cookingApp/recipesList';
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
      <RecipesList className="grow p-4"></RecipesList>
    </CookingApp>
  );
};

export default Screen;
