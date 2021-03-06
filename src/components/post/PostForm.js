import React, { useState, useReducer } from "react";

import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";

import { StyledButton } from "../../styles/StyledButton";
import { StyledForm } from "../../styles/StyledForm";

import {
  UPDATE_FORM,
  RESET_FORM,
  onInputChange,
  onFocusOut,
  validateInput,
} from "../../utils/formUtils";

const initialState = {
  content: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
  },
  tags: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
  },
  status: {
    value: false,
    touched: false,
    hasError: false,
    error: "",
  },
  pinned: {
    value: false,
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

export const PostForm = ({ className, setPostsData, setPostModal }) => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const [formState, dispatch] = useReducer(formsReducer, initialState);

  const [showError, setShowError] = useState(false);
  const [serverError, setSeverError] = useState("");

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
      sendPost();
    }

    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };

  const sendPost = async () => {
    const payload = {
      id: auth?._id,
      content: formState.content.value,
      status: formState.status.value,
      isPinned: formState.pinned.value,
      tags: formState.tags.value,
    };
    const postUrl = `posts`;

    try {
      const { data } = await axiosPrivate.post(postUrl, payload);
      setPostsData((prevData) => [data, ...prevData]);
      dispatch({ type: RESET_FORM });
      setPostModal();
      // console.log(data);
    } catch (error) {
      console.log(error);
      setSeverError(error.response.data);

      setTimeout(() => {
        setSeverError("");
      }, 5000);
    }
  };

  return (
    <StyledForm
      className={className}
      onClick={(e) => e.stopPropagation()}
      onSubmit={(e) => formSubmitHandler(e)}
    >
      <div className="form-header">
        <h1>What's new?</h1>
        <div className="form-err">
          {showError &&
            !formState.isFormValid &&
            "Please fill all the fields correctly"}
          {serverError}
        </div>
      </div>
      <form>
        <div className="form-field">
          <textarea
            type="text"
            name="content"
            value={formState.content.value}
            rows={10}
            onChange={(e) =>
              onInputChange("content", e.target.value, dispatch, formState)
            }
            onBlur={(e) =>
              onFocusOut("content", e.target.value, dispatch, formState)
            }
          />
          <label
            className={formState.content.value ? "active" : ""}
            htmlFor="content"
          >
            content
          </label>
          <div className="form-field-err">
            <p>{formState.content.error}</p>
          </div>
        </div>

        {/* <div className="form-field">
          <input
            className={formState.tags.value ? "active" : ""}
            type="text"
            name="tags"
            value={formState.tags.value}
            onChange={(e) =>
              onInputChange("tags", e.target.value, dispatch, formState)
            }
            onBlur={(e) =>
              onFocusOut("tags", e.target.value, dispatch, formState)
            }
          />
          <label
            className={formState.tags.value ? "active" : ""}
            htmlFor="tags"
          >
            tags
          </label>
          <div className="form-field-err">
            <p>{formState.tags.error}</p>
          </div>
        </div>

        <div className="row">
          <div className="form-field">
            <div className="form-field-detail">
              <span>?</span>
              <article>
                <p>
                  This will make the post only visible to you, it can be changed
                  later
                </p>
              </article>
            </div>
            <div
              className={`checkbox-wrapper ${
                formState.status.value ? "active" : ""
              }`}
            >
              <input
                type="checkbox"
                name="status"
                value={formState.status.value}
                onChange={(e) =>
                  onInputChange("status", e.target.checked, dispatch, formState)
                }
                onBlur={(e) =>
                  onFocusOut("status", e.target.checked, dispatch, formState)
                }
              />
              <span></span>
            </div>
            <label htmlFor="status">private</label>
            <div className="form-field-err">
              <p>{formState.status.error}</p>
            </div>
          </div>
          <div className="form-field">
            <div className="form-field-detail"></div>
            <div
              className={`checkbox-wrapper ${
                formState.pinned.value ? "active" : ""
              }`}
            >
              <input
                type="checkbox"
                name="pinned"
                value={formState.pinned.value}
                onChange={(e) =>
                  onInputChange("pinned", e.target.checked, dispatch, formState)
                }
                onBlur={(e) =>
                  onFocusOut("pinned", e.target.checked, dispatch, formState)
                }
              />
              <span></span>
            </div>
            <label htmlFor="pinned">pinned</label>
            <div className="form-field-err">
              <p>{formState.pinned.error}</p>
            </div>
          </div>
        </div> */}

        <StyledButton $color $bold>
          post
        </StyledButton>
      </form>
    </StyledForm>
  );
};
