import FindRecipe from '@/components/cookingApp/findRecipe';
import Header from '@/components/cookingApp/header';
import Display from '@/components/cookingApp/ingrDisplay';
import Search from '@/components/cookingApp/ingrSearch';
import { Meta } from '@/layouts/Meta';
import { CookingApp } from '@/templates/CookingApp';

const Screen = () => {
  return (
    <CookingApp
      meta={
        <Meta
          title="Cooking Project Demo Page"
          description="Side project using Next.js, cooking recipes and ingredients app, demo page"
        />
      }
    >
      <Header></Header>
      <Search></Search>
      <hr className="h-0.5 bg-slate-800" />
      <Display className="grow"></Display>
      <FindRecipe></FindRecipe>
    </CookingApp>
  );
};

export default Screen;
