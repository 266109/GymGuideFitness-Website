import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClick = () => {
    navigate("/register");
  };

  const login = () => {
    axios.post("http://localhost:8080/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
    });
  };

  return (
    <div className="logindiv">
      {console.log("user", user)}
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Username or Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.pas}
        placeholder="Enter your PassCode"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={login}>
        Login
      </div>
      <div3>Or</div3>
      <div className="button" onClick={handleClick}>
        Register
      </div>
    </div>
  );
};

export default Login;
