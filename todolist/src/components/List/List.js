import React from 'react';
import ListItem from '../ListItem/ListItem';
import './style.css'

const List = ({list, updateList}) => {
    const handleDelete = (taskID) => {
        const newList = list.filter((task) => task.id !== taskID);
        updateList(newList);
    }

    return (
         <div className="todo-container">
            {list.map((listElement) => 
                <ListItem
                    key={listElement.id}
                    text={listElement.text}
                    onDelete={() => handleDelete(listElement.id)}
                    className="todo-item" 
                />)
            }
         </div>
    );
};

export default List;