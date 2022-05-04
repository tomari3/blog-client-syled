import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCommentSection = styled(motion.div)`
  .open-comment {
    border-radius: 10px;
    padding: 2px 5px;
    background-color: brown;
    user-select: none;
    cursor: pointer;
  }
`;
