import React, { useState, createContext, useContext } from "react";

const ModalBoardContext = createContext();

export const ModalBoardProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);

  const loadBoards = () => {
    const savedBoards = localStorage.getItem("boards");
    return savedBoards ? JSON.parse(savedBoards) : [];
  };

  const [boards, setBoards] = useState(loadBoards);

  // Function to add a new board
  const addBoard = (title) => {
    const newBoard = {
      id: Date.now(),
      title: title,
    };
    const uploadBoards = [...boards, newBoard];
    setBoards(uploadBoards);
    localStorage.setItem("boards", JSON.stringify(uploadBoards));
  };

  // Function to remove a board
  const removeBoard = (id) => {
    const updatedBoards = boards.filter((board) => board.id !== id);
    setBoards(updatedBoards);
    localStorage.setItem("boards", JSON.stringify(updatedBoards));
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const openColumnModal = () => {
    setIsColumnModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeColumnModal = () => {
    setIsColumnModalOpen(false);
  };

  // Function to test the context
  const test = () => {
    console.log("test function called");
  };

  return (
    <ModalBoardContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        boards,
        setBoards,
        addBoard,
        removeBoard,
        isColumnModalOpen,
        openColumnModal,
        closeColumnModal,
        //test
        test,
      }}
    >
      {children}
    </ModalBoardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModalBoardContext = () => {
  return useContext(ModalBoardContext);
};
