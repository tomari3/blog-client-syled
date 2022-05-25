import React, { useState } from "react";

import { PostForm } from "./PostForm";
import { ModalBasis } from "../../styles/ModalBasis";
import { StyledForm } from "../../styles/StyledForm";
import { useAuth } from "../../hooks/useAuth";

export const PostFormPrompt = ({ setPostsData }) => {
  const [postModal, setPostModal] = useState(false);
  const { auth } = useAuth();
  return (
    <>
      <div style={{ padding: "1rem 0" }}>
        <div>
          <p>Hey {auth?.username}</p>
        </div>
        <StyledForm onClick={() => setPostModal(!postModal)} className="inline">
          <div className="form-field fake">
            <input spellCheck="true" type="text" name="content" disabled />
            <label htmlFor="content">Whats on your mind ?</label>
          </div>
        </StyledForm>
      </div>
      {postModal ? (
        <ModalBasis onClick={() => setPostModal(!postModal)}>
          <PostForm
            setPostsData={setPostsData}
            setPostModal={() => setPostModal(false)}
            className="wide"
          />
        </ModalBasis>
      ) : null}
    </>
  );
};
