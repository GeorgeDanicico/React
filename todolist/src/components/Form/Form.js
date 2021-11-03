import React from 'react';
import List from '../List/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
    return (
        <div>
            <form>
                <input type="text" className="todo-input" />
                <button className="todo-button" type="submit" >
                    <FontAwesomeIcon icon={faPlus} />
                </button>

                <div className="select" >
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>

            <List />
        </div>

    );
};

export default Form;