import { useScreenSize } from "../../hooks/useScreenSize";
import { LoadingSkeleton } from "./LoadingSkeleton";

export const Loading = () => {
  const numberToRender = useScreenSize();
  return (
    <div className="dispFlex">
      {Array(numberToRender)
        .fill(1)
        .map((_, index) => (
          <LoadingSkeleton key={index} />
        ))}
    </div>
  );
};
