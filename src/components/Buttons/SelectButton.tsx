import type { IData } from "../../types/data";

export const SelectButton = ({
  selectedItem,
  callBack,
  item,
}: {
  selectedItem: Partial<IData> | null;
  callBack: () => void;
  item: IData;
}) => {
  return (
    <button onClick={callBack} className="selectButton">
      {selectedItem && selectedItem.id === item.id ? "Selected ✔️" : "Select"}
    </button>
  );
};
