import React, { useState } from "react";

import axios from "axios";

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
    <div>
      <p>save</p>
    </div>
  );
};
