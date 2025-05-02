import React, { useRef } from "react";
import "./CardContainer.css";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import CardItem from "../CardItem/CardItem";

import { MdDeleteOutline } from "react-icons/md";

import { useCardContext } from "../../context/CardContext";
import AddCardModal from "../AddCardModal/AddCardModal";

const containerStyle = {
  width: "320px",
  height: "min-content",
  background: "#dadada",
  padding: 10,
  margin: 9,
  borderRadius: "5px",
};

const CardContainer = ({ id, items, title }) => {
  const { removeColumn, openCardModal, isCardModalOpen } = useCardContext();
  const { setNodeRef } = useDroppable({
    id,
  });

  const addCardRef = useRef(null);

  const handleOpenCardModal = () => {
    openCardModal();
    setTimeout(() => {
      addCardRef.current?.focus();
    }, 0);
  };

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div className="card-column" ref={setNodeRef} style={containerStyle}>
        <div className="card-head">
          <p>{title.toUpperCase()}</p>
          <div className="card-head-btns">
            <button onClick={handleOpenCardModal}>Add Card</button>
            <button onClick={() => removeColumn(id)}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
        {items.map((id) => (
          <CardItem key={id} id={id} />
        ))}
      </div>
      {isCardModalOpen ? <AddCardModal ref={addCardRef} /> : null}
    </SortableContext>
  );
};

export default CardContainer;
