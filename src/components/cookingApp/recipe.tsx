import React from 'react';

type Props = {
  className?: string;
};

const Component = (prop: Props) => {
  return (
    <div className="m-5 flex flex-col gap-7 text-sm">
      <div className="flex gap-5">
        <div
          style={{ height: '36px', width: '36px' }}
          className="flex items-center justify-center rounded-full bg-black px-4 py-1 text-xl font-bold text-white"
        >
          1
        </div>
        <div className={`${prop.className}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
          venenatis adipiscing faucibus sit.
        </div>
        <div className="shrink">box</div>
      </div>
      <div className="flex gap-5">
        <div
          style={{ height: '36px', width: '36px' }}
          className="flex items-center justify-center rounded-full bg-gray-300 px-4 py-1 text-xl font-bold"
        >
          2
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
          venenatis adipiscing faucibus sit.
        </div>
        <div className="shrink">box</div>
      </div>
      <div className="flex gap-5">
        <div
          style={{ height: '36px', width: '36px' }}
          className="flex items-center justify-center rounded-full bg-gray-300 px-4 py-1 text-xl font-bold"
        >
          3
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
          venenatis adipiscing faucibus sit.
        </div>
        <div className="shrink">box</div>
      </div>
    </div>
  );
};

export default Component;
