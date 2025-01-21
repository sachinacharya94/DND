import React from 'react'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
const Text = ({ id }) => {
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
        <div key={id} ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <label htmlFor="text"></label>
            <input type="text" name="" id="text" />
        </div>
    )
}

export default Text