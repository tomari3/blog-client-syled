import React, { useState, useEffect } from "react";
import axios from "axios";

import { StyledHome } from "../../styles/StyledHome";

const BaseUrl = "http://localhost:3000/";

export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(BaseUrl).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <StyledHome>
      <h1>home</h1>
    </StyledHome>
  );
};
