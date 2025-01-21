
import { useState } from 'react';
import './App.css'
import { closestCorners, DndContext } from '@dnd-kit/core';
import Column from './Components/Column';
import { arrayMove } from '@dnd-kit/sortable';

function App() {
  const [task, setTask] = useState([
    { id: 1, title: "Input bar" },
    { id: 2, title: "File upload" },
    { id: 3, title: "Input Date" },
  ])

  const getTaskPo = (id) => {
    return task.findIndex((task) => task.id === id)
  }

  const handleDrag = (event) => {
    const { active, over } = event

    if (active.id === over.id) return

    setTask(task => {
      const origid = getTaskPo(active.id)
      const newid = getTaskPo(over.id)

      return arrayMove(task, origid, newid)
    })
  }


  return (
    <>
      <div className='flex items-center justify-center flex-col gap-10'>

        <h1 className="text-3xl font-bold  ">
          My Tasks ✅
        </h1>
        <DndContext onDragEnd={handleDrag} collisionDetection={closestCorners}>
          <Column task={task} />

        </DndContext>
      </div>
    </>
  )
}

export default App
