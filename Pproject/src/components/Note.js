import React from 'react';

const Note = ({item, onDelete}) => {
    return ( 
        <div className="note">
            <h1>{item.title}</h1>
            <p>{item.content}</p>
            <button onClick={() => onDelete}>Delete</button>
        </div>
     );
}
 
export default Note;