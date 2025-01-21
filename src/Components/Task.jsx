import React from 'react'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Task = ({ id, title }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    return (
        <div key={id} className='border border-black m-1' ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <input type="checkbox" name="" id="" />
            {title}  </div>
    )
}

export default Task