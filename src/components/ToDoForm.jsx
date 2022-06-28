import React from 'react';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

const ToDoForm = ({ handleSubmit }) => {
  const [todo, setTodo] = useState(" ");

  const submitHandler = (event) => {
    event.preventDefault();
    handleSubmit(todo);
    setTodo(" ");
  }

  return (
    <div className='todo-form'>
      <p>~ Today I need to ~</p>
      <form action='' onSubmit={submitHandler}>
      <span>
      <TextField
          label="Task"
          variant="filled"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            handleSubmit(todo);
            setTodo("");
          }}
        >
          Submit
        </Button>
        {/* <input 
        value={todo} 
        onChange={(event) => setTodo(event.target.value)}/>
        <input 
        value={todo} 
        onChange={(event) => setTodo(event.target.value)}/>
        <button type='submit'>
          Submit</button> */}
      </span>
      <p> {todo} </p>
      </form>
    </div>
  );
};

export default ToDoForm;

// // Di sini kita perlu menggunakan local state component ini saja
// // jadi membutuhkan useState
// import React, { useState } from "react";

// // ToDoForm menerima data dari App.js
// // jadi ditangkap dengan props
// function ToDoForm(props) {
//   // ini adalah local state untuk menampung nilai dari input text
//   const [inputTodo, setInputTodo] = useState("");

//   // ini adalah fungsi yang digunakan untuk melihat perubahan nilai
//   // dari input text
//   const inputOnChangeHandler = (event) => {
//     setInputTodo(event.target.value);
//   };

//   // ini adalah fungsi untuk submit form
//   // perhatikan di sini ada menggunakan props.propsSubmitHandler
//   // yang merupakan suatu fungsi (bisa di-invoke)
//   const localSubmitHandler = (event) => {
//     event.preventDefault();
//     props.propsSubmitHandler(inputTodo);
//     // setelah selesai, kosongkan input
//     setInputTodo("");
//   };

//   return (
    // <form action="" onSubmit={localSubmitHandler}>
    //   <div style={{ marginBottom: "0.25em" }}>
    //     <label style={{ marginRight: "0.25em" }} htmlFor="todoButton">
    //       Input Kerjaan Baru
    //     </label>
    //     <input
    //       type="text"
    //       name="todo-button"
    //       id="todoButton"
    //       // Melihat valuenya apakah terkena setter
    //       value={inputTodo}
    //       // tiap kali nilainya berubah, akan trigger inputOnChangeHandler
    //       onChange={inputOnChangeHandler}
    //     />
    //   </div>
    //   <div>
    //     <button type="submit">Tambah ToDo</button>
    //   </div>
    // </form>
//   );
// }

// export default ToDoForm;
