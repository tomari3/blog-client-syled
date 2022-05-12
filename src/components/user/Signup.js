import React, { useState, useContext } from "react";

import axios from "axios";

import { MainContext } from "../../contexts/MainContext";

const BaseUrl = "http://localhost:3000/";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { setJwt } = useContext(MainContext);

  const sendSignup = async (e) => {
    e.preventDefault();

    const payload = {
      username: username,
      email: email,
      password: password,
    };
    const postUrl = BaseUrl + `users/signup`;

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
      <form onSubmit={sendSignup}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
