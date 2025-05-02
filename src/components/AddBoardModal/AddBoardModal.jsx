import React, { useState, forwardRef, useEffect, useCallback } from "react";
import "./AddBoardModal.css";

import { CiWarning } from "react-icons/ci";

import { useModalBoardContext } from "../../context/ModalBoardContext";

const AddBoardModal = forwardRef((props, ref) => {
  const [title, setTitle] = useState("");
  const [warning, setWarning] = useState(false);
  const { closeModal, addBoard } = useModalBoardContext();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleModalClose = useCallback(() => {
    closeModal();
    setTitle("");
    setWarning(false);
  });

  const handleSave = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setWarning(true);
      return;
    }
    addBoard(title.trim());
    setTitle("");
    setWarning(false);
    closeModal();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleModalClose();
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleModalClose]);

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
              <CiWarning /> Please add Board Title
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

export default AddBoardModal;
