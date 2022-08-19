import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Slide1 = () => {
  const router = useRouter();
  return (
    <Main meta={<Meta title="Slide 1" description="Slide 1" />}>
      <div style={{ height: '640px', width: '360px' }} className="bg-white">
        <div> Project Cooking</div>
        <div>
          <p>whats in your kitchen?</p>
          <input
            type="text"
            className="border-2 border-solid border-stone-800"
          />
          <button className="border-2 border-solid border-stone-800">
            Add
          </button>
        </div>
        <hr className="h-1 bg-slate-800" />
        <div>
          <img
            src={`${router.basePath}/assets/images/ing_placeholder.svg`}
            alt="Ingredients Place Holder Image"
          />

          <div>
            {' '}
            <p>
              Your ingredients will <br></br> appear here.
            </p>
          </div>
        </div>
        <div>
          {/* disable button because there are no ingredients */}
          <button className="border-2 border-solid border-stone-800" disabled>
            {'Find Recipes'}
          </button>
        </div>
      </div>
    </Main>
  );
};

export default Slide1;
