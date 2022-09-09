/* import React, { useEffect, useState } from 'react'; */

import Header from '@/components/cookingApp/header';
import RecipesImgAndTitle from '@/components/cookingApp/recipeImgAndTitle';
import { Meta } from '@/layouts/Meta';
import { CookingApp } from '@/templates/CookingApp';

const Screen = () => {
  /*  const [timer, setTimer] = useState(3);
  const [isFirstRender, setFirstRender] = useState(true);
  useEffect(() => {
    console.log('this');
    if (isFirstRender) {
      setFirstRender(false);
      return;
    }
    if (!isFirstRender) {
      setTimeout(() => {
        console.log('timer triggered');

        setTimer((timerr) => {
          if (timerr <= 0) {
            router.push('/demo/screen/5');
          }
          return timerr - 1;
        });
      }, 1000);
    }
  }, [timer, isFirstRender]);
*/
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
    </CookingApp>
  );
};

export default Screen;
