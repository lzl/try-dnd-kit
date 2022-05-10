import * as React from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";

function getIndex(list, item) {
  return list.indexOf(item);
}

export function SortableList({ items, reorder }) {
  function handleDragEnd(event) {
    console.log("=== SortableList onDragEnd ===");
    console.log("event:", event);

    const { over, active } = event;
    if (over) {
      const activeIdx = getIndex(items, active.id);
      const overIdx = getIndex(items, over.id);
      if (activeIdx !== overIdx) {
        reorder(activeIdx, overIdx);
      }
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={items}>
        <ol>
          {items.map((c) => (
            <SortableItem key={c} id={c}>
              {c}
            </SortableItem>
          ))}
        </ol>
      </SortableContext>
    </DndContext>
  );
}