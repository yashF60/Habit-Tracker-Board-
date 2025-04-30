import React, { useRef } from "react";
import "./BoardContent.css";

import { useModalBoardContext } from "../../context/ModalBoardContext";
import AddColumnModal from "../AddColumnModal/AddColumnModal";

const BoardContent = () => {
  const { isColumnModalOpen, openColumnModal } = useModalBoardContext();

  const addColumnRef = useRef(null);

  const handleOpenColumnModal = () => {
    openColumnModal();
    setTimeout(() => {
      addColumnRef.current?.focus();
    }, 0);
  };

  return (
    <div className="main-board-content">
      <div className="content-header">
        <button onClick={handleOpenColumnModal} className="content-add">
          Click to add a Column
        </button>
      </div>
      <div className="content-body">
        {/* render dynamic cards here */}
        <p>No Columns to show</p>
      </div>
      {isColumnModalOpen ? <AddColumnModal ref={addColumnRef} /> : null}
    </div>
  );
};

export default BoardContent;
