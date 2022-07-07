import React, { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

// Di sini kita akan menggunakan useDispatch dan useSelector
// useSelector = adalah suatu hooks yang memperbolehkan kita memilih global state yang digunakan
// useDispatch = adalah suatu hooks yang memperbolehkan kita memilih action apa yang ingin dilakukan
import { useDispatch, useSelector } from "react-redux";

const CounterReduxContainer = () => {
  // useSelector ini menerima sebuah fungsi dengan satu parameter "state"
  // anggap saja ini seperti "filter"
  const username = useSelector((state) => state.user);
  const counter = useSelector((state) => state.counter);

  const [currAmount, setCurrAmount] = useState(0);

  // Untuk menggunakan dispatch (action) nya, kita gunakan dispatcher dari hooks useDispatch
  const dispatcher = useDispatch();

  const buttonDecrementOnClickHandler = () => {
    // Di sini kita akan memanggil dispatcher-nya,
    // jangan lupa untuk melemparkan aksi apa yang ingin dilakukan via
    // props "type"
    dispatcher({
      type: "decrement",      
    });
  };

  const buttonResetOnClickHandler = () => {
    dispatcher({
      type: "reset",
    });
  };

  const buttonIncrementOnClickHandler = () => {
    dispatcher({
      type: "increment",
    });
  };

  // Fungsi yang dibutuhkan untuk part 2
  const textFieldAmountOnChangeHandler = (e) => {
    const amountFromField = isNaN(parseInt(e.target.value))
      ? 0
      : parseInt(e.target.value);

    setCurrAmount(amountFromField);
  };

  const buttonDecrementByAmountOnClickHandler = () => {
    // Kita panggil dispatcher lagi !
    dispatcher({
      type: "decrementSpec",
      amount: currAmount,
    });
  };

  const buttonIncrementByAmountOnClickHandler = () => {
    // Kita panggil dispatcher lagi !
    dispatcher({
      type: "incrementSpec",
      amount: currAmount,
    });
  };

  return (
    <>
      <Box
        sx={{
          border: "1px dashed grey",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="body1" component="div">
          React Redux
        </Typography>

        <Typography variant="body1" component="div">
          Nama User: {username}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            disabled
            label="Current Counter"
            // defaultValue="0"
            value={counter}
            size="small"
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonDecrementOnClickHandler}
          >
            -1
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonResetOnClickHandler}
          >
            0
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonIncrementOnClickHandler}
          >
            +1
          </Button>
        </Box>

        {/* Mari kita tambahkan Bagian baru di sini */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="amount"
            size="small"
            value={currAmount}
            onChange={textFieldAmountOnChangeHandler}
          />
          <Button
            variant="outlined"
            color="success"
            onClick={buttonDecrementByAmountOnClickHandler}
          >
            - Amount
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonIncrementByAmountOnClickHandler}
          >
            + Amount
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CounterReduxContainer;
