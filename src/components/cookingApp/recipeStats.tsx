import { useRouter } from 'next/router';
import React from 'react';

const Component = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row p-4">
      <div className="flex grow place-items-center gap-1 text-xs">
        <img
          src={`${router.basePath}/assets/images/bx-time-five.svg`}
          alt="Clock"
        />
        <span>45 min</span>
      </div>
      <div className="flex grow place-items-center gap-1 text-xs">
        <img src={`${router.basePath}/assets/images/bx-fork.svg`} alt="Fork" />
        <span>2 servings</span>
      </div>
      <div className="flex grow place-items-center gap-1 text-xs">
        <img src={`${router.basePath}/assets/images/bxs-hot.svg`} alt="Flame" />
        <span>650 kcal</span>
      </div>
    </div>
  );
};

export default Component;
