import { useRouter } from 'next/router';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { CookingApp } from '@/templates/CookingApp';

const Screen = () => {
  const router = useRouter();
  return (
    <CookingApp
      meta={
        <Meta
          title="Cooking Project Demo Page"
          description="Side project using Next.js, cooking recipes and ingredients app, demo page"
        />
      }
    >
      <div className="flex h-full flex-col items-center justify-center">
        <h4 className="text-center">One moment</h4>
        <img
          style={{ height: '248px', width: '248px' }}
          src={`${router.basePath}/assets/images/pot_animation.gif`}
          alt="Ingredients Place Holder Image"
        />

        <div>
          {' '}
          <h4 className="text-center">
            while we cook up some <br></br>recipes for you!
          </h4>
        </div>
      </div>
    </CookingApp>
  );
};

export default Screen;
