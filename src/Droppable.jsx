import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        width: "300px",
        height: "300px",
        border: `1px solid ${isOver ? "green" : "black"}`,
      }}
    >
      {props.children}
    </div>
  );
}
