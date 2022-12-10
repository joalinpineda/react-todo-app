import React from 'react'
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoItem } from '../Components/TodoItem';
import { TodoList } from '../Components/TodoList';
import { TodoSearch } from '../Components/TodoSearch';

function AppUI({
    loading, 
    error, 
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
  return (
    <React.Fragment>
        <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        />
        <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
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