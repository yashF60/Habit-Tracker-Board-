import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

//Internal Component
export function Item(props) {
  const { id } = props;

  const style = {
    width: "300px",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
    background: "white",
    cursor: "pointer",
    borderRadius: "5px",
  };
  return <div style={style}>{id}</div>;
}

const CardItem = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item id={props.id} />
    </div>
  );
};

export default CardItem;
