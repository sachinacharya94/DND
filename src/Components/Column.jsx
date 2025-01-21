import React from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Task from './Task';

const Column = ({ task }) => {
    return (
        <div className='bg-zinc-200 w-1/6 p-5'>
            <SortableContext items={task} strategy={verticalListSortingStrategy}>

                {task.map((item) => (

                    <Task id={item.id} title={item.title} key={item.id} />
                )

                )}
            </SortableContext>
        </div>
    )
}

export default Column