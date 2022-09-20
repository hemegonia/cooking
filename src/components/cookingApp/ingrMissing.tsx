import React from 'react';

type Props = {
  className?: string;
};

const Component = (prop: Props) => {
  return (
    <div className={`${prop.className} text-xs`}>
      <span className="text-gray-600">Missing:</span>
      <button className="ml-2 rounded border border-solid border-gray-700 px-2 align-middle">
        cornstarch +
      </button>
      <button className="ml-2 rounded border border-solid border-gray-700 px-2 align-middle">
        sesame seeds +
      </button>
      <button className="ml-2 rounded border border-solid border-gray-700 px-2 align-middle">
        ginger +
      </button>
    </div>
  );
};

export default Component;
