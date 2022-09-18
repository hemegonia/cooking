import { useRouter } from 'next/router';

type Props = {
  className?: string;
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
};

// eslint-disable-next-line unused-imports/no-unused-vars
const Component = (_props: Props) => {
  const router = useRouter();
  return (
    <div className="flex h-24 items-center justify-center p-5">
      {/* disable button because there are no ingredients */}
      <button
        className="h-full w-full border-2 border-black bg-tertiary text-xl font-bold shadow-sm"
        onClick={() => {
          router.push('/demo/screen/4');
        }}
      >
        {'Find Recipes'}
      </button>
    </div>
  );
};

export default Component;
