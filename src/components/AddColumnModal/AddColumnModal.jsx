import React, { forwardRef, useState } from "react";
import "./AddColumnModal.css";

import { CiWarning } from "react-icons/ci";

import { useModalBoardContext } from "../../context/ModalBoardContext";

const AddColumnModal = forwardRef((props, ref) => {
  const [title, setTitle] = useState("");
  const [warning, setWarning] = useState(false);
  const { closeColumnModal } = useModalBoardContext();

  const handleModalClose = () => {
    closeColumnModal();
    setTitle("");
    setWarning(false);
  };

  return (
    <div className="main-add-modal">
      <form action="dialog" className="sub-add-modal">
        <h1>Add new Column</h1>
        <div className="add-board-input">
          <input
            type="text"
            placeholder="Enter a title"
            value={title}
            maxLength={20}
            onChange={(e) => {
              setTitle(e.target.value);
              if (warning && e.target.value.trim()) {
                setWarning(false);
              }
            }}
            ref={ref}
          />
          {warning && (
            <p className="warning">
              <CiWarning /> Please add Column Title
            </p>
          )}
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
