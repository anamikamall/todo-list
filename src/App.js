import React, { useState } from 'react';
import './App.css';
import ToDoLists from './ToDoLists';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
setInputList(e.target.value);
  };

  const addItem = () => {
    setItems((preItems) => {
      return[...preItems, inputList];
    });
    setInputList('');
  };
  
  const delItems = (id) => {
// console.log("deleted");
    setItems((preItems) => {
      return preItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
    };

  return (
    <>
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1> ToDo List</h1>
        <br />
        <input type='text' placeholder='Add a item' onChange={itemEvent} value={inputList}/>
        <button onClick={addItem}> + </button>
        <ol>
          {/* <li>{inputList}</li> */}
          {
            items.map((itemval, index) => {
              // return <li> {itemval} </li>
              return <ToDoLists 
              key={index}
              id={index}
              text={itemval} 
              onSelect = {delItems}
              />;
            })
          }
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
