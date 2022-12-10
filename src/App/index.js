import React from 'react';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoItem } from '../Components/TodoItem';
import { TodoList } from '../Components/TodoList';
import { TodoSearch } from '../Components/TodoSearch';
import './App.css';


const defaulTodos  = [
  {text: 'Buy some milk', completed: false},
  {text: 'Go shopping', completed: true}, 
  {text: 'Read a chapter of my book', completed:true}, 
  {text: 'Go for walk', completed:false} 
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaulTodos)

  let completedTodos = todos.filter(todo => todo.completed).length
  let totalTodos = todos.length
  let searchedTodos = []

  if(!searchValue >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo=> {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  }
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
  );
}

export default App;
