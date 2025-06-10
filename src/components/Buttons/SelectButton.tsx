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
    <button
      onClick={callBack}
      className="selectButton"
      style={{
        position: "absolute",
        right: "12px",
        top: "12px",
        color: "white",
      }}
    >
      {selectedItem && selectedItem.id === item.id ? "Continue ✔️" : "Select"}
    </button>
  );
};
