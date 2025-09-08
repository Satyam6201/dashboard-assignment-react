import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../redux/dashboardSlice";

const Widget = ({ categoryId, widget }) => {
  const dispatch = useDispatch();

  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button
        className="remove-btn"
        onClick={() => dispatch(removeWidget({ categoryId, widgetId: widget.id }))}
      >
        ❌
      </button>
    </div>
  );
};

export default Widget;