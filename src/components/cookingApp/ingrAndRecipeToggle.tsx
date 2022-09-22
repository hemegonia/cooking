import { useRouter } from 'next/router';
import React from 'react';

import ToggleBtn from '@/components/cookingApp/toggleBtn';

const Component = () => {
  const router = useRouter();

  return (
    <div className="mx-5 my-2 flex flex-row justify-around rounded-xl border-2 border-solid border-gray-900 text-sm">
      <ToggleBtn
        name="Ingredients"
        onClick={() => {
          router.push('6a');
        }}
      ></ToggleBtn>
      <ToggleBtn
        name="Recipe"
        onClick={() => {
          router.push('7');
        }}
      ></ToggleBtn>
    </div>
  );
};

export default Component;
