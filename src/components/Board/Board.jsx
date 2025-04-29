import React, { useState } from "react";
import "./Board.css";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdLabelImportantOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import { useModalBoardContext } from "../../context/ModalBoardContext";
import BoardContent from "../BoardContent/BoardContent";

const Board = ({ id, title, important }) => {
  const { removeBoard, markBoardAsImportant } = useModalBoardContext();

  const [clicked, setClicked] = useState(false);

  const handleDeleteBoard = () => {
    removeBoard(id);
  };

  const toggleContent = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <>
      <div onClick={toggleContent} className="main-board">
        <div className="board-left">
          <div className="board-switch">
            <MdKeyboardArrowRight
              className={`arrow-icon ${clicked ? "rotate-down" : ""}`}
            />
          </div>
          <div className="board-title">{title}</div>
        </div>
        <div className="board-right">
          <button
            className={`important-btn ${important ? "important-active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              markBoardAsImportant(id);
            }}
          >
            <MdLabelImportantOutline />
          </button>
          <button onClick={handleDeleteBoard}>
            <MdDeleteOutline />
          </button>
        </div>
      </div>

      {clicked && <BoardContent />}
    </>
  );
};

export default Board;
