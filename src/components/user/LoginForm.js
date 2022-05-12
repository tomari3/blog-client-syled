import React, { useState, useContext } from "react";

import axios from "axios";

import { MainContext } from "../../contexts/MainContext";
import { StyledForm } from "../../styles/StyledForm";
import { StyledButton } from "../../styles/StyledButton";

const BaseUrl = process.env.REACT_APP_URL;

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [passErr, setPassErr] = useState("");

  const { setJwt } = useContext(MainContext);

  const sendLogin = async (e) => {
    e.preventDefault();

    setNameErr("");
    setPassErr("");

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
      handleError(error.response.data.msg);
    }
  };

  const handleError = (err) => {
    err.includes("user") ? setNameErr(err) : setPassErr(err);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledForm onSubmit={sendLogin}>
        <div className="form-field">
          <label htmlFor="username">username</label>
          <div className="form-field-detail"></div>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="form-field-err">{nameErr}</div>
        </div>
        <div className="form-field">
          <label htmlFor="password">password</label>
          <div className="form-field-detail"></div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-field-err">{passErr}</div>
        </div>
        <StyledButton color="var(--primary-accent)" type="submit">
          login
        </StyledButton>
      </StyledForm>
    </div>
  );
};
