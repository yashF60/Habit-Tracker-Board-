import React, { useState } from "react";
import "./Board.css";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdLabelImportantOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import { useModalBoardContext } from "../../context/ModalBoardContext";
import BoardContent from "../BoardContent/BoardContent";

const Board = ({ id, title }) => {
  const { removeBoard } = useModalBoardContext();

  const [clicked, setClicked] = useState(false);

  const handleDeleteBoard = () => {
    removeBoard(id);
  };

  const toggleContent = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <>
      <div className="main-board">
        <div className="board-left">
          <div onClick={toggleContent} className="board-switch">
            <MdKeyboardArrowRight
              className={`arrow-icon ${clicked ? "rotate-down" : ""}`}
            />
          </div>
          <div className="board-title">{title}</div>
        </div>
        <div className="board-right">
          <button>
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
