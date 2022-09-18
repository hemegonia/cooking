import { useCombobox, useMultipleSelection } from 'downshift';
import React from 'react';

type Props = {
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
};

function MultipleComboBoxExample(props: Props) {
  const books = ['eggs', 'flour', 'onions'];

  function getFilteredBooks(selectedItems: string[], inputValue: string) {
    const lowerCasedInputValue = inputValue.toLowerCase();

    return books.filter(function filterBook(book) {
      return (
        !selectedItems.includes(book) && book.includes(lowerCasedInputValue)
      );
    });
  }

  function MultipleComboBox() {
    const [inputValue, setInputValue] = React.useState('');
    const { selectedItems, setSelectedItems } = props;
    const items = React.useMemo(
      () => getFilteredBooks(selectedItems, inputValue),
      [selectedItems, inputValue]
    );
    const { getDropdownProps } = useMultipleSelection({
      selectedItems,
      onStateChange({ selectedItems: newSelectedItems, type }) {
        switch (type) {
          case useMultipleSelection.stateChangeTypes
            .SelectedItemKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
          case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
            setSelectedItems(newSelectedItems || []);
            break;
          default:
            break;
        }
      },
    });
    const {
      isOpen,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      getItemProps,
      selectedItem,
    } = useCombobox({
      items,
      itemToString(item) {
        return item || '';
      },
      defaultHighlightedIndex: 0, // after selection, highlight the first item.
      selectedItem: null,
      stateReducer(_state, actionAndChanges) {
        const { changes, type } = actionAndChanges;

        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
          case useCombobox.stateChangeTypes.InputBlur:
            return {
              ...changes,
              ...(changes.selectedItem && {
                isOpen: true,
                highlightedIndex: 0,
              }),
            };
          default:
            return changes;
        }
      },
      onStateChange({
        inputValue: newInputValue,
        type,
        selectedItem: newSelectedItem,
      }) {
        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
            setSelectedItems([
              ...(selectedItems as string[]),
              newSelectedItem as string,
            ]);
            break;

          case useCombobox.stateChangeTypes.InputChange:
            setInputValue(newInputValue as string);

            break;
          default:
            break;
        }
      },
    });

    return (
      <div className="w-full">
        <div className="flex flex-col gap-1">
          <div className="inline-flex flex-wrap items-center gap-2 bg-white p-1.5">
            {/* {selectedItems.map(function renderSelectedItem(
              selectedItemForRender,
              index
            ) {
              return (
                <span
                  className="rounded-md bg-gray-100 px-1 focus:bg-red-400"
                  key={`selected-item-${index}`}
                  {...getSelectedItemProps({
                    selectedItem: selectedItemForRender,
                    index,
                  })}
                >
                  {selectedItemForRender.title}
                  <span
                    className="cursor-pointer px-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeSelectedItem(selectedItemForRender);
                    }}
                  >
                    &#10005;
                  </span>
                </span>
              );
            })} */}
            <div
              className="relative flex grow gap-0.5 shadow-sm"
              {...getComboboxProps()}
            >
              <input
                placeholder="Search ingredients"
                className="grow border-2 border-solid border-stone-800 p-2 outline-none"
                {...getInputProps(
                  getDropdownProps({ preventKeyAction: isOpen })
                )}
              />
              <button
                className="absolute top-0 right-0 h-full border-2 border-black bg-secondary px-2 text-xl font-bold text-white"
                onClick={() => {
                  setSelectedItems((selectedItemss) => {
                    return [...selectedItemss, inputValue];
                  });
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <ul
          {...getMenuProps()}
          className="absolute max-h-80 overflow-auto bg-white p-0"
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                className={`${
                  (highlightedIndex === index ? 'bg-blue-300 ' : '') +
                  (selectedItem === item ? 'font-bold ' : '')
                }flex flex-col py-2 px-3`}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                <span>{item}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
  return <MultipleComboBox />;
}

export default MultipleComboBoxExample;
