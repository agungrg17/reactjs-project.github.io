// Di sini kita akan import useReducer
// Perhatikan di sini kita tidak menggunakan useState lagi
import React, { useEffect, useReducer } from 'react';

import ToDoFormWithReducer from '../components/ToDoFormWithReducer.jsx';
import ToDoTableWithReducer from '../components/ToDoTableWithReducer.jsx';

import { Box, Typography } from '@mui/material';

// Di sini kita akan import reducernya
import ToDoReducer from '../reducers/ToDoReducer.js';

// Pada saat menggunakan useReducer, kita tidak menggunakan state sama sekali
// Sekarang data todos kita berbentuk array of object (bukan state)
const todosAwal = [
  { id: 1, name: 'Review DOM', isCompleted: true },
  { id: 2, name: 'Belajar Nge-React', isCompleted: false },
  { id: 3, name: 'Belajar Component React', isCompleted: false },
];

function ToDo() {
  // di sini kita akan menggunakan useReducer
  const [todos, dispatch] = useReducer(ToDoReducer, todosAwal);

  const addTodos = (newTodo) => {
    // Di sini kita memanggil reducernya dengan menggunakan dispatch
    // typenya disesuaikan dengan switch case yang sudah dibuat (tambah)
    dispatch({
      type: 'tambah',
      // Perhatikan di sini kita memberikan property name
      name: newTodo,
    });
  };

  const completeTodo = (idTodo) => {
    // Di sini kita memanggil reducernya dengan menggunakan dispatch
    // typenya disesuaikan dengan switch case yang sudah dibuat (hapus)
    dispatch({
      type: 'hapus',
      // Perhatikan di sini kita memberikan property id
      id: idTodo,
    });
  };

  useEffect(() => {
    let textTitle = 'Todos: ' + todos.length;
    console.log(textTitle);
    document.title = textTitle;
  }, [todos]);

  return (
    <>
      <Box
        sx={{
          p: 2,
          border: '1px dashed grey',
          backgroundColor: '#f1f1f1',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h5">Container ToDo</Typography>

        <ToDoFormWithReducer fnAddTodos={addTodos} />
        <ToDoTableWithReducer todos={todos} fnCompleteTodo={completeTodo} />
      </Box>
    </>
  );
}

export default ToDo;