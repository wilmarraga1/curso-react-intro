import './TodoItem.css'
import { ComponenteIcon } from './CompleteIcon';
import { deleteIcon } from './DeleteIcon';

function TodoItem(props){
    return (
      <li className='TodoItem'>
      <CompleteIcon/>
        {/* <span className={`Icon Icon-Check  ${props.completed && "icon-check--active"}`}
        onClick={props.onComplete}
        >V</span> */}
        <p className={`TodoItem-p  ${props.completed && "TodoItem-p--complete"}`}
        >{props.text}</p>
        <samp className='Icon Icon-delete'
        onClick={props.onD}
        >X</samp>
      </li>
    );
  }
  export {TodoItem}