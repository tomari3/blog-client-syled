import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCommentSection = styled(motion.section)`
  font-size: 0.8rem;
  transition: filter 0.2s ease;
  padding-top: 1rem;
  border-top: 1px solid var(--primary-active);
  margin-top: 1rem;
  .comments {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
