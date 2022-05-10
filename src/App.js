import * as React from "react";
import { DndContext } from "@dnd-kit/core";

import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";

const DRAG_DATA = ["A", "B", "C", "D"];

function App() {
  const [list, setList] = React.useState([]);
  const addToList = (component) => setList((l) => [...l, component]);

  function handleDragStart(event) {
    console.log("=== onDragStart ===");
    console.log("event:", event);
  }

  function handleDragEnd(event) {
    console.log("=== onDragEnd ===");
    console.log("event:", event);

    const { over, active } = event;
    if (over) addToList(active.id);
  }

  return (
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div>
          {DRAG_DATA.map((id) => (
            <Draggable id={id}>{id}</Draggable>
          ))}

          <ol>
            {list.map((c) => (
              <li>{c}</li>
            ))}
          </ol>
        </div>

        <Droppable id="PAGE">
          <ul>
            {list.map((c) => (
              <li>{c}</li>
            ))}
          </ul>
        </Droppable>
      </DndContext>
    </div>
  );
}

export default App;
