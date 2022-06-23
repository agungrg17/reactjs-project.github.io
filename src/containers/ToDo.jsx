import React, { useState } from 'react';
import {Button} from '@mui/material';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const ToDo = () => {

  // const [todos, setTodos] = useState(["Menyapu", "Mengepel"]);
  const [todos, setTodos] = useState([
    // {id: 1, task: "menyapu", complete: false},
    // {id: 2, task: "mengepel", complete: true}
  ]);

  // const handleSubmit = (todo) => {
  //   setTodos([...todos, todo]);
  //   console.log(todos);
  //   // alert("New Todo:" + todos);
  // }
  const handleSubmit = (todo) => {
    const newTodo = {
      id: todos.length + 1, 
      task: todo, 
      complete: false}
    setTodos([...todos, newTodo]);
  };
  
  const handleCheckbox = (id) => {
    const newTodos = [...todos];
    const index  = newTodos.findIndex(todo => todo.id === id);

    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos)
    // alert (`checkbox index ${id} is checked!`)
  }

  const removeCompleted = () => {
    const newTodos = todos.filter(todo => todo.complete === false)
    setTodos(newTodos)
  }

  return (
    <div className='todo'>
      <h2 className='title'>To-Do List</h2>
      <ToDoForm handleSubmit={handleSubmit}/>
      <ToDoList todos={todos} handleCheckbox={handleCheckbox} />
      <Button variant='outlined' color='error' onClick={removeCompleted}>Remove Complete Task</Button>
    </div>
  );
};

export default ToDo;


// import React, { useState } from 'react';
// import ToDoForm from '../components/ToDoForm';
// import ToDoList from '../components/ToDoList';
// import ToDoIncrement from '../components/ToDoIncrement';

// function ToDo() {

//   // deklarasi state todos
//   // todos awalnya adalah array
//   const [todos, setTodos] = useState([
//     "Belajar React Fundamental",
//     "Ngoding Sampai Bisa",
//   ]);

//   // di sini kita akan membuat sebuah function
//   // yang digunakan untuk submitHandler di ToDoForm
//   const formSubmitHandler = (todo) => {
//     console.log("todo dari parent", todo);
//     setTodos([...todos, todo]);
//   };

//   return (

//     <div className="App">
//       <header>
//         <h1>Aplikasi ToDo List</h1>
//       </header>

//       <section>
//         <ToDoIncrement />
//       </section>

//       <section style={{ margin: "1em 0em" }}>
//         {/* Di sini sekarang harus menggunakan props */}
//         {/* Pada form kita harus melempar setTodos dan todos */}
//         <ToDoForm propsSubmitHandler={formSubmitHandler} />
//         {/* Pada list kita hanya butuh todos saja */}
//         <ToDoList propsTodos={todos} />
//       </section>

//       <footer>
//         <h3>Dibuat oleh orang tidak jelas &copy; 2022</h3>
//       </footer>
//     </div>
//   );
// }

// export default ToDo;
