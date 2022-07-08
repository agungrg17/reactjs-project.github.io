//import logo from './logo.svg';
import './App.css';
import React from "react";
//import Wallet from './containers/Wallet';
import NavBar from "./components/NavBar.jsx";

import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
      {/* <Wallet /> */}
    </div>
  );
}

export default App;
