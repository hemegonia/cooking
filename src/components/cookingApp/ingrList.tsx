import React from 'react';

import IngrListItem from '@/components/cookingApp/ingrListItem';

const Component = () => {
  const ingredients = React.useState<string[]>(['', '', '']);

  return (
    <div className="mx-5 text-sm">
      <ul>
        {ingredients.map(function getIngredients(_ingredient, i) {
          return (
            <div key={i} className="flex flex-col">
              <IngrListItem></IngrListItem>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Component;
