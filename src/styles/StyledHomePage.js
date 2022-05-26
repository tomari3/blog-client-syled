import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHomePage = styled(motion.main)`
  margin: auto auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "nav feed tags";

  .m {
    grid-area: feed;
  }

  max-width: 1200px;
`;
