import React from "react";

const ToDoLists = (props) => {
    
      return (
        <>
        <div className="todo_style">
            <i className="fa-solid fa-xmark"
            //  onClick={props.onSelect}
              onClick={() => {
props.onSelect(props.id)
              }}
            />
      <li> {props.text} </li>
      </div>
      </>
      );
};

export default ToDoLists;