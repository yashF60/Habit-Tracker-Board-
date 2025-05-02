import React from "react";
import "./CardItem.css"
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

//Internal Component
export function Item(props) {
  const { id } = props;

  return <div className="main-card-item">{id}</div>;
}

const CardItem = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} className="main-card-items" style={style} {...attributes} {...listeners}>
      <Item id={props.id} />
    </div>
  );
};

export default CardItem;
