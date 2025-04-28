import React from "react";
import "./BoardArea.css";
import Board from "../Board/Board";

import { GiPlasticDuck } from "react-icons/gi";

import { useModalBoardContext } from "../../context/ModalBoardContext";

const BoardArea = () => {
  const { boards } = useModalBoardContext();
  return (
    <div className="main-boardarea">
      {boards.length === 0 ? (
        <div className="no-board">
          <h1>No boards available</h1>
          <p>Please create a new board to get started.</p>
          <GiPlasticDuck className="react-icon" />
        </div>
      ) : (
        boards.map((board) => (
          <Board key={board.id} id={board.id} title={board.title} />
        ))
      )}
    </div>
  );
};

export default BoardArea;
