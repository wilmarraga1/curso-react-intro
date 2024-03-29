import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter({total,completed}){
  const {
    completedTodos,
    totalTodos,
  
  }=React.useContext(TodoContext);
    return (
      
      <h1 className='TodoCounter'>
        Has completado <samp> {completedTodos} </samp> de <span> {totalTodos} </span> </h1>
    );
  }
  export {TodoCounter}