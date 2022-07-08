import React, { useEffect, useState } from "react";

import { Avatar, Box, Button, TextField, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { selectUser, selectCounter } from "../features/counter/sliceCounter.js";

import {
  increment,
  decrement,
  reset,
  incrementSpec,
  decrementSpec,
  userAsync,
} from "../features/counter/sliceCounter.js";

const CounterReduxContainer = () => {
  const [currAmount, setCurrAmount] = useState(0);
  // Kita akan menambah state yang baru untuk menampung input dari TextField
  const [userId, setUserId] = useState(0);

  const username = useSelector(selectUser);
  const counter = useSelector(selectCounter);

  const dispatcher = useDispatch();

  const buttonDecrementOnClickHandler = () => {
    dispatcher(decrement());
  };

  const buttonResetOnClickHandler = () => {
    dispatcher(reset());
  };

  const buttonIncrementOnClickHandler = () => {
    dispatcher(increment());
  };

  const textFieldAmountOnChangeHandler = (e) => {
    const amountFromField = isNaN(parseInt(e.target.value))
      ? 0
      : parseInt(e.target.value);

    setCurrAmount(amountFromField);
  };

  // Kita tambahkan sebuah method untuk handle onChange TextField UserId
  const textFieldUserIdOnChangeHandler = (e) => {
    // Karena ingin ambil angka, kita parseInt untuk jaga-jaga
    const valueUserId = isNaN(parseInt(e.target.value))
      ? 0
      : parseInt(e.target.value);

    setUserId(valueUserId);
  };

  // Kita tambahkan sebuah method untuk handle onClick Button fetch user
  const buttonFetchUserOnClickHandler = () => {
    // Kita dispatch lagi si userAsync
    dispatcher(userAsync(userId));
  };

  const buttonDecrementByAmountOnClickHandler = () => {
    dispatcher(decrementSpec(currAmount));
  };

  const buttonIncrementByAmountOnClickHandler = () => {
    dispatcher(incrementSpec(currAmount));
  };

  useEffect(() => {
    dispatcher(userAsync(3));
  }, [dispatcher]);

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

        <Avatar
          src={username.avatar}
          alt="avatar"
          sx={{ width: 64, height: 64 }}
        />

        <Typography variant="body1" component="div">
          Nama User: {username.first_name}
        </Typography>

        {/* Di sini kita akan membuat box baru untuk input dan button */}
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          {/* Input */}
          <TextField
            label="Input User Id"
            value={userId}
            size="small"
            type="number"
            onChange={textFieldUserIdOnChangeHandler}
          />
          {/* Button */}
          <Button
            variant="outlined"
            color="success"
            onClick={buttonFetchUserOnClickHandler}
          >
            Fetch user
          </Button>
        </Box>

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
