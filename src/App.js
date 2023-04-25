import "./App.css";
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import HomePage from "./components/home/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import React, { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            user && user._id ? (
              <Home setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )
          }
        />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
