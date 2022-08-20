import type { ReactNode } from 'react';

type Props = {
  meta: ReactNode;
  children: ReactNode;
};

const CookingApp = (props: Props) => (
  <div>
    {props.meta}
    <div className="app fixed flex h-full w-full flex-col bg-white">
      {props.children}
    </div>
  </div>
);

export { CookingApp };
