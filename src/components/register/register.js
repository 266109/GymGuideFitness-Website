import React, { useState } from "react";
import "../register/register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClick = () => {
    navigate("/login");
  };

  const register = () => {
    const { name, email, password, reEnterpassword } = user;
    if (name && email && password && password === reEnterpassword) {
      axios
        .post("http://localhost:8080/register", user)
        .then((res) => alert(res.data.message));
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="registerdiv">
      {console.log("user", user)}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your PassCode"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterpassword"
        value={user.reEnterpassword}
        placeholder="Re-enter PassCode"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={register}>
        Register
      </div>
      <div3>Or</div3>
      <div className="button" onClick={handleClick}>
        Login
      </div>
    </div>
  );
};

export default Register;
