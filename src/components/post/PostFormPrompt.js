import React, { useState } from "react";

import { PostForm } from "./PostForm";
import { ModalBasis } from "../../styles/ModalBasis";

export const PostFormPrompt = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <h1 onClick={() => setActive(!active)}>open</h1>
      {active ? (
        <ModalBasis onClick={() => setActive(!active)}>
          <PostForm className="wide" />
        </ModalBasis>
      ) : null}
    </div>
  );
};
