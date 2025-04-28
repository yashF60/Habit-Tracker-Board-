import React, { forwardRef, useState } from "react";
import "./AddColumnModal.css";

import { useModalBoardContext } from "../../context/ModalBoardContext";

const AddColumnModal = forwardRef((props, ref) => {
  const { closeColumnModal } = useModalBoardContext();
  const [title, setTitle] = useState("");

  const handleModalClose = () => {
    closeColumnModal();
  };

  return (
    <div className="main-add-modal">
      <form action="dialog" className="sub-add-modal">
        <h1>Add new column</h1>
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

export default AddColumnModal;
