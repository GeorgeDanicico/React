import React from 'react';
import { TASK_STATUS } from '../../utils/constant';
import ListItem from '../ListItem/ListItem';
import './style.css'

const List = ({list, updateList, filterStatus}) => {
    const handleDelete = (taskID) => {
        const newList = list.filter((task) => task.id !== taskID);
        updateList(newList);
    }

    const handleFinish = (taskID) => {
        const newList = list.map((task) => {
            if (task.id !== taskID) {
                return task;
            }
            return {
                ...task, 
                status: TASK_STATUS.completed,
            }
        });

        updateList(newList);
    }

    return (
         <div className="todo-container">
            {list.map((listElement) => 
                {
                    if (parseInt(filterStatus) === 0 || parseInt(filterStatus) === listElement.status) {

                        return (<ListItem
                            key={listElement.id}
                            text={listElement.text}
                            onDelete={() => handleDelete(listElement.id)}
                            onComplete={() => handleFinish(listElement.id)}
                            status={listElement.status}
                        />);
                    }

                    return null;
                })}
         </div>
    );
};

export default List;