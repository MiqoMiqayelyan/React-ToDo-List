import React from 'react';



let ToDoList  = function(props){
        return(
            <ul>
              {props.todo.map((value) => <li onClick={() => props.deleteToDo(value.id)} key={value.id}>{value.text}</li>)}
            </ul>
    
        )}


    export default ToDoList;
