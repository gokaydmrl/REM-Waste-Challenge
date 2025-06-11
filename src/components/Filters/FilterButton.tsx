import React from "react";
import "./filterButton.css";
export const FilterButton = ({
  type,
  handleFilter,
  isAsc,
}: {
  type: string;
  handleFilter: () => void;
  isAsc: boolean;
}) => {
  return (
    <a className="filterButton" onClick={() => handleFilter()}>
      {type} {isAsc ? "⬆️" : "⬇️"}
    </a>
  );
};
