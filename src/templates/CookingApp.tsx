import type { ReactNode } from 'react';

type Props = {
  meta: ReactNode;
  children: ReactNode;
};

const CookingApp = (props: Props) => (
  <div>
    {props.meta}
    <div className="app flex h-screen w-screen flex-col bg-white">
      {props.children}
    </div>
  </div>
);

export { CookingApp };
