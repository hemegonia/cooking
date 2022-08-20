type Props = {
  className?: string;
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
};

// eslint-disable-next-line unused-imports/no-unused-vars
const Component = (_props: Props) => {
  return (
    <div className="flex h-24 items-center justify-center bg-slate-300 p-5">
      {/* disable button because there are no ingredients */}
      <button className="primary h-full w-full text-xl font-bold">
        {'Find Recipes'}
      </button>
    </div>
  );
};

export default Component;
