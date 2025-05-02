import React from "react";
import "./CardContainer.css";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import CardItem from "../CardItem/CardItem";

import { MdDeleteOutline } from "react-icons/md";

import { useCardContext } from "../../context/CardContext";

const containerStyle = {
  width: "320px",
  height: "min-content",
  background: "#dadada",
  padding: 10,
  margin: 10,
  borderRadius: "5px",
};

const CardContainer = ({ id, items, title }) => {
  const { removeColumn } = useCardContext();

  const handleDeleteColumn = () => {
    removeColumn(id);
    console.log("Delete")
  };

  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div className="card-column" ref={setNodeRef} style={containerStyle}>
        <div className="card-head">
          <p>{title}</p>
          <div className="card-head-btns">
            <button>Add Card</button>
            <button onClick={handleDeleteColumn}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
        {items.map((id) => (
          <CardItem key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
};

export default CardContainer;
