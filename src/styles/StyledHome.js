import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHome = styled(motion.main)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "nav feed tags";

  .home_feed {
    grid-area: feed;
  }
  .home_tags {
    grid-area: tags;
  }
`;
