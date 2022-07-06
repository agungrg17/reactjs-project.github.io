import { React, useState } from 'react';
import { Button, TextField } from '@mui/material';

const ToDoForm = ({ handleSubmit }) => {
  const [text, setText] = useState('');

  const inputOnChangeHandler = (event) => {
    setText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText(" ");
  }

  return (
    <div className='todo-form'>
      <p>~ Today I need to ~</p>
      <form action='' onSubmit={submitHandler}>
      <span>
      <TextField
          label="Task"
          variant="filled"
          value={text}
          onChange={inputOnChangeHandler}
        />
        <Button
            type='submit'
            variant='contained'
        >
            Submit
        </Button>
        {/* <Button
          variant="contained"
          onClick={() => {
            handleSubmit(todo);
            setTodo("");
          }}
        >
          Submit
        </Button> */}
        {/* <input 
        value={todo} 
        onChange={(event) => setTodo(event.target.value)}/>
        <input 
        value={todo} 
        onChange={(event) => setTodo(event.target.value)}/>
        <button type='submit'>
          Submit</button> */}
      </span>
      {/* <p> {todo} </p> */}
      </form>
    </div>
  );
};

export default ToDoForm;