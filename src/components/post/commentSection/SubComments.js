import React, { useEffect } from "react";

import axios from "../../../utils/axios";

import { Comments } from "./Comments";

export const SubComments = ({
  commentId,
  subCommentsData,
  setSubCommentsData,
}) => {
  const fetchData = async () => {
    const payload = {};
    const postUrl = `comment/${commentId}/comments`;

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
