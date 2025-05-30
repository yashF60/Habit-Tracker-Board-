import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import BoardArea from "./components/BoardArea/BoardArea";
import { ModalBoardProvider } from "./context/ModalBoardContext";
import { CardProvider } from "./context/CardContext";

const App = () => {
  return (
    <ModalBoardProvider>
      <CardProvider>
        <div className="main-app">
          <h1 className="main-app-header">Trello Board</h1>
          <Header />
          <BoardArea />
        </div>
      </CardProvider>
    </ModalBoardProvider>
  );
};

export default App;
