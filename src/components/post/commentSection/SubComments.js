import React, { useEffect } from "react";

import axios from "axios";
import { Comments } from "./Comments";

const BaseUrl = process.env.REACT_APP_URL;

export const SubComments = ({
  commentId,
  subCommentsData,
  setSubCommentsData,
}) => {
  const fetchData = async () => {
    const payload = {};
    const postUrl = BaseUrl + `comment/${commentId}/comments`;

    try {
      const { data } = await axios.get(postUrl, payload);
      setSubCommentsData(data);
    } catch (error) {}
  };

  useEffect(() => {
    if (subCommentsData[0]._id) {
      return;
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(subCommentsData);
  return <Comments data={subCommentsData} sub={true} />;
};
