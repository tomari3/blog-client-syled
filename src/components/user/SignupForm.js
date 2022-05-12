import React, { useState, useReducer, useContext } from "react";

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
    active: false,
  },
  email: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
    active: false,
  },
  password: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
    active: false,
  },
  passwordConfirm: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
    active: false,
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

export const SignupForm = () => {
  const [formState, dispatch] = useReducer(formsReducer, initialState);

  const [showError, setShowError] = useState(false);

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
      sendSignup();
    }

    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };

  const sendSignup = async () => {
    const payload = {
      username: formState.username.value,
      email: formState.email.value,
      password: formState.password.value,
    };
    const postUrl = BaseUrl + `users/signup`;

    try {
      const { data } = await axios.post(postUrl, payload);
      console.log(data);
      setJwt(data.token);
    } catch (error) {
      console.log(error.response.data.errors);
    }
  };

  return (
    <StyledForm>
      <div className="form-header">
        <h1>sign up</h1>
        {showError && !formState.isFormValid && (
          <div className="form-err">Please fill all the fields correctly</div>
        )}
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
            className={
              formState.username.value || formState.username.active
                ? "active"
                : ""
            }
            htmlFor="username"
          >
            username
          </label>
          <div className="form-field-err">{formState.username.error}</div>
        </div>
        <div className="form-field">
          <div className="form-field-detail"></div>
          <input
            type="text"
            name="email"
            value={formState.email.value}
            onChange={(e) =>
              onInputChange("email", e.target.value, dispatch, formState)
            }
            onBlur={(e) =>
              onFocusOut("email", e.target.value, dispatch, formState)
            }
          />
          <label
            className={
              formState.email.value || formState.email.active ? "active" : ""
            }
            htmlFor="email"
          >
            email
          </label>
          <div className="form-field-err">{formState.email.error}</div>
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
            className={
              formState.password.value || formState.password.active
                ? "active"
                : ""
            }
            htmlFor="password"
          >
            password
          </label>
          <div className="form-field-err">{formState.password.error}</div>
        </div>
        <div className="form-field">
          <div className="form-field-detail"></div>
          <input
            type="password"
            name="passwordConfirm"
            value={formState.passwordConfirm.value}
            onChange={(e) =>
              onInputChange(
                "passwordConfirm",
                e.target.value,
                dispatch,
                formState
              )
            }
            onBlur={(e) =>
              onFocusOut("passwordConfirm", e.target.value, dispatch, formState)
            }
          />
          <label
            className={
              formState.passwordConfirm.value ||
              formState.passwordConfirm.active
                ? "active"
                : ""
            }
            htmlFor="password"
          >
            confirm password
          </label>
          <div className="form-field-err">
            {formState.passwordConfirm.error}
          </div>
        </div>
        <StyledButton color="var(--primary-accent)" type="submit">
          sign up
        </StyledButton>
      </form>
    </StyledForm>
  );
};
