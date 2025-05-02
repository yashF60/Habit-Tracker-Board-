import React, { useRef } from "react";
import "./BoardContent.css";

import { useModalBoardContext } from "../../context/ModalBoardContext";
import { useCardContext } from "../../context/CardContext";
import AddColumnModal from "../AddColumnModal/AddColumnModal";
import CardColumns from "../CardColumns/CardColumns";

const BoardContent = () => {
  const { isColumnModalOpen, openColumnModal } = useModalBoardContext();
  const { columns } = useCardContext();

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
        {columns.length === 0 ? (
          <div className="no-board">
            <h1>No columns</h1>
            <p>Please create a new column.</p>
            <GiPlasticDuck className="react-icon" />
          </div>
        ) : (
          columns.map((column) => (
            <CardColumns
              title={column.title}
              key={column.id}
              id={column.id}
              items={column.items}
            />
          ))
        )}
      </div>
      {isColumnModalOpen ? <AddColumnModal ref={addColumnRef} /> : null}
    </div>
  );
};

export default BoardContent;
