import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(){

    const onClickButton = ()=> console.log('Add Todo')
    return(
        <button
        className='CreateTodoButton'
        onClick={onClickButton}
        >+</button>
    )
}

export {CreateTodoButton}