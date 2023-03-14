import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export default function AppTrello() {
  const onDragEnd = () => {}
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {(magic) => (
            <ul ref={magic.innerRef} {...magic.droppableProps}>
              <Draggable draggableId="firt" index={0}>
                {(m) => (
                  <li
                    ref={m.innerRef}
                    {...m.draggableProps}
                    {...m.dragHandleProps}
                  >
                    one
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="secod" index={1}>
                {(magic) => (
                  <li
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    two
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}
