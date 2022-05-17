import React, { useState, useEffect } from "react";
import axios from "axios";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import { StyledHome } from "../../styles/StyledHome";

import { MemoPostGallery } from "../post/PostGallery";
import { MemoTagsBar } from "../tags/TagsBar";
import { PostFormPrompt } from "../post/PostFormPrompt";

const BaseUrl = process.env.REACT_APP_URL;

export const Home = () => {
  const [data, setData] = useState([null]);
  const { width: w, height } = useWindowDimensions();

  const fetchData = async () => {
    const { data } = await axios(BaseUrl);
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const e = {
    m: w > 500,
    l: w > 1200,
    LEFT: (
      <div key={"l"} className="l">
        <MemoTagsBar tagsData={data.tags} />
      </div>
    ),
    MIDDLE: (
      <div key={"m"} className="m">
        <PostFormPrompt />
        <MemoPostGallery postsData={data.posts} />
      </div>
    ),
    RIGHT: (
      <div key={"r"} className="r">
        <MemoTagsBar tagsData={data.tags} />
      </div>
    ),
  };

  return (
    <StyledHome>
      {{
        [e.m]: [e.LEFT, e.MIDDLE],
        [e.l]: [e.LEFT, e.MIDDLE, e.RIGHT],
      }[true] || e.MIDDLE}
    </StyledHome>
  );
};
