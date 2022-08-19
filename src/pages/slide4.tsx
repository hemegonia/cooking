import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Slide4 = () => {
  const router = useRouter();
  return (
    <Main meta={<Meta title="Slide 1" description="Slide 1" />}>
      <div style={{ height: '640px', width: '360px' }} className="bg-white">
        <div className="flex h-full flex-col items-center justify-between py-24">
          <p className="text-center">One moment</p>
          <img
            style={{ height: '248px', width: '248px' }}
            src={`${router.basePath}/assets/images/pot_animation.gif`}
            alt="Ingredients Place Holder Image"
          />

          <div>
            {' '}
            <p className="text-center">
              while we cook up some <br></br>recipes for you!
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Slide4;
