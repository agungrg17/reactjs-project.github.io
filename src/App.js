import './App.css';

import React from 'react';
import ToDo from './containers/ToDo';
import TodoWithReducer from './containers/ToDoWithReducer';

function App() {
  return (
    <div className="App">
      <ToDo />
      <TodoWithReducer/>
    </div>
  );
}

export default App;
