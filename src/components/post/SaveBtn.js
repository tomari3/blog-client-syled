import React, { useState } from "react";

import axios from "axios";
import { StyledButton } from "../../styles/StyledButton";

const BaseUrl = "http://localhost:3000/";

export const SaveBtn = ({ postId, postSaves }) => {
  const [active, setActive] = useState(false);
  const [save, setSave] = useState(postSaves);

  const toggleSaved = () => {
    setActive(!active);
  };

  const sendSave = async (e) => {
    e.preventDefault();

    const payload = {
      // userId: user._id,
    };
    const postUrl = BaseUrl + `post/${postId}/like`;

    try {
      const { data } = await axios.post(postUrl, payload);
      console.log(data);
      setSave(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="interaction-btn">
      <StyledButton className="amount" $padding $small>
        <div>
          <p>{!save.length}</p>
        </div>
      </StyledButton>
      <StyledButton className="svg" $padding $small>
        <div>
          <svg
            aria-label="Save"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            ></polygon>
          </svg>
        </div>
      </StyledButton>
    </div>
  );
};
