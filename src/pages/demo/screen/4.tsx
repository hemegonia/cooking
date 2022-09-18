import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { CookingApp } from '@/templates/CookingApp';

const Screen = () => {
  const router = useRouter();
  const [timer, setTimer] = useState(3);
  const [isFirstRender, setFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setFirstRender(false);
      return;
    }
    if (!isFirstRender) {
      setTimeout(() => {
        setTimer((timerr) => {
          if (timerr <= 0) {
            router.push('/demo/screen/5');
          }
          return timerr - 1;
        });
      }, 1000);
    }
  }, [timer, isFirstRender]);
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
        <h4 className="text-center">One moment please</h4>
        <img
          style={{ height: '248px', width: '248px' }}
          src={`${router.basePath}/assets/images/pot_animation.gif`}
          alt="Ingredients Place Holder Image"
        />

        <div>
          <h4 className="text-center">
            while we cook up some <br></br>recipes for you!
          </h4>
          <p className="absolute right-0 bottom-0 text-slate-500 ">
            Redirect in {timer} seconds
          </p>
        </div>
      </div>
    </CookingApp>
  );
};

export default Screen;
