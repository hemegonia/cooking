import { useRouter } from 'next/router';

type Props = {
  className?: string;
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
};

const Component = (props: Props) => {
  const router = useRouter();
  const { selectedItems, setSelectedItems } = props;
  return selectedItems.length > 0 ? (
    <div className={`${props.className}`}>
      <div className={`flex justify-between`}>
        <h1> My Ingredients ({selectedItems.length})</h1>
        <button
          className="flex items-center"
          onClick={() => {
            setSelectedItems([]);
          }}
        >
          <img
            src={`${router.basePath}/assets/images/trash_icon.svg`}
            alt="Ingredients Place Holder Image"
          />
          Clear All{' '}
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {selectedItems.map(function whatever(item) {
          return (
            <button
              key={item}
              className="flex items-center rounded-md bg-slate-500 p-1"
            >
              {item}
              <img
                className="p-2"
                src={`${router.basePath}/assets/images/close_icon.svg`}
                alt="Ingredients Place Holder Image"
                onClick={() => {
                  setSelectedItems((selectedItemss) => {
                    return selectedItemss.filter(
                      (selectedItem) => item !== selectedItem
                    );
                  });
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  ) : (
    <div
      className={`m-5 box-border flex flex-col items-center justify-center border-2 border-black shadow-sm ${props.className}`}
    >
      <div className={`flex flex-col items-center`}>
        <img
          src={`${router.basePath}/assets/images/ing_placeholder.svg`}
          alt="Ingredients Place Holder Image"
        />
        <h4 className="mt-4 text-center text-slate-500">
          Your ingredients will <br></br> appear here.
        </h4>
      </div>
    </div>
  );
};

export default Component;
