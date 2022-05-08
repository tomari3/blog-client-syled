import React, { useState, useContext } from "react";

import axios from "axios";

import { MainContext } from "../../contexts/MainContext";

const BaseUrl = "http://localhost:3000/";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setJwt } = useContext(MainContext);

  const sendLogin = async (e) => {
    e.preventDefault();

    const payload = {
      username: username,
      password: password,
    };
    const postUrl = BaseUrl + `users/login`;

    try {
      const { data } = await axios.post(postUrl, payload);
      console.log(data);
      setJwt(data.token);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={sendLogin}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};
