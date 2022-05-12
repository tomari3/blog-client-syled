export const UPDATE_FORM = "UPDATE_FORM";

export const onInputChange = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(
    name,
    value,
    formState.password.value
  );
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
      active: true,
    },
  });
};

export const onFocusOut = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(
    name,
    value,
    formState.password.value
  );
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
      active: false,
      isFormValid,
    },
  });
};

export const validateInput = (name, value, pass) => {
  let hasError = false,
    error = "";
  switch (name) {
    case "username":
      if (value.trim() === "") {
        hasError = true;
        error = "name cannot be empty";
      } else if (value.trim().length < 3) {
        hasError = true;
        error = "name must be longer than 3 characters";
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
        error = "must provide email";
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
        error = "must provide password";
      } else if (value.trim().length < 8) {
        hasError = true;
        error = "password must be at least 8 characters";
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

    default:
      break;
  }
  return { hasError, error };
};
