import React from 'react';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoItem } from '../Components/TodoItem';
import { TodoList } from '../Components/TodoList';
import { TodoSearch } from '../Components/TodoSearch';
import './App.css';


const todos = [
  {
    text: 'Do homework', 
    completed: false
  },
  {
    text: 'Buy a coffe', 
    completed: false
  },
  {
    text: 'Play the guitar', 
    completed: false
  },
]
function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo=>(
          <TodoItem 
          key={todo.text}
          text={todo.text}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
