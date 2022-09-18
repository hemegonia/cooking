import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex h-24 items-center justify-between bg-primary p-8 text-white">
      <button onClick={router.back}>
        <img
          src={`${router.basePath}/assets/images/back_arrow.svg`}
          alt="Ingredients Place Holder Image"
        />
      </button>
      <h1>Project Cooking</h1>
      <button>
        <img
          src={`${router.basePath}/assets/images/ellipsis.svg`}
          alt="Ingredients Place Holder Image"
        />
      </button>
    </div>
  );
};

export default Header;
