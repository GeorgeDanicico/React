import React, { useEffect, useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import SpecialInput from '../SpecialInput/SpecialInput';
import List from '../List/List';
import SpecialButton from '../SpecialButton/SpecialButton';
import SpecialSelect from '../SpecialSelect/SpecialSelect';
import './style.css';

const initialList = [{
    id: 1,
    text: 'Go to the shop and buy beer.',
}, {
    id: 2,
    text: 'Do not forget to pick up the kids',
},
{
    id: 3,
    text: 'Find a cheap and beautiful spot for holiday in the mountains.',
}];

const Form = () => {

    const [inputValue, setInputValue] = useState("");
    const [currentList, setCurrentList] = useState(initialList);

    const handleAddTask = () => {
        const newID = currentList[currentList.length - 1].id + 1;
        const newTask = {
            id: newID,
            text: inputValue,
        };

        const newList = [...currentList, newTask];
        setInputValue("");
        setCurrentList(newList);
    };

    return (
        <div className="main-container">
            <div className="form-controllers">
                <SpecialInput 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    inputButtonIcon={faPlus}
                    inputButtonClick={handleAddTask}
                />

                <SpecialSelect value="" onChange={() => {}} />
            </div>

            <List list={currentList} updateList={(e) => setCurrentList(e)} />
        </div>

    );
};

export default Form;