import React, { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const localColumns = () => {
    const savedColumns = localStorage.getItem("columns");
    return savedColumns ? JSON.parse(savedColumns) : [];
  };

  const [columns, setColumns] = useState(localColumns);

  //Function to add new Column
  const addColumn = (title) => {
    const newColumn = {
      id: Date.now(),
      title: title,
      items: [],
    };
    const uploadColumns = [...columns, newColumn];
    setColumns(uploadColumns);
    localStorage.setItem("columns", JSON.stringify(uploadColumns));
  };

  // Function to remove a column
  const removeColumn = (id) => {
    const updatedColumns = columns.filter((column) => column.id !== id);
    setColumns(updatedColumns);
    localStorage.setItem("columns", JSON.stringify(updatedColumns));
    console.log("All columns:", columns);
    console.log("Deleting column with ID:", id);
  };

  //Function to open the modal
  const openCardModal = () => {
    setIsCardModalOpen(true);
  };

  //Function to close the modal
  const closeCardModal = () => {
    setIsCardModalOpen(false);
  };

  return (
    <CardContext.Provider
      value={{
        columns,
        setColumns,
        addColumn,
        removeColumn,
        isCardModalOpen,
        setIsCardModalOpen,
        openCardModal,
        closeCardModal,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCardContext = () => {
  return useContext(CardContext);
};
