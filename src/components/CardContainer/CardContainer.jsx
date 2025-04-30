import React from "react";
import "./CardContainer.css"
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import CardItem from "../CardItem/CardItem";

const containerStyle = {
  width: "320px",
  background: "#dadada",
  padding: 10,
  margin: 10,
  borderRadius: "5px",
};

const CardContainer = (props) => {
  const { id, items } = props;
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
          <p>Title</p>
          <button>Add Card</button>
        </div>
        {items.map((id) => (
          <CardItem key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
};

export default CardContainer;
