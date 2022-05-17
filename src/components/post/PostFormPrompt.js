import React, { useState } from "react";

import { PostForm } from "./PostForm";
import { ModalBasis } from "../../styles/ModalBasis";
import { StyledForm } from "../../styles/StyledForm";

export const PostFormPrompt = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div style={{ padding: "1rem 0" }}>
        <div>
          <p>HEY</p>
        </div>
        <StyledForm onClick={() => setActive(!active)} className="inline">
          <div className="form-field fake">
            <input spellCheck="true" type="text" name="content" disabled />
            <label htmlFor="content">Whats on your mind ?</label>
          </div>
        </StyledForm>
      </div>
      {active ? (
        <ModalBasis onClick={() => setActive(!active)}>
          <PostForm className="wide" />
        </ModalBasis>
      ) : null}
    </>
  );
};
