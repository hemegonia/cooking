import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // eslint-disable-next-line unused-imports/no-unused-vars

  return (
    <Main
      meta={
        <Meta
          title="Cooking Project"
          description="Side project using Next.js, cooking recipes and ingredients app"
        />
      }
    >
      <Link href="/demo/">
        <a>Link to Demo</a>
      </Link>
    </Main>
  );
};

export default Index;
