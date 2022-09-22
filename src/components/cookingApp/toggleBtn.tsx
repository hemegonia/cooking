import React from 'react';

type Props = {
  name: string;
  className?: string;
  onClick?: () => void;
};

const Component = (props: Props) => {
  return (
    <div>
      <button
        className={`${props.className} flex grow cursor-pointer p-2 align-middle`}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Component;
