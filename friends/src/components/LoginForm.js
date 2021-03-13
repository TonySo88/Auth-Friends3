import React, { useState } from "react";
import axios from "axios";

const LoginForm = (props) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", form)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChanges}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
