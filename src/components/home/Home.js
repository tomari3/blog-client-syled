import React, { useState, useEffect } from "react";
import axios from "axios";

import { MemoPostGallery } from "../post/PostGallery";
import { MemoTagsBar } from "../tags/TagsBar";

import { StyledHome } from "../../styles/StyledHome";

const BaseUrl = "http://localhost:3000/";

export const Home = () => {
  const [data, setData] = useState([null]);

  useEffect(() => {
    axios.get(BaseUrl).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <StyledHome>
      <MemoTagsBar tagsData={data.tags} />
      <MemoPostGallery postsData={data.posts} />
    </StyledHome>
  );
};
