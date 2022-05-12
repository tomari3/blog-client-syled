import React, { useState, useContext } from "react";

import axios from "axios";

import { MainContext } from "../../contexts/MainContext";
import { StyledForm } from "../../styles/StyledForm";
import { StyledButton } from "../../styles/StyledButton";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledForm onSubmit={sendSignup}>
        <div className="form-field">
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="form-field-detail"></div>
          <div className="form-field-err"></div>
        </div>
        <div className="form-field">
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-field-detail"></div>
          <div className="form-field-err"></div>
        </div>
        <div className="form-field">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-field-detail"></div>
          <div className="form-field-err"></div>
        </div>
        <StyledButton color="var(--primary-accent)" type="submit">
          sign up
        </StyledButton>
      </StyledForm>
    </div>
  );
};
