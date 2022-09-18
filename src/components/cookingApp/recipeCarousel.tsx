import React from 'react';

import Card from '@/components/cookingApp/recipeSummaryCard';

type Props = {};
const Component = (_props: Props) => {
  const [recipes] = React.useState<string[]>(['', '', '']);
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {recipes.map(function whatever(_recipess, i) {
        return (
          <div key={i} className="w-72 shrink-0">
            <Card></Card>
          </div>
        );
      })}
    </div>
  );
};

export default Component;
