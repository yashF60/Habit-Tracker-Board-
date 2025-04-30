import React, { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [columns, setColumns] = useState({
    cont1: { title: "To Do", items: ["Yes", "No"] },
    cont2: { title: "In Progress", items: ["Yes", "No"] },
  });
  //logic here
  const addColumn = (id, title) => {
    setColumns((prev) => ({
      ...prev,
      [id]: { title, items: [] },
    }));
  };
  const value = {
    columns,
    setColumns,
    addColumn,
  };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCardContext = () => {
  return useContext(CardContext);
};
