import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Widget from "./Widget";
import AddWidgetModal from "./AddWidgetModal";

const Category = ({ category, searchTerm }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const filteredWidgets = category.widgets.filter((w) =>
    w.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <button className="add-btn" onClick={() => setShowModal(true)}>
        + Add Widget
      </button>

      <div className="widgets">
        {filteredWidgets.map((widget) => (
          <Widget key={widget.id} categoryId={category.id} widget={widget} />
        ))}
      </div>

      {showModal && (
        <AddWidgetModal categoryId={category.id} closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Category;
