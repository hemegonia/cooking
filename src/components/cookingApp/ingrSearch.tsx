import React from 'react';

import ComboBox from '@/components/cookingApp/comboBox';

type Props = {
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
};
const Component = (props: Props) => {
  const { selectedItems, setSelectedItems } = props;
  return (
    <div className="flex flex-wrap p-4">
      <h2 className="w-full">What&apos;s cooking, good-looking?</h2>
      <ComboBox
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      ></ComboBox>
    </div>
  );
};

export default Component;
