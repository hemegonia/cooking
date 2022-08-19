import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Slide3 = () => {
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
            placeholder="Search ingredients"
          />
          <button className="border-2 border-solid border-stone-800">
            Add
          </button>
        </div>
        <hr className="h-1 bg-slate-800" />
        <div>
          <div className="flex justify-between">
            <h1> Ingredients (10)</h1>
            <button className="flex items-center">
              <img
                src={`${router.basePath}/assets/images/trash_icon.svg`}
                alt="Ingredients Place Holder Image"
              />
              Clear All{' '}
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center bg-slate-500">
              egg{' '}
              <img
                src={`${router.basePath}/assets/images/close_icon.svg`}
                alt="Ingredients Place Holder Image"
              />
            </button>
            <button className="flex items-center bg-slate-500">
              egg{' '}
              <img
                src={`${router.basePath}/assets/images/close_icon.svg`}
                alt="Ingredients Place Holder Image"
              />
            </button>
            <button className="flex items-center bg-slate-500">
              egg{' '}
              <img
                src={`${router.basePath}/assets/images/close_icon.svg`}
                alt="Ingredients Place Holder Image"
              />
            </button>
            <button className="flex items-center bg-slate-500">
              egg{' '}
              <img
                src={`${router.basePath}/assets/images/close_icon.svg`}
                alt="Ingredients Place Holder Image"
              />
            </button>
            <button className="flex items-center bg-slate-500">
              egg{' '}
              <img
                src={`${router.basePath}/assets/images/close_icon.svg`}
                alt="Ingredients Place Holder Image"
              />
            </button>
            <button className="flex items-center bg-slate-500">
              egg{' '}
              <img
                src={`${router.basePath}/assets/images/close_icon.svg`}
                alt="Ingredients Place Holder Image"
              />
            </button>
            <button className="flex items-center bg-slate-500">
              egg{' '}
              <img
                src={`${router.basePath}/assets/images/close_icon.svg`}
                alt="Ingredients Place Holder Image"
              />
            </button>
            <button className="flex items-center bg-slate-500">
              egg{' '}
              <img
                src={`${router.basePath}/assets/images/close_icon.svg`}
                alt="Ingredients Place Holder Image"
              />
            </button>
          </div>
        </div>
        <div>
          {/* active button because there are ingredients */}
          <button className="border-2 border-solid border-stone-800">
            {'Find Recipes'}
          </button>
        </div>
      </div>
    </Main>
  );
};

export default Slide3;
