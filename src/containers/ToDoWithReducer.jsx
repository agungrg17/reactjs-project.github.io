import { useReducer } from 'react';
import tasksReducer from '../reducers/ToDoReducer';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

export default function TodoWithReducer() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleSubmitTask(text) {
    dispatch({
      type: 'submit',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <div className='todo'>
      <h2 className='title'>To-Do List</h2>
      <ToDoForm handleSubmit={handleSubmitTask}/>
      <ToDoList 
      tasks={tasks} 
    //   handleCheckbox={handleCheckbox} 
      onChangeTask={handleChangeTask}
      onDeleteTask={handleDeleteTask}
      />
      {/* <Button variant='outlined' color='error' onClick={removeCompleted}>Remove Complete Task</Button> */}
    </div>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];