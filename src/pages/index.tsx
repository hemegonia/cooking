import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Cooking Project"
          description="Side project using Next.js, cooking recipes and ingredients app"
        />
      }
    >
      <h1 className="text-2xl font-bold">Header placeholder</h1>
      <p>I like food</p>
      <a href={`${router.basePath}`}> test link</a>
    </Main>
  );
};

export default Index;
