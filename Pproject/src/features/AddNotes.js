import React from 'react';
import "./styles.css";

const AddNote = (props) => {

    function getNote(){
        return props.note;
    }

    return (
        <div className="add-note">
            <div>
                <input onChange={(e) => props.onChange({...props.note, title: e.target.value})}
                type="text" name="title" placeholder="Title" value={props.note.title}
                />
                <textarea onChange={(e) => props.onChange({...props.note, content: e.target.value})}
                type="text" name="content" placeholder="Take a note..." value={props.note.content}
                />
            </div>
            <button className="add-button" onClick={ () => {
                props.onClick(getNote());
            }}>Add</button>
        </div>
      );
}
 
export default AddNote;