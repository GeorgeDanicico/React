import React from 'react';
import Note from "./Note"
import "./styles.css"

const Notes = ({notes, onDelete}) => {
    return ( 
        <div className = "notes">
            {notes.map((keeperItem) => 
            <Note key={keeperItem.title} 
                item={keeperItem} 
                onDelete={(e) => onDelete(e)}/>)}
        </div>
     );
}
 
export default Notes;