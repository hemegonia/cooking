import { useRouter } from 'next/router';
import React from 'react';

import Card from '@/components/cookingApp/recipeSummaryCard';

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
      <div className="flex gap-4 overflow-x-auto pb-4">
        {recipes.map(function whatever(_recipess, i) {
          return (
            <div key={i} className="w-72 shrink-0">
              <Card></Card>
            </div>
          );
        })}
      </div>
      <div className={`flex justify-between`}>
        <h1> Missing Ingredient</h1>
        <button className="flex items-center">View All</button>
      </div>
      <div className="flex flex-col gap-4 overflow-y-scroll">
        {recipes.map(function whatever(_recipess, i) {
          return (
            <div key={i}>
              <Card></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Component;
