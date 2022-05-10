import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledTag = styled(motion.div)`
  color: var(--primary-text);
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::before {
    color: var(--primary-accent);
    content: "#";
  }
`;
