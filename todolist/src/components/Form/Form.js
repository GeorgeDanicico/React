import React, { useEffect, useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import SpecialInput from '../SpecialInput/SpecialInput';
import List from '../List/List';
import SpecialSelect from '../SpecialSelect/SpecialSelect';

import { TASK_STATUS } from '../../utils/constant';
import './style.css';

const initialList = [{
    id: 1,
    text: 'Go to the shop and buy beer.',
    status: TASK_STATUS.uncompleted,
}, {
    id: 2,
    text: 'Do not forget to pick up the kids',
    status: TASK_STATUS.uncompleted,
},
{
    id: 3,
    text: 'Find a cheap and beautiful spot for holiday in the mountains.',
    status: TASK_STATUS.uncompleted,
}];

const Form = () => {

    const [inputValue, setInputValue] = useState("");
    const [currentList, setCurrentList] = useState(initialList);
    const [selectValue, setSelectValue] = useState("0");

    const handleAddTask = () => {
        const newID = currentList[currentList.length - 1].id + 1;
        const newTask = {
            id: newID,
            text: inputValue,
            status: TASK_STATUS.uncompleted,
        };

        const newList = [...currentList, newTask];
        setInputValue("");
        setCurrentList(newList);
    };

    useEffect(() => {
        console.log(selectValue);
    });

    return (
        <div className="main-container">
            <div className="form-controllers">
                <SpecialInput 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    inputButtonIcon={faPlus}
                    inputButtonClick={handleAddTask}
                />

                <SpecialSelect value={selectValue} onChange={(e) => setSelectValue(e.target.value)} />
            </div>

            <List 
                list={currentList}
                updateList={(e) => setCurrentList(e)} 
                filterStatus={selectValue}
            />
        </div>

    );
};

export default Form;