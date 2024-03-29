import React from 'react';
import{ReactComponent as CheckSVG} from './check.svg' ;
import{ReactComponent as DeleteSVG} from './delete.svg'; 
import './TodoIcon.css'

const iconTypes ={
    "check":<CheckSVG className='Icon-svg'/>,
    "delete":<DeleteSVG className='Icon-svg'/>,
};
function TodoIcon  ({type}) {
  return (
    <span className={`Icon-container Icon-svg Icon-${type}`}
        >
       {iconTypes[type]}
    </span>
  )
}

export default TodoIcon
