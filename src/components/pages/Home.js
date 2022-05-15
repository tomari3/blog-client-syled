import React, { useState, useEffect } from "react";
import axios from "axios";

import { MemoPostGallery } from "../post/PostGallery";
import { MemoTagsBar } from "../tags/TagsBar";

import { StyledHome } from "../../styles/StyledHome";

const BaseUrl = process.env.REACT_APP_URL;

export const Home = () => {
  const [data, setData] = useState([null]);

  const fetchData = async () => {
    const { data } = await axios(BaseUrl);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledHome>
      <MemoTagsBar tagsData={data.tags} />
      <MemoPostGallery postsData={data.posts} />
    </StyledHome>
  );
};