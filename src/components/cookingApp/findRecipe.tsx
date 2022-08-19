const Component = () => {
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
