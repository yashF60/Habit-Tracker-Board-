import React, { useState, forwardRef } from "react";
import "./AddBoardModal.css";

import { useModalBoardContext } from "../../context/ModalBoardContext";

const AddBoardModal = forwardRef((props, ref) => {
  const [title, setTitle] = useState("");
  const { closeModal, addBoard } = useModalBoardContext();

  const handleModalClose = () => {
    closeModal();
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Save button clicked");
    addBoard(title);
    setTitle("");
    closeModal();
  };

  return (
    <div className="main-add-modal">
      <form onSubmit={handleSave} action="dialog" className="sub-add-modal">
        <h1>Add new Project</h1>
        <div className="add-board-input">
          <input
            type="text"
            placeholder="Enter a title"
            value={title}
            maxLength={20}
            onChange={(e) => setTitle(e.target.value)}
            ref={ref}
          />
        </div>
        <div className="add-board-btns">
          <button type="submit">Save</button>
          <button type="button" onClick={handleModalClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
});

export default AddBoardModal;
