import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm(){

    const {
        addTodo, 
        setOpenModal
    }=React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const onCancel = ()=> {
        setOpenModal(false)
    }
    const onSubmit = (event)=> {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
        setNewTodoValue('')
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return(
        <form
        className='TodoForm'
        onSubmit={onSubmit}
        >
            <label>What do you need todo?</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder='Write your todo here. ð'
            />
            <div className='TodoForm__buttons'>
                <button onClick={onCancel}>â</button>
                <button type='submit'>âAdd</button>
            </div>
        </form>
    )
}
export {TodoForm}