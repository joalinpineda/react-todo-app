import React from 'react'
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodoContext } from '../Components/TodoContext';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoItem } from '../Components/TodoItem';
import { TodoList } from '../Components/TodoList';
import { TodoSearch } from '../Components/TodoSearch';

function AppUI() {
    const {
                error, 
                loading, 
                searchedTodos, 
                completeTodo, 
                deleteTodo
            } = React.useContext(TodoContext)
  return (
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
            <TodoList>
                {loading && <p>Loading...</p>}
                {error && <p>Something was wrong. Please try reload. </p>}
                {(!loading && !searchedTodos.length) && <p>Create your first todo!</p>}
                {searchedTodos.map(todo=>(
                    <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onCompleted={()=> completeTodo(todo.text)}
                    onDelete={()=> deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
        <CreateTodoButton/>
    </React.Fragment>
    )
}

export  {AppUI}