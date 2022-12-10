import React from 'react'
import './TodoItem.css'

function TodoItem(props) {

  return (
    <li
    className={`TodoItem ${props.completed && 'done'}`}
    >
        <span
        className={`${props.completed && 'done'}`}
        onClick={props.onCompleted}
        >✅</span>
        <p
          className={`${props.completed && 'done-text'}`}
        >{props.text}</p>
        <span
        onClick={props.onDelete}
        >❌</span>
    </li>
  )
}

export {TodoItem}