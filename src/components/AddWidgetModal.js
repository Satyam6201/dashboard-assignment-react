import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../redux/dashboardSlice";

const AddWidgetModal = ({ categoryId, closeModal }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name && text) {
      const newWidget = {
        id: Date.now(),
        name,
        text,
      };
      dispatch(addWidget({ categoryId, widget: newWidget }));
      closeModal();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add Widget</h3>
        <input
          type="text"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Widget Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="save-btn" onClick={handleAdd}>
          Save
        </button>
        <button className="cancel-btn" onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddWidgetModal;
