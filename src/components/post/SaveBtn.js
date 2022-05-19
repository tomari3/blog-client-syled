import React from "react";

import axios from "axios";
import { StyledButton } from "../../styles/StyledButton";

const BaseUrl = "http://localhost:3000/";

export const SaveBtn = ({ postId, savesData, setSavesData }) => {
  const saved = savesData.find((s) => s === "625af335160443835c688a22");

  const sendSave = async (e) => {
    e.preventDefault();

    const payload = {
      id: "625af335160443835c688a22",
    };
    const postUrl = BaseUrl + `post/${postId}/save`;

    try {
      const { data } = await axios.post(postUrl, payload);
      setSavesData(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="interaction-btn">
      <StyledButton className="amount" $padding $small>
        <div>
          <p>{savesData.length > 0 ? savesData.length : null}</p>
        </div>
      </StyledButton>
      <StyledButton
        onClick={sendSave}
        className={`svg ${saved ? "saved" : ""}`}
        $padding
        $small
      >
        <div>
          <svg
            aria-label="Save"
            className="Save"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <polygon
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1"
            ></polygon>
          </svg>
        </div>
      </StyledButton>
    </div>
  );
};
