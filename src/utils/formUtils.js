export const UPDATE_FORM = "UPDATE_FORM";
export const RESET_FORM = "RESET_FORM";

export const onInputChange = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(name, value);
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if (key === name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATE_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      isFormValid,
      touched: false,
    },
  });
};

export const onFocusOut = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(name, value);
  let isFormValid = true;
  for (const key in formState) {
    const item = formState[key];
    if (key === name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

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
};

export const validateInput = (name, value, pass = null) => {
  let hasError = false,
    error = "";

  // auth
  switch (name) {
    case "username":
      if (value.trim() === "") {
        hasError = true;
        error = "what's your username?";
      } else if (value.trim().length < 3) {
        hasError = true;
        error = "at least 3 characters";
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        hasError = true;
        error = "invalid name. avoid special characters";
      } else {
        hasError = false;
        error = "";
      }
      break;

    case "email":
      if (value.trim() === "") {
        hasError = true;
        error = "what's your email?";
      } else if (
        !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          value
        )
      ) {
        hasError = true;
        error = "invalid email";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "password":
      if (value.trim() === "") {
        hasError = true;
        error = "must provide a password";
      } else if (value.trim().length < 8) {
        hasError = true;
        error = "at least 8 characters";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "passwordConfirm":
      if (value.trim() !== pass.trim()) {
        hasError = true;
        error = "passwords dont much";
      } else {
        hasError = false;
        error = "";
      }
      break;

    // post
    case "content":
      if (value.trim() === "") {
        hasError = true;
        error = "must provide content";
      }
      break;
    case "tags":
      if (value.trim() === "") {
        hasError = true;
        error = "must provide at least 1 tag";
      }
      break;

    default:
      break;
  }
  return { hasError, error };
};
