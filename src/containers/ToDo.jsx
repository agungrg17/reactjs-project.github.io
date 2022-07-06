import React, { useEffect, useState } from 'react';
//import {Button} from '@mui/material';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
//import ToDoReducer from '../reducers/ToDoReducer';

const ToDo = () => {

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    document.title = `You Have ${tasks.length} Todo`  
  }, [tasks]); // Dependency

  const handleSubmit = (text) => {
    setTasks([...tasks, {
        id: nextId++,
        text: text,
        done: false
      }]);
  };

  function handleChangeTask(task) {
    setTasks(tasks.map(t => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTask(taskId) {
    setTasks(
      tasks.filter(t => t.id !== taskId)
    );
  }
  

  return (
    <div className='todo'>
      <h2 className='title'>To-Do List</h2>
      <ToDoForm handleSubmit={handleSubmit}/>
      <ToDoList 
      tasks={tasks} 
    //   handleCheckbox={handleCheckbox} 
      onChangeTask={handleChangeTask}
      onDeleteTask={handleDeleteTask}
      />
      {/* <Button variant='outlined' color='error' onClick={removeCompleted}>Remove Complete Task</Button> */}
    </div>
  );
};

export default ToDo;

let nextId = 3;
  const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
  ];