import * as React from "react";
import { DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";
import { SortableList } from "./SortableList";

const DRAG_DATA = ["A", "B", "C", "D"];

function App() {
  const [list, setList] = React.useState([]);
  const addToList = (component) => setList((l) => [...l, component]);
  const reorder = (activeIdx, overIdx) =>
    setList((l) => arrayMove(l, activeIdx, overIdx));

  function handleDragStart(event) {
    console.log("=== App onDragStart ===");
    console.log("event:", event);
  }

  function handleDragOver(event) {
    console.log("=== App onDragOver ===");
    console.log("event:", event);
  }

  function handleDragEnd(event) {
    console.log("=== App onDragEnd ===");
    console.log("event:", event);

    const { over, active } = event;
    if (over) addToList(active.id);
  }

  return (
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div>
          {DRAG_DATA.map((id) => (
            <Draggable key={id} id={id}>
              {id}
            </Draggable>
          ))}

          <Droppable id="SORT">
            <SortableList items={list} reorder={reorder} />
          </Droppable>
        </div>

        <Droppable id="PAGE">
          <ul>
            {list.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Droppable>
      </DndContext>
    </div>
  );
}

export default App;
