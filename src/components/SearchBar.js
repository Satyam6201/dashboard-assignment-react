import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/dashboardSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="🔍 Search widgets..."
      className="search-bar"
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  );
};

export default SearchBar;
