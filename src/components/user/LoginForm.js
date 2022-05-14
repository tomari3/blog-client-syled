import React, { useState, useReducer, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { MainContext } from "../../contexts/MainContext";
import { StyledForm } from "../../styles/StyledForm";
import { StyledButton } from "../../styles/StyledButton";

import {
  UPDATE_FORM,
  onInputChange,
  onFocusOut,
  validateInput,
} from "../../utils/formUtils";

const BaseUrl = process.env.REACT_APP_URL;

const initialState = {
  username: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
  },
  password: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
  },
};

const formsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: { ...state[name], value, hasError, error, touched },
        isFormValid,
      };
    default:
      return state;
  }
};

export const LoginForm = () => {
  const [formState, dispatch] = useReducer(formsReducer, initialState);

  const [showError, setShowError] = useState(false);
  const [serverError, setSeverError] = useState("");

  const { setJwt } = useContext(MainContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    let isFormValid = true;

    for (const name in formState) {
      const item = formState[name];
      const { value } = item;
      const { hasError, error } = validateInput(
        name,
        value,
        formState.password.value
      );

      if (hasError) {
        isFormValid = false;
      }
      if (name) {
        dispatch({
          type: UPDATE_FORM,
          data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid,
          },
        });
      }
    }

    if (!isFormValid) {
      setShowError(true);
    } else {
      sendLogin();
    }

    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };

  const sendLogin = async () => {
    const payload = {
      username: formState.username.value,
      password: formState.password.value,
    };
    const postUrl = BaseUrl + `users/login`;

    try {
      const { data } = await axios.post(postUrl, payload);
      console.log(data);
      setJwt(data.token);
    } catch (error) {
      setSeverError(error.response.data.msg);

      setTimeout(() => {
        setSeverError("");
      }, 5000);
    }
  };

  return (
    <StyledForm>
      <div className="form-header">
        <h1>Sign in</h1>
        <div className="form-err">
          {showError &&
            !formState.isFormValid &&
            "Please fill all the fields correctly"}
          {serverError}
        </div>
      </div>
      <form onSubmit={(e) => formSubmitHandler(e)}>
        <div className="form-field">
          <div className="form-field-detail"></div>
          <input
            type="text"
            name="username"
            value={formState.username.value}
            onChange={(e) =>
              onInputChange("username", e.target.value, dispatch, formState)
            }
            onBlur={(e) =>
              onFocusOut("username", e.target.value, dispatch, formState)
            }
          />
          <label
            className={formState.username.value ? "active" : ""}
            htmlFor="username"
          >
            username
          </label>
          <div className="form-field-err">
            <p>{formState.username.error}</p>
          </div>
        </div>
        <div className="form-field">
          <div className="form-field-detail"></div>
          <input
            type="password"
            name="password"
            value={formState.password.value}
            onChange={(e) =>
              onInputChange("password", e.target.value, dispatch, formState)
            }
            onBlur={(e) =>
              onFocusOut("password", e.target.value, dispatch, formState)
            }
          />
          <label
            className={formState.password.value ? "active" : ""}
            htmlFor="password"
          >
            password
          </label>
          <div className="form-field-err">
            <p>{formState.password.error}</p>
          </div>
        </div>
        <StyledButton
          $bgColor
          $bold
          color="var(--primary-accent)"
          type="submit"
        >
          sign in
        </StyledButton>
        <StyledButton type="button">
          <Link to="/user/signup">
            Don't have an account? <span>Sign up</span>
          </Link>
        </StyledButton>
      </form>
    </StyledForm>
  );
};
