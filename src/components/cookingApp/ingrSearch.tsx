const Component = () => {
  return (
    <div className="flex flex-wrap p-4">
      <h2 className="w-full">What&apos;s in your kitchen?</h2>
      <input
        type="text"
        className="grow border-2 border-solid border-stone-800 p-2"
        placeholder="Search ingredients"
      />
      <button className="secondary -ml-0.5 border-2 border-solid border-stone-800 p-2 py-1 text-xl font-bold">
        Add
      </button>
    </div>
  );
};

export default Component;
