import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const searchTerm = useSelector((state) => state.dashboard.searchTerm);

  return (
    <div>
      <SearchBar />
      <div className="dashboard">
        {categories.map((category) => (
          <Category key={category.id} category={category} searchTerm={searchTerm} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
