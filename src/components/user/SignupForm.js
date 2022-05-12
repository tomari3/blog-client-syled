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
  username: { value: "", touched: false, hasError: false, error: "" },
  email: { value: "", touched: false, hasError: false, error: "" },
  password: { value: "", touched: false, hasError: false, error: "" },
  passwordConfirm: { value: "", touched: false, hasError: false, error: "" },
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
      const { hasError, error } = validateInput(name, value);

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
    <div>
      <div>
        <h1>signup!</h1>
        {showError && !formState.isFormValid && (
          <div className="form_error">Please fill all the fields correctly</div>
        )}
      </div>
      <StyledForm onSubmit={(e) => formSubmitHandler(e)}>
        <div className="form-field">
          <label htmlFor="username">username</label>
          <div className="form-field-detail"></div>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formState.username.value}
            onChange={(e) =>
              onInputChange("username", e.target.value, dispatch, formState)
            }
            onBlur={(e) =>
              onFocusOut("username", e.target.value, dispatch, formState)
            }
          />
          <div className="form-field-err">{formState.username.error}</div>
        </div>
        <div className="form-field">
          <label htmlFor="email">email</label>
          <div className="form-field-detail"></div>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={formState.email.value}
            onChange={(e) =>
              onInputChange("email", e.target.value, dispatch, formState)
            }
            onBlur={(e) =>
              onFocusOut("email", e.target.value, dispatch, formState)
            }
          />
          <div className="form-field-err">{formState.email.error}</div>
        </div>
        <div className="form-field">
          <label htmlFor="password">password</label>
          <div className="form-field-detail"></div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formState.password.value}
            onChange={(e) =>
              onInputChange("password", e.target.value, dispatch, formState)
            }
            onBlur={(e) =>
              onFocusOut("password", e.target.value, dispatch, formState)
            }
          />
          <div className="form-field-err">{formState.password.error}</div>
        </div>
        <div className="form-field">
          <label htmlFor="password">password</label>
          <div className="form-field-detail"></div>
          <input
            type="passwordConfirm"
            name="passwordConfirm"
            placeholder="confirm password"
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
          <div className="form-field-err">
            {formState.passwordConfirm.error}
          </div>
        </div>
        <StyledButton color="var(--primary-accent)" type="submit">
          sign up
        </StyledButton>
      </StyledForm>
    </div>
  );
};
