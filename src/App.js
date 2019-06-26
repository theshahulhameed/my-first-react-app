import React from 'react';
import TodoItem from './components/TodoItem'
import todosData from './todosData'

const toDoComponents = todosData.map((todoitem) => <TodoItem item={todoitem} />)

function App() {
  return (
    <div className="todo-list">
      {toDoComponents}
    </div>
  );
}

export default App;
