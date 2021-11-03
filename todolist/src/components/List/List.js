import React from 'react';
import ListItem from '../ListItem/ListItem';
import './style.css'

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

const List = () => {
    return (
         <div className="todo-container">
            {initialList.map((listElement) => 
                <ListItem
                    key={listElement.id}
                    text={listElement.text} 
                    className="todo-item" 
                />)
            }
         </div>
    );
};

export default List;