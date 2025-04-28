import React, { useRef } from "react";
import "./Header.css";

import { IoMdAddCircleOutline } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";

import { useModalBoardContext } from "../../context/ModalBoardContext";
import AddBoardModal from "../AddBoardModal/AddBoardModal";

const Header = () => {
  const { isModalOpen, openModal } = useModalBoardContext();

  const inputRef = useRef(null);

  const handleOpenModal = () => {
    openModal();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div className="main-header">
      <div className="left-header">
        <button onClick={handleOpenModal} className="board">
          <IoMdAddCircleOutline /> New Board
        </button>
      </div>
      <div className="right-header">
        <button className="filter">
          <IoFilterSharp /> Filter
        </button>
        <div className="header-input">
          <input type="text" placeholder="Search for a board" />
        </div>
      </div>
      {isModalOpen ? <AddBoardModal ref={inputRef} /> : null}
    </div>
  );
};

export default Header;
