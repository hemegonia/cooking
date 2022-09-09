import { useRouter } from 'next/router';
import React from 'react';

const Component = () => {
  const router = useRouter();
  return (
    <div className="flex-col p-5">
      <div
        style={{ height: '240px', width: '100%' }}
        className="relative flex items-center justify-center rounded-xl bg-slate-200"
      >
        [image]
        <img
          className="absolute bottom-4 right-4"
          src={`${router.basePath}/assets/images/bx-bookmark-plus.svg`}
          alt="Save Recipe"
        />
      </div>
      <div className="mt-3 flex grow flex-col">
        <h3>Grilled Chicken Alfredo with Noodles </h3>
      </div>
    </div>
  );
};

export default Component;
