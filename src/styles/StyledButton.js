import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  cursor: pointer;
  .comment-btn {
    display: flex;
    padding: 0.2rem 0.5rem;
    user-select: none;

    border-left: ${(props) =>
      props.main ? "4px solid var(--primary-accent)" : ""};
  }
`;
